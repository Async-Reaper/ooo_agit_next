"use client";
import React, { useMemo, useState } from "react";
import { IUser, UserRole } from "@entities/User";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { setDoc } from "@firebase/firestore";
import { db } from "@main/FirebaseProvider";
import { auth } from "@main/FirebaseProvider/config/firebase";
import { Button, Input, Loader, Typography } from "@shared/ui";
import { doc } from "firebase/firestore";

import cls from "./AddUserForm.module.scss";

interface ConsultationFormProps {
  close: () => void;
}

const AddUserForm = React.memo((props: ConsultationFormProps) => {
  const {
    close,
  } = props;

  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const onHandleAddUser = async () => {
    try {
      setIsLoading(true);
      setError("");
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          id: user.uid,
          userName,
          email,
          role: UserRole.EMPLOYEE
        } as IUser);
        close();
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        e.message === "Firebase: Error (auth/email-already-in-use)." && setError("Пользователь с таким email уже существует.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const disabled = useMemo(
    () =>
      !userName ||
      !email ||
      !password ||
      !repeatPassword ||
      (password !== repeatPassword) ||
      (password.length < 6)
    , [userName, email, password, repeatPassword],
  );

  return (
    <div className={cls.add_user__form}>
      <Input fullWidth placeholder="Фамилия и имя:" value={userName} onChange={setUserName} />
      <Input fullWidth placeholder="Email:" value={email} onChange={setEmail} />
      <Input type="password" fullWidth placeholder="Пароль:" value={password} onChange={setPassword} />
      <Input type="password" fullWidth placeholder="Повторите пароль:" value={repeatPassword} onChange={setRepeatPassword} />
      <div className={cls.add_user__button__wrapper}>
        {
          isLoading
            ? <Loader/>
            : (
              <Button fullWidth variant="outlined" disabled={disabled} onClick={onHandleAddUser}>
                <Typography variant="span" uppercase>
                  отправить
                </Typography>
              </Button>
            )
        }
      </div>
      {
        error &&
        <div>
          <Typography variant="span" bold color="red-error">
            * {error}
          </Typography>
        </div>
      }
      {/*{*/}
      {/*  isError && <Alert variant="error" message="Ууупс... Произошла ошибка, повторите позже :("/>*/}
      {/*}*/}
      {/*{*/}
      {/*  isSuccess && <Alert variant="success" message="Задача добавлена!"/>*/}
      {/*}*/}
    </div>
  );
});

export default AddUserForm;
