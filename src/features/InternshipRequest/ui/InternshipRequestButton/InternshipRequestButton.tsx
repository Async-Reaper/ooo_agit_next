"use client";
import React from "react";
import { useModal } from "@shared/hooks";
import { Button, Typography } from "@shared/ui";

import cls from "./InternshipRequestButton.module.scss";

import { InternshipRequestModal } from "../InternshipRequestModal/InternshipRequestModal";

export const InternshipRequestButton = React.memo(() => {
  const { open, isOpen, close } = useModal();

  return (
    <>
      <div className={cls.internship__request__button}>
        <Button onClick={open} variant="outlined" size="l" fullWidth>
          <Typography variant="span" bold uppercase>
            Хочу на стажировку!
          </Typography>
        </Button>
      </div>
      <InternshipRequestModal isOpen={isOpen} onClose={close} />
    </>
  );
});
