"use client";
import React from "react";
import { useModal } from "@shared/hooks";
import { Button, Typography } from "@shared/ui";

import { AddTaskModal } from "../AddTaskModal/AddTaskModal";

export const AddTaskButton = React.memo(() => {
  const { isOpen, open, close } = useModal();
  return (
    <>
      <Button size="l" variant="outlined" fullWidth onClick={open}>
        <Typography variant="span" uppercase noWrap>
          Добавить задачу
        </Typography>
      </Button>
      <AddTaskModal isOpen={isOpen} onClose={close} />
    </>
  );
});
