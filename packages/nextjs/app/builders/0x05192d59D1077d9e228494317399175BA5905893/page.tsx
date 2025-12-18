import Image from "next/image";
import Link from "next/link";
import { Address } from "@scaffold-ui/components";
import type { NextPage } from "next";

const SKILLS = [
  { name: "Solidity", color: "badge-primary" },
  { name: "JavaScript", color: "badge-secondary" },
  { name: "React", color: "badge-accent" },
  { name: "Web3", color: "badge-info" },
];

const SpokoiniyPage: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Panel */}
      <div className="lg:w-1/2 min-h-[40vh] lg:min-h-screen bg-gradient-to-br from-primary via-secondary to-accent p-8 lg:p-12 flex flex-col justify-center items-center text-primary-content relative overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-base-content/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-base-content/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 text-center">
          {/* Avatar */}
          <div className="mb-8 inline-block">
            <div className="relative">
              <div className="absolute inset-0 bg-base-content/30 rounded-full blur-2xl"></div>
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-base-100/50 shadow-2xl backdrop-blur-sm">
                <Image
                  src="/spokoiniy.png"
                  alt="Spokoiniy"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-6xl lg:text-7xl font-black mb-4 tracking-tight drop-shadow-lg">Spokoiniy</h1>

          {/* Tagline */}
          <p className="text-xl lg:text-2xl font-light mb-6 opacity-90">Web3 Developer</p>

          {/* GitHub */}
          <div className="mt-8">
            <Link
              href="https://github.com/ninastef"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline border-2 border-base-100/50 hover:bg-base-100/20 hover:border-base-100 text-primary-content gap-2"
            >
              <span>💻</span>
              GitHub Profile
            </Link>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="lg:w-1/2 min-h-screen bg-base-200 p-8 lg:p-12 flex flex-col justify-center">
        <div className="max-w-lg mx-auto w-full space-y-6">
          {/* Wallet Card */}
          <div className="bg-base-100/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-base-content/10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-base-content/50 mb-3">Wallet Address</h3>
            <Address address="0x05192d59D1077d9e228494317399175BA5905893" />
          </div>

          {/* About Card */}
          <div className="bg-base-100/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-base-content/10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-base-content/50 mb-3">About</h3>
            <p className="text-base-content/80 leading-relaxed">
              Web3 developer exploring the frontiers of blockchain technology. Building decentralized solutions and
              learning new technologies every day. Focused on creating meaningful impact through smart contracts and
              dApps.
            </p>
          </div>

          {/* Skills Card */}
          <div className="bg-base-100/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-base-content/10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-base-content/50 mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map(skill => (
                <span key={skill.name} className={`badge ${skill.color} badge-lg`}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pt-6">
            <p className="text-base-content/50 text-sm">
              Part of{" "}
              <Link
                href="https://buidlguidl.com"
                className="text-primary hover:underline font-semibold"
                target="_blank"
              >
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

export default SpokoiniyPage;
