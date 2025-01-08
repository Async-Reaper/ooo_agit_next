"use client"
import React, {
   type TextareaHTMLAttributes, type ReactNode, useCallback, useRef,
} from "react";
import { classNames } from "@shared/libs/classNames/classNames";
import cls from "./TextArea.module.scss";

type HTMLTextAreaProps = Omit<
TextareaHTMLAttributes<HTMLTextAreaElement>,
"value" | "onChange" | "readOnly"
>;

type Props = {
   className?: string;
   value?: string | number;
   label?: ReactNode;
   onChange?: (value: string | any) => void;
   autofocus?: boolean;
   readonly?: boolean;
   variant?: DesignSystemUiColors;
   fullWidth?: boolean;
} & HTMLTextAreaProps;

const Component = (props: Props) => {
   const {
      className,
      value,
      onChange,
      placeholder,
      label,
      autofocus,
      readonly,
      variant = "neutral",
      fullWidth = false,
      ...otherProps
   } = props;

   const ref = useRef<HTMLTextAreaElement>(null);

   const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(e.target.value);
   }, [onChange]);

   const mods = {
      [cls.full_width]: fullWidth,
   };

   const classes = [className, cls[`variant--${variant}`]];

   return (
      <div className={cls.textarea_wrapper}>
         <textarea
            className={classNames(cls.textarea, mods, classes)}
            ref={ref}
            value={value}
            onChange={onChangeHandler}
            placeholder={placeholder}
            readOnly={readonly}
            {...otherProps}
         >
            asdf
         </textarea>
      </div>
   );
};

export const TextArea = React.memo(Component);
