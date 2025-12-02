import { TwitterIcon } from "./icons/Twitter";
import { CodeBracketIcon, DocumentTextIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export const PROFILE_DATA = {
  name: "Zarcc",
  tagline: "Building the decentralized future, one block at a time",
  address: "0x37cFF24EAe0629FE7060EB7D260Ab37492D22E1D" as `0x${string}`,
  bio: "Full-stack blockchain developer passionate about creating innovative dApps and smart contracts. Experienced with Solidity, TypeScript, and modern web3 tooling. Always learning, always building.",
  skills: ["Solidity", "TypeScript", "React", "Next.js", "Hardhat", "Foundry", "Web3.js", "Ethers.js"],
  currentFocus: "Learning Solidity while Exploring Uniswap v4 hooks and advanced DeFi protocols",
};

export const SOCIAL_LINKS = [
  {
    name: "Twitter",
    url: "https://twitter.com/zachy_yo",
    icon: TwitterIcon,
    description: "Check out my code",
  },
  {
    name: "GitHub",
    url: "https://github.com/zachyo",
    icon: CodeBracketIcon,
    description: "Check out my code",
  },
  {
    name: "Blog",
    url: "https://zarcc.hashnode.dev/",
    icon: DocumentTextIcon,
    description: "Read my thoughts",
  },
  {
    name: "Email",
    url: "mailto:segunzacheusi@email.com",
    icon: EnvelopeIcon,
    description: "Get in touch",
  },
];
