import React from "react";
import { Icon } from "@shared/libs/icon/icon";
import { AppLink } from "@shared/ui/AppLink";

import cls from "./styles.module.scss";


const Component = () => {
  return (
    <AppLink href="/" className={cls.logo} isUnderline={false}>
      <Icon name="logo" size={90} color="primary" />
    </AppLink>
  );
};

export const AppLogo = React.memo(Component);
