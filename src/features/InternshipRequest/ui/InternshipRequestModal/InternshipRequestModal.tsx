import React from "react";
import { Typography } from "@shared/ui";
import { Modal } from "@shared/ui/Modal/Modal";

import cls from "./InternshipRequestModal.module.scss";

import { InternshipRequestFormLazy as InternshipRequestForm } from "../InternshipRequestForm/InternshipRequestForm.lazy";

interface InternshipRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InternshipRequestModal = React.memo(
  ({ isOpen, onClose }: InternshipRequestModalProps) => {
    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="slider"
      >
        <div className={cls.internship__wrapper}>
          <div className={cls.internship__title}>
            <Typography variant="h2" bold uppercase noWrap>
              Запись на стажировку
            </Typography>
          </div>
          <InternshipRequestForm close={onClose} />
        </div>
      </Modal>
    );
  });