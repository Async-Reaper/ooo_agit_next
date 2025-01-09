import Head from "next/head";
import React from "react";
import {Metadata} from "next";
import {VacanciesScreen} from "@widgets/VacanciesScreen";
import {NewsScreen} from "@widgets/NewsScreen";

export const metadata: Metadata = {
   title: "О нас",
   openGraph: {
      type: "website",
      description: "мы крутые типы! у нас есть новости и вакансии",
      url: "https://ooo-agit-next.vercel.app/about",
      images: "logo.svg"
   }
};


const Page = async () => {
   return (
      <div>
         <VacanciesScreen />
         <NewsScreen />
      </div>
   );
};

export default Page;
