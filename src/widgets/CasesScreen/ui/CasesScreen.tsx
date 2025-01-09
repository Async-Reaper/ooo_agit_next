"use client";
import React from "react";
import { motion } from "motion/react";
import { useViewBox } from "@shared/hooks";
import { Typography } from "@shared/ui";
import { Slider } from "./Slider/Slider";
import cls from "./CasesScreen.module.scss";

export const CasesScreen = React.memo(() => {
   const { ref, isVisible } = useViewBox();
   return (
      <motion.section
         id="cases"
         ref={ref}
         initial={{ opacity: 0 }}
         animate={isVisible && { opacity: 1 }}
         className={cls.cases}
      >
         <div className={cls.cases__wrapper}>
            <div className={cls.cases__text}>
               <motion.div
                  initial={{ x: -100 }}
                  animate={isVisible && { x: 0 }}
                  transition={{ type: "spring" }}
               >
                  <Typography color="secondary" variant="h1" uppercase>
                     <b>Наши</b>
                     {" "}
                     кейсы
                  </Typography>
               </motion.div>
               <motion.div
                  initial={{ y: -100 }}
                  animate={isVisible && { y: 0 }}
                  transition={{ type: "spring" }}
               >
                  <Typography color="secondary" variant="p" uppercase>
                     Наша компания обладает
                     {" "}
                     <b>множеством</b>
                     {" "}
                     кейсов
                  </Typography>
               </motion.div>
            </div>
            <motion.div
               initial={{ x: 100 }}
               animate={isVisible && { x: 0 }}
               transition={{ type: "spring" }}
               id="Cases__slider"
               className={cls.cases__slider}
            >
               <Slider />
            </motion.div>
         </div>
      </motion.section>
   );
});