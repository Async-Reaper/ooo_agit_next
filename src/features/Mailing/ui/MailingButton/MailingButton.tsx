import React from "react";
import { useModal } from "@shared/hooks";
import { Button, Typography } from "@shared/ui";

import { MailingModal } from "../MailingModal/MailingModal";

export const MailingButton = React.memo(() => {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <Button variant="outlined" onClick={open}>
        <Typography variant="span">
          Подписаться на рассылку
        </Typography>
      </Button>
      <MailingModal isOpen={isOpen} onClose={close} />
    </>
  );
});
