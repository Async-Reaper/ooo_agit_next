import React from "react";
import { ConsultationButton } from "@features/Consultation";
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
        // initial={{ y: 1000 }}
        // animate={isVisible && { y: 0 }}
        // transition={{
        //   type: "spring", duration: 0.5, delay: 0.3
        // }}
        className={cls.activity__desc}
      >
        <Typography variant="span" bold>
          Закажите <span>бесплатную консультацию</span> и начните достигать целей уже сегодня!
        </Typography>
        <div className={cls.consultation__button__wrapper}>
          <ConsultationButton/>
        </div>
      </motion.div>
      <motion.div
        // initial={{ opacity: 0, y: 100 }}
        // animate={isVisible && { opacity: 1, y: 0 }}
        // transition={{
        //   type: "spring", duration: 0.5, delay: 0.3
        // }}
        className={cls.activity__desc}
      >
        <Typography variant="span" bold>
          Также мы работаем
          {" "}
          <span>дистанционно</span>
          , независимо от местонахождения Заказчика!
        </Typography>
      </motion.div>
    </div>
  );
});
