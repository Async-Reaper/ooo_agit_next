import React from "react";
import { classNames } from "@shared/libs/classNames/classNames";
import { Typography } from "@shared/ui";

import cls from "./Alert.module.scss";

type AlertType = "success" | "info" | "error";

interface AlertProps {
  variant: AlertType;
  message: string;
}

const Alert = ({ variant, message }: AlertProps) => {
  const mods = {
    [cls.success]: variant === "success",
    [cls.info]: variant === "info",
    [cls.error]: variant === "error",
  };
  
  return (
    <div className={classNames(cls.alert__wrapper, mods)}>
      <div className={cls.alert__message}>
        <Typography variant="p">{message}</Typography>
      </div>
    </div>
  );
};

export default Alert;
