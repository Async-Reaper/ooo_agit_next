import React from "react";
import { InternshipRequestButton } from "@features/InternshipRequest";
import { Typography } from "@shared/ui";
import Container from "@shared/ui/Container/Container";

import cls from "./InternshipScreen.module.scss";

export const InternshipScreen = React.memo(() => {
  const stageInternship = [
    {
      id: 1,
      stageName: "Подай заявку."
    },
    {
      id: 2,
      stageName: "Получи обратную связь."
    },
    {
      id: 3,
      stageName: "Освой новую профессию."
    },
    {
      id: 4,
      stageName: "Получи офицальное трудоустройство."
    },
    {
      id: 5,
      stageName: "Зарабатывай."
    },
  ];

  return (
    <section id="internship" className={cls.internship__wrapper}>
      <Container>
        <div className={cls.internship__content}>
          <Typography variant="h1" uppercase color="white-primary">
            Запишись на нашу программу стажировки!
          </Typography>
          <Typography variant="h2" color="primary" bold uppercase>
            Запусти свою карьеру в IT: учись, твори, вдохновляй!
          </Typography>
          <ul className={cls.stage_internship__list}>
            {
              stageInternship.map((internship) => (
                <li key={internship.id} className={cls.stage_internship__item}>
                  <div className={cls.dot}/>
                  <Typography variant="p">
                    {internship.stageName}
                  </Typography>
                </li>
              ))
            }
          </ul>
          <InternshipRequestButton/>
        </div>
      </Container>
    </section>
  );
});
