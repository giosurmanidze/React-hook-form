import { FC } from "react";
import { UseFormRegister, RegisterOptions } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

interface TextInputProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  error: any;
  validation?: RegisterOptions;
}

const TextInput: FC<TextInputProps> = ({
  label,
  name,
  register,
  error,
  validation,
}) => (
  <div className="flex flex-col">
    <label>{label}</label>
    <input
      {...register(name, {
        ...validation,
      })}
      type="text"
      className="bg-black pl-2 pr-16 py-2 text-white"
      placeholder={`Enter ${label.toLowerCase()}...`}
    />
    <ErrorMessage errors={error} name={name} />
  </div>
);

export default TextInput;
