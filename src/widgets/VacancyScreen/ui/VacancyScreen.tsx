import React from "react";
import { VacancyCard } from "@entities/Vacancy";
import { VacancyRequestButton } from "@features/VacancyRequest";
import cls from "./VacancyScreen.module.scss";

export const VacancyScreen = React.memo(() => (
   <div className={cls.vacancy}>
      <div className={cls.vacancy__wrapper}>
         <VacancyCard />
         <VacancyRequestButton />
      </div>
   </div>
));
