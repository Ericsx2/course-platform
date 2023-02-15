import { InputHTMLAttributes } from "react";
import { FieldError, RegisterOptions, UseFormRegister } from "react-hook-form";
import { useIMask } from "react-imask";
import { Error, InputField, InputWrapper, Label } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  error: FieldError | undefined;
  options?: RegisterOptions;
}

export default function Input({
  label,
  name,
  register,
  error,
  options,
  ...rest
}: InputProps) {
  return (
    <InputWrapper>
      <Label htmlFor={name}>{label}</Label>
      <InputField {...register(name, options)} {...rest} />
      <Error>{error?.message}</Error>
    </InputWrapper>
  );
}
