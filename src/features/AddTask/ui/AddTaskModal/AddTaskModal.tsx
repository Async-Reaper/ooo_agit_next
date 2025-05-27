import React from "react";
import { Modal } from "@shared/ui/Modal/Modal";

import cls from "./AddTaskModal.module.scss";

import { AddTaskFormLazy as AddTaskForm } from "../AddTaskForm/AddTaskForm.lazy";

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddTaskModal = React.memo(({ isOpen, onClose }: AddTaskModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="slider"
    >
      <div className={cls.add_task__wrapper}>
        <AddTaskForm close={onClose} />
      </div>
    </Modal>
  );
});
