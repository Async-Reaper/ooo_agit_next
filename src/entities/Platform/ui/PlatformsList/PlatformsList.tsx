"use client";
import React, { useCallback, useEffect, useState } from "react";
import { IPlatforms } from "@entities/Platform/model/types/types";
import { db } from "@main/FirebaseProvider";
import { collection, getDocs, query } from "firebase/firestore";

import cls from "./PlatformsList.module.scss";

import { PlatformCard } from "../PlatformCard/PlatformCard";

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
      {
        platforms.map((platform) => (
          <PlatformCard key={platform.id} platform={platform} />
        ))
      }
    </div>
  );
});