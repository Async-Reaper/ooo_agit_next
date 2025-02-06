"use client";
import { HTMLAttributeAnchorTarget, memo, type ReactNode } from "react";
import { classNames } from "@shared/libs/classNames/classNames";
import Link, { LinkProps } from "next/link";

import cls from "./AppLink.module.scss";

export type AppLinkVariant = "primary" | "secondary";

interface AppLinkProps extends LinkProps {
  href: string;
  className?: string;
  target?: HTMLAttributeAnchorTarget;
  variant?: AppLinkVariant;
  isUnderline?: boolean;
  children?: ReactNode;
  activeClassName?: string;
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    href,
    className,
    children,
    variant = "primary",
    isUnderline = true,
    target,
    activeClassName = "",
    ...otherProps
  } = props;

  return (
    <Link
      href={href}
      target={target}
      className={classNames(cls.AppLink, { [cls.underline]: isUnderline },  [cls[`variant--${variant}`], className])}
      {...otherProps}
    >
      {children}
    </Link>
  );
});
