import React from "react";
import { Modal } from "@shared/ui/Modal/Modal";

import cls from "./AddUserModal.module.scss";

import { AddUserFormLazy as AddUserForm } from "../AddTaskForm/AddUserForm.lazy";

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddUserModal = React.memo(({ isOpen, onClose }: AddTaskModalProps) => {
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
