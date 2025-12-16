import Link from "next/link";
import { Address } from "@scaffold-ui/components";
import type { NextPage } from "next";

const AndrewPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side - Avatar */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-1">
              <div className="w-full h-full rounded-2xl bg-base-100 flex items-center justify-center">
                <div className="text-6xl font-bold text-primary">A</div>
              </div>
            </div>
          </div>

          {/* Right side - Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-base-content">Andrew</h1>
            <p className="text-xl text-base-content/60 mb-6">Blockchain Developer & Web3 Architect</p>
            <div className="inline-block bg-base-200 rounded-lg px-4 py-2">
              <Address address="0xBB1EaCf079A742953345693C9e3a7e83FB4A2f48" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 border-t border-base-300"></div>

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-primary">About</h2>
          <p className="text-lg text-base-content/80 leading-relaxed max-w-3xl">
            Passionate about building the decentralized future. I focus on creating robust smart contracts and intuitive
            dApps that bridge the gap between blockchain technology and real-world applications. Always learning, always
            building.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-primary">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Solidity", "Ethereum", "React", "TypeScript", "Node.js", "Hardhat", "Web3.js", "Smart Contracts"].map(
              skill => (
                <div key={skill} className="px-4 py-3 bg-base-200 rounded-lg text-center font-medium">
                  {skill}
                </div>
              ),
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-base-300">
          <p className="text-center text-base-content/50 text-sm">
            Building with{" "}
            <Link href="https://buidlguidl.com" className="text-primary hover:underline" target="_blank">
              BuidlGuidl
            </Link>{" "}
            • Batch 22
          </p>
        </footer>
      </div>
    </div>
  );
};

export default AndrewPage;
