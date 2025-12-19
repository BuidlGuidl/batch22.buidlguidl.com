"use client";

import { useEffect, useState } from "react";
import { GraduateCard } from "./_components/GraduateCard";
import { parseAbiItem } from "viem";
import { usePublicClient } from "wagmi";
import { TrophyIcon } from "@heroicons/react/24/outline";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

export default function HallOfFame() {
  const { data: nftAddress } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "batchGraduationNFT",
  });

  const publicClient = usePublicClient();
  const [transferEvents, setTransferEvents] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      if (!nftAddress || !publicClient) return;

      setIsLoading(true);
      try {
        const logs = await publicClient.getLogs({
          address: nftAddress,
          event: parseAbiItem("event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)"),
          args: { from: "0x0000000000000000000000000000000000000000" },
          fromBlock: 0n,
          toBlock: "latest",
        });
        setTransferEvents(logs);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, [nftAddress, publicClient]);

  // I use this to sort events by tokenId (descending) to show newest graduates first
  const sortedEvents = transferEvents?.slice().sort((a: any, b: any) => {
    const tokenIdA = a.args.tokenId || 0n;
    const tokenIdB = b.args.tokenId || 0n;
    return Number(tokenIdB - tokenIdA);
  });

  return (
    <div className="flex flex-col items-center py-12 bg-base-200 min-h-screen">
      <div className="text-center mb-12 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent dark:text-white dark:bg-none flex gap-4 items-center justify-center">
          <TrophyIcon className="h-12 w-12 text-primary dark:text-white" /> Hall of Fame{" "}
          <TrophyIcon className="h-12 w-12 text-primary dark:text-white" />
        </h1>
        <p className="text-xl md:text-2xl text-base-content/80 max-w-2xl mx-auto">
          Celebrating the distinguished graduates of Batch 22 who have successfully completed the program.
        </p>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 p-6 max-w-7xl w-full">
          {sortedEvents?.map((event: any) => (
            <GraduateCard
              key={event.args.tokenId?.toString()}
              tokenId={event.args.tokenId}
              graduateAddress={event.args.to}
            />
          ))}
        </div>
      )}

      {!isLoading && sortedEvents?.length === 0 && (
        <div className="text-center text-xl text-base-content/60 mt-10 p-10 bg-base-100 rounded-box shadow-lg">
          <p>No graduates found yet.</p>
          <p className="mt-2 text-sm">Be the first to mint your Graduation NFT!</p>
        </div>
      )}
    </div>
  );
}
