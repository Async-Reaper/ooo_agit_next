"use client";
import React, { useCallback, useEffect, useState } from "react";
import { db } from "@main/FirebaseProvider";
import { Typography } from "@shared/ui";
import { AppLink } from "@shared/ui/AppLink";
import { collection, getDocs, query } from "firebase/firestore";

import cls from "./RunStroke.module.scss";

import { INews } from "../../model/types/newsType";

export const RunStroke = React.memo(() => {
  const [news, setNews] = useState<INews[]>([]);

  const fetchNewsList = useCallback(async () => {
    const responseNews = query(collection(db, "news"));
    const querySnapshot = await getDocs(responseNews);

    const newItems = querySnapshot.docs.map((doc) => (
      { id: doc.id, ...doc.data() } as INews));
    setNews(newItems);
  }, []);

  useEffect(() => {
    fetchNewsList();
  }, [fetchNewsList]);

  return (
    <div className={cls.run_stroke__wrapper}>
      <ul className={cls.news__list}>
        {
          news.map(newItem =>
            <li className={cls.news__item} key={newItem.id}>
              <AppLink href="/about#news" variant="primary">
                <Typography variant="span" noWrap>
                  {newItem.title}
                </Typography>
              </AppLink>
            </li>
          )
        }
      </ul>
      <ul className={cls.news__list} aria-hidden="true">
        {
          news.map(newItem =>
            <li className={cls.news__item} key={newItem.id}>
              <AppLink href="/about#news" variant="primary">
                <Typography variant="span" noWrap>
                  {newItem.title}
                </Typography>
              </AppLink>
            </li>
          )
        }
      </ul>
    </div>
  );
});
