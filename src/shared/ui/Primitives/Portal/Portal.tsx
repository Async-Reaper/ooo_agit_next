"use client"
import { type ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
   children: ReactNode;
   element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
   const { children, element } = props;
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      setMounted(true);
   }, []);

   if (!mounted) {
      return null; // Возвращаем null до тех пор, пока компонент не смонтирован
   }

   return createPortal(children, element || document.body);
};
