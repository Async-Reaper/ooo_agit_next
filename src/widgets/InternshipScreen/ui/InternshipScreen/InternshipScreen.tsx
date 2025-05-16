"use client";
import React, { useEffect, useRef, useState } from "react";
import { InternshipRequestButton } from "@features/InternshipRequest";
import { Icon } from "@shared/libs/icon/icon";
import { Typography } from "@shared/ui";
import Container from "@shared/ui/Container/Container";

import cls from "./InternshipScreen.module.scss";


interface StageInternship {
  id: number,
  stageName: string,
  image: string,
}

export const InternshipScreen = React.memo(() => {
  const [currentImageNumber, setCurrentImageNumber] = useState(0);
  const [isFocus, setIsFocus] = useState(false);
  const timerRef = useRef<number | null>(null);

  const stageInternship: StageInternship[] = [
    {
      id: 1,
      stageName: "Подай заявку",
      image: "/internship/internship-background-1.png"
    },
    {
      id: 2,
      stageName: "Получи обратную связь",
      image: "/internship/internship-background-2.png"
    },
    {
      id: 3,
      stageName: "Освой новую профессию",
      image: "/internship/internship-background-3.png"
    },
    {
      id: 4,
      stageName: "Получи офицальное трудоустройство",
      image: "/internship/internship-background-4.png"
    },
    {
      id: 5,
      stageName: "Зарабатывай, развивайся и достигай большего",
      image: "/internship/internship-background-5.png"
    },
  ];

  const prevImage = useRef<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isFocus) {
        prevImage.current = stageInternship[currentImageNumber].image;
        setCurrentImageNumber((prev) => (prev > 3
          ? 0
          : prev + 1));
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [currentImageNumber, isFocus]);

  const onFocusChangeImageNumber = (index: number) => {
    setIsFocus(true);
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setCurrentImageNumber(index);
  };

  const onBlurChangeImageNumber = () => {
    setIsFocus(false);
  };

  return (
    <section id="internship" className={cls.internship__wrapper}>
      <Container className={cls.internship__content}>
        <div className={cls.internship__title}>
          <Typography variant="h2" color="white-primary" uppercase>
            Запишись на нашу программу стажировки!
          </Typography>
          <Typography variant="body" color="primary" uppercase>
            Запусти свою карьеру в IT: учись, твори, вдохновляй!
          </Typography>
        </div>
        <div className={cls.internship}>
          <div className={cls.internship__content}>
            <ul className={cls.stage_internship__list}>
              {
                stageInternship.map((internship, index) => (
                  <li
                    key={internship.id}
                    className={cls.stage_internship__item}
                    onMouseEnter={() => onFocusChangeImageNumber(index)}
                    onMouseLeave={onBlurChangeImageNumber}
                  >
                    <div className={cls.stage__icon}>
                      <Icon name="rhomb" size={22} color="white-primary"/>
                    </div>
                    <div className={cls.stage__name}>
                      <Typography variant="p" align="center" noWrap>
                        {internship.stageName}
                      </Typography>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className={cls.internship__background}>
            <img
              key={currentImageNumber}
              src={stageInternship[currentImageNumber].image}
              alt=""
              className={cls.internship__img}
            />
            {prevImage.current && (
              <img
                src={prevImage.current
                  ? prevImage.current
                  : ""}
                alt="internship"
                className={`${cls.internship__img} ${cls.prev}`}
              />
            )}
          </div>
        </div>
        <div className={cls.internship__button__wrapper}>
          <InternshipRequestButton/>
        </div>
      </Container>
    </section>
  );
});
