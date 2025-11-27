"use client";

import { Address } from "viem";
import { CheckCircleIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

interface BatchStatusProps {
  address: Address;
}

export const BatchStatus = ({ address }: BatchStatusProps) => {
  const { data: isInAllowList } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "allowList",
    args: [address],
  });

  const { data: checkedInContract } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "yourContractAddress",
    args: [address],
  });

  const hasCheckedIn = checkedInContract && checkedInContract !== "0x0000000000000000000000000000000000000000";

  return (
    <div className="flex items-center gap-1 mr-2">
      {isInAllowList && (
        <div className="tooltip tooltip-bottom" data-tip="Batch Member">
          <UserGroupIcon className="h-5 w-5 text-primary" />
        </div>
      )}
      {hasCheckedIn && (
        <div className="tooltip tooltip-bottom" data-tip="Checked In">
          <CheckCircleIcon className="h-5 w-5 text-success" />
        </div>
      )}
    </div>
  );
};
