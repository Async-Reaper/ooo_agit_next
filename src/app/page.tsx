import React from "react";
import {Metadata} from "next";
import {StartScreen} from "@widgets/StartScreen";
import {BrandsList} from "@widgets/BrandsList";
import {SolutionsScreen} from "@widgets/SolutionsScreen";
import {CasesScreen} from "@widgets/CasesScreen";
import {ActivityScreen} from "@widgets/ActivityScreen";
import {ServicesScreen} from "@widgets/ServicesScreen";
import {PlatformScreen} from "@widgets/PlatformScreen";

export const metadata: Metadata = {
   title: "АГИТ-Плюс",
   description: "Автоматизация различных областей учёта и предоставление сервиса самого высокого уровня обслуживания!",
   keywords: ["автоматизация, 1с, 1:с, 1:С, 1c, 1:c, 1:C"],
   openGraph: {
      type: "website",
      title: "АГИТ-Плюс",
      description: "Автоматизация различных областей учёта и предоставление сервиса самого высокого уровня обслуживания!",
      url: "https://ooo-agit-next.vercel.app/",
      images: "https://ooo-agit-next.vercel.app/logoForSeo.png"
   }
};

export default function Home() {
   return (
      <>
         <StartScreen />
         <BrandsList />
         <SolutionsScreen />
         <CasesScreen />
         <ActivityScreen />
         <ServicesScreen />
         <PlatformScreen />
      </>
   );
}
