"use client";
import React from "react";
import { useModal } from "@shared/hooks";
import { Button, Typography } from "@shared/ui";

import { BuyPlatformModal } from "../BuyPlatformModal/BuyPlatformModal";

export const BuyPlatformButton = React.memo(() => {
  const { isOpen, open, close } = useModal();
  return (
    <>
      <Button size="xl" variant="outlined" fullWidth onClick={open}>
        <Typography variant="span" uppercase noWrap>
          Купить платформу
        </Typography>
      </Button>
      <BuyPlatformModal isOpen={isOpen} onClose={close} />
    </>
  );
});
