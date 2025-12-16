"use client";

import Link from "next/link";
import { Address } from "@scaffold-ui/components";
import { ProcessedBuilder } from "~~/utils/builders";

type BuildersListProps = {
  builders: ProcessedBuilder[];
};

const BuildersList = ({ builders }: BuildersListProps) => {
  return (
    <div className="w-full max-w-4xl px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {builders.map(builder => (
          <div
            key={`${builder.builder}`}
            className="bg-base-100 border border-base-300 rounded-lg p-4 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] flex flex-col gap-2"
          >
            <Address
              address={builder.builder as `0x${string}`}
              format="short"
              onlyEnsOrAddress={true}
              disableAddressLink
            />
            {builder.hasPage && builder.checksummedAddress && (
              <Link href={`/builders/${builder.checksummedAddress}`} className="btn btn-primary btn-sm mt-2">
                View Profile
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuildersList;
