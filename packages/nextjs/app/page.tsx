"use client";

import type { NextPage } from "next";
import { ActionCards } from "~~/components/ActionCards";
import { BatchStatus } from "~~/components/BatchStatus";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-base-200">
      {/* Hero */}
      <section className="relative flex flex-col items-center text-center px-5 pt-20 pb-16">
        {/* Gradient glow */}
        <div
          className="
            pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px]
            bg-[radial-gradient(900px_400px_at_50%_0%,rgba(147,187,251,0.15),transparent_70%)]
            dark:bg-[radial-gradient(900px_400px_at_50%_0%,rgba(109,124,255,0.18),transparent_70%)]
          "
        />

        <h1 className="text-4xl font-bold tracking-tight">
          Batch <span className="opacity-90">22</span>
        </h1>

        <p className="mt-4 max-w-xl text-lg text-base-content/70">A decentralized cohort learning and building Web3</p>

        <div className="mt-6 h-px w-32 bg-gradient-to-r from-transparent via-base-content/20 to-transparent" />

        {/* Batch status */}
        <div className="mt-10">
          <BatchStatus />
        </div>
      </section>

      {/* Actions */}
      <section className="relative -mt-8 flex justify-center pb-20">
        <ActionCards />
      </section>
    </div>
  );
};

export default Home;
