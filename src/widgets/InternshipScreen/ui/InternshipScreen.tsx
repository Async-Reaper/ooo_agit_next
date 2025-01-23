import React from "react";
import cls from "./InternshipScreen.module.scss";
import {Typography} from "@shared/ui";
import Container from "@shared/ui/Container/Container";
import {InternshipRequestButton} from "@features/InternshipRequest";

export const InternshipScreen = React.memo(() => {
   return (
      <section id="internship" className={cls.internship__wrapper}>
         <Container>
            <div className={cls.internship__content}>
               <Typography variant="h1" uppercase>
                  Запишись на нашу программу стажировки!
               </Typography>
               <Typography variant="h2" color="primary" bold uppercase>
                  Запусти свою карьеру в IT: учись, твори, вдохновляй!
               </Typography>
               <ul className={cls.stage_internship__list}>
                  <li className={cls.stage_internship__item}>
                     <div className={cls.dot} />
                     <Typography variant="p">
                        Подай заявку
                     </Typography>
                  </li>
                  <li className={cls.stage_internship__item}>
                     <div className={cls.dot} />
                     <Typography variant="p">
                        Получи обратную связь
                     </Typography>
                  </li>
                  <li className={cls.stage_internship__item}>
                     <div className={cls.dot} />
                     <Typography variant="p">
                        Освой новую профессию
                     </Typography>
                  </li>
                  <li className={cls.stage_internship__item}>
                     <div className={cls.dot} />
                     <Typography variant="p">
                        Получи офицальное трудоустройство
                     </Typography>
                  </li>
                  <li className={cls.stage_internship__item}>
                     <div className={cls.dot} />
                     <Typography variant="p">
                        Зарабатывай
                     </Typography>
                  </li>
               </ul>
               <InternshipRequestButton />
            </div>
         </Container>
      </section>
   );
});
