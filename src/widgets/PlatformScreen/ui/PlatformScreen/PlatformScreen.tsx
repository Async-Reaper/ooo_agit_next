"use client";
import React from "react";
import { PlatformsList } from "@entities/Platform";
import { Typography } from "@shared/ui";
import Container from "@shared/ui/Container/Container";
import { motion } from "motion/react";

import cls from "./PlatformScreen.module.scss";


export const PlatformScreen = React.memo(() => {

  return (
    <section
      id="platform"
      className={cls.platform}
    >
      <Container>
        <div className={cls.platform__wrapper}>
          <div className={cls.platform__header__content}>
            <motion.div
              // initial={{ opacity: 0, x: -100 }}
              // animate={isVisible && { opacity: 1, x: 0 }}
              // transition={{ type: "spring", duration: 0.5, delay: 0.3 }}
              className={cls.platform__header__title}
            >
              <Typography variant="h2" uppercase bold>
                приобрести
              </Typography>
              <Typography variant="p" uppercase>
                ПРОГРАММНЫе ПРОДУКТЫ
              </Typography>
            </motion.div>
          </div>
          <div className={cls.platforms__list__wrapper}>
            <PlatformsList/>
          </div>
        </div>
      </Container>
    </section>
  );
});
