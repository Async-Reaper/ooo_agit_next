import React from "react";
import { Icon } from "@shared/libs/icon/icon";
import { Typography } from "@shared/ui";
import { AppLink } from "@shared/ui/AppLink";

import cls from "./FooterContacts.module.scss";

export const FooterContacts = React.memo(() => {
  return (
    <div className={cls.footer__contacts}>
      <div className={cls.contact__item}>
        <Icon name="email" size={41} color="white-primary"/>
        <AppLink href="mailto:1c@agit.su" variant="secondary">
          <Typography variant="p">1c@agit.su</Typography>
        </AppLink>
      </div>
      <div className={cls.contact__item}>
        <Icon name="phone" size={41} color="white-primary"/>
        <AppLink href="tel:+7(3843)328-000" variant="secondary">
          <Typography variant="p">+7 (3843) 328-000</Typography>
        </AppLink>
      </div>
      <div className={cls.contact__item}>
        <Icon name="map" size={41} color="white-primary"/>
        <AppLink href="https://yandex.ru/maps/-/CHahIKmc" target="_blank" variant="secondary">
          <Typography variant="p">г. Новокузнецк, пр-т Строителей, д. 19 </Typography>
        </AppLink>
      </div>
    </div>
  );
});
