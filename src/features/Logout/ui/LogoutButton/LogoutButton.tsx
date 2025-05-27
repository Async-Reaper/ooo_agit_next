"use client";
import React from "react";
import { useModal } from "@shared/hooks";
import { Button, Typography } from "@shared/ui";

import { LogoutModal } from "../LogoutModal/LogoutModal";

export const LogoutButton = React.memo(() => {
  const { isOpen, open, close } = useModal();
  return (
    <>
      <Button size="l" onClick={open}>
        <Typography variant="span" uppercase noWrap>
          Выйти
        </Typography>
      </Button>
      <LogoutModal isOpen={isOpen} onClose={close} />
    </>
  );
});
