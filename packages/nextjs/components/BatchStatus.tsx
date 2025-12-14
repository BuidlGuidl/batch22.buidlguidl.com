import Link from "next/link";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

export function BatchStatus() {
  const {
    data: checkedInCounter,
    isLoading,
    isSuccess,
  } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter",
  });

  return (
    <Link href="/builders" className="group block mt-10 w-full max-w-xl">
      <div
        className="
          relative
          rounded-2xl
          bg-base-200/90
          border border-base-300
          px-8 py-6
          transition-all duration-300
          hover:bg-base-300
          hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]
          focus:outline-none
          focus:ring-2 focus:ring-primary
        "
      >
        {/* Header */}
        <div className="mb-5 text-sm font-semibold tracking-widest opacity-70">BATCH STATE</div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-y-3 text-sm">
          <span className="opacity-70">Builders onboarded</span>
          <span className="text-right font-mono">{isLoading ? "…" : (checkedInCounter?.toString() ?? "0")}</span>

          <span className="opacity-70">Registry status</span>
          <span className="text-right text-success font-medium">{isSuccess ? "Active" : "Syncing"}</span>

          <span className="opacity-70">Deployment</span>
          <span className="text-right font-mono">Arbitrum</span>

          <span className="opacity-70">Phase</span>
          <span className="text-right text-primary font-medium">Actively building</span>
        </div>

        {/* Footer CTA */}
        <div className="mt-5 flex justify-end text-sm text-primary opacity-80 group-hover:opacity-100">
          Explore batch →
        </div>
      </div>
    </Link>
  );
}
