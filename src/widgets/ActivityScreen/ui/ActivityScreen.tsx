"use client";
import React, { useLayoutEffect, useState } from "react";
import { Typography } from "@shared/ui";
import { motion } from "motion/react";
import { useViewBox } from "@shared/hooks";
import { animate, stagger } from "motion";
import { AppImage } from "@shared/ui/AppImage";
import cls from "./ActivityScreen.module.scss";

export const ActivityScreen = React.memo(() => {
   const [activities] = useState([
      {
         id: 1,
         text: "Горнодобывающая промышленность, металлургия.",
      },
      {
         id: 2,
         text: "Строительство и эксплуатация зданий и сооружений.",
      },
      {
         id: 3,
         text: "Производство электротехнического и инженерного оборудования.",
      },
      {
         id: 4,
         text: "Управление качеством и учёт деятельности химических лабораторий.",
      },
      {
         id: 5,
         text: "Оптово-розничная торговля и производство продуктов питания.",
      },
      {
         id: 6,
         text: "Учёт предоставления различных услуг и работы с клиентами (CRM).",
      },
   ]);
   const { ref, isVisible } = useViewBox(0.4);

   useLayoutEffect(() => {
      isVisible && animate([
         ["ul", { opacity: 1 }],
         ["li", { x: [-100, 0] }, {
            duration: 0.3, delay: stagger(0.2), stiffness: 150, bounce: 0.5,
         }],
      ]);
   }, [isVisible]);

   return (
      <motion.section
         id="activity"
         initial={{ opacity: 0 }}
         animate={isVisible && { opacity: 1 }}
         transition={{ type: "spring", duration: 2 }}
         className={cls.activity}
         ref={ref}
      >
         <div className={cls.activity__wrapper}>
            <div className={cls.activity__header}>
               <motion.div
                  initial={{ y: -1000 }}
                  animate={isVisible && { y: 0 }}
                  transition={{
                     type: "spring", duration: 0.5, stiffness: 150, bounce: 0.5,
                  }}
                  className={cls.activity__title}
               >
                  <Typography variant="h1" uppercase>
                     Направления
                     {" "}
                     <b> автоматизации: </b>
                  </Typography>
               </motion.div>
               <ul className={cls.activity__list}>
                  {activities.map((activity) => (
                     <li key={activity.id} className={cls.activity__item}>
                        <div className={cls.dot} />
                        <Typography variant="p">
                           {activity.text}
                        </Typography>
                     </li>
                  ))}
               </ul>
            </div>
            <div className={cls.activity__footer}>
               <motion.div
                  initial={{ y: 1000 }}
                  animate={isVisible && { y: 0 }}
                  transition={{
                     type: "spring", duration: 0.5, stiffness: 150, bounce: 0.5,
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
               <hr />
               <motion.div
                  initial={{ y: 1000 }}
                  animate={isVisible && { y: 0 }}
                  transition={{
                     type: "spring", duration: 0.5, stiffness: 150, bounce: 0.5,
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
         </div>
         <div className={cls.activity__background}>
            <AppImage src="/wave.webp" alt="bg" />
         </div>
      </motion.section>
   );
});

ActivityScreen.displayName = "ActivityScreen";
