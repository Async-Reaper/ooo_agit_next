"use client";
import React, { useLayoutEffect, useState } from "react";
import { useViewBox } from "@shared/hooks";
import { Typography } from "@shared/ui";
import { AppLink } from "@shared/ui/AppLink";
import { animate, stagger } from "motion";
import { motion } from "motion/react";

import cls from "./PlatformScreen.module.scss";

import { RunStrokePlatform } from "../RunStrokePlatform/RunStrokePlatform";

export const PlatformScreen = React.memo(() => {
  const [platformList] = useState([
    {
      id: 1,
      name: "1С:ERP Управление предприятием",
      price: "581 400 ₽",
      link: "https://vk.com/market/product/1serp-upravlenie-predpriatiem-183182511-10653397",
    },
    {
      id: 2,
      name: "1С:Зарплата и Управление Персоналом 8",
      price: "30 500 ₽",
      link: "https://vk.com/market/product/1serp-upravlenie-predpriatiem-183182511-10653397",
    },
    {
      id: 3,
      name: "1С:Управление торговлей ПРОФ 8",
      price: "30 500 ₽",
      link: "https://vk.com/market/product/1serp-upravlenie-predpriatiem-183182511-10653397",
    },
    {
      id: 4,
      name: "1С:Зарплата и управление персоналом 8 ПРОФ",
      price: "30 500 ₽",
      link: "https://vk.com/market/product/1serp-upravlenie-predpriatiem-183182511-10653397",
    },
    {
      id: 5,
      name: "1С:Бухгалтерия 8 ПРОФ",
      price: "17 600 ₽",
      link: "https://vk.com/market/product/1serp-upravlenie-predpriatiem-183182511-10653397",
    },
    {
      id: 6,
      name: "1С:Бухгалтерия 8 Базовая",
      price: "4 000 ₽",
      link: "https://vk.com/market/product/1serp-upravlenie-predpriatiem-183182511-10653397",
    },
    {
      id: 7,
      name: "1С:Зарплата и Управление Персоналом 8. Базовая версия",
      price: "9 100 ₽",
      link: "https://vk.com/market/product/1serp-upravlenie-predpriatiem-183182511-10653397",
    },
    {
      id: 8,
      name: "1С:Управление торговлей 8. Базовая версия",
      price: "8 200 ₽",
      link: "https://vk.com/market/product/1serp-upravlenie-predpriatiem-183182511-10653397",
    },
  ]);

  const { ref, isVisible } = useViewBox(0.2);

  useLayoutEffect(() => {
    isVisible && animate([
      [`.${cls.platform__content}`, { opacity: 1 }],
      [`.${cls.platform__content__desc}`, { opacity: [0, 1] }, {
        duration: 0.3, delay: stagger(0.2), stiffness: 150, bounce: 0.5,
      }],
    ]);
  }, [isVisible]);

  return (
    <section
      id="platform"
      className={cls.platform}
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={isVisible && { opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 2 }}
        ref={ref}
        className={cls.platform__wrapper}
      >
        <div className={cls.platform__header__wrapper}>
          <div className={cls.platform__header__content}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={isVisible && { opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 0.5, delay: 0.3 }}
              className={cls.platform__header__title}
            >
              <Typography variant="h1" uppercase>
                приобрести
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={isVisible && { opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 0.5, delay: 0.3 }}
              className={cls.platform__header__text}
            >
              <Typography variant="p">
                Наша компания распостраняет также продукты 1С
              </Typography>
            </motion.div>
          </div>
          <div className={cls.platform__run__stroke__wrapper}>
            <RunStrokePlatform/>
          </div>
        </div>
        <ul className={cls.platform__content}>
          {
            platformList.map((platform) => (
              <li key={platform.id} className={cls.platform__content__desc}>
                <Typography color="white-primary" variant="p">
                  {platform.name}
                </Typography>
                <Typography color="primary" variant="p">
                  {platform.price}
                </Typography>
                <AppLink href={platform.link} target="_blank" variant="secondary">
                  <Typography variant="p">
                    Подробнее
                  </Typography>
                </AppLink>
              </li>
            ))
          }
        </ul>
      </motion.div>
    </section>
  );
});

PlatformScreen.displayName = "PlatformScreen";
