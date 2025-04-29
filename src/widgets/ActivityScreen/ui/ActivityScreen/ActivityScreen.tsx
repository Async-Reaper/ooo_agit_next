"use client";
import React from "react";
import { useViewBox } from "@shared/hooks";
import { Typography } from "@shared/ui";
import Container from "@shared/ui/Container/Container";
import { motion } from "motion/react";

import cls from "./ActivityScreen.module.scss";

import { ActivityList } from "../ActivityList/ActivityList";

export const ActivityScreen = React.memo(() => {
  const { ref, isVisible } = useViewBox(0.1);

  return (
    <section
      id="activity"
      className={cls.activity}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={isVisible && { opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 2 }}
        className={cls.activity__wrapper}
      >
        <div className={cls.activity__header}>
          <Container>
            <motion.div
              initial={{ y: -100 }}
              animate={isVisible && { y: 0 }}
              transition={{
                type: "spring", duration: 0.5, stiffness: 150, bounce: 0.5, delay: 0.3
              }}
              className={cls.activity__title}
            >
              <Typography variant="h2" uppercase>
                Направления
                {" "}
                <span>автоматизации</span>
              </Typography>
            </motion.div>
          </Container>
          <div className={cls.activity__content}>
            <div className={cls.activity__background}>
              <img src="/activity/activity-background.png" className={cls.activity__background__img}/>
            </div>
            <ActivityList isVisible={isVisible}/>
          </div>
        </div>
      </motion.div>
    </section>
  );
});
