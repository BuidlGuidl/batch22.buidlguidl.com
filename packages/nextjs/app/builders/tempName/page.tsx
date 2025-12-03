import { GithubIcon, TwitterIcon } from "./icons";
import { Address } from "@scaffold-ui/components";
import type { NextPage } from "next";

const NicksProfile: NextPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-200 flex justify-center pt-10 pb-10 transition-colors">
      <div className="font-sans w-full max-w-lg p-10 rounded-3xl bg-gray-50 dark:bg-[#111111]/60 backdrop-blur-xl border border-gray-200 dark:border-white/10 space-y-8 shadow-xl shadow-black/40">
        {/* Name & Address */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Nishant Kumar
          </h1>
          <div className="flex justify-center">
            <Address address="0x0eD3f043ad4Fe71D00dE45F6077b022576C4B86B" />
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-white/10" />

        {/* About Me */}
        <div>
          <h2 className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-3">Who am I?</h2>
          <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>⚡ Prefinal-year engineering student diving deep into Ethereum development.</p>
            <p>
              Leveling up through Cyfrin Updraft, Alchemy University, and Encode Club — learning advanced Solidity,
              testing, & security.
            </p>
            <p>Love building efficient smart contracts + improving Web3 UX by breaking chains & fixing them again 😄</p>
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-white/10" />

        {/* Social Links */}
        <div className="flex justify-center gap-8">
          <a href="https://github.com/usetech-nick" target="_blank" rel="noopener noreferrer" className="group">
            <GithubIcon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-500 transition" />
          </a>
          <a href="https://x.com/Nishant18335767" target="_blank" rel="noopener noreferrer" className="group">
            <TwitterIcon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-400 transition" />
          </a>
        </div>

        <div className="border-t border-gray-300 dark:border-white/10" />

        {/* Builder Stack */}
        <div>
          <h2 className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-3">Builder Stack</h2>
          <div className="flex flex-wrap gap-2 text-xs">
            {["Solidity", "Hardhat", "Foundry (learning)", "Next.js", "Viem", "TailwindCSS", "Arbitrum"].map(skill => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full bg-gray-200 dark:bg-[#1a1a1a] border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-white/10" />

        {/* On-chain Check-In */}
        <div className="space-y-1">
          <h2 className="text-base font-semibold text-gray-700 dark:text-gray-300">On-chain Check-In</h2>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Contract:{" "}
            <a
              href="https://arbiscan.io/address/0xD03686a3AA3e1c42d2190bdEeDd3Ae0EBa0Cf4AB"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-purple-400 transition"
            >
              0xD036...Cf4AB
            </a>
          </p>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Tx:{" "}
            <a
              href="https://arbiscan.io/tx/0x63a9000386895bef8632c972b4baade01eb04daa0417f506530e265f103cd914"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-purple-400 transition"
            >
              0x63a9...d914
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NicksProfile;
