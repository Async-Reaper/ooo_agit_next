"use client";
import React, { useLayoutEffect, useState } from "react";
import { useViewBox } from "@shared/hooks";
import { Icon } from "@shared/libs/icon/icon";
import { Typography } from "@shared/ui";
import Container from "@shared/ui/Container/Container";
import { animate, stagger } from "motion";
import { motion } from "motion/react";

import cls from "./SolutionsScreen.module.scss";

export const SolutionsScreen = React.memo(() => {
  const [solutions] = useState([
    {
      id: 1,
      text: "Автоматизация бизнес-процессов компаний путем внедрения современных IT решений.",
    },
    {
      id: 2,
      text: "Разработка программного обеспечения под задачи заказчика, в том числе отраслевые.",
    },
    {
      id: 3,
      text: "Экспертные консультации для компаний с целью оптимизации и эффективного использования их IT-инфраструктуры.",
    },
    {
      id: 4,
      text: "Обучение использованию внедренных технологий, а также техническая поддержка для успешной интеграции и максимальной эффективности.",
    },
  ]);

  const { ref, isVisible } = useViewBox(0.2);

  useLayoutEffect(() => {
    isVisible && animate([
      [`.${cls.solutions__list}`, { opacity: 1 }],
      [`.${cls.solution__item}`, { x: [-100, 0], opacity: [0, 1] }, {
        duration: 0.3, delay: stagger(0.2), stiffness: 150, bounce: 0.5,
      }],
    ]);
  }, [isVisible]);

  return (
    <section id="solutions" className={cls.solutions}>
      <div className={cls.solution__vector__left}/>
      <div className={cls.solution__vector__right}/>
      <Container>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={isVisible && { opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 1 }}
          className={cls.solutions__wrapper}
        >
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isVisible && { opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 1 }}
            id="solutions__title"
            className={cls.solutions__title}
            ref={ref}
          >
            <Typography color="white-primary" variant="h1" align="center" uppercase>
              Чем мы
              {" "}
              Занимаемся?
            </Typography>
          </motion.div>
          <ul className={cls.solutions__list}>
            {
              solutions.map((solution) => (
                <li
                  key={solution.id}
                  className={cls.solution__item}
                >
                  <div className={cls.solution__item__text}>
                    <Typography variant="span" align="center">
                      {solution.text}
                    </Typography>
                  </div>
                  <div className={cls.solution__item__icon}>
                    <Icon name="arrow_circular" size={51} color="primary"/>
                  </div>
                </li>
              ))
            }
          </ul>
        </motion.div>
      </Container>
    </section>
  );
});

SolutionsScreen.displayName = "SolutionsScreen";
