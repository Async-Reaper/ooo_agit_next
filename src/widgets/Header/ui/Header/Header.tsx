"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { classNames } from "@shared/libs/classNames/classNames";
import { AppLogo } from "@shared/ui/AppLogo/AppLogo";
import { motion } from "motion/react";

import cls from "./Header.module.scss";

import { HeaderNav } from "../HeaderNav/HeaderNav";

export const Header = React.memo(() => {
  const [isActiveScroll, setIsActiveScroll] = React.useState<boolean>(true);
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
      <div className={cls.header__inner}>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 0.3 }}
          className={cls.header__logo}
        >
          <AppLogo/>
          <hr className={cls.header__vertical_line}/>
        </motion.div>
        <HeaderNav isActiveScroll={isActiveScroll} />
      </div>
    </header>
  );
});

Header.displayName = "Header";
