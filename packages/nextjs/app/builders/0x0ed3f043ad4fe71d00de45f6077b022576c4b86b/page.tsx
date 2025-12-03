import { Github, Twitter } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1d1d1d] text-gray-200 flex justify-center pt-5 pb-5">
      <div className="w-full max-w-md p-8 rounded-2xl bg-[#111111]/60 backdrop-blur-md shadow-xl border border-white/10 space-y-6 shadow-lg shadow-black/40">
        {/* Name & Address */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Nishant Kumar
          </h1>
          <p className="text-sm text-gray-400">
            <b>Address: </b>
          </p>
        </div>
        <div className="border-t border-white/5 my-4" />

        {/* Bio */}
        <p className="text-center text-gray-300 text-sm italic px-4">
          Smart contract enjoyer. I break chains and fix them again (like this one!).
        </p>
        <div className="border-t border-white/5 my-4" />

        {/* Social Links */}
        <div className="flex justify-center gap-6 pt-2">
          <a
            href="https://github.com/usetech-nick"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Github size={22} />
          </a>

          <a
            href="https://x.com/Nishant18335767"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Twitter size={22} />
          </a>
        </div>
        <div className="border-t border-white/5 my-4" />

        {/* Builder Stack */}
        <div className="pt-4">
          <h2 className="text-sm font-semibold text-gray-300 mb-3">Builder Stack</h2>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "Solidity",
              "Hardhat",
              "Foundry (learning)",
              "Next.js",
              "Viem",
              "TailwindCSS",
              "Arbitrum",
              "ZK curious",
            ].map(skill => (
              <span key={skill} className="px-3 py-1 rounded-full bg-[#1f1f1f] border border-white/10 text-gray-300">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="border-t border-white/5 my-4" />

        {/* On-chain CheckIn Contract */}
        <div className="pt-4 space-y-1">
          <h2 className="text-sm font-semibold text-gray-300">On-chain Check-In</h2>
          <p className="text-xs text-gray-400">
            Contract:{" "}
            <a
              href="https://arbiscan.io/address/0xD03686a3AA3e1c42d2190bdEeDd3Ae0EBa0Cf4AB"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              0xD036...Cf4AB
            </a>
          </p>
          <p className="text-xs text-gray-400">
            Tx:{" "}
            <a
              href="https://arbiscan.io/tx/0x63a9000386895bef8632c972b4baade01eb04daa0417f506530e265f103cd914"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              0x63a9...d914
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
