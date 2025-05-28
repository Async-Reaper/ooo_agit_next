import React from "react";
import { Modal } from "@shared/ui/Modal/Modal";

import cls from "./AddUserModal.module.scss";

import { AddUserFormLazy as AddUserForm } from "../AddUserForm/AddUserForm.lazy";

interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddUserModal = React.memo(({ isOpen, onClose }: AddUserModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="slider"
    >
      <div className={cls.add_task__wrapper}>
        <AddUserForm close={onClose} />
      </div>
    </Modal>
  );
});
