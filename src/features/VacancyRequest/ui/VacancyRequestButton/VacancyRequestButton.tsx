"use client"
import React from "react";
import { useModal } from "@shared/hooks";
import { Button, Typography } from "@shared/ui";
import { VacancyRequestModal } from "../VacancyRequestModal/VacancyRequestModal";

export const VacancyRequestButton = React.memo(() => {
   const { open, isOpen, close } = useModal();

   return (
      <div>
         <Button onClick={open}>
            <Typography variant="span" bold uppercase>
               Откликнуться
            </Typography>
         </Button>
         <VacancyRequestModal isOpen={isOpen} onClose={close} />
      </div>
   );
});
