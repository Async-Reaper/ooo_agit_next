"use client";
import React from "react";
import { AppLogo } from "@shared/ui/AppLogo/AppLogo";
import { Social, Typography } from "@shared/ui";
import { AppLink } from "@shared/ui/AppLink";
import Container from "@shared/ui/Container/Container";
import cls from "./Footer.module.scss";

export const Footer = React.memo(() => {
   
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
      <footer className={cls.footer}>
         <Container>
            <div className={cls.footer__inner}>
               <div className={cls.default__info}>
                  <div className={cls.footer__logo}>
                     <AppLogo/>
                  </div>
                  <div className={cls.footer__links}>
                     <div className={cls.footer__link__wrapper}>
                        <AppLink
                           href="/#start"
                           className={cls.footer__link}
                           onClick={(e) => scrollToSection(e, "start")}
                           variant="secondary"
                        >
                           <Typography variant="span" noWrap>
                              О нас
                           </Typography>
                        </AppLink>
                        <AppLink
                           href="/#brands"
                           className={cls.footer__link}
                           onClick={(e) => scrollToSection(e, "brands")}
                           variant="secondary"
                        >
                           <Typography variant="span" noWrap>
                              Наши клиенты
                           </Typography>
                        </AppLink>
                     </div>
                     <div className={cls.footer__link__wrapper}>
                        <AppLink
                           href="/#solutions"
                           className={cls.footer__link}
                           onClick={(e) => scrollToSection(e, "solutions")}
                           variant="secondary"
                        >
                           <Typography variant="span" noWrap>
                              Чем занимаемся?
                           </Typography>
                        </AppLink>
                        <AppLink
                           href="/#activity"
                           className={cls.footer__link}
                           onClick={(e) => scrollToSection(e, "activity")}
                           variant="secondary"
                        >
                           <Typography variant="span" noWrap>
                              Деятельность
                           </Typography>
                        </AppLink>
                     </div>
                     <div className={cls.footer__link__wrapper}>
                        <AppLink
                           href="/#services"
                           className={cls.footer__link}
                           onClick={(e) => scrollToSection(e, "services")}
                           variant="secondary"
                        >
                           <Typography variant="span" noWrap>
                              Услуги
                           </Typography>
                        </AppLink>
                        <AppLink
                           href="/#platform"
                           className={cls.footer__link}
                           onClick={(e) => scrollToSection(e, "platform")}
                           variant="secondary"
                        >
                           <Typography variant="span" noWrap>
                              Товары
                           </Typography>
                        </AppLink>
                     </div>
                     <div className={cls.footer__link__wrapper}>
                        <AppLink
                           href="/about#vacancies"
                           className={cls.footer__link}
                           variant="secondary"
                        >
                           <Typography variant="span" noWrap>
                              Вакансии
                           </Typography>
                        </AppLink>
                        <AppLink
                           href="/#cases"
                           className={cls.footer__link}
                           onClick={(e) => scrollToSection(e, "cases")}
                           variant="secondary"
                        >
                           <Typography variant="span" noWrap>
                              Кейсы
                           </Typography>
                        </AppLink>
                     </div>
                  </div>
                  <div className={cls.footer__contacts}>
                     <Typography variant="span" noWrap>1c@agit.su</Typography>
                     <Typography variant="span" noWrap>+7 (3843) 328-000</Typography>
                     <Typography variant="span" noWrap>г. Новокузнецк, пр-т Строителей, д. 19 </Typography>
                  </div>
                  <div className={cls.footer__social}>
                     <div className={cls.social__wrapper}>
                        <Social/>
                     </div>
                  </div>
               </div>
               <div className={cls.other__info}>
                  <AppLink href="/privacy" target="_blank" variant="secondary">
                     <Typography variant="span" noWrap>
                        Политика конфиденциальности
                     </Typography>
                  </AppLink>
                  <Typography variant="span">
                     © 2024 654005, ООО «АГИТ-Плюс», г. Новокузнецк, пр-т Строителей, д. 19.
                     Все указанные на сайте цены носят информационный характер и не являются публичной офертой
                     (ст. 437 ГК РФ), если явно не указано иное.
                  </Typography>
               </div>
            </div>
         </Container>
      </footer>
   );
});

Footer.displayName = "Footer";
