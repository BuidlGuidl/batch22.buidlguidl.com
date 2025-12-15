import Image from "next/image";
import Link from "next/link";
import { Address } from "@scaffold-ui/components";
import { Github } from "lucide-react";
import type { NextPage } from "next";

const SKILLS = [
  { name: "Solidity", color: "badge-primary" },
  { name: "React", color: "badge-secondary" },
  { name: "TypeScript", color: "badge-accent" },
  { name: "Web3", color: "badge-info" },
];

const BobPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gradient-to-br from-base-200 via-base-100 to-base-300">
      <div className="max-w-3xl w-full space-y-6">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-28 h-28 rounded-full ring-4 ring-secondary ring-offset-4 ring-offset-base-100">
            <Image
              src="/my-avatar.jpg"
              alt="Bob"
              width={112}
              height={112}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary">Bob</h1>
          <p className="text-lg text-base-content/70 italic">Web3 Builder & Blockchain Enthusiast</p>
        </div>

        {/* Address Section */}
        <div className="flex justify-center">
          <div className="bg-base-100 rounded-xl px-6 py-3 border-2 border-secondary/30 shadow-lg">
            <Address address="0x4667d9B7C789c231988EC631B22c5492Ce60b3E9" />
          </div>
        </div>

        {/* About Me Card */}
        <div className="card bg-base-100 shadow-xl border-2 border-accent/20">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-base-content/80 leading-relaxed">
              Aspiring blockchain developer on a journey to master Web3 technologies. Passionate about building
              decentralized applications and exploring the potential of smart contracts. Currently diving deep into
              Solidity and expanding my skills in the DeFi ecosystem.
            </p>
          </div>
        </div>

        {/* Skills Card */}
        <div className="card bg-base-100 shadow-xl border-2 border-accent/20">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map(skill => (
                <span key={skill.name} className={`badge ${skill.color} badge-lg gap-2 px-4 py-3 font-medium`}>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Connect Card */}
        <div className="card bg-base-100 shadow-xl border-2 border-accent/20">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Connect with Me
            </h2>
            <div className="flex justify-center">
              <Link
                href="https://github.com/tonnycro"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg gap-3 hover:scale-105 transition-transform shadow-lg"
              >
                <Github className="w-6 h-6" />
                GitHub
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-6">
          <p className="text-sm text-base-content/50">
            Building with{" "}
            <Link
              href="https://buidlguidl.com"
              className="text-blue-500 hover:text-blue-600 underline font-medium"
              target="_blank"
              >
              BuidlGuidl
            </Link>{" "}
            Batch 22 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default BobPage;
