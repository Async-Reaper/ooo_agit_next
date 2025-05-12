"use client";
import React, { useCallback, useEffect, useState } from "react";
import { db } from "@main/FirebaseProvider";
import { Button, Typography } from "@shared/ui";
import { collection, getDocs, query } from "firebase/firestore";

import cls from "./PlatformsList.module.scss";

import { IPlatforms } from "../../model/types/types";

export const PlatformsList = React.memo(() => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [platforms, setPlatforms] = useState<IPlatforms[]>([]);
  
  const fetchGetPlatforms = useCallback(async () => {
    setIsLoading(true);
    const responseVacancies = query(collection(db, "platforms"));
    const result = await getDocs(responseVacancies);
    const platformsData = result.docs.map((doc) => (
      { id: doc.id, ...doc.data() })) as IPlatforms[];
    setPlatforms(platformsData);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchGetPlatforms();
  }, [fetchGetPlatforms]);
  
  return (
    <div className={cls.platform__list__wrapper}>
      <ul className={cls.platforms__list}>
        {
          platforms.map((platform) => (
            <li key={platform.id} className={cls.platform__item}>
              <div className={cls.platform__content}>
                <Typography color="white-primary" variant="p">
                  {platform.platformName}
                </Typography>
                <Typography color="primary" variant="p">
                  {platform.platformPrice} ₽
                </Typography>
                <div className={cls.platform__link}>
                  <Button variant="outlined" size="s" fullWidth onClick={() => window.open(`/platform/${platform.id}`)}>
                    <Typography variant="span" uppercase>
                      Подробнее
                    </Typography>
                  </Button>
                </div>
                {/*<AppLink  href= target="_blank" isUnderline={false}>*/}
                {/*  <Typography variant="p">*/}
                {/*    Подробнее*/}
                {/*  </Typography>*/}
                {/*</AppLink>*/}
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
});
