import Link from "next/link";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

export function BatchStatus() {
  useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter",
  });

  return (
    <Link href="/builders" className="block w-full max-w-3xl">
      <section
        className="
        relative
        rounded-3xl
        bg-base-200
        border border-base-300
        px-12 py-10
        transition-shadow
        hover:shadow-[0_24px_60px_rgba(0,0,0,0.25)]
      "
      >
        {/* Title */}
        <header className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">Batch Status</h2>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-y-6 gap-x-12 text-base">
          <div>
            <div className="text-sm opacity-60">Builders onboarded</div>
            <div className="mt-1 text-2xl font-mono font-semibold">16</div>
          </div>

          <div>
            <div className="text-sm opacity-60">Registry status</div>
            <div className="mt-1 text-lg font-semibold text-success">Active</div>
          </div>

          <div>
            <div className="text-sm opacity-60">Deployment</div>
            <div className="mt-1 font-mono text-lg">Arbitrum</div>
          </div>

          <div>
            <div className="text-sm opacity-60">Current phase</div>
            <div className="mt-1 text-lg font-medium">Actively building</div>
          </div>
        </div>

        {/* Footer CTA */}
        <footer className="mt-10 flex justify-end">
          <div className="batch-cta mt-6 text-sm font-medium">View builders →</div>
        </footer>
      </section>
    </Link>
  );
}
