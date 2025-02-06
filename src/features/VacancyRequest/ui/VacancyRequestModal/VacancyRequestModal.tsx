import React from "react";
import { Modal } from "@shared/ui/Modal/Modal";

import { VacancyRequestForm } from "../VacancyRequestForm/VacancyRequestForm";

interface VacancyRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VacancyRequestModal = React.memo((props: VacancyRequestModalProps) => {
  const {
    isOpen,
    onClose,
  } = props;
    
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="slider"
    >
      <VacancyRequestForm close={onClose} />
    </Modal>
  );
});
