import Link from "next/link";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

export function BatchStatus() {
  const { data: checkedInCounter } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter",
  });

  const buildersCount = checkedInCounter ? Number(checkedInCounter) : null;

  return (
    <Link href="/builders" className="block w-full px-4">
      <section
        className="
        relative
        w-full
        max-w-2xl
        rounded-3xl
        bg-base-200
        border border-base-300
        px-6 py-8
        sm:px-10 sm:py-10

        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:shadow-[0_24px_60px_rgba(0,0,0,0.25)]
        active:scale-[0.99]
      "
      >
        {/* Header */}
        <header className="mb-8 text-center">
          <h2 className="text-xl font-semibold sm:text-2xl">Batch Status</h2>
          <p className="mt-1 text-sm opacity-60">Live overview of the current cohort</p>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-8">
          {/* Builders */}
          <div>
            <div className="text-sm opacity-60">Builders onboarded</div>
            <div className="mt-1 text-3xl font-mono font-semibold">{buildersCount ?? "…"}</div>
          </div>

          {/* Registry */}
          <div>
            <div className="text-sm opacity-60">Registry status</div>
            <div className="mt-1 text-lg font-semibold text-success">Active</div>
          </div>

          {/* Deployment */}
          <div>
            <div className="text-sm opacity-60">Deployment</div>
            <div className="mt-1 font-mono text-lg">Arbitrum</div>
          </div>

          {/* Phase */}
          <div>
            <div className="text-sm opacity-60">Current phase</div>
            <div className="mt-1 text-lg font-medium">Wrapping up</div>
          </div>
        </div>

        {/* CTA */}
        <footer className="mt-10 flex justify-center sm:justify-end">
          <span
            className="
              text-sm font-medium
              hover:opacity-80
              transition
            "
          >
            View builders →
          </span>
        </footer>
      </section>
    </Link>
  );
}
