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
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-base-300 via-base-200 to-base-100">
      <div className="max-w-4xl w-full">
        <div className="card bg-base-100 shadow-2xl border-2 border-primary/20">
          <div className="card-body p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="avatar mb-4">
                <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <Image
                    src="/spokoiniy.png"
                    alt="Spokoiniy"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Spokoiniy
              </h1>
              <div className="flex justify-center mb-4">
                <Address address="0x05192d59D1077d9e228494317399175BA5905893" />
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="p-6 rounded-lg bg-base-200">
                <h3 className="text-lg font-semibold mb-4 text-base-content/90">About Me</h3>
                <p className="text-base md:text-lg text-base-content/80 leading-relaxed">
                  Web3 developer exploring the frontiers of blockchain technology. Building decentralized solutions and
                  learning new technologies every day. Focused on creating meaningful impact through smart contracts and
                  dApps.
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

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-center">Connect</h2>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="https://github.com/ninastef"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-primary gap-2"
                >
                  <span>💻</span>
                  GitHub
                </Link>
              </div>
            </div>
            
            <div className="text-center mt-8 pt-6 border-t border-base-300">
              <p className="text-sm text-base-content/60 italic">
                &quot;Building the future, one block at a time&quot;
              </p>
            </div>
          </div>
        </div>
        
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

export default SpokoiniyPage;
