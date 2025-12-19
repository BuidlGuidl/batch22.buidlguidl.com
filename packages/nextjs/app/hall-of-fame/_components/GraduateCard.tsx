"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
    <div className="">
      <Link href={`/builders/${graduateAddress}`} className="w-full">
        <figure className="bg-base-200 cursor-pointer">
          <Image src={metadata.image} alt={metadata.name} className="" />
        </figure>
      </Link>
      <div className="card-body items-center text-center pt-2.5">
        <Link href={`/builders/${graduateAddress}`} className="hover:underline cursor-pointer">
          <h2 className="card-title truncate text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary dark:text-white dark:bg-none">
            {metadata.name.replaceAll("Graduate", "")}
          </h2>
        </Link>
      </div>
    </div>
  );
};
