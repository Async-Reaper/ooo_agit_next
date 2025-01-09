import {VacancyCard} from "@entities/Vacancy";
import {VacancyRequestButton} from "@features/VacancyRequest";
import React from "react";
import cls from "./VacancyPage.module.scss";

export const VacancyPage = () => (
   <div className={cls.vacancy}>
      <div className={cls.vacancy__wrapper}>
         <VacancyCard/>
         <VacancyRequestButton/>
      </div>
   </div>
);
