import React, { ReactNode } from "react";
import { classNames } from "@shared/libs/classNames/classNames";

import styles from "./Button.module.scss";

type ButtonSize = "xs" | "s" | "l" | "xl"
type ButtonBC = ""

interface ButtonProps {
  active?: boolean;
  variant?: "text" | "contained" | "outlined" | "toggle";
  fullWidth?: boolean;
  maxWidth?: boolean;
  color?: DesignSystemColors;
  background?: ButtonBC;
  children: ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  size?: ButtonSize
  boxShadow?: boolean;
}

const Component = (props: ButtonProps) => {
  const {
    active = false,
    variant = "contained",
    fullWidth = false,
    color,
    children,
    onClick,
    isLoading = false,
    disabled = false,
    size = "l",
    maxWidth,
    background,
  } = props;

  const mods = {
    [styles.isLoading]: isLoading,
    [styles.full_width]: fullWidth,
    [styles.max__width]: maxWidth,
    [styles.active]: active,
  };

  const add = [
    styles[`variant--${variant}`],
    styles[`color--${color}`],
    styles[`size--${size}`],
    styles[`background--${background}`],
  ];
  
  return (
    <button
      disabled={disabled}
      className={classNames(styles.button, mods, add)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const Button = React.memo(Component);
