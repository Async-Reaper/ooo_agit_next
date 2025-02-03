import React, { useState } from "react";
import { AppLink } from "@shared/ui/AppLink";
import { Typography } from "@shared/ui";
import { classNames } from "@shared/libs/classNames/classNames";
import {usePathname} from "next/navigation";
import cls from "./SelectLinks.module.scss";
import {Icon} from "@shared/libs/icon/icon";

const Component = () => {
   const pathname = usePathname();
   const [isVisibleSelect, setIsVisibleSelect] = useState<boolean>(false);

   const onHandleVisibleSelect = () => {
      setIsVisibleSelect(!isVisibleSelect);
   };

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
      <div
         className={classNames(cls.select__wrapper, {[cls.active]: isVisibleSelect})}
         // onMouseOut={() => setIsVisibleSelect(false)}
      >
         <div
            className={cls.select__name}
            onClick={onHandleVisibleSelect}
            // onMouseOver={() => setIsVisibleSelect(true)}
         >
            <Typography variant="span">
               О нас
            </Typography>
            <Icon
               name="arrow_bottom"
               color="primary"
               className={classNames(cls.select__arrow, {[cls.active]: isVisibleSelect})}
            />
         </div>
         <div
            className={classNames(cls.select__items, {[cls.active]: isVisibleSelect})}
            // onMouseOver={() => setIsVisibleSelect(true)}
            // onMouseOut={() => setIsVisibleSelect(false)}
         >
            <AppLink
               href="/about#vacancies"
               onClick={(e) => scrollToSection(e, "vacancies")}
               isUnderline
            >
               <Typography variant="span">
                  Вакансии
               </Typography>
            </AppLink>
            <AppLink
               href="/about#internship"
               onClick={(e) => scrollToSection(e, "vacancies")}
               isUnderline
            >
               <Typography variant="span">
                  Стажировка
               </Typography>
            </AppLink>
            <AppLink
               href="/about#news"
               onClick={(e) => scrollToSection(e, "news")}
               isUnderline
            >
               <Typography variant="span">
                  Новости
               </Typography>
            </AppLink>
         </div>
      </div>
   );
};

export const SelectLinks = React.memo(Component);
