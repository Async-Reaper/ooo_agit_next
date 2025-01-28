import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
   title: "Продукты и услуги",
   description: "Какие-то услуги",
   keywords: ["автоматизация, 1с, 1:с, 1:С, 1c, 1:c, 1:C"],
   openGraph: {
      type: "website",
      title: "АГИТ-Плюс",
      description: "Автоматизация различных областей учёта и предоставление сервиса самого высокого уровня обслуживания!",
      url: "https://ooo-agit-next.vercel.app/",
      images: "https://ooo-agit-next.vercel.app/logoForSeo.png"
   }
};

const Page = () => {
   return (
      <div>
         Продукты и услуги
      </div>
   );
};

export default Page;