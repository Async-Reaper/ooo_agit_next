import React from "react";
import { InternshipRequestButton } from "@features/InternshipRequest";
import { Icon } from "@shared/libs/icon/icon";
import { Typography } from "@shared/ui";
import { AppImage } from "@shared/ui/AppImage";
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
      <div className={cls.internship__background__img}>
        <AppImage src="/gears-bg.svg" />
      </div>
      <Container>
        <div className={cls.internship__content}>
          <Typography variant="h1" uppercase color="white-primary">
            Запишись на нашу программу стажировки!
          </Typography>
          <Typography variant="h2" color="primary" uppercase>
            Запусти свою карьеру в IT: учись, твори, вдохновляй!
          </Typography>
          <ul className={cls.stage_internship__list}>
            {
              stageInternship.map((internship) => (
                <li key={internship.id} className={cls.stage_internship__item}>
                  <div className={cls.check_mark}>
                    <Icon name="arrow_bottom" color="primary" size={33} />
                  </div>
                  <div className={cls.stage__name}>
                    <Typography variant="p" align="center">
                      {internship.stageName}
                    </Typography>
                  </div>
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
