import React, {Suspense} from "react";
import "@shared/styles/index.scss";
import {ConsultationFlag} from "@features/Consultation";
import {RunStroke} from "@widgets/NewsScreen";
import {Header} from "@widgets/Header";
import {Footer} from "@widgets/Footer";
import cls from "./layout.module.scss";

interface RootLayoutProps {
   children: React.ReactNode;
}

const RootLayout = (props: RootLayoutProps) => {
   const {children} = props;
   return (
      <html lang="ru">
         <head>
            <meta charSet="UTF-8" />
            <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=0" />
         </head>
         <body>
            <Suspense fallback={<h1>Loading...</h1>}>
               <RunStroke />
               <Header/>
               {children}
               <Footer/>
               <ConsultationFlag />
            </Suspense>
         </body>
      </html>
   );
};

export default RootLayout;
