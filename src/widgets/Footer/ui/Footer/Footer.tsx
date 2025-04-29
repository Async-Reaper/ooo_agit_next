"use client";
import React from "react";
import { MailingButton } from "@features/Mailing";
import { Social, Typography } from "@shared/ui";
import { AppLink } from "@shared/ui/AppLink";
import { AppLogo } from "@shared/ui/AppLogo/AppLogo";
import Container from "@shared/ui/Container/Container";

import cls from "./Footer.module.scss";

import { FooterContacts } from "../FooterContacts/FooterContacts";
import { FooterLinks } from "../FooterLinks/FooterLinks";

export const Footer = React.memo(() => {

  return (
    <footer className={cls.footer}>
      <div className={cls.footer__inner}>
        <FooterContacts/>
        <FooterLinks/>
      </div>
      <div className={cls.other__info}>
        <AppLink href="/privacy" target="_blank" variant="secondary">
          <Typography variant="span" noWrap>
            Политика конфиденциальности
          </Typography>
        </AppLink>
        <Typography variant="span" color="white-primary">
          © 2024 654005, ООО «АГИТ-Плюс», г. Новокузнецк, пр-т Строителей, д. 19.
          Все указанные на сайте цены носят информационный характер и не являются публичной офертой
          (ст. 437 ГК РФ), если явно не указано иное.
        </Typography>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";
