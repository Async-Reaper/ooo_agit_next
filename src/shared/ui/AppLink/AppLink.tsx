"use client";
import {HTMLAttributeAnchorTarget, memo, type ReactNode} from "react";
import Link, {LinkProps} from "next/link";
import cls from "./AppLink.module.scss";
import {classNames} from "@shared/libs/classNames/classNames";

export type AppLinkVariant = "primary" | "secondary";

interface AppLinkProps extends LinkProps {
   href: string;
   className?: string;
   target?: HTMLAttributeAnchorTarget;
   variant?: AppLinkVariant;
   children?: ReactNode;
   activeClassName?: string;
}

export const AppLink = memo((props: AppLinkProps) => {
   const {
      href,
      className,
      children,
      variant = "primary",
      target,
      activeClassName = "",
      ...otherProps
   } = props;

   return (
      <Link
         href={href}
         target={target}
         className={classNames(cls.AppLink, {},  [cls[`variant--${variant}`]])}
         {...otherProps}
      >
         {children}
      </Link>
   );
});
