"use client";
import React from "react";
import { ConsultationButton } from "@features/Consultation";
import { Typography } from "@shared/ui";
import { motion } from "motion/react";

import cls from "./StartScreen.module.scss";

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
          </motion.div>
          <motion.div
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1 }}
            className={cls.start__content__desc}
          >
            <Typography variant="p">
              Закажите бесплатную консультацию и начните достигать целей уже сегодня!
            </Typography>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", duration: 2 }}
        >
          <ConsultationButton/>
        </motion.div>
      </div>
    </div>
  </section>
));
