import React, { Suspense } from "react";
import { PageLoader } from "@shared/ui";
import { InternshipScreen } from "@widgets/InternshipScreen/ui/InternshipScreen";
import { NewsScreen } from "@widgets/NewsScreen";
import { VacanciesScreen } from "@widgets/VacanciesScreen";
import { Metadata } from "next";

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
    <>
      <VacanciesScreen />
      <InternshipScreen />
      <NewsScreen />
    </>
  );
};

export default Page;
