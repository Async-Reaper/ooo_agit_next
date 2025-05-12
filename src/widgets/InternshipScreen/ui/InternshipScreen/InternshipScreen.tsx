"use client";
import React from "react";
import { InternshipRequestButton } from "@features/InternshipRequest";
import { Icon } from "@shared/libs/icon/icon";
import { Typography } from "@shared/ui";
import Container from "@shared/ui/Container/Container";

import cls from "./InternshipScreen.module.scss";


interface StageInternship {
  id: number,
  stageName: string
}

export const InternshipScreen = React.memo(() => {
  const stageInternship: StageInternship[] = [
    {
      id: 1,
      stageName: "Подай заявку"
    },
    {
      id: 2,
      stageName: "Получи обратную связь"
    },
    {
      id: 3,
      stageName: "Освой новую профессию"
    },
    {
      id: 4,
      stageName: "Получи офицальное трудоустройство"
    },
    {
      id: 5,
      stageName: "Зарабатывай"
    },
  ];

  return (
    <section id="internship" className={cls.internship__wrapper}>
      <Container className={cls.internship__content}>
        <div className={cls.internship__title}>
          <Typography variant="h2" color="white-primary" uppercase>
            Запишись на нашу программу стажировки!
          </Typography>
          <Typography variant="body" color="primary" uppercase>
            Запусти свою карьеру в IT: учись, твори, вдохновляй!
          </Typography>
        </div>
        <div className={cls.internship}>
          <div className={cls.internship__content}>
            <ul className={cls.stage_internship__list}>
              {
                stageInternship.map((internship) => (
                  <li key={internship.id} className={cls.stage_internship__item}>
                    <div className={cls.stage__icon}>
                      <Icon name="rhomb" size={22} color="white-primary" />
                    </div>
                    <div className={cls.stage__name}>
                      <Typography variant="p" align="center" noWrap>
                        {internship.stageName}
                      </Typography>
                    </div>
                  </li>
                ))
              }
            </ul>
            <InternshipRequestButton/>
          </div>
          <div className={cls.internship__background}>
            <img src="/internship/internship-background.png" alt="" className={cls.internship__img}/>
          </div>
        </div>
      </Container>
    </section>
  );
});
