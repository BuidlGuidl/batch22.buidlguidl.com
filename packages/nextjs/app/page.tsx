"use client";

import type { NextPage } from "next";
import { ActionCards } from "~~/components/ActionCards";
import { BatchStatus } from "~~/components/BatchStatus";

const Home: NextPage = () => {
  return (
    <div className="batch22-home min-h-screen w-full flex flex-col items-center">
      <section className="hero relative flex flex-col items-center text-center px-5 pt-14 pb-10">
        <h1 className="text-5xl font-semibold tracking-tight">
          Batch <span className="opacity-90">22</span>
        </h1>

        <p className="mt-4 max-w-xl text-lg opacity-70">A decentralized cohort learning and building Web3</p>

        <div className="mt-6 h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="batch-state-wrapper">
          <BatchStatus />
        </div>
      </section>

      <section className="relative -mt-6 flex justify-center">
        <ActionCards />
      </section>
    </div>
  );
};

export default Home;
