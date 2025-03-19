import React, { useCallback, useState } from "react";
import { classNames } from "@shared/libs/classNames/classNames";
import { Icon } from "@shared/libs/icon/icon";
import { Typography } from "@shared/ui";
import { AppLink } from "@shared/ui/AppLink";
import { usePathname } from "next/navigation";

import cls from "./SelectLinks.module.scss";

const Component = () => {
  const pathname = usePathname();
  const [isVisibleSelect, setIsVisibleSelect] = useState<boolean>(false);

  const onHandleVisibleSelect = useCallback(() => {
    setIsVisibleSelect(!isVisibleSelect);
  }, [isVisibleSelect, setIsVisibleSelect]);

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement,
  MouseEvent>, sectionId: string) => {
    setIsVisibleSelect(false);
    if (pathname === "/about") {
      event.preventDefault();

      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div
      className={classNames(cls.select__wrapper, { [cls.active]: isVisibleSelect })}
      onMouseOut={() => setIsVisibleSelect(false)}
    >
      <div
        className={cls.select__name}
        onClick={onHandleVisibleSelect}
        onMouseOver={() => setIsVisibleSelect(true)}
      >
        <Typography variant="span" noWrap>
          О нас
        </Typography>
        <Icon
          name="arrow_bottom"
          color="primary"
          className={classNames(cls.select__arrow, { [cls.active]: isVisibleSelect })}
        />
      </div>
      <div
        className={classNames(cls.select__items, { [cls.active]: isVisibleSelect })}
        onMouseOver={() => setIsVisibleSelect(true)}
        onMouseOut={() => setIsVisibleSelect(false)}
      >
        <AppLink
          href="/about#vacancies"
          onClick={(e) => scrollToSection(e, "vacancies")}
          variant="primary-green"
          isUnderline
        >
          <Typography variant="span">
            Вакансии
          </Typography>
        </AppLink>
        <AppLink
          href="/about#internship"
          onClick={(e) => scrollToSection(e, "vacancies")}
          variant="primary-green"
          isUnderline
        >
          <Typography variant="span">
            Стажировка
          </Typography>
        </AppLink>
        <AppLink
          href="/news"
          variant="primary-green"
          isUnderline
        >
          <Typography variant="span">
            Новости
          </Typography>
        </AppLink>
      </div>
    </div>
  );
};

export const SelectLinks = React.memo(Component);
