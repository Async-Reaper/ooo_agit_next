import { VacanciesList } from "@entities/Vacancy";
import { Typography } from "@shared/ui";

import cls from "./VacanciesScreen.module.scss";

export const VacanciesScreen = () => (
  <section id="vacancies" className={cls.vacancies__screen}>
    <div className={cls.vacancies__wrapper}>
      <div className={cls.vacancies__title__wrapper}>
        <Typography variant="h1" uppercase>
          Наши
          {" "}
          вакансии
        </Typography>
      </div>
      <VacanciesList />
    </div>
  </section>
);
