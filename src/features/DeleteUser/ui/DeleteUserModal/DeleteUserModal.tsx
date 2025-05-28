import React from "react";
import { Modal } from "@shared/ui/Modal/Modal";

import cls from "./DeleteUserModal.module.scss";

import { DeleteUserFormLazy as DeleteUserForm } from "../DeleteUserForm/DeleteUserForm.lazy";


interface DeleteUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  userId: string;
}

export const DeleteUserModal = React.memo(({ isOpen, onClose, userId }: DeleteUserModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="slider"
    >
      <div className={cls.add_task__wrapper}>
        <DeleteUserForm close={onClose} userId={userId} />
      </div>
    </Modal>
  );
});
