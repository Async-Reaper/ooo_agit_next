"use client";
import React, {
  type InputHTMLAttributes, type ReactNode, useCallback, useRef,
} from "react";

import cls from "./styles.module.scss";

import { classNames } from "../../libs/classNames/classNames";

type HTMLInputProps = Omit<
InputHTMLAttributes<HTMLInputElement>,
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
  onlyRu?: boolean;
} & HTMLInputProps;

export const Input = React.memo((props: Props) => {
  const {
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    label,
    autofocus,
    readonly,
    variant = "neutral",
    fullWidth = false,
    onlyRu = false,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);

  const onChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    if (onlyRu) {
      const filteredValue = e.target.value.replace(/[^А-Яа-яЁё\s]/g, "");
      onChange?.(filteredValue);
    }
  }, [onChange, onlyRu]);

  const mods = {
    [cls.full_width]: fullWidth,
  };

  const classes = [className, cls[`variant--${variant}`]];

  return (
    <div className={classNames(cls.input_wrapper, mods, classes)}>
      {label && <div className={cls.label}>{label}</div>}
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        className={cls.input}
        readOnly={readonly}
        {...otherProps}
      />
    </div>
  );
});
