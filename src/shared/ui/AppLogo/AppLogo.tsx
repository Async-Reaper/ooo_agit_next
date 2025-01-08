import React from "react";
import { AppLink } from "@shared/ui/AppLink";
import Logo from "@shared/libs/icons/source/logo.svg";
import LogoName from "@shared/libs/icons/source/logo_name.svg";
import cls from "./styles.module.scss";
import Image from "next/image";

interface AppLogoProps {
   isName?: boolean;
}

const Component = (props: AppLogoProps) => {
   const {
      isName = false,
   } = props;

   return (
      <AppLink href="/" className={cls.logo}>
         {
            isName
               ? <Image src={LogoName} alt="" width={80} />
                : <Image src={Logo} alt="" width={80} />
         }
      </AppLink>
   );
};

export const AppLogo = React.memo(Component);
