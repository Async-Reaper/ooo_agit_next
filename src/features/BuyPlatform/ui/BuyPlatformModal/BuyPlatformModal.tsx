import React from "react";
import { Typography } from "@shared/ui";
import { Modal } from "@shared/ui/Modal/Modal";

import cls from "./BuyPlatformModal.module.scss";

import { BuyPlatformFormLazy as BuyPlatformForm } from "../BuyPlatformForm/BuyPlatformForm.lazy";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BuyPlatformModal = React.memo(({ isOpen, onClose }: ConsultationModalProps) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    size="slider"
  >
    <div className={cls.consultation__wrapper}>
      <div className={cls.consultation__title}>
        <Typography variant="h2" bold uppercase noWrap>
          Хотите приобрести?
        </Typography>
      </div>
      <BuyPlatformForm close={onClose} />
    </div>
  </Modal>
));
