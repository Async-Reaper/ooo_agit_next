"use client";
import React, { useEffect, useState } from "react";
import { ConsultationButton } from "@features/Consultation";
import { Typography } from "@shared/ui";
import Container from "@shared/ui/Container/Container";
import { motion } from "motion/react";

import cls from "./StartScreen.module.scss";

import { AnimationLazy as Animation } from "../Animation/Animation.lazy";

export const StartScreen = React.memo(() => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  return (
    <section id="start" className={cls.start_screen}>
      <Container>
        <div className={cls.start__wrapper}>
          <div className={cls.start__content}>
            <div className={cls.start__content__text}>
              <motion.div
                initial={{ x: -150, opacity: 0 }}
                animate={isMounted && { x: 0, opacity: 1 }}
                transition={{ type: "spring" }}
                className={cls.start__content__title}
              >
                <Typography variant="h2" uppercase>
                  Комплексная <span>автоматизация бизнеса</span> на базе 1С: от стратегии до внедрения и сопровождения
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
                  Закажите <span>бесплатную консультацию</span> и начните достигать целей уже сегодня!
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
            <Animation/>
          </div>
        </div>
      </Container>
    </section>
  );
}
);
