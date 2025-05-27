import React from "react";
import { InternshipScreen } from "@widgets/InternshipScreen";
import { VacanciesScreen } from "@widgets/VacanciesScreen";
import { Metadata } from "next";

import cls from "./styles.module.scss";

export const metadata: Metadata = {
  title: "О нас",
  description: "мы крутые типы! у нас есть новости и вакансии",
  keywords: ["Новости, вакансии, работа, работа новокузнецк"],
  openGraph: {
    type: "website",
    description: "мы крутые типы! у нас есть новости и вакансии",
    url: "https://ooo-agit-next.vercel.app/about",
    images: "https://static-agit.onrender.com/other/logoForSeo.png"
  },
};


const Page = async () => {
  return (
    <div className={cls.pages__wrapper}>
      <VacanciesScreen />
      <InternshipScreen />
    </div>
  );
};

export default Page;
