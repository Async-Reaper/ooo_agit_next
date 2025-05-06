"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { classNames } from "@shared/libs/classNames/classNames";
import { AppLogo } from "@shared/ui/AppLogo/AppLogo";
import Container from "@shared/ui/Container/Container";
import { motion } from "motion/react";

import cls from "./Header.module.scss";

import { HeaderNav } from "../HeaderNav/HeaderNav";

export const Header = React.memo(() => {
  const [isActiveScroll, setIsActiveScroll] = useState<boolean>(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const headerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerRect = headerRef.current.getBoundingClientRect();

        if (headerRect.top <= 0) {
          setIsActiveScroll(false);
        } else {
          setIsActiveScroll(true);
        }
      }
    };

    // Добавляем обработчик скролла
    window.addEventListener("scroll", handleScroll);

    // Удаляем обработчик при размонтировании компонента
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header ref={headerRef} id="header" className={classNames(cls.header, { [cls.active]: !isActiveScroll })}>
      <Container>
        <div className={classNames(cls.header__inner, { [cls.active]: !isActiveScroll })}>
          <HeaderNav isMounted={isMounted} isActiveScroll={isActiveScroll}/>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={isMounted && { y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 0.3 }}
            className={cls.header__logo__wrapper}
          >
            <div className={cls.header__logo}>
              <AppLogo/>
            </div>
          </motion.div>
        </div>
      </Container>
    </header>
  );
});

Header.displayName = "Header";
