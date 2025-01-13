import {MainPage} from "@pagesTemplate/MainPage";
import Head from "next/head";
import React, {Suspense} from "react";
import {Metadata} from "next";
import {PageLoader} from "@shared/ui";

export const metadata: Metadata = {
   title: "АГИТ-Плюс",
   description: "Главная страница",
   keywords: ["автоматизация, 1с, 1:с, 1:С, 1c, 1:c, 1:C"],
   openGraph: {
      type: "website",
      description: "Автоматизация различных областей учёта и предоставление сервиса самого высокого уровня обслуживания!",
      url: "https://ooo-agit-next.vercel.app/",
      images: "https://ooo-agit-next.vercel.app/logoForSeo.png"
   }
};

export default function Home() {
   return (
      <>
         <Head>
            <meta charSet="UTF-8"/>
            <link rel="icon" type="image/svg+xml" href="./favicon.ico"/>
            <meta name="viewport" content="width=device-width, initial-scale=0"/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://ooo-agit.onrender.com/"/>
            <meta property="og:image" content="./public/logo.svg"/>
         </Head>
         <Suspense fallback={<PageLoader />}>
            <MainPage />
         </Suspense>
      </>
   );
}
