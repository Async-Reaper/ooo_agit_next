"use client";
import React from "react";
import { Button, Typography } from "@shared/ui";
import Container from "@shared/ui/Container/Container";
import { useParams, useRouter } from "next/navigation";

import cls from "./PlatformCard.module.scss";

import { IPlatforms } from "../../model/types/types";
import { PlatformCardAdditional } from "../PlatformCardAdditional/PlatformCardAdditional";

interface PlatformCardProps {
  platform: IPlatforms;
}

export const PlatformCard = React.memo(({ platform }: PlatformCardProps) => {
  const router = useRouter();
  const params = useParams<{id: string}>();
  
  return (
    <div className={cls.platform__card__wrapper}>
      <Container>
        <div className={cls.platform__card}>
          <div className={cls.platform__header}>
            <div className={cls.platform__start__info}>
              <div className={cls.start__info__img}>
                <img src={platform.img}  alt="" />
              </div>
              <div className={cls.start__info__name}>
                <Typography variant="p" align="center" bold>&laquo;{platform.imgDescription}&raquo;</Typography>
              </div>
            </div>
            <div className={cls.platform__main__info}>
              <div className={cls.platform__name}>
                <Typography variant="body">{platform.platformName}</Typography>
                <Typography variant="body" color="primary">{platform.platformPrice} ₽</Typography>
              </div>
              <div className={cls.platform__description}>
                {platform.platformDescription.map((description, index) => (
                  <Typography key={index} variant="p" bold>{description}</Typography>
                ))}
              </div>
              {
                !params?.id &&
                <div className={cls.additional__button__wrapper}>
                  <Button
                    size="xl"
                    variant="outlined"
                    fullWidth
                    onClick={() => router.push(`/platform/${platform.id}`)}
                  >
                    <Typography variant="p" uppercase noWrap>
                      Подробнее
                    </Typography>
                  </Button>
                </div>
              }
            </div>
          </div>
          {
            params?.id && <PlatformCardAdditional
              benefitsDescription={platform.benefitsDescription}
              benefitsList={platform.benefitsList ?? []}
              additionalInfo={platform.additionalInfo ?? ""}
            />
          }
        </div>
      </Container>
    </div>
  );
});
