import React from "react";
import { Typography } from "@shared/ui";
import { motion } from "motion/react";

import cls from "./ActivityFooter.module.scss";

interface ActivityFooterProps {
  isVisible: boolean;
}

export const ActivityFooter = React.memo(({ isVisible }: ActivityFooterProps) => {
  
  return (
    <div className={cls.activity__footer}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={isVisible && { opacity: 1, y: 0 }}
        transition={{
          type: "spring", duration: 0.5, delay: 0.3
        }}
        className={cls.activity__desc}
      >
        <Typography variant="p">
          <b>Автоматизация</b>
          {" "}
          различных областей учёта и предоставление сервиса
          {" "}
          <b>самого</b>
          {" "}
          высокого уровня обслуживания!
        </Typography>
      </motion.div>
      <motion.div
        initial={{ y: 1000 }}
        animate={isVisible && { y: 0 }}
        transition={{
          type: "spring", duration: 0.5, delay: 0.3
        }}
        className={cls.activity__desc}
      >
        <Typography variant="p">
          Также мы работаем
          {" "}
          <b>дистанционно</b>
          , независимо от местонахождения Заказчика!
        </Typography>
      </motion.div>
    </div>
  );
});
