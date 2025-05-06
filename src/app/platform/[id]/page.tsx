import React, { FC } from "react";
import { IPlatforms, PlatformCard } from "@entities/Platform";
import { BuyPlatformButton } from "@features/BuyPlatform";
import { db } from "@main/FirebaseProvider";
import { Icon } from "@shared/libs/icon/icon";
import { Typography } from "@shared/ui";
import { AppLink } from "@shared/ui/AppLink";
import Container from "@shared/ui/Container/Container";
import { doc, getDoc } from "firebase/firestore";
import { Metadata } from "next";

import cls from "./page.module.scss";

interface Params {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;

  const responsePlatform = doc(db, "platforms", id);
  const result = await getDoc(responsePlatform);
  const platform = result.data() as IPlatforms;

  return {
    title: `${platform.platformName}`,
    description: platform.platformDescription[0].toString(),
    openGraph: {
      title: `${platform.platformName}`,
      description: platform.platformDescription[0].toString(),
      url: `https://ooo-agit-next.vercel.app/platforms/${id}`,
      images: platform.img
    },
  };
}

const DynamicPage: FC<{ params: Params["params"] }> = async ({ params }) => {
  const { id } = await params;
  let isLoading = true;
  const responsePlatform = doc(db, "platforms", id);
  const result = await getDoc(responsePlatform);
  const platform = result.data() as IPlatforms;
  isLoading = false;

  return (
    <div className={cls.platform__wrapper}>
      <Container className={cls.platform}>
        <div className={cls.link__back__wrapper}>
          <AppLink href="/products#platform" variant="primary-green" className={cls.link__back}>
            <Icon name="arrow_left" color="white-primary"/>
            <Typography variant="p">
              Назад
            </Typography>
          </AppLink>
        </div>
        <PlatformCard platform={platform}/>
        <div className={cls.buy__button__wrapper}>
          <BuyPlatformButton/>
        </div>
      </Container>
    </div>
  );
};
export default DynamicPage;
