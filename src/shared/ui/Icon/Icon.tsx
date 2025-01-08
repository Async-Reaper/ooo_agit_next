import React from "react";
import cls from "./Icon.module.scss";

interface IconProps {
   children: any;
}

const Component = (props: IconProps) => {
   const {
      children,
   } = props;
   return (
      <div className={cls.icon__wrapper}>
         {children}
      </div>
   );
};

export const Icon = React.memo(Component);
