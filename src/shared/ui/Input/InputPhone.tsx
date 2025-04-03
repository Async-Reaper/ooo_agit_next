"use client";
import React, { useCallback, useRef } from "react";
import InputMask from "react-input-mask";
import { classNames } from "@shared/libs/classNames/classNames";

import cls from "./styles.module.scss";

interface InputPhoneProps {
  className?: string;
  value?: string;
  onChange?: (value: string | any) => void;
  variant?: DesignSystemUiColors;
  fullWidth?: boolean;
  placeholder?: string
}

const Component = (props: InputPhoneProps) => {
  const {
    className,
    value,
    onChange,
    variant,
    fullWidth = false,
    placeholder = "Номер телефона",
  } = props;

  const mods = {
    [cls.full_width]: fullWidth,
  };

  const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  }, [onChange]);

  const classes = [className, cls[`variant--${variant}`]];

  return (
    <div className={classNames(cls.input_wrapper, mods, classes)}>
      <InputMask
        mask="+7 (999) 999-99-99"
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
        className={cls.input}
      />
    </div>
  );
};

export const InputPhone = React.memo(Component);
