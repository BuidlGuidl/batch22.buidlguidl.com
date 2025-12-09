import Image from "next/image";
import Link from "next/link";
import { Address } from "@scaffold-ui/components";
import type { NextPage } from "next";

const SKILLS = [
  { name: "Solidity", color: "badge-accent" },
  { name: "Web3", color: "badge-info" },
  { name: "Smart Contracts", color: "badge-success" },
  { name: "DeFi", color: "badge-warning" },
  { name: "React", color: "badge-secondary" },
  { name: "TypeScript", color: "badge-primary" },
];

const TonnyPage: NextPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-tr from-base-100 via-base-200 to-base-300">
      <div className="max-w-4xl w-full">
        {/* Main Card */}
        <div className="card bg-base-100 shadow-2xl border-2 border-accent/30">
          <div className="card-body p-8 md:p-12">
            {/* Header Section */}
            <div className="text-center mb-8">
              <div className="avatar mb-4">
                <div className="w-24 h-24 rounded-full ring-4 ring-accent ring-offset-base-100 ring-offset-4">
                  <Image
                    src="/tony.png"
                    alt="Tonny avatar"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Tonny
              </h1>
              <div className="flex justify-center mb-4">
                <Address address="0x23103d42Bc69C55617Ce265671Dea2907073ede8" />
              </div>
            </div>

            {/* Bio Section */}
            <div className="text-center mb-8">
              <div className="p-6 rounded-lg bg-gradient-to-br from-base-200 to-base-300/50 border border-accent/10">
                <h3 className="text-lg font-semibold mb-4 text-base-content/90">About Me</h3>
                <p className="text-base md:text-lg text-base-content/80 leading-relaxed">
                  Aspiring blockchain developer on a journey to master Web3 technologies. Passionate about building
                  decentralized applications and exploring the potential of smart contracts. Currently diving deep into
                  Solidity and expanding my skills in the DeFi ecosystem.
                </p>
                <div className="mt-4 flex justify-center gap-2 flex-wrap">
                 {SKILLS.map(skill => (
                    <span key={skill.name} className={`badge ${skill.color}`}>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-center">Connect</h2>
              <div className="flex flex-wrap gap-3 justify-center">
                  <Link
                    href="https://github.com/tonnycro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-accent gap-2 hover:scale-105 hover:shadow-lg transition-all"
                  >
                    <span>💻</span>
                    GitHub
                  </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-6">
          <p className="text-base-content/50 text-sm">
            Part of{" "}
            <Link href="https://buidlguidl.com" className="link link-accent hover:link-secondary" target="_blank">
              BuidlGuidl
            </Link>{" "}
            Batch 22
          </p>
        </div>
      </div>
    </div>
  );
};

export default TonnyPage;
