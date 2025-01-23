import React, {Suspense} from "react";
import {Metadata} from "next";
import {VacanciesScreen} from "@widgets/VacanciesScreen";
import {NewsScreen} from "@widgets/NewsScreen";
import {PageLoader} from "@shared/ui";
import {InternshipScreen} from "@widgets/InternshipScreen/ui/InternshipScreen";

export const metadata: Metadata = {
   title: "О нас",
   description: "мы крутые типы! у нас есть новости и вакансии",
   keywords: ["Новости, вакансии, работа, работа новокузнецк"],
   openGraph: {
      type: "website",
      description: "мы крутые типы! у нас есть новости и вакансии",
      url: "https://ooo-agit-next.vercel.app/about",
      images: "https://ooo-agit-next.vercel.app/logoForSeo.png"
   },
};


const Page = async () => {
   return (
      <Suspense fallback={<PageLoader />}>
         <VacanciesScreen />
         <InternshipScreen />
         <NewsScreen />
      </Suspense>
   );
};

export default Page;
