import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center pt-24">
      <h1 className="mb-6 text-center text-7xl font-medium tracking-tight text-slate-950">
        Stay productive from start to finish
      </h1>
      <p className="mb-3 text-center text-xl text-slate-600">
        Aurora shifts your efficiency to the next gear. Deliver satisfaction
        across all boards.
      </p>
      <Link
        href="/register"
        className="flex h-10 items-center rounded-md bg-slate-950 px-4 text-sm font-medium text-white hover:bg-indigo-600"
      >
        Get started
      </Link>
    </main>
  );
}
