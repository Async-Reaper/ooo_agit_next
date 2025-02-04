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
      // eslint-disable-next-line max-len
      images: "https://img.freepik.com/free-vector/photos-concept-illustration_114360-196.jpg?t=st=1738666463~exp=1738670063~hmac=f8bb2df63f6abcc73f92cb8e252ffa8e68fd4bfebf06e4c3f9ac94ad08f85a73&w=740"
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
