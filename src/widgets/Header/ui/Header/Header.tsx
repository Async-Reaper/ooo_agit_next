"use client";
import React, { useState } from "react";
import { classNames } from "@shared/libs/classNames/classNames";
import { AppLogo } from "@shared/ui/AppLogo/AppLogo";
import { Typography } from "@shared/ui";
import { AppLink } from "@shared/ui/AppLink";
import { SelectLinks } from "../SelectLinks/SelectLinks";
import cls from "./Header.module.scss";
import { HeaderContacts } from "../HeaderContacts/HeaderContacts";

export const Header = React.memo(() => {
   const [isActiveBurger, setIsActiveBurger] = useState<boolean>(false);

   const onHandleClickBurger = () => {
      setIsActiveBurger(!isActiveBurger);
   };

   return (
      <header id="header" className={cls.header}>
         <div className={cls.header__inner}>
            <div
               // initial={{y: -100, opacity: 0}}
               // animate={{y: 0, opacity: 1}}
               // transition={{type: "spring", duration: 0.3}}
               className={cls.header__logo}
            >
               <AppLogo/>
            </div>
            <div className={classNames(cls.header__nav, {[cls.active]: isActiveBurger})}>
               <div className={cls.header__links}>
                  <div
                     // initial={{y: -200, opacity: 0}}
                     // animate={{y: 0, opacity: 1}}
                     // transition={{type: "spring", duration: 0.3}}
                     className={cls.header__link}
                  >
                     <AppLink
                        href="/"
                        variant="primary"
                     >
                        <Typography variant="span">
                           Главная
                        </Typography>
                     </AppLink>
                  </div>
                  <div
                     // initial={{y: -300, opacity: 0}}
                     // animate={{y: 0, opacity: 1}}
                     // transition={{type: "spring", duration: 0.3}}
                     className={cls.header__link}
                  >
                     <AppLink
                        href="/products"
                        variant="primary"
                     >
                        <Typography variant="span">
                           Продукты и услуги
                        </Typography>
                     </AppLink>
                  </div>
                  <div
                     // initial={{y: -400, opacity: 0}}
                     // animate={{y: 0, opacity: 1}}
                     // transition={{type: "spring", duration: 0.3}}
                     className={cls.select__link}
                  >
                     <SelectLinks/>
                  </div>
               </div>
               <div
                  // initial={{y: -500, opacity: 0}}
                  // animate={{y: 0, opacity: 1}}
                  // transition={{type: "spring", duration: 0.3}}
                  className={cls.header__button}
               >
                  <HeaderContacts />
               </div>
            </div>
            <div
               // initial={{y: -200, opacity: 0}}
               // animate={{y: 0, opacity: 1}}
               // transition={{type: "spring", duration: 0.3}}
               className={cls.header__burger__wrapper}
               onClick={onHandleClickBurger}
            >
               <div className={classNames(cls.header__burger, {[cls.active]: isActiveBurger})}/>
            </div>
         </div>
         <hr/>
      </header>
   );
});

Header.displayName = "Header";
