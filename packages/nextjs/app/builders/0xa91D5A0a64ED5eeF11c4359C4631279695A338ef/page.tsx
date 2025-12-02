"use client";

import { Address, Balance } from "@scaffold-ui/components";
import { Address as AddressType } from "viem";
import { BlockieAvatar } from "~~/components/scaffold-eth";
import { useTargetNetwork } from "~~/hooks/scaffold-eth";
import { getBlockExplorerAddressLink } from "~~/utils/scaffold-eth";

const BUILDER_ADDRESS: AddressType = "0xa91D5A0a64ED5eeF11c4359C4631279695A338ef";

export default function BuilderPage() {
  const { targetNetwork } = useTargetNetwork();
  const blockExplorerAddressLink = getBlockExplorerAddressLink(targetNetwork, BUILDER_ADDRESS);

  return (
    <div className="flex items-center flex-col grow pt-10 pb-10">
      <div className="px-5 w-full max-w-4xl">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-8">
          <BlockieAvatar address={BUILDER_ADDRESS} size={120} />
          <h1 className="text-4xl font-bold mt-4 mb-2">Uchechukwu Ekezie</h1>
          <div className="flex flex-col items-center gap-2 mb-4">
            <Address address={BUILDER_ADDRESS} format="long" blockExplorerAddressLink={blockExplorerAddressLink} />
            <div className="flex gap-2 items-center">
              <span className="font-bold text-sm">Balance:</span>
              <Balance address={BUILDER_ADDRESS} />
            </div>
          </div>
        </div>

        {/* Bio Section */}
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

        {/* Links Section */}
        <div className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl px-6 lg:px-8 py-6">
          <h2 className="text-2xl font-bold mb-4">Connect With Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="https://github.com/Uchechukwu-Ekezie"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-base-200 rounded-xl hover:bg-base-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="font-semibold">GitHub</span>
            </a>
            {/* Update the href below with your Twitter/X profile URL */}
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-base-200 rounded-xl hover:bg-base-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              <span className="font-semibold">Twitter/X</span>
            </a>
            {/* Update the href below with your LinkedIn profile URL */}
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-base-200 rounded-xl hover:bg-base-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="font-semibold">LinkedIn</span>
            </a>
            <a
              href="https://etherscan.io/address/0xa91D5A0a64ED5eeF11c4359C4631279695A338ef"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-base-200 rounded-xl hover:bg-base-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span className="font-semibold">Etherscan</span>
            </a>
          </div>
        </div>

        {/* Skills/Interests Section */}
        <div className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl px-6 lg:px-8 py-6 mt-6">
          <h2 className="text-2xl font-bold mb-4">Skills & Interests</h2>
          <div className="flex flex-wrap gap-2">
            {["Solidity", "Smart Contracts", "Web3", "DeFi", "Next.js", "TypeScript", "Hardhat", "Ethereum"].map(
              skill => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary text-secondary-content rounded-full text-sm font-semibold"
                >
                  {skill}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
