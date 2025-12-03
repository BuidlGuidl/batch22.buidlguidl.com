import Image from "next/image";
import { Address } from "@scaffold-ui/components";
import { NextPage } from "next";

const KhanoPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 text-center gap-6">
      <Image
        src="https://avatars.githubusercontent.com/u/00000000?v=4"
        alt="Khano avatar"
        width={120}
        height={120}
        className="rounded-full shadow-lg"
      />

      <h1 className="text-3xl font-bold">Khano</h1>

      <p className="text-lg text-gray-300 max-w-xl">Builder and Web3 adventurer. Member of BuidlGuidl Batch 22.</p>

      <div className="flex flex-col items-center gap-2">
        <p className="text-sm font-semibold">Address:</p>
        <Address address="0x5258c93FbF34600a89bb1B7A57Fe9B981A693Fc7" />
      </div>

      <div className="mt-6 flex space-x-6">
        <a href="https://x.com/" target="_blank" className="text-blue-400 hover:underline">
          Twitter
        </a>

        <a href="https://github.com/" target="_blank" className="text-purple-400 hover:underline">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default KhanoPage;
