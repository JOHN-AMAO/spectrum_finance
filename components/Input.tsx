import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  register: UseFormRegister<FieldValues>;
}

const Input: React.FC<InputProps> = ({ label, id, type, register }) => {
  return (
    <>
      <div className='relative'>
        <input
          type={type}
          id={id}
          {...register(id)}
          className='
          block
          rounded-md
          px-6
          pt-6
          pb-1
          w-full
          text-md
          text-white
          bg-gray-500
          appearance-none
          focus:outline-none
          focus:ring-0 
          peer'
          placeholder=' '
        />
        <label
          className='
        absolute
        text-md
        text-zinc-400
        duration-150
        transform
        -translate-y-3
        scale-75
        z-10
        top-4
        left-6
        origin-[0]
        peer-placeholder-shown:scale-100
        peer-placeholder-shown-translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-3
        '
          htmlFor='email'
        >
          {label}
        </label>
      </div>
    </>
  );
};

export default Input;
