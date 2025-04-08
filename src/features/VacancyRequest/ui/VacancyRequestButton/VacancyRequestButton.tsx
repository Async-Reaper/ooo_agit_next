"use client";
import React from "react";
import { useModal } from "@shared/hooks";
import { Button, Typography } from "@shared/ui";

import { VacancyRequestModal } from "../VacancyRequestModal/VacancyRequestModal";

export const VacancyRequestButton = React.memo(() => {
  const { open, isOpen, close } = useModal();

  return (
    <>
      <Button onClick={open} variant="outlined" size="xl" fullWidth>
        <Typography variant="span" bold uppercase>
          Откликнуться
        </Typography>
      </Button>
      <VacancyRequestModal isOpen={isOpen} onClose={close} />
    </>
  );
});
