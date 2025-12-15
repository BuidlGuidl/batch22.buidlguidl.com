import { ActionCard } from "./ActionCard";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export function ActionCards() {
  return (
    <section className="relative mt-10 flex justify-center gap-24">
      <ActionCard
        href="/debug"
        icon={<BugAntIcon className="h-8 w-8" />}
        title="Debug Contracts"
        description="Interact with the batch smart contracts"
      />
      <div className="connector" />
      <ActionCard
        href="/blockexplorer"
        icon={<MagnifyingGlassIcon className="h-8 w-8" />}
        title="Block Explorer"
        description="Explore local transactions and blocks"
      />
    </section>
  );
}
