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

  const onHandleUserTask = async () => {
    try {
      setIsLoading(true);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = await userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        id: user.uid,
        userName,
        email,
        role: UserRole.EMPLOYEE
      } as IUser);
      close();
    } catch (e) {
      console.log(e);
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
    <div className={cls.add_task__form}>
      <Input fullWidth placeholder="Фамилия и имя:" value={userName} onChange={setUserName} />
      <Input fullWidth placeholder="Email:" value={email} onChange={setEmail} />
      <Input fullWidth placeholder="Пароль:" value={password} onChange={setPassword} />
      <Input fullWidth placeholder="Повторите пароль:" value={repeatPassword} onChange={setRepeatPassword} />
      <div className={cls.add_task__button__wrapper}>
        {
          isLoading
            ? <Loader/>
            : (
              <Button fullWidth variant="outlined" disabled={disabled} onClick={onHandleUserTask}>
                <Typography variant="span" uppercase>
                  отправить
                </Typography>
              </Button>
            )
        }
      </div>
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
