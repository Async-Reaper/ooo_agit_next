"use client";
import React from "react";
import { useModal } from "@shared/hooks";
import { Button, Typography } from "@shared/ui";

import { UpdateTaskModal } from "../UpdateTaskModal/UpdateTaskModal";

interface UpdateTaskButtonProps {
  taskId: string
}

export const UpdateTaskButton = React.memo(({ taskId }: UpdateTaskButtonProps) => {
  const { isOpen, open, close } = useModal();
  return (
    <>
      <Button size="l" variant="text" fullWidth onClick={open}>
        <Typography variant="span" uppercase noWrap>
          Завершить
        </Typography>
      </Button>
      <UpdateTaskModal isOpen={isOpen} onClose={close} taskId={taskId} />
    </>
  );
});
