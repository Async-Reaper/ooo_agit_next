import { VacanciesList } from "@entities/Vacancy";
import { Typography } from "@shared/ui";
import Container from "@shared/ui/Container/Container";

import cls from "./VacanciesScreen.module.scss";

export const VacanciesScreen = () => (
  <section id="vacancies" className={cls.vacancies__screen}>
    <Container>
      <div className={cls.vacancies__title__wrapper}>
        <Typography variant="h2" uppercase>
          Наши вакансии
        </Typography>
      </div>
    </Container>
    <div className={cls.vacancies__wrapper}>
      <Container>
        <VacanciesList/>
      </Container>
    </div>
  </section>
);
