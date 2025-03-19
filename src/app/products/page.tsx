import React from "react";
import { PlatformScreen } from "@widgets/PlatformScreen";
import { ServicesScreen } from "@widgets/ServicesScreen";
import { Metadata } from "next";

import cls from "./page.module.scss";

export const metadata: Metadata = {
  title: "Продукты и услуги",
  description: "Какие-то услуги",
  keywords: ["автоматизация, 1с, 1:с, 1:С, 1c, 1:c, 1:C"],
  openGraph: {
    type: "website",
    title: "АГИТ-Плюс",
    description: "Автоматизация различных областей учёта и предоставление сервиса самого высокого уровня обслуживания!",
    url: "https://ooo-agit-next.vercel.app/",
    images: "https://static-agit.onrender.com/other/logoForSeo.png"
  }
};

const Page = () => {
  return (
    <div className={cls.products}>
      <ServicesScreen/>
      <PlatformScreen/>
    </div>
  );
};

export default Page;
