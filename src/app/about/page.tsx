import React, {Suspense} from "react";
import {Metadata} from "next";
import {VacanciesScreen} from "@widgets/VacanciesScreen";
import {NewsScreen} from "@widgets/NewsScreen";
import {PageLoader} from "@shared/ui";

export const metadata: Metadata = {
   title: "О нас",
   keywords: ["Новости, вакансии, работа, работа новокузнецк"],
   openGraph: {
      type: "website",
      description: "мы крутые типы! у нас есть новости и вакансии",
      url: "https://ooo-agit-next.vercel.app/about",
      images: "https://ooo-agit-next.vercel.app/logo.svg"
   },
};


const Page = async () => {
   return (
      <Suspense fallback={<PageLoader />}>
         <VacanciesScreen />
         <NewsScreen />
      </Suspense>
   );
};

export default Page;
