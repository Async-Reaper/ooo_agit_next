"use client";
import React, { useState } from "react";
import { Typography } from "@shared/ui";
import { motion } from "motion/react";

import { useViewBox } from "@shared/hooks";
import cls from "./SolutionsScreen.module.scss";

export const SolutionsScreen = React.memo(() => {
   const [solutions] = useState([
      {
         id: 1,
         text: "Автоматизация бизнес-процессов компаний путем внедрения современных IT решений.",
      },
      {
         id: 2,
         text: "Разработка программного обеспечения под задачи заказчика, в том числе отраслевые.",
      },
   ]);

   const { ref, isVisible } = useViewBox();
   return (
      <motion.section
         initial={{ opacity: 0 }}
         animate={isVisible && { opacity: 1 }}
         transition={{ type: "spring", duration: 0.5 }}
         id="solutions"
         className={cls.solutions}
      >
         <div className={cls.solutions__wrapper}>
            <motion.div
               initial={{ opacity: 0, x: -100 }}
               animate={isVisible && { opacity: 1, x: 0 }}
               transition={{ type: "spring", duration: 0.5 }}
               id="solutions__title"
               className={cls.solutions__title}
               ref={ref}
            >
               <Typography color="white-primary" variant="h1" uppercase>
                  Чем мы
                  {" "}
                  <b> Занимаемся? </b>
               </Typography>
            </motion.div>
            <ul className={cls.solutions__list}>
               {
                  solutions.map((solution) => (
                     <li
                        key={solution.id}
                        className={cls.solution__item}
                     >
                        <div className={cls.dot} />
                        <Typography variant="p">
                           {solution.text}
                        </Typography>
                     </li>
                  ))
               }
            </ul>
         </div>
      </motion.section>
   );
});

SolutionsScreen.displayName = "SolutionsScreen";
