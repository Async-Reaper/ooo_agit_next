"use client";
import React from "react";
import { useModal } from "@shared/hooks";
import { Button, Typography } from "@shared/ui";

import { DeleteUserModal } from "../DeleteUserModal/DeleteUserModal";

interface DeleteUserButtonProps {
  userId: string;
}

export const DeleteUserButton = React.memo(({ userId }: DeleteUserButtonProps) => {
  const { isOpen, open, close } = useModal();
  return (
    <>
      <Button size="l" variant="outlined" fullWidth onClick={open}>
        <Typography variant="span" uppercase noWrap>
          Удалить сотрудника
        </Typography>
      </Button>
      <DeleteUserModal isOpen={isOpen} onClose={close} userId={userId} />
    </>
  );
});
