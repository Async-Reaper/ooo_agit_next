"use client";
import React from "react";
import { AppLogo } from "@shared/ui/AppLogo/AppLogo";
import { Social, Typography } from "@shared/ui";
import { AppLink } from "@shared/ui/AppLink";
import Container from "@shared/ui/Container/Container";
import cls from "./Footer.module.scss";
import {MailingButton} from "@features/Mailing";
import {Icon} from "@shared/libs/icon/icon";
import {ColoredIcon} from "@shared/libs/icon/colored-icon";

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
                           href="/src/pages/зфпу"
                           className={cls.footer__link}
                           variant="secondary"
                        >
                           <Typography variant="span" noWrap>
                              Кейсы
                           </Typography>
                        </AppLink>
                     </div>
                  </div>
                  <div className={cls.footer__contacts}>
                     <div className={cls.contact__item}>
                        <ColoredIcon name="email" size={40} color="primary"/>
                        <AppLink href="mailto:1c@agit.su" variant="secondary">
                           <Typography>1c@agit.su</Typography>
                        </AppLink>
                     </div>
                     <div className={cls.contact__item}>
                        <ColoredIcon name="telephone" size={40} color="primary"/>
                        <AppLink href="tel:+7(3843)328-000" variant="secondary">
                           <Typography>+7 (3843) 328-000</Typography>
                        </AppLink>
                     </div>
                     <div className={cls.contact__item}>
                        <ColoredIcon name="maps" size={40} color="primary"/>
                        <AppLink href="https://yandex.ru/maps/-/CHahIKmc" target="_blank" variant="secondary">
                           <Typography>г. Новокузнецк, пр-т Строителей, д. 19 </Typography>
                        </AppLink>
                     </div>
                  </div>
                  <div className={cls.footer__social}>
                     <Social/>
                     <MailingButton/>
                  </div>
               </div>
               <div className={cls.other__info}>
                  <AppLink href="/privacy" target="_blank" variant="secondary">
                     <Typography variant="span" noWrap>
                        Политика конфиденциальности
                     </Typography>
                  </AppLink>
                  <Typography variant="span" color="secondary">
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
