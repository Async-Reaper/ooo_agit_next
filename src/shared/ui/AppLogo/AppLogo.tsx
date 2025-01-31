import React from "react";
import {AppLink} from "@shared/ui/AppLink";
import cls from "./styles.module.scss";
import {Icon} from "@shared/libs/icon/icon";


const Component = () => {
   return (
      <AppLink href="/" className={cls.logo}>
         <Icon name="logo" size={115} color="primary" />
      </AppLink>
   );
};

export const AppLogo = React.memo(Component);
