import {MainPage} from "@pagesTemplate/MainPage";
import Head from "next/head";
import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
   title: "Главная",
   description: "Главная страница",
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
         <MainPage />
      </>
   );
}
