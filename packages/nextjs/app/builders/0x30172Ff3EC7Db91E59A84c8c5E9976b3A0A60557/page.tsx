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
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-base-300 via-base-200 to-base-100">
      <div className="max-w-4xl w-full">
        <div className="card bg-base-100 shadow-2xl border-2 border-primary/20">
          <div className="card-body p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-8">
            <div className="avatar mb-4">
                <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <Image
                    src="/ksenchi-avatar.png"
                    alt="ksenchi-avatar"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Ksenchi
              </h1>
              <div className="flex justify-center mb-4">
                <Address address="0x30172ff3ec7db91e59a84c8c5e9976b3a0a60557" />
              </div>
            </div>

            {/* Bio */}
            <div className="text-center mb-8">
              <div className="p-6 rounded-lg bg-base-200">
                <h3 className="text-lg font-semibold mb-4 text-base-content/90">About Me</h3>
                <p className="text-base md:text-lg text-base-content/80 leading-relaxed">
                  Blockchain enthusiast and developer passionate about decentralized technologies. Exploring the world of
                  smart contracts and building innovative Web3 solutions. Constantly learning and growing in the
                  blockchain ecosystem.
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

            {/* Social */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-center">Connect</h2>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="https://github.com/kseniaeremekno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-primary gap-2"
                >
                  <span>💻</span>
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center mt-6">
          <p className="text-base-content/50 text-sm">
            Part of{" "}
            <Link href="https://buidlguidl.com" className="link link-primary" target="_blank">
              BuidlGuidl
            </Link>{" "}
            Batch 22
          </p>
        </div>
      </div>
    </div>
  );
};

export default KseniaPage;
