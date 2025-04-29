"use client";
import React from "react";
import { InternshipRequestButton } from "@features/InternshipRequest";
import { Icon, IconName } from "@shared/libs/icon/icon";
import { Typography } from "@shared/ui";
import Container from "@shared/ui/Container/Container";

import cls from "./InternshipScreen.module.scss";


interface StageInternship {
  id: number,
  icon: IconName,
  stageName: string
}

export const InternshipScreen = React.memo(() => {
  const stageInternship: StageInternship[] = [
    {
      id: 1,
      icon: "change_experience",
      stageName: "Подай заявку"
    },
    {
      id: 2,
      icon: "book",
      stageName: "Получи обратную связь"
    },
    {
      id: 3,
      icon: "contract",
      stageName: "Освой новую профессию"
    },
    {
      id: 4,
      icon: "bag",
      stageName: "Получи офицальное трудоустройство"
    },
    {
      id: 5,
      icon: "money",
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
            <div className={cls.stage__internship}>
              <ul className={cls.stage_internship__list}>
                {
                  stageInternship.map((internship) => (
                    <li key={internship.id} className={cls.stage_internship__item}>
                      <div className={cls.stage__icon}>
                        <Icon name={internship.icon} size={70} color="white-primary"/>
                      </div>
                    </li>
                  ))
                }
              </ul>
              <ul className={cls.stage_internship__text}>
                {
                  stageInternship.map((internship) => (
                    <li key={internship.id} className={cls.stage_internship__text__item}>
                      <div className={cls.stage__name}>
                        <Typography variant="p" align="center" noWrap>
                          {internship.stageName}
                        </Typography>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
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
