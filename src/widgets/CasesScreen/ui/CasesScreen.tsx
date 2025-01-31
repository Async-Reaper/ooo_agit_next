"use client";
import React from "react";
import { motion } from "motion/react";
import { useViewBox } from "@shared/hooks";
import { Typography } from "@shared/ui";
import { Slider } from "./Slider/Slider";
import cls from "./CasesScreen.module.scss";

export const CasesScreen = React.memo(() => {
   const { ref, isVisible } = useViewBox(0.5);
   return (
      <motion.section
         id="cases"
         className={cls.cases}
      >
         <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 150 }}
            animate={isVisible && { opacity: 1, x: 0 }}
            className={cls.cases__wrapper}
         >
            <div className={cls.cases__text}>
               <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={isVisible && { opacity: 1, x: 0 }}
                  transition={{ type: "spring", delay: 0.3 }}
               >
                  <Typography color="secondary" variant="h1" uppercase>
                     <b>Наши</b>
                     {" "}
                     кейсы
                  </Typography>
               </motion.div>
               <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  animate={isVisible && { opacity: 1, y: 0 }}
                  transition={{ type: "spring", delay: 0.3 }}
               >
                  <Typography color="secondary" variant="p">
                     Посмотрите на примеры успешного применения наших решений в различных сферах бизнеса.
                  </Typography>
                  <Typography color="secondary" variant="p">
                     Каждый проект <b>иллюстрирует</b>, как мы помогли клиентам <b>справиться</b> с конкретными вызовами,
                     {" "}
                     <b>оптимизировать</b> рабочие процессы и <b>достичь</b> значительных результатов.
                  </Typography>
               </motion.div>
            </div>
            <motion.div
               initial={{ opacity: 0, x: 100 }}
               animate={isVisible && { opacity: 1, x: 0 }}
               transition={{ type: "spring" }}
               id="Cases__slider"
               className={cls.cases__slider}
            >
               <Slider />
            </motion.div>
         </motion.div>
      </motion.section>
   );
});