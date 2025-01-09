import Head from "next/head";
import React from "react";
import {Metadata} from "next";
import {VacanciesScreen} from "@widgets/VacanciesScreen";
import {NewsScreen} from "@widgets/NewsScreen";

export const metadata: Metadata = {
   title: "О нас",
   description: "Какой-то текст о нас",
   openGraph: {
      type: "website",
      description: "О нас",
      url: "https://ooo-agit.onrender.com/",
      images: "public/logo.svg"
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
