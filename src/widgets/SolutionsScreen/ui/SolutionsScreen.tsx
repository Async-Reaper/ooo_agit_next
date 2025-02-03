import React, {useMemo} from "react";
import {Typography} from "@shared/ui";
import cls from "./SolutionsScreen.module.scss";

export const SolutionsScreen = React.memo(() => {
   const solutions = [
      {
         id: 1,
         text: "Автоматизация бизнес-процессов компаний путем внедрения современных IT решений.",
      },
      {
         id: 2,
         text: "Разработка программного обеспечения под задачи заказчика, в том числе отраслевые.",
      },
   ];

   // const { ref, isVisible } = useViewBox(0.4);
   //
   // useLayoutEffect(() => {
   //    isVisible && animate([
   //       [`.${cls.solutions__list}`, { opacity: 1 }],
   //       [`.${cls.solution__item}`, { x: [-100, 0], opacity: [0, 1] }, {
   //          duration: 0.3, delay: stagger(0.2), stiffness: 150, bounce: 0.5,
   //       }],
   //    ]);
   // }, [isVisible]);

   return (
      <section id="solutions" className={cls.solutions}>
         <div
            // initial={{ opacity: 0, x: -100 }}
            // animate={isVisible && { opacity: 1, x: 0 }}
            // transition={{ type: "spring", duration: 1 }}
            className={cls.solutions__wrapper}
         >
            <div
               // id="solutions__title"
               // ref={ref}
               // initial={{ opacity: 0, x: 100 }}
               // animate={isVisible && { opacity: 1, x: 0 }}
               // transition={{ type: "spring", duration: 1 }}
               className={cls.solutions__title}
            >
               <Typography color="white-primary" variant="h1" uppercase>
                  Чем мы
                  {" "}
                  <b> Занимаемся? </b>
               </Typography>
            </div>
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
      </section>
   );
});

SolutionsScreen.displayName = "SolutionsScreen";
