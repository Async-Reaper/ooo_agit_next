import React from "react";
import {PrivacyPage} from "@pagesTemplate/PrivacyPage";
import {Metadata} from "next";

export const metadata: Metadata = {
   title: "Политика конфиденциальности",
   robots: {
      index: false
   }
};

const Page = () => {
   return (
      <>
         <PrivacyPage />   
      </>
   );
};

export default Page;