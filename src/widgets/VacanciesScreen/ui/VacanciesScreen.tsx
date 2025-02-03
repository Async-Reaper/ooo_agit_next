import { Typography } from "@shared/ui";
import { VacanciesList } from "@entities/Vacancy";
import cls from "./VacanciesScreen.module.scss";

export const VacanciesScreen = () => (
   <section id="vacancies" className={cls.vacancies__screen}>
      <div className={cls.vacancies__wrapper}>
         <div>
            <Typography variant="h1" color="secondary" uppercase>
               Наши
               {" "}
               <b>вакансии</b>
            </Typography>
         </div>
         <VacanciesList />
      </div>
   </section>
);
