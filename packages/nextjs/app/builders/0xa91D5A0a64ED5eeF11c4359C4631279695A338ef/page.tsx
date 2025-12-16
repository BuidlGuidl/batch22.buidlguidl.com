import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icons";
import { Address, Balance } from "@scaffold-ui/components";
import { type NextPage } from "next";
import { Address as AddressType } from "viem";
import { BlockieAvatar } from "~~/components/scaffold-eth";

const BUILDER_ADDRESS: AddressType = "0xa91D5A0a64ED5eeF11c4359C4631279695A338ef";

const UchechukwuEkezi: NextPage = () => {
  return (
    <div className="flex items-center flex-col grow pt-10 pb-10">
      <div className="px-5 w-full max-w-4xl">
        <div className="flex flex-col items-center mb-8">
          <BlockieAvatar address={BUILDER_ADDRESS} size={120} />
          <h1 className="text-4xl font-bold mt-4 mb-2">Uchechukwu Ekezie</h1>
          <div className="flex flex-col items-center gap-2 mb-4">
            <Address address={BUILDER_ADDRESS} format="long" />
            <span className="font-bold text-sm">Batch 22</span>
            <div className="flex gap-2 items-center">
              <span className="font-bold text-sm">Balance:</span>
              <Balance address={BUILDER_ADDRESS} />
            </div>
          </div>
        </div>

        <div className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl px-6 lg:px-8 py-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            Hello! I&apos;m a blockchain developer passionate about building decentralized applications and contributing
            to the Web3 ecosystem. I&apos;m excited to be part of Batch 22 and learn alongside fellow builders while
            creating meaningful projects on Ethereum and other EVM chains.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            My interests include smart contract development, DeFi protocols, and exploring the latest innovations in the
            blockchain space. I believe in the power of open-source collaboration and continuous learning.
          </p>
        </div>

        <div className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl px-6 lg:px-8 py-6">
          <h2 className="text-2xl font-bold mb-4">Connect With Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="https://github.com/Uchechukwu-Ekezie"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-base-200 rounded-xl hover:bg-base-300 transition-colors"
            >
              <GithubIcon />
              <span className="font-semibold">GitHub</span>
            </a>
            <a
              href="https://x.com/dev_uchee"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-base-200 rounded-xl hover:bg-base-300 transition-colors"
            >
              <TwitterIcon />
              <span className="font-semibold">Twitter/X</span>
            </a>
            <a
              href="https://linkedin.com/in/uchenna-ekezie-11990025a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-base-200 rounded-xl hover:bg-base-300 transition-colors"
            >
              <LinkedinIcon />
              <span className="font-semibold">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl px-6 lg:px-8 py-6 mt-6">
          <h2 className="text-2xl font-bold mb-4">Skills & Interests</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Solidity",
              "Smart Contracts",
              "Web3",
              "DeFi",
              "Next.js",
              "TypeScript",
              "Hardhat",
              "Ethereum",
              "Rust",
            ].map(skill => (
              <span
                key={skill}
                className="px-4 py-2 bg-secondary text-secondary-content rounded-full text-sm font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UchechukwuEkezi;
