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
         img: "https://static-agit.onrender.com/activity/mining.svg"
      },
      {
         id: 2,
         text: "Строительство и эксплуатация зданий и сооружений.",
         img: "https://static-agit.onrender.com/activity/building.svg"
      },
      {
         id: 3,
         text: "Производство электротехнического и инженерного оборудования.",
         img: "https://static-agit.onrender.com/activity/light.svg"
      },
      {
         id: 4,
         text: "Управление качеством и учёт деятельности химических лабораторий.",
         img: "https://static-agit.onrender.com/activity/lab.svg"
      },
      {
         id: 5,
         text: "Оптово-розничная торговля и производство продуктов питания.",
         img: "https://static-agit.onrender.com/activity/food-production.svg"
      },
      {
         id: 6,
         text: "Учёт предоставления различных услуг и работы с клиентами (CRM).",
         img: "https://static-agit.onrender.com/activity/crm.svg"
      },
   ]);
   const { ref, isVisible } = useViewBox(0.4);

   // useLayoutEffect(() => {
   //    isVisible && animate([
   //       [cls.activity__list, { opacity: 1 }],
   //       [cls.activity__item, { x: [-100, 0] }, {
   //          duration: 0.3, delay: stagger(0.2), stiffness: 150, bounce: 0.5,
   //       }],
   //    ]);
   // }, [isVisible]);

   return (
      <section
         id="activity"
         className={cls.activity}
      >
         <motion.div
            ref={ref}
            // initial={{ opacity: 0, x: -100 }}
            // animate={isVisible && { opacity: 1, x: 0 }}
            // transition={{ type: "spring", duration: 2 }}
            className={cls.activity__wrapper}
         >
            <div className={cls.activity__header}>
               <motion.div
                  // initial={{ y: -100 }}
                  // animate={isVisible && { y: 0 }}
                  // transition={{
                  //    type: "spring", duration: 0.5, stiffness: 150, bounce: 0.5, delay: 0.3
                  // }}
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
                        <img src={activity.img} alt=""/>
                        <Typography variant="p">
                           {activity.text}
                        </Typography>
                     </li>
                  ))}
               </ul>
            </div>
            <div className={cls.activity__footer}>
               <motion.div
                  // initial={{ opacity: 0, y: 100 }}
                  // animate={isVisible && { opacity: 1, y: 0 }}
                  // transition={{
                  //    type: "spring", duration: 0.5, delay: 0.3
                  // }}
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
                  // initial={{ y: 1000 }}
                  // animate={isVisible && { y: 0 }}
                  // transition={{
                  //    type: "spring", duration: 0.5, delay: 0.3
                  // }}
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
         </motion.div>
         {/*<div className={cls.activity__background}>*/}
         {/*   <AppImage src="/wave.webp" alt="bg" />*/}
         {/*</div>*/}
      </section>
   );
});

ActivityScreen.displayName = "ActivityScreen";
