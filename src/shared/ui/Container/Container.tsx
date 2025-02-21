import React, { ReactNode } from "react";
import { classNames } from "@shared/libs/classNames/classNames";

import cls from "./Container.module.scss";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  
  return (
    <div className={classNames(cls.container, {}, [className])}>
      {children}
    </div>
  );
};

export default Container;
