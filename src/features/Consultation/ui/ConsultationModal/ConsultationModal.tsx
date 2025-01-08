import React from "react";
import { Modal } from "@shared/ui/Modal/Modal";
import { Typography } from "@shared/ui";
import cls from "./ConsultationModal.module.scss";
import { ConsultationForm } from "../ConsultationForm/ConsultationForm";

interface ConsultationModalProps {
   isOpen: boolean;
   onClose: () => void;
}

export const ConsultationModal = React.memo(({ isOpen, onClose }: ConsultationModalProps) => (
   <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="slider"
   >
      <div className={cls.consultation__wrapper}>
         <div className={cls.consultation__title}>
            <Typography variant="h2" bold uppercase noWrap>
               Получите консультацию!
            </Typography>
         </div>
         <ConsultationForm close={onClose} />
      </div>
   </Modal>
));
