import React from "react";
import {Social, Typography} from "@shared/ui";
import {AppLink} from "@shared/ui/AppLink";
import cls from "./HeaderContacts.module.scss";
import {ColoredIcon} from "@shared/libs/icon/colored-icon";


export const HeaderContacts = () => (
   <div className={cls.contacts__wrapper}>
      <div className={cls.contacts__list}>
         <AppLink className={cls.contact__item} href="mailto:1c@agit.su" variant="secondary" isUnderline={false}>
            <ColoredIcon name="email" size={40} color="primary"/>
         </AppLink>
         <AppLink className={cls.contact__item} href="tel:+7(3843)328-000" variant="secondary" isUnderline={false}>
            <ColoredIcon name="telephone" size={40} color="primary"/>
         </AppLink>
         <AppLink className={cls.contact__item} href="https://yandex.ru/maps/-/CHahIKmc" target="_blank" variant="primary" isUnderline={false}>
            <ColoredIcon name="maps" size={40} color="primary"/>
            <Typography variant="span">г. Новокузнецк</Typography>
         </AppLink>
      </div>
   </div>
);
