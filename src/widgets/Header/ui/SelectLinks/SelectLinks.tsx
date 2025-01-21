import React, { useCallback, useState } from "react";
import { AppLink } from "@shared/ui/AppLink";
import { Icon, Typography } from "@shared/ui";
import { classNames } from "@shared/libs/classNames/classNames";
import ArrowIcon from "@shared/libs/icons/source/arrow.svg";
import {usePathname} from "next/navigation";
import cls from "./SelectLinks.module.scss";
import Image from "@node_modules/next/image";

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
      <div className={classNames(cls.select__wrapper, {[cls.active]: isVisibleSelect})}>
         <div className={cls.select__name} onClick={onHandleVisibleSelect}>
            <Typography variant="span">
               О нас
            </Typography>
            <div className={classNames(cls.select__arrow, {[cls.active]: isVisibleSelect})}>
               <Image src={ArrowIcon} alt={""}/>
            </div>
         </div>
         <div className={classNames(cls.select__items, {[cls.active]: isVisibleSelect})}>
            <AppLink href="/about#vacancies" onClick={(e) => scrollToSection(e, "vacancies")}>
               <Typography variant="span">
                  Вакансии
               </Typography>
            </AppLink>
            <AppLink href="/about#news" onClick={(e) => scrollToSection(e, "news")}>
               <Typography variant="span">
                  Новости
               </Typography>
            </AppLink>
         </div>
      </div>
   );
};

export const SelectLinks = React.memo(Component);
