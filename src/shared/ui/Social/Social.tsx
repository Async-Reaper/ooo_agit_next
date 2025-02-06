import React from "react";
import { Icon } from "@shared/libs/icon/icon";
import { AppLink } from "@shared/ui/AppLink";

import cls from "./Social.module.scss";

const Component = () => (
  <div className={cls.social__icons__wrapper}>
    <AppLink href="/" target="_blank">
      <Icon name="tg" size={40} color="primary" className={cls.social__icon} />
    </AppLink>
    <AppLink href="https://vk.com/agit.plus" target="_blank">
      <Icon name="vk" size={40} color="primary" className={cls.social__icon} />
    </AppLink>
  </div>
);

export const Social = React.memo(Component);
