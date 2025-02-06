"use client";
import React from "react";
import { useModal } from "@shared/hooks";
import { Button, Typography } from "@shared/ui";

import { ConsultationModal } from "../ConsultationModal/ConsultationModal";

export const ConsultationButton = React.memo(() => {
  const { isOpen, open, close } = useModal();
  return (
    <>
      <Button size="xl" maxWidth onClick={open}>
        <Typography variant="span" uppercase>
          Получить консультацию
        </Typography>
      </Button>
      <ConsultationModal isOpen={isOpen} onClose={close} />
    </>
  );
});