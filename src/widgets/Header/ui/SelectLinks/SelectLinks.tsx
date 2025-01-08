import React, { useCallback, useState } from "react";
import { AppLink } from "@shared/ui/AppLink";
import { Icon, Typography } from "@shared/ui";
import { classNames } from "@shared/libs/classNames/classNames";
import ArrowIcon from "@shared/libs/icons/source/arrow.svg";
import {usePathname} from "next/navigation";
import cls from "./SelectLinks.module.scss";

const Component = () => {
   const pathname = usePathname();
   const [isVisibleSelect, setIsVisibleSelect] = useState<boolean>(false);

   const onHandleVisibleSelect = useCallback(() => {
      setIsVisibleSelect(!isVisibleSelect);
   }, [isVisibleSelect, setIsVisibleSelect]);

   const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement,
   MouseEvent>, sectionId: string) => {
      setIsVisibleSelect(false);
      if (pathname === "/about") {
         event.preventDefault();

         const section = document.getElementById(sectionId);
         if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
         }
      }
   };
   return (
      <div className={cls.select__wrapper}>
         <div className={cls.select__name} onClick={onHandleVisibleSelect}>
            <Typography variant="span">
               О нас
            </Typography>
            <div className={classNames(cls.select__arrow, { [cls.active]: isVisibleSelect })}>

            </div>
         </div>
         <div className={classNames(cls.select__items, { [cls.active]: isVisibleSelect })}>
            <AppLink href="/about#vacancies" onClick={(e) => scrollToSection(e, "vacancies")}>
               Вакансии
            </AppLink>
            <AppLink href="/about#news" onClick={(e) => scrollToSection(e, "news")}>
               Новости
            </AppLink>
         </div>
      </div>
   );
};

export const SelectLinks = React.memo(Component);
