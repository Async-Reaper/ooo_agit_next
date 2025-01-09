"use client";
import React, { useLayoutEffect, useState } from "react";
import { Typography } from "@shared/ui";
import { AppLink } from "@shared/ui/AppLink";
import { motion } from "motion/react";
import { animate, stagger } from "motion";
import { useViewBox } from "@shared/hooks";
import { AppImage } from "@shared/ui/AppImage";
import cls from "./ServicesScreen.module.scss";

export const ServicesScreen = React.memo(() => {
   const [services] = useState([
      {
         id: 1,
         serviceName: "Комплексная автоматизация бизнеса",
         serviceInfo: "Внедрение автоматизированных систем управления, которые охватывают все аспекты бизнеса, включая финансы, склад, продажи, производство и другие.",
         link: "https://vk.com/market/product/komplexnaya-avtomatizatsia-biznesa-183182511-10352233",
      },
      {
         id: 2,
         serviceName: "Разработка ПО",
         serviceInfo: "Индивидуальная разработка программных решений под специфические потребности бизнеса.",
         link: "https://vk.com/market/product/razrabotka-po-183182511-10352215",
      },
      {
         id: 3,
         serviceName: "Внедрение и сопровождение IT-систем",
         serviceInfo: "Полный цикл внедрения и последующей поддержки информационных систем, включая обновления и техническое обслуживание.",
         link: "https://vk.com/market/product/vnedrenie-i-soprovozhdenie-it-sistem-183182511-10352208",
      },
      {
         id: 4,
         serviceName: "Анализ и оптимизация бизнес-процессов",
         serviceInfo: "Проведение детального анализа существующих процессов с целью выявления узких мест и возможностей для улучшения.",
         link: "https://vk.com/market/product/analiz-i-optimizatsia-biznes-protsessov-183182511-10352203",
      },
   ]);

   const { ref, isVisible } = useViewBox(0.2);

   useLayoutEffect(() => {
      isVisible && animate([
         [`.${cls.services__list}`, { opacity: 1 }],
         [`.${cls.services__item}`, { y: [-100, 0] }, {
            duration: 0.3, delay: stagger(0.2), stiffness: 150, bounce: 0.5,
         }],
      ]);
   }, [isVisible]);

   return (
      <motion.section
         id="services"
         initial={{ opacity: 0 }}
         animate={isVisible && { opacity: 1 }}
         transition={{ type: "spring", duration: 0.5 }}
         ref={ref}
         className={cls.services}
      >
         <div className={cls.services__wrapper}>
            <div className={cls.services__content}>
               <div className={cls.services__title}>
                  <Typography color="secondary" variant="h1" uppercase>
                     <b>услуги</b>
                     {" "}
                     нашей компании
                  </Typography>
               </div>
               <div className={cls.services__list}>
                  {services.map((service) => (
                     <div className={cls.services__item} key={service.id}>
                        <div className={cls.review__content}>
                           <div className={cls.services__name}>
                              <Typography color="secondary" variant="p" bold>
                                 {service.serviceName}
                              </Typography>
                           </div>
                           <div className={cls.service__info}>
                              <Typography color="primary" variant="span">
                                 {service.serviceInfo}
                              </Typography>
                           </div>
                           <div className={cls.service__link__wrapper}>
                              <AppLink href={service.link}>
                                 Подробнее
                              </AppLink>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
            <div className={cls.services__img}>
               <AppImage src="/reviews__bg.webp" alt="Services background" />
            </div>
         </div>
      </motion.section>
   );
});

ServicesScreen.displayName = "ServicesScreen";
