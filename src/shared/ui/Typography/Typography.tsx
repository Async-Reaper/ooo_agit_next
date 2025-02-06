import React from "react";
import { classNames, Mods } from "@shared/libs/classNames/classNames";

import cls from "./styles.module.scss";

export type Variant = "h1" | "h2" | "h3" | "p" | "span" | "small";

type Align = "center" | "right" | "left";

const mapTag = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  p: "p",
  span: "span",
  small: "small",
};

interface TypographyProps {
  id?: string;
  color?: DesignSystemColors;
  children?: React.ReactNode;
  bold?: boolean;
  className?: string;
  variant?: Variant;
  inline?: boolean;
  noWrap?: boolean;
  align?: Align;
  uppercase?: boolean;
}
const Component = (props: TypographyProps) => {
  const {
    className,
    variant = "span",
    color = "inherit",
    children,
    noWrap = false,
    inline = false,
    align = "left",
    uppercase = false,
    bold = false,
    ...otherProps
  } = props;

  const ComponentUi = mapTag[variant];

  const mods: Mods = {
    [cls.uppercase]: uppercase,
    [cls.noWrap]: noWrap,
    [cls.inline]: inline,
    [cls.bold]: bold,
  };

  const classes = [
    cls[`variant--${variant}`],
    cls[`color--${color}`],
    cls[`align--${align}`],
  ];

  if (className) classes.push(className);

  return (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
    <ComponentUi
      className={classNames(cls.text, mods, classes)}
      {...otherProps}
    >
      {children}
    </ComponentUi>
  );
};

export const Typography = React.memo(Component);
