import React, { Suspense } from "react";
import { MainPage } from "@pagesTemplate/MainPage";
import { PageLoader } from "@shared/ui";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Автоматизация бизнеса",
  description: "Компания АГИТ-Плюс является официальным партнером «1С» " +
       "и предлагает услуги по автоматизации, проектированию, анализу и корректировке бизнес-процессов, а " +
       "также комплексное обслуживание систем, в том числе отраслевых конфигураций «1С».",
  keywords: ["автоматизация, 1с, 1:с, 1:С, 1c, 1:c, 1:C"],
  openGraph: {
    type: "website",
    title: "Автоматизация бизнеса",
    description: "Компания АГИТ-Плюс является официальным партнером «1С» " +
          "и предлагает услуги по автоматизации, проектированию, анализу и корректировке бизнес-процессов, а " +
          "также комплексное обслуживание систем, в том числе отраслевых конфигураций «1С».",
    url: "https://ooo-agit-next.vercel.app/",
    images: "https://ooo-agit-next.vercel.app/logoForSeo.png"
  }
};

export default function Home() {
  return (
    <MainPage />
  );
}
