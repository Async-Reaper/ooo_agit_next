import React from "react";
import { Icon } from "@shared/ui";
import TgIcon from "@shared/libs/icons/source/tg.svg";
import VKIcon from "@shared/libs/icons/source/vk.svg";
import { AppLink } from "@shared/ui/AppLink";
import cls from "./Social.module.scss";

const Component = () => (
   <div className={cls.social__icons}>
      <AppLink href="/" target="_blank">

      </AppLink>
      <AppLink href="https://vk.com/agit.plus" target="_blank">

      </AppLink>
   </div>
);

export const Social = React.memo(Component);
