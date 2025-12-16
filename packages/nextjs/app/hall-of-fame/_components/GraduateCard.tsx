"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Address } from "@scaffold-ui/components";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

export const GraduateCard = ({ tokenId, graduateAddress }: { tokenId: bigint; graduateAddress: string }) => {
  const { data: tokenURI } = useScaffoldReadContract({
    contractName: "BatchGraduationNFT",
    functionName: "tokenURI",
    args: [tokenId],
  });

  const [metadata, setMetadata] = useState<{ name: string; image: string; description: string } | null>(null);

  useEffect(() => {
    if (tokenURI) {
      try {
        const base64Json = tokenURI.split(",")[1];
        const json = atob(base64Json);
        const result = JSON.parse(json);
        setMetadata(result);
      } catch (e) {
        console.error("Error parsing tokenURI", e);
      }
    }
  }, [tokenURI]);

  if (!metadata) {
    return (
      <div className="card w-full bg-base-100 shadow-xl animate-pulse">
        <div className="h-64 bg-base-300 rounded-t-xl"></div>
        <div className="card-body">
          <div className="h-6 bg-base-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-base-300 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="card w-full bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-base-300">
      <Link href={`/builders/${graduateAddress}`} className="w-full">
        <figure className="bg-base-200 cursor-pointer">
          <img src={metadata.image} alt={metadata.name} className="rounded-t-xl shadow-lg w-full object-cover h-64" />
        </figure>
      </Link>
      <div className="card-body items-center text-center pt-2.5">
        <Link href={`/builders/${graduateAddress}`} className="hover:underline cursor-pointer">
          <h2 className="card-title text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary dark:text-white dark:bg-none">
            {metadata.name}
          </h2>
        </Link>
        <p className="text-sm text-gray-500 italic mb-2 mt-0">{metadata.description}</p>
        <div className="w-full flex justify-center">
          <Address address={graduateAddress} />
        </div>
      </div>
    </div>
  );
};
