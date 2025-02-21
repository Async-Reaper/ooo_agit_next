import React, { useLayoutEffect } from "react";
import { Icon, IconName } from "@shared/libs/icon/icon";
import { Typography } from "@shared/ui";
import { AppLink } from "@shared/ui/AppLink";
import { animate, stagger } from "motion";

import cls from "./ServicesList.module.scss";

interface IService {
  id: number;
  iconName: IconName;
  serviceName: string;
  serviceInfo: string;
  link: string;
}

interface ServicesListProps {
  isVisible: boolean;
}

export const ServicesList = React.memo(({ isVisible }: ServicesListProps) => {
  const services: IService[] = [
    {
      id: 1,
      iconName: "gears",
      serviceName: "Комплексная автоматизация бизнеса",
      serviceInfo: "Внедрение автоматизированных систем управления, которые охватывают все аспекты бизнеса, включая финансы, склад, продажи, производство и другие.",
      link: "https://vk.com/market/product/komplexnaya-avtomatizatsia-biznesa-183182511-10352233",
    },
    {
      id: 2,
      iconName: "gear_web",
      serviceName: "Разработка ПО",
      serviceInfo: "Индивидуальная разработка программных решений под специфические потребности бизнеса.",
      link: "https://vk.com/market/product/razrabotka-po-183182511-10352215",
    },
    {
      id: 3,
      iconName: "gear_laptop",
      serviceName: "Внедрение и сопровождение IT-систем",
      serviceInfo: "Полный цикл внедрения и последующей поддержки информационных систем, включая обновления и техническое обслуживание.",
      link: "https://vk.com/market/product/vnedrenie-i-soprovozhdenie-it-sistem-183182511-10352208",
    },
    {
      id: 4,
      iconName: "gear_processes",
      serviceName: "Анализ и оптимизация бизнес-процессов",
      serviceInfo: "Проведение детального анализа существующих процессов с целью выявления узких мест и возможностей для улучшения.",
      link: "https://vk.com/market/product/analiz-i-optimizatsia-biznes-protsessov-183182511-10352203",
    },
  ];
  
  useLayoutEffect(() => {
    isVisible && animate([
      [`.${cls.services__list}`, { opacity: 1 }],
      [`.${cls.services__item}`, { y: [-100, 0], opacity: [0, 1] }, {
        duration: 0.3, delay: stagger(0.2), stiffness: 150, bounce: 0.5,
      }],
    ]);
  }, [isVisible]);
  
  return (
    <ul className={cls.services__list}>
      {services.map((service) => (
        <li className={cls.services__item} key={service.id}>
          <div className={cls.service__icon__wrapper}>
            <Icon name={service.iconName} size={100} color="primary" className={cls.service__icon}/>
          </div>
          <div className={cls.services__name}>
            <Typography variant="p" color="primary" align="center">
              {service.serviceName}
            </Typography>
          </div>
          <div className={cls.service__info}>
            <Typography variant="p" align="center">
              {service.serviceInfo}
            </Typography>
          </div>
          <AppLink href={service.link} variant="secondary" isUnderline={false} className={cls.service__link}>
            <Icon name="arrow_bottom" size={23} color="primary" className={cls.icon__link}/>
            <Typography variant="p">
              Подробнее
            </Typography>
          </AppLink>
        </li>
      ))}
    </ul>
  );
});
