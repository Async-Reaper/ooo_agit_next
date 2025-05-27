import React from "react";
import { Modal } from "@shared/ui/Modal/Modal";

import cls from "./UpdateTaskModal.module.scss";

import { UpdateTaskFormLazy } from "../UpdateTaskForm/UpdateTaskForm.lazy";


interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  taskId: string;
}

export const UpdateTaskModal = React.memo(({ isOpen, onClose, taskId }: ConsultationModalProps) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    size="slider"
  >
    <div className={cls.update_task__wrapper}>
      <UpdateTaskFormLazy taskId={taskId} close={onClose}/>
    </div>
  </Modal>
));
