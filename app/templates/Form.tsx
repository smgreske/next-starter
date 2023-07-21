"use client";

import { useForm } from "react-hook-form";
import { InputText, InputEmail } from "components/InputComponents";

export default function Form() {
  const { register, handleSubmit, formState } = useForm();

  const onSubmit = (data: {}) => {
    console.log(data);
  };

  return (
    <form
      className="text-[--neutral-3] bg-[--neutral-3] mx-auto my-20 p-4 max-w-md "
      onSubmit={handleSubmit(onSubmit)}
    >
      XXXXX
      <button
        className="text-[--neutral-3]  bg-[--neutral-2]  hover:text-[--neutral-1]px-3 py-1 "
        type="submit"
      >
        XXXXX
      </button>
    </form>
  );
}
