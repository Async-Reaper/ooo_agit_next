"use client";
import React from "react";
import { useViewBox } from "@shared/hooks";
import { Typography } from "@shared/ui";
import Container from "@shared/ui/Container/Container";
import { motion } from "motion/react";

import cls from "./ActivityScreen.module.scss";

import { ActivityFooter } from "../ActivityFooter/ActivityFooter";
import { ActivityList } from "../ActivityList/ActivityList";
import { AnimationImages } from "../AnimationImages/AnimationImages";

export const ActivityScreen = React.memo(() => {
  
  const { ref, isVisible } = useViewBox(0.1);

  return (
    <section
      id="activity"
      className={cls.activity}
    >
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={isVisible && { opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 2 }}
          className={cls.activity__wrapper}
        >
          <div className={cls.activity__header}>
            <motion.div
              initial={{ y: -100 }}
              animate={isVisible && { y: 0 }}
              transition={{
                type: "spring", duration: 0.5, stiffness: 150, bounce: 0.5, delay: 0.3
              }}
              className={cls.activity__title}
            >
              <Typography variant="h1" uppercase>
                Направления
                {" "}
                <b> автоматизации</b>
              </Typography>
            </motion.div>
            <div className={cls.activity__content}>
              <ActivityList isVisible={isVisible} />
              <AnimationImages />
            </div>
          </div>
          <ActivityFooter isVisible={isVisible} />
        </motion.div>
      </Container>
    </section>
  );
});

ActivityScreen.displayName = "ActivityScreen";
