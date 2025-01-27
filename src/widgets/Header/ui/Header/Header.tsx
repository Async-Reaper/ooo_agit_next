"use client";
import React, { useCallback, useState } from "react";
import { classNames } from "@shared/libs/classNames/classNames";
import { AppLogo } from "@shared/ui/AppLogo/AppLogo";
import { motion } from "motion/react";
import { Button, Typography } from "@shared/ui";
import { AppLink } from "@shared/ui/AppLink";
import { useModal } from "@shared/hooks";
import Container from "@shared/ui/Container/Container";
import { SelectLinks } from "../SelectLinks/SelectLinks";
import cls from "./Header.module.scss";
import { HeaderModal } from "../HeaderModal/HeaderModal";

export const Header = React.memo(() => {
   const [isActiveBurger, setIsActiveBurger] = useState<boolean>(false);
   const { open, isOpen, close } = useModal();

   const onHandleClickBurger = useCallback(() => {
      setIsActiveBurger(!isActiveBurger);
   }, [isActiveBurger, setIsActiveBurger]);

   const scrollToSection = (
      event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
      sectionId: string
   ) => {
      if (location.pathname === "/") {
         event.preventDefault();

         const section = document.getElementById(sectionId);
         if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
         }
      }
   };
   
   return (
      <header id="header" className={cls.header}>
         <Container>
            <div className={cls.header__inner}>
               <div className={cls.header__logo}>
                  <AppLogo/>
               </div>
               <div className={classNames(cls.header__nav, {[cls.active]: isActiveBurger})}>
                  <div className={cls.header__links}>
                     <motion.div
                        initial={{y: -500, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{type: "spring", duration: 0.3}}
                        className={cls.header__link}
                     >
                        <AppLink href="/" variant="secondary">
                           <Typography variant="span">
                              Главная
                           </Typography>
                        </AppLink>
                     </motion.div>
                     <motion.div
                        initial={{y: -500, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{type: "spring", duration: 0.3}}
                        className={cls.header__link}
                     >
                        <AppLink
                           href="/#services"
                           variant="secondary"
                           onClick={(e) => scrollToSection(e, "services")}
                        >
                           <Typography variant="span">
                              Продукты и услуги
                           </Typography>
                        </AppLink>
                     </motion.div>
                     <motion.div
                        initial={{y: -100, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{type: "spring", duration: 0.3, delay: 0.2}}
                     >
                        <SelectLinks/>
                     </motion.div>
                  </div>
                  <div className={cls.header__button}>
                     <Button onClick={open}>
                        <Typography color="white-primary" variant="span" uppercase noWrap>
                           контакты
                        </Typography>
                     </Button>
                  </div>
               </div>
               <div className={cls.header__burger__wrapper} onClick={onHandleClickBurger}>
                  <div className={classNames(cls.header__burger, {[cls.active]: isActiveBurger})}/>
               </div>
               <HeaderModal isOpen={isOpen} onClose={close}/>
            </div>
         </Container>
      </header>
   );
});

Header.displayName = "Header";
