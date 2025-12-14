"use client";

import type { NextPage } from "next";
import { ActionCards } from "~~/components/ActionCards";
import { BatchStatus } from "~~/components/BatchStatus";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-4xl font-bold">Batch 22</span>
          </h1>
          <p className="text-center text-lg mt-2">A decentralized cohort learning and building Web3</p>
          <div className="flex justify-center">
            <BatchStatus />
          </div>
        </div>

        <ActionCards />
      </div>
    </>
  );
};

export default Home;
