import React, {Suspense} from "react";
import "@shared/styles/index.scss";
import {Header} from "@widgets/Header";
import {Footer} from "@widgets/Footer";
import "./layout.scss";

interface RootLayoutProps {
   children: React.ReactNode;
}

const RootLayout = (props: RootLayoutProps) => {
   const {children} = props;
   return (
      <html lang="ru">
         <body>
            <Suspense fallback={<h1>Loading...</h1>}>
               <Header/>
               <div className="content">{children}</div>
               <Footer/>
            </Suspense>
         </body>
      </html>
   );
};

export default RootLayout;
