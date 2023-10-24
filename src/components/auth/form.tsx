"use client";

import type { SubmitHandler } from "@/lib/types";
import { Input } from "@/components/ui";
import useForm from "@/hooks/use-form";

export default function AuthForm() {
  const { data, handleChange, handleSubmit } = useForm({
    email: "",
  });

  const handleSignIn: SubmitHandler<typeof data> = (data) => {
    console.log(data.email);
  };

  return (
    <form className="" onSubmit={handleSubmit(handleSignIn)}>
      <div className="mb-2 flex flex-col gap-1">
        <label htmlFor="email" className="sr-only text-sm text-slate-600">
          Email
        </label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          autoComplete="off"
          onChange={handleChange}
          disabled={false}
        />
      </div>
      <button
        type="submit"
        className="flex h-9 w-full items-center justify-center rounded-md bg-slate-950 px-4 text-center text-sm font-medium text-white outline-none transition-colors hover:bg-opacity-80 focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
      >
        Continue
      </button>
    </form>
  );
}
