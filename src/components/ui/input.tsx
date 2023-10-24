import type { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {};

export default function Input(props: Props) {
  return (
    <input
      {...props}
      className="h-9 rounded-md border border-slate-200 px-3 py-2 text-sm font-light text-slate-600 outline-none placeholder:text-slate-500 focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
    />
  );
}
