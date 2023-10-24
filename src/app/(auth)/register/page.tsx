import type { Metadata } from "next";
import Link from "next/link";

import { AuthForm } from "@/components/auth";

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
        <AuthForm />
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
