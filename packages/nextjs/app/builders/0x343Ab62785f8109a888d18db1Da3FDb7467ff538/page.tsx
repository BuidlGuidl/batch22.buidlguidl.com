import { Address } from "@scaffold-ui/components";
import type { NextPage } from "next";
import { BlockieAvatar } from "~~/components/scaffold-eth";

const address = "0x343Ab62785f8109a888d18db1Da3FDb7467ff538";
const name = "Wizz";
const bio = "A blockchain developer exploring the world of Ethereum and decentralized applications";
const skills = ["JavaScript", "Solidity", "Golang", "React", "Next.js", "Web3"];

const WizzPage: NextPage = () => {
  return (
    <div className="flex items-center flex-col grow pt-32 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 min-h-screen">
      <div className="px-5 max-w-2xl">
        <div className="flex flex-col items-center mb-8 animate-[bounce_2s_forwards]">
          <div className="border-4 border-white shadow-2xl rounded-full">
            <BlockieAvatar address={address} size={120} />
          </div>
          <h1 className="text-4xl font-bold mt-4 text-white drop-shadow-lg">{name}</h1>
          <p className="bg-base-100 p-6 rounded-3xl shadow-lg text-lg text-center">
            <Address address={address} format="short" />
          </p>
        </div>

        <div className="bg-base-100 p-6 rounded-3xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-center">About Me</h2>
          <p className="text-lg leading-relaxed text-center mb-4">{bio}</p>
          <h3 className="text-lg font-semibold mb-2 text-center">Skills</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill, index) => (
              <span key={index} className="badge badge-primary badge-lg">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WizzPage;
