import React, { useLayoutEffect } from "react";
import { Icon, IconName } from "@shared/libs/icon/icon";
import { Button, Typography } from "@shared/ui";
import { animate, stagger } from "motion";

import cls from "./ServicesList.module.scss";

interface ServicesListProps {
  isVisible: boolean;
}

interface IService {
  id: number;
  iconName: IconName;
  serviceName: string;
  serviceInfo: string;
  link: string;
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

  const onHandleNavigate = (url: string) => {
    window.open(url);
  };
  
  return (
    <ul className={cls.services__list}>
      {services.map((service) => (
        <li className={cls.services__item} key={service.id}>
          <div className={cls.service__header}>
            <div className={cls.service__icon__wrapper}>
              <Icon name={service.iconName} color="white-primary" size={73} className={cls.service__icon}/>
            </div>
            <div className={cls.service__name}>
              <Typography variant="span" bold align="left">
                {service.serviceName}
              </Typography>
            </div>
          </div>
          <div className={cls.service__info}>
            <Typography variant="span" align="center">
              {service.serviceInfo}
            </Typography>
          </div>
          <div className={cls.service__link}>
            <Button
              size="l"
              variant="outlined"
              fullWidth
              onClick={() => onHandleNavigate(service.link)}
            >
              <Typography variant="span" uppercase noWrap>
                Подробнее
              </Typography>
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
});
