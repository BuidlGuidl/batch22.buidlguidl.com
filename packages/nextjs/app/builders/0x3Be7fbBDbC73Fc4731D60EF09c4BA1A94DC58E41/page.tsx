import { Address } from "@scaffold-ui/components";
import type { NextPage } from "next";

const CrypticdevPage: NextPage = () => {
  return (
    <div className="flex items-center flex-col flex-grow pt-10 bg-base-200 min-h-screen">
      <div className="px-5 w-full max-w-5xl">
        <h1 className="text-center text-base-content mb-2">
          <span className="block text-2xl mb-2">Welcome to</span>
          <span className="block text-4xl font-bold">
            <span className="bg-gradient-to-r from-accent via-info to-success bg-clip-text text-transparent">
              crypticdev&apos;s Page
            </span>
          </span>
        </h1>
        <p className="text-center text-base-content opacity-80 mb-8">Batch 22 Builder | Ethereum Enthusiast</p>

        <div className="flex justify-center items-start gap-8 flex-col lg:flex-row mt-8">
          {/* Main Card */}
          <div className="flex flex-col bg-base-100 shadow-2xl px-8 py-8 text-center items-center max-w-md rounded-3xl border border-base-300">
            <div className="mb-4">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl font-bold text-primary-content mb-4">
                CD
              </div>
            </div>
            <h2 className="text-3xl font-bold text-base-content mb-2">crypticdev</h2>
            <div className="mb-4">
              <Address address="0x3Be7fbBDbC73Fc4731D60EF09c4BA1A94DC58E41" />
            </div>
            <p className="mt-4 text-lg text-base-content leading-relaxed">
              Hello! I am a builder participating in Batch 22 of BuidlGuidl. Excited to learn and build cool things on
              Ethereum!
            </p>
            <div className="mt-6 w-full">
              <h3 className="text-xl font-semibold text-base-content mb-4">Connect with me</h3>
              <div className="flex gap-3 justify-center flex-wrap">
                <a
                  href="https://github.com/Gbangbolaoluwagbemiga"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-outline gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://x.com/GbangbolaPhilip"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-outline gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Twitter
                </a>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-base-300 w-full">
              <p className="text-sm text-base-content opacity-70 italic">
                Building the future of decentralized applications, one commit at a time.
              </p>
            </div>
          </div>

          {/* Additional Info Card */}
          <div className="flex flex-col bg-base-100 shadow-xl px-8 py-8 max-w-md rounded-3xl border border-base-300">
            <h3 className="text-2xl font-bold text-base-content mb-6 text-center">About Me</h3>
            <div className="space-y-4 text-left">
              <div>
                <h4 className="font-semibold text-base-content mb-2 flex items-center gap-2">
                  <span className="text-primary">🚀</span> What I&apos;m Learning
                </h4>
                <p className="text-base-content opacity-80 text-sm">
                  Smart contract development, dApp architecture, and contributing to open-source projects.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-base-content mb-2 flex items-center gap-2">
                  <span className="text-primary">💡</span> Interests
                </h4>
                <p className="text-base-content opacity-80 text-sm">
                  Web3, DeFi, blockchain technology, and building innovative solutions on Ethereum.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-base-content mb-2 flex items-center gap-2">
                  <span className="text-primary">🎯</span> Goals
                </h4>
                <p className="text-base-content opacity-80 text-sm">
                  Complete Batch 22, contribute meaningfully to the ecosystem, and continue growing as a blockchain
                  developer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrypticdevPage;
