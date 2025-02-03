import React, {Suspense} from "react";
import {PrivacyPage} from "@pagesTemplate/PrivacyPage";
import {Metadata} from "next";
import {PageLoader} from "@shared/ui";

export const metadata: Metadata = {
   title: "Политика конфиденциальности",
   robots: {
      index: false
   }
};

const Page = () => {
   return (
      <Suspense fallback={<PageLoader />}>
         <PrivacyPage />
      </Suspense>
   );
};

export default Page;
