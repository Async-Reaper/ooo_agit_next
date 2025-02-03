import React from "react";
import { Typography } from "@shared/ui";
import { ConsultationButton } from "@features/Consultation";
import cls from "./StartScreen.module.scss";

export const StartScreen = React.memo(() => (
   <section id="start" className={cls.start_screen}>
      <div className={cls.start__wrapper}>
         <div className={cls.start__content}>
            <div className={cls.start__content__text}>
               <div
                  // initial={{x: -150, opacity: 0}}
                  // animate={{x: 0, opacity: 1}}
                  // transition={{type: "spring"}}
                  className={cls.start__content__title}
               >
                  <Typography variant="h1" uppercase color="black">
                     <b>Мы - эксперты</b>
                     {" "}
                     в области Автоматизации бизнеса
                  </Typography>
               </div>
               <div
                  // initial={{x: 150, opacity: 0}}
                  // animate={{x: 0, opacity: 1}}
                  // transition={{type: "spring", duration: 1}}
                  className={cls.start__content__desc}
               >
                  <Typography variant="p" color="black">
                     Наши эксперты готовы разработать стратегии, которые приведут к результатам в вашем
                     бизнесе уже сегодня.
                     Закажите бесплатную консультацию и начините достигать целей уже сегодня!
                  </Typography>
               </div>
            </div>
            <div
               // initial={{opacity: 0}}
               // animate={{opacity: 1}}
               // transition={{type: "spring", duration: 2}}
            >
               <ConsultationButton/>
            </div>
         </div>
      </div>
   </section>
));
