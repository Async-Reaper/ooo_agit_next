import React, { useLayoutEffect } from "react";
import { Icon } from "@shared/libs/icon/icon";
import { Typography } from "@shared/ui";
import { animate, stagger } from "motion";

import cls from "./ActivityList.module.scss";

interface ActivityListProps {
  isVisible: boolean;
}

export const ActivityList = React.memo(({ isVisible }: ActivityListProps) => {
  const activities = [

    {
      id: 1,
      text: "Управление качеством и учёт деятельности химических лабораторий.",
      img: "https://static-agit.onrender.com/activity/lab.svg"
    },
    {
      id: 3,
      text: "Учёт предоставления различных услуг и работы с клиентами (CRM).",
      img: "https://static-agit.onrender.com/activity/crm.svg"
    },
    {
      id: 2,
      text: "Производство электротехнического и инженерного оборудования.",
      img: "https://static-agit.onrender.com/activity/light.svg"
    },
    {
      id: 4,
      text: "Оптово-розничная торговля и производство продуктов питания.",
      img: "https://static-agit.onrender.com/activity/food-production.svg"
    },
    {
      id: 5,
      text: "Строительство и эксплуатация зданий и сооружений.",
      img: "https://static-agit.onrender.com/activity/building.svg"
    },
    {
      id: 6,
      text: "Горнодобывающая промышленность, металлургия.",
      img: "https://static-agit.onrender.com/activity/mining.svg"
    },
  ];
  
  useLayoutEffect(() => {
    isVisible && animate([
      [cls.activity__list, { opacity: 1 }],
      [cls.activity__item, { x: [-100, 0] }, {
        duration: 0.3, delay: stagger(0.2), stiffness: 150, bounce: 0.5,
      }],
    ]);
  }, [isVisible]);
  
  return (
    <ul className={cls.activity__list}>
      {activities.map((activity) => (
        <li key={activity.id} className={cls.activity__item}>
          <div className={cls.check_mark}>
            <Icon name="rhomb" size={24} color="white-primary" />
          </div>
          <div className={cls.activity__text}>
            <Typography variant="span">
              {activity.text}
            </Typography>
          </div>
        </li>
      ))}
    </ul>
  );
});
