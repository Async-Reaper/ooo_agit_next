import React from "react";
import {AppLink} from "@shared/ui/AppLink";
import {Icon} from "@shared/libs/icon/icon";
import cls from "./Social.module.scss";

const Component = () => (
   <div className={cls.social__icons__wrapper}>
      <AppLink href="/" target="_blank">
         <Icon name="tg" size={50} color="primary" className={cls.social__icon} />
      </AppLink>
      <AppLink href="https://vk.com/agit.plus" target="_blank">
         <Icon name="vk" size={50} color="primary" className={cls.social__icon} />
      </AppLink>
   </div>
);

export const Social = React.memo(Component);
