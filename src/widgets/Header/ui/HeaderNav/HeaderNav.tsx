import React, { useCallback, useState } from "react";
import { classNames } from "@shared/libs/classNames/classNames";
import { Contacts, Typography } from "@shared/ui";
import { AppLink } from "@shared/ui/AppLink";
import { motion } from "motion/react";

import cls from "./HeaderNav.module.scss";

import { SelectLinks } from "../SelectLinks/SelectLinks";

interface HeaderNavProps {
  isMounted: boolean;
  isActiveScroll: boolean;
}

export const HeaderNav = React.memo(({ isActiveScroll, isMounted }: HeaderNavProps) => {
  const [isActiveBurger, setIsActiveBurger] = useState<boolean>(false);
  
  const onHandleClickBurger = useCallback(() => {
    setIsActiveBurger(!isActiveBurger);
  }, [isActiveBurger, setIsActiveBurger]);
  
  return (
    <>
      <div className={classNames(cls.header__nav, { [cls.active]: isActiveBurger })}>
        <div className={cls.header__links}>
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={isMounted && { y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 0.3 }}
            className={cls.header__link}
          >
            <AppLink
              href="/"
              variant="primary-green"
            >
              <Typography variant="span">
                Главная
              </Typography>
            </AppLink>
            <hr className={classNames(cls.header__vertical_line, { [cls.active]: isActiveScroll })}/>
          </motion.div>
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 0.3 }}
            className={cls.header__link}
          >
            <AppLink
              href="/products"
              variant="primary-green"
            >
              <Typography variant="span">
                Продукты и услуги
              </Typography>
            </AppLink>
            <hr className={classNames(cls.header__vertical_line, { [cls.active]: isActiveScroll })}/>
          </motion.div>
          <motion.div
            initial={{ y: -400, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 0.3 }}
            className={cls.header__link}
          >
            <AppLink
              href="/cases"
              variant="primary-green"
            >
              <Typography variant="span">
                Наши кейсы
              </Typography>
            </AppLink>
            <hr className={classNames(cls.header__vertical_line, { [cls.active]: isActiveScroll })}/>
          </motion.div>
          <motion.div
            initial={{ y: -500, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 0.3 }}
          >
            <SelectLinks/>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: -600, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 0.3 }}
          className={cls.header__button}
        >
          <Contacts/>
        </motion.div>
      </div>
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 0.3 }}
        className={cls.header__burger__wrapper}
        onClick={onHandleClickBurger}
      >
        <div className={classNames(cls.header__burger, { [cls.active]: isActiveBurger })}/>
      </motion.div>
    </>
  );
});
