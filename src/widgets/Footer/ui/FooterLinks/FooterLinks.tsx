"use client";
import React from "react";
import { Typography } from "@shared/ui";
import { AppLink } from "@shared/ui/AppLink";

import cls from "./FooterLinks.module.scss";

export const FooterLinks = React.memo(() => {
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
    <div className={cls.footer__links}>
      <div className={cls.footer__link__wrapper}>
        <hr/>
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
          href="/#solutions"
          className={cls.footer__link}
          onClick={(e) => scrollToSection(e, "solutions")}
          variant="secondary"
        >
          <Typography variant="span" noWrap>
            Чем занимаемся?
          </Typography>
        </AppLink>
      </div>
      <div className={cls.footer__link__wrapper}>
        <hr/>
        <AppLink
          href="/products#services"
          className={cls.footer__link}
          onClick={(e) => scrollToSection(e, "services")}
          variant="secondary"
        >
          <Typography variant="span" noWrap>
            Услуги
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
        <hr/>
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
          href="/products#platform"
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
        <hr/>
        <AppLink
          href="/cases"
          className={cls.footer__link}
          variant="secondary"
        >
          <Typography variant="span" noWrap>
            Кейсы
          </Typography>
        </AppLink>
      </div>
    </div>
  );
});
