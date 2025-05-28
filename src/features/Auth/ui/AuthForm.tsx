"use client";
import React, { useMemo, useState } from "react";
import { IUser, UserRole } from "@entities/User";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth, db } from "@main/FirebaseProvider/config/firebase";
import { Button, Input, Loader, Typography } from "@shared/ui";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

import cls from "./AuthForm.module.scss";

const AuthForm = React.memo(() => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const onHandleAuth = () => {
    setIsLoading(true);
    setError("");
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const userAuth = userCredential.user;
        const userDBDocRef = doc(db, "users", userAuth.uid);
        const userDBDocSnap = await getDoc(userDBDocRef);
        const userData = userDBDocSnap.data() as IUser; // данные без id
        localStorage.setItem("userId", userAuth.uid);
        localStorage.setItem("user", JSON.stringify(userData));

        if (userData.role === UserRole.ADMIN) {
          router.push("/admin?role=admin");
        } else {
          router.push("/admin");
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        errorMessage === "Firebase: Error (auth/invalid-email)." && setError("Такого пользователя не существует");
        errorMessage === "Firebase: Error (auth/invalid-credential)." && setError("Неправильный пароль");
      });
    setIsLoading(false);
  };

  const disabled = useMemo(
    () => !email || !password,
    [email, password],
  );

  return (
    <div className={cls.auth__form}>
      <Input fullWidth placeholder="Email" value={email} onChange={setEmail}/>
      <Input type="password" fullWidth placeholder="Пароль" value={password} onChange={setPassword}/>
      <div className={cls.auth__button__wrapper}>
        {
          isLoading
            ? <Loader/>
            : (
              <Button fullWidth variant="outlined" disabled={disabled} onClick={onHandleAuth}>
                <Typography variant="span" uppercase>
                  войти
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
    </div>
  );
});

export default AuthForm;
