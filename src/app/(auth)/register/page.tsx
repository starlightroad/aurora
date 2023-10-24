import { Input } from "@/components/ui";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Register - Aurora",
  description: "Register for an Aurora account.",
};

export default function Register() {
  return (
    <div className="flex justify-center pt-24">
      <div className="w-96 rounded-md bg-white px-5 py-6 shadow-md ring-1 ring-slate-200">
        <h1 className="text-center text-2xl font-semibold text-slate-800">
          Create an account
        </h1>
        <p className="mb-5 mt-1 text-center text-sm font-light text-slate-500">
          Enter your email to continue
        </p>
        <form className="">
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
            />
          </div>
          <button
            type="submit"
            className="flex h-9 w-full items-center justify-center rounded-md bg-slate-950 px-4 text-center text-sm font-medium text-white outline-none transition-colors hover:bg-opacity-80 focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          >
            Continue
          </button>
        </form>
        <span className="mt-5 block text-sm font-light text-slate-500">
          Have an account?&nbsp;
          <Link href="/signin" className="underline underline-offset-4">
            Sign in
          </Link>
        </span>
      </div>
    </div>
  );
}
