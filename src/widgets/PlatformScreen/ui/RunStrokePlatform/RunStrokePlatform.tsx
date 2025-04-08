import React from "react";
import { Typography } from "@shared/ui";

import cls from "./RunStrokePlatform.module.scss";

export const RunStrokePlatform = React.memo(() => {

  return (
    <div className={cls.run_stroke__wrapper}>
      <ul className={cls.news__list}>
        {
          new Array(10).fill("Агит-плюс").map((text, index) =>
            <li key={index} className={cls.news__item}>
              <Typography variant="span" bold uppercase noWrap>
                {text}
              </Typography>
            </li>
          )
        }
      </ul>
      <ul className={cls.news__list} aria-hidden="true">
        {
          new Array(10).fill("Агит-плюс").map((text, index) =>
            <li key={index} className={cls.news__item}>
              <Typography variant="span" bold uppercase noWrap>
                {text}
              </Typography>
            </li>
          )
        }
      </ul>
    </div>
  );
});