import React from "react";
import { Typography } from "@shared/ui";
import { Modal } from "@shared/ui/Modal/Modal";

import cls from "./LogoutModal.module.scss";

import { LogoutFormLazy } from "../LogoutForm/LogoutForm.lazy";


interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LogoutModal = React.memo(({ isOpen, onClose }: ConsultationModalProps) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    size="slider"
  >
    <div className={cls.logout__title}>
      <Typography variant="p" bold uppercase noWrap>
        Вы уверены, что хотите выйти?
      </Typography>
    </div>
    <div className={cls.logout__wrapper}>
      <LogoutFormLazy close={onClose}/>
    </div>
  </Modal>
));
