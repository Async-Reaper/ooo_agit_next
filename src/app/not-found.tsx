import React from "react";
import { Typography } from "@shared/ui";
import { AppLink } from "@shared/ui/AppLink";
import { Metadata } from "next";

import cls from "./not-found.module.scss";

export const metadata: Metadata = {
  title: "Ошибка",
};

const Page = () => {
  return (
    <div className={cls.not_found__wrapper}>
      <div className={cls.not_found__message}>
        <Typography variant="h3">
          Такой страницы не существует. Вернитесь пожалуйста на
        </Typography>
        <AppLink variant="secondary" href='/'>&nbsp;главную страницу</AppLink>
      </div>
    </div>
  );
};

export default Page;
