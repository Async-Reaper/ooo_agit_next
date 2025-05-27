"use client";
import React, { useEffect, useState } from "react";
import Container from "@shared/ui/Container/Container";
import { HeaderAdmin } from "@widgets/Header";
import { usePathname } from "next/navigation";

import "@shared/styles/index.scss";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    if (pathname!.includes("login")) {
      setIsAuth(false);
    } else {
      setIsAuth(true);
    }
  }, [pathname]);
  
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8"/>
        <link rel="icon" type="image/svg+xml" href="../favicon.ico"/>
        <meta
          name="viewport"
          content="width=device-width, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
      </head>
      <body>
        <div className="admin-wrapper">
          <Container>
            {isAuth && <HeaderAdmin />}
            {children}
          </Container>
        </div>
      </body>
    </html>
  );
}
