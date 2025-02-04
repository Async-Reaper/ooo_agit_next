import React from "react";
import { Metadata } from "next";
import { CasesList } from "@entities/Cases";

export const metadata: Metadata = {
   title: "Наши кейсы",
   description: "Мы расскажем о каждом кейсе, включая вызовы, с которыми мы столкнулись, и решения, которые мы предложили.",
   openGraph: {
      type: "website",
      title: "Наши кейсы",
      description: "Мы расскажем о каждом кейсе, включая вызовы, с которыми мы столкнулись, и решения, которые мы предложили.",
      url: "https://ooo-agit-next.vercel.app/",
      images: "https://ooo-agit-next.vercel.app/logoForSeo.png"
   }
};

const Page = () => {
   return (
      <>
         <CasesList />
      </>
   );
};

export default Page;
