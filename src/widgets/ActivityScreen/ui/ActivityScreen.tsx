"use client";
import React, {useMemo} from "react";
import {Typography} from "@shared/ui";
import cls from "./ActivityScreen.module.scss";

export const ActivityScreen = React.memo(() => {
   const activities = [
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
   ];
   //
   // const { ref, isVisible } = useViewBox(0.4);


   return (
      <section
         id="activity"
         className={cls.activity}
      >
         <div
            // ref={ref}
            // initial={{ opacity: 0, x: -100 }}
            // animate={isVisible && { opacity: 1, x: 0 }}
            // transition={{ type: "spring", duration: 2 }}
            className={cls.activity__wrapper}
         >
            <div className={cls.activity__header}>
               <div
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
               </div>
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
               <div
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
               </div>
               <hr />
               <div
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
               </div>
            </div>
         </div>
      </section>
   );
});

ActivityScreen.displayName = "ActivityScreen";
