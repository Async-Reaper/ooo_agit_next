"use client";
import React from "react";
import { ConsultationButton } from "@features/Consultation";
import { Typography } from "@shared/ui";
import { AppImage } from "@shared/ui/AppImage";
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
            <Typography variant="h1" uppercase color="black">
              <b>Мы - эксперты</b>
              {" "}
              в области Автоматизации бизнеса
            </Typography>
          </motion.div>
          <motion.div
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1 }}
            className={cls.start__content__desc}
          >
            <Typography variant="p" color="black">
              Наши эксперты готовы разработать стратегии, которые приведут к результатам в вашем
              бизнесе уже сегодня.
              Закажите бесплатную консультацию и начините достигать целей уже сегодня!
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", duration: 2 }}
      className={cls.start__background}
    >
      <AppImage src="/wave.webp" alt="bg" />
    </motion.div>
  </section>
));