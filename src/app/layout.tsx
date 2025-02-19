import React, { Suspense } from "react";
import { ConsultationFlag } from "@features/Consultation";
import { PageLoader } from "@shared/ui";
import { Footer } from "@widgets/Footer";
import { Header } from "@widgets/Header";

import "@shared/styles/index.scss";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props;
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
      </head>
      <body>
        <Suspense fallback={<PageLoader />}>
          <ConsultationFlag />
          <Header/>
          {children}
          <Footer/>
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
