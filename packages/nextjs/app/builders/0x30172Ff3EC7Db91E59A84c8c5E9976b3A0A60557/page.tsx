import Link from "next/link";
import Image from "next/image";
import { Address } from "@scaffold-ui/components";
import type { NextPage } from "next";

const SKILLS = [
  { name: "JavaScript", color: "badge-primary" },
  { name: "Solidity", color: "badge-secondary" },
  { name: "Next.js", color: "badge-accent" },
  { name: "Hardhat", color: "badge-info" },
];

const KseniaPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-base-300 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(120px,auto)]">

          {/* Avatar Box - Top Left */}
          <div className="md:col-span-1 bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm rounded-3xl p-6 flex items-center justify-center border border-primary/20">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary opacity-20 blur-2xl rounded-full"></div>
              <div className="relative w-40 h-40 rounded-3xl overflow-hidden border-4 border-base-100 shadow-2xl">
                <Image
                  src="/ksenchi-avatar.png"
                  alt="ksenchi-avatar"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Name & Title Box - Top Right */}
          <div className="md:col-span-2 bg-base-100 rounded-3xl p-6 md:p-8 border border-base-content/10 shadow-xl">
            <div className="flex flex-col h-full justify-center">
              <h1 className="text-4xl md:text-6xl font-black mb-3 tracking-tight text-base-content">
                Ksenchi
              </h1>
              <p className="text-base-content/60 text-sm md:text-base mb-3">Web3 Developer • Blockchain Enthusiast</p>
              <div className="inline-block">
                <Address address="0x30172ff3ec7db91e59a84c8c5e9976b3a0a60557" />
              </div>
            </div>
          </div>

          {/* Skills Box - Middle Left */}
          <div className="md:col-span-2 bg-base-100 rounded-3xl p-6 border border-base-content/10 shadow-xl">
            <h3 className="text-sm font-bold uppercase tracking-wider text-base-content/50 mb-4">Tech Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {SKILLS.map(skill => (
                <div
                  key={skill.name}
                  className="bg-base-200 rounded-xl p-4 text-center font-semibold text-sm border border-base-content/5"
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>

          {/* GitHub Box - Middle Right */}
          <div className="md:col-span-1 bg-gradient-to-br from-primary to-secondary rounded-3xl p-6 flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow">
            <Link
              href="https://github.com/kseniaeremekno"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-white"
            >
              <div className="text-5xl mb-2">💻</div>
              <div className="font-bold">GitHub</div>
              <div className="text-xs opacity-80 mt-1">View Profile</div>
            </Link>
          </div>

          {/* Bio Box - Bottom Full Width */}
          <div className="md:col-span-3 bg-base-100 rounded-3xl p-6 md:p-8 border border-base-content/10 shadow-xl">
            <h3 className="text-sm font-bold uppercase tracking-wider text-base-content/50 mb-4">About</h3>
            <p className="text-base md:text-lg text-base-content/80 leading-relaxed">
              Blockchain enthusiast and developer passionate about decentralized technologies. Exploring the world of
              smart contracts and building innovative Web3 solutions. Constantly learning and growing in the blockchain
              ecosystem.
            </p>
          </div>

          {/* Footer Box - Bottom */}
          <div className="md:col-span-3 bg-base-200/50 rounded-3xl p-4 text-center border border-base-content/5">
            <p className="text-base-content/50 text-sm">
              Part of{" "}
              <Link href="https://buidlguidl.com" className="text-primary hover:underline font-semibold" target="_blank">
                BuidlGuidl
              </Link>{" "}
              Batch 22
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default KseniaPage;
