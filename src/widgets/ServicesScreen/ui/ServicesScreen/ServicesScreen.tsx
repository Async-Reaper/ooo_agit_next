"use client";
import React from "react";
import { useViewBox } from "@shared/hooks";
import { Typography } from "@shared/ui";
import { motion } from "motion/react";

import cls from "./ServicesScreen.module.scss";

import { ServicesList } from "../ServicesList/ServicesList";

export const ServicesScreen = React.memo(() => {
  const { ref, isVisible } = useViewBox(0.2);

  return (
    <section
      id="services"
      className={cls.services}
    >
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={isVisible && { opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 2 }}
        ref={ref}
        className={cls.services__wrapper}
      >
        <div className={cls.services__content}>
          <motion.div
            initial={{ x: -100 }}
            animate={isVisible && { x: 0 }}
            transition={{ type: "spring", duration: 0.3, delay: 0.3 }}
            className={cls.services__title}
          >
            <Typography variant="h1" uppercase>
              <b>услуги</b>
              {" "}
              нашей компании
            </Typography>
          </motion.div>
          <ServicesList isVisible={isVisible} />
        </div>
      </motion.div>
    </section>
  );
});

ServicesScreen.displayName = "ServicesScreen";
