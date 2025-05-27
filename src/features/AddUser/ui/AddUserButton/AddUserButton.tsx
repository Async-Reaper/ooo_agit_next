"use client";
import React from "react";
import { useModal } from "@shared/hooks";
import { Button, Typography } from "@shared/ui";

import { AddUserModal } from "../AddUserModal/AddUserModal";

export const AddUserButton = React.memo(() => {
  const { isOpen, open, close } = useModal();
  return (
    <>
      <Button size="l" variant="outlined" fullWidth onClick={open}>
        <Typography variant="span" uppercase noWrap>
          Добавить сотрудника
        </Typography>
      </Button>
      <AddUserModal isOpen={isOpen} onClose={close} />
    </>
  );
});
