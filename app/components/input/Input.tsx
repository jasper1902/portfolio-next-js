"use client";
import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { Input as NextInput } from "@nextui-org/react";

type Props = {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  defaultValue?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  id,
  label,
  type,
  disabled,
  required,
  register,
  errors,
  defaultValue,
  onChange,
}: Props) => {
  return (
    <div className="w-full">
      <NextInput
        defaultValue={defaultValue}
        label={label}
        id={id}
        disabled={disabled}
        autoCapitalize="off"
        {...register(id, { required })}
        type={type}
        color={errors[id] && "danger"}
        errorMessage={errors[id] && `${errors[id]?.message}`}
        variant="bordered"
        onChange={onChange}
      />
    </div>
  );
};

export default Input;