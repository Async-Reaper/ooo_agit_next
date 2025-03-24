import React from "react";
import { useModal } from "@shared/hooks";
import { Typography } from "@shared/ui";
import { AppImage } from "@shared/ui/AppImage";

import cls from "./NewsItem.module.scss";

import { INews } from "../../model/types/newsType";
import { NewsModal } from "../NewsModal/NewsModal";

interface NewsItemProps {
  newsItem: INews
}

export const NewsItem = React.memo(({ newsItem }: NewsItemProps) => {
  const { isOpen, open, close } = useModal();

  return (
    <li key={newsItem.path} className={cls.news__item__wrapper}>
      <div className={cls.news__item__img__wrapper}>
        <AppImage className={cls.news__item__img} src={newsItem.path} alt=""/>
      </div>
      <div className={cls.news__item__title} onClick={open}>
        <Typography variant="p" bold>
          {newsItem.title}
        </Typography>
      </div>
      <NewsModal title={newsItem.title} description={newsItem.description} isOpen={isOpen} onClose={close}/>
    </li>
  );
});
