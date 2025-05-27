import React from "react";
import { NewsScreen } from "@widgets/NewsScreen";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Новости от компании",
  description: "Нужно описание для новостей",
  keywords: ["новости, 1с, 1:с, 1:С, 1c, 1:c, 1:C"],
  openGraph: {
    type: "website",
    title: "Новости от компании",
    description: "Нужно описание для новостей...",
    url: "https://ooo-agit-next.vercel.app/",
    images: "https://static-agit.onrender.com/other/logoForSeo.png"
  }
};

const Page = () => {
  return (
    <>
      <NewsScreen />
    </>
  );
};

export default Page;