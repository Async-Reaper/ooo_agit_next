import React from "react";
import { Icon } from "@shared/libs/icon/icon";
import { AppLink } from "@shared/ui/AppLink";

import cls from "./HeaderContacts.module.scss";


export const HeaderContacts = () => (
  <div className={cls.contacts__wrapper}>
    <div className={cls.contacts__list}>
      <AppLink className={cls.contact__item} href="mailto:1c@agit.su" variant="secondary" isUnderline={false}>
        <Icon name="email" size={45} color="gray-dark"/>
      </AppLink>
      <AppLink className={cls.contact__item} href="tel:+7(3843)328-000" variant="secondary" isUnderline={false}>
        <Icon name="phone" size={35} color="gray-dark"/>
      </AppLink>
      <AppLink className={cls.contact__item} href="https://yandex.ru/maps/-/CHahIKmc" target="_blank" variant="primary" isUnderline={false}>
        <Icon name="map" size={35} color="gray-dark"/>
      </AppLink>
    </div>
  </div>
);
