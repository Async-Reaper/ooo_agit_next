"use client";
import React, { useEffect } from "react";
import { AuthForm } from "@features/Auth";
import { useRouter } from "next/navigation";

import cls from "./page.module.scss";

export default function Login (){
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      router.push("/admin/");
    } else {
      router.push("/admin/login");
    }
  }, [router]);
  
  return (
    <div className={cls.login__wrapper}>
      <AuthForm/>
    </div>
  );
}
