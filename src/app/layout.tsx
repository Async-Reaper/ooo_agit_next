import React, {Suspense} from "react";
import "@shared/styles/index.scss";
import {Header} from "@widgets/Header";
import {Footer} from "@widgets/Footer";
import Head from "next/head";

interface RootLayoutProps {
    children: React.ReactNode;
    keywords: string;
    description: string;
}

const RootLayout = (props: RootLayoutProps) => {
    const {children, keywords, description} = props;
    return (
        <html lang="ru">
        <Head>
            <meta charSet="UTF-8"/>
            <link rel="icon" type="image/svg+xml" href="./favicon.ico"/>
            <meta name="viewport" content="width=device-width, initial-scale=0"/>
            <meta name="keywords" content={keywords}/>
            <meta name="description" content={description}/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://ooo-agit.onrender.com/"/>
            <meta property="og:image" content="./public/logo.svg"/>
            <title>АГИТ-Плюс</title>
            <base href="/"/>
        </Head>
        <body>
        <Suspense fallback={<h1>Loading...</h1>}>
            <Header/>
            <div>{children}</div>
            <Footer/>
        </Suspense>
        </body>
        </html>
    );
};

export default RootLayout;
