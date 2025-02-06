import React from "react";
import { Typography } from "@shared/ui";
import { Modal } from "@shared/ui/Modal/Modal";

import cls from "./MailingModal.module.scss";

import { MailingForm } from "../MailingForm/MailingForm";

interface MailingModalProps {
  isOpen: boolean;
  onClose: () => void
}

export const MailingModal = React.memo(({ isOpen, onClose }: MailingModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="slider"
    >
      <div className={cls.mailing_modal__wrapper}>
        <Typography variant="h3" color="white-primary">
          Введите Ваш email, на который будут приходить сообщения
        </Typography>
        <MailingForm close={onClose} />
      </div>
    </Modal>
  );
});
