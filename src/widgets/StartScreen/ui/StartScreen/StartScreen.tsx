"use client";
import React from "react";
import { ConsultationButton } from "@features/Consultation";
import { Typography } from "@shared/ui";
import { motion } from "motion/react";

import cls from "./StartScreen.module.scss";

import { Animation } from "../Animation/Animation";

export const StartScreen = React.memo(() => (
  <section id="start" className={cls.start_screen}>
    <div className={cls.start__wrapper}>
      <div className={cls.start__content}>
        <div className={cls.start__content__text}>
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring" }}
            className={cls.start__content__title}
          >
            <Typography variant="h2" uppercase>
              Комплексная <b>автоматизация бизнеса</b> на базе 1С: от стратегии до внедрения и сопровождения
            </Typography>
            <Typography variant="p">
              Мы не просто внедряем 1С — мы создаем индивидуальные ИТ-экосистемы для вашего бизнеса. Наш опыт и
              экспертиза позволяют автоматизировать любые бизнес-процессы: от бухгалтерского учета до управления
              производством и логистикой.
            </Typography>
          </motion.div>
          <motion.div
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1 }}
            className={cls.start__content__desc}
          >
            <Typography variant="p">
              Закажите <b>бесплатную консультацию</b> и начните достигать целей уже сегодня!
            </Typography>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", duration: 2 }}
          className={cls.consultation__button__wrapper}
        >
          <ConsultationButton/>
        </motion.div>
      </div>
      <div className={cls.start__animation__wrapper}>
        <Animation />
      </div>
    </div>
  </section>
));
