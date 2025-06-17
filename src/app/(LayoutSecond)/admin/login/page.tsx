import React from "react";
import { AuthForm } from "@features/Auth";

import cls from "./page.module.scss";

export default function Login() {
  return (
    <div className={cls.login__wrapper}>
      <AuthForm/>
    </div>
  );
}
