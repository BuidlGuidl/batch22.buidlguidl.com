import { Address } from "@scaffold-ui/components";
import type { NextPage } from "next";

const CrypticdevPage: NextPage = () => {
  return (
    <div className="flex items-center flex-col flex-grow pt-10 bg-base-200 min-h-screen">
      <div className="px-5 w-full max-w-4xl">
        <h1 className="text-center text-base-content">
          <span className="block text-2xl mb-2">Welcome to</span>
          <span className="block text-4xl font-bold">crypticdev&apos;s Page</span>
          <span className="block text-lg mt-2 text-base-content opacity-80">
            Batch 22 Builder | Ethereum Enthusiast
          </span>
        </h1>
        <div className="flex justify-center items-start gap-12 flex-col sm:flex-row mt-8">
          <div className="flex flex-col bg-base-100 shadow-xl px-10 py-10 text-center items-center max-w-md rounded-3xl border border-base-300">
            <h2 className="text-3xl font-bold text-base-content mb-2">crypticdev</h2>
            <div className="mb-4">
              <Address address="0x3Be7fbBDbC73Fc4731D60EF09c4BA1A94DC58E41" />
            </div>
            <p className="mt-4 text-lg text-base-content">
              Hello! I am a builder participating in Batch 22 of BuidlGuidl. Excited to learn and build cool things on
              Ethereum!
            </p>
            <div className="mt-6 w-full">
              <h3 className="text-xl font-semibold text-base-content mb-4">Connect with me</h3>
              <div className="flex gap-4 justify-center flex-wrap">
                <a
                  href="https://github.com/Gbangbolaoluwagbemiga"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-outline"
                >
                  GitHub
                </a>
                <a
                  href="https://x.com/GbangbolaPhilip"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-outline"
                >
                  Twitter
                </a>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-base-300 w-full">
              <p className="text-sm text-base-content opacity-70">
                Building the future of decentralized applications, one commit at a time.
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-base-100 shadow-xl px-10 py-10 max-w-md rounded-3xl border border-base-300">
            <h2 className="text-3xl font-bold text-base-content mb-6 text-center">About Me</h2>
            <div className="space-y-6">
              <div>
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-2xl">🚀</span>
                  <h3 className="text-xl font-semibold text-base-content">What I&apos;m Learning</h3>
                </div>
                <p className="text-base-content opacity-80 ml-11">
                  Smart contract development, dApp architecture, and contributing to open-source projects.
                </p>
              </div>
              <div>
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-2xl">💡</span>
                  <h3 className="text-xl font-semibold text-base-content">Interests</h3>
                </div>
                <p className="text-base-content opacity-80 ml-11">
                  Web3, DeFi, blockchain technology, and building innovative solutions on Ethereum.
                </p>
              </div>
              <div>
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-2xl">🎯</span>
                  <h3 className="text-xl font-semibold text-base-content">Goals</h3>
                </div>
                <p className="text-base-content opacity-80 ml-11">
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
