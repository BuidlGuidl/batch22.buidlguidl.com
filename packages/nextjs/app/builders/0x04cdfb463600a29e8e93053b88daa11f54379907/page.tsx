import Image from "next/image";
import { DiscordIcon, FarcasterIcon, GithubIcon, SpeedRunIcon, TelegramIcon, XIcon } from "./icons";
import { Address } from "@scaffold-ui/components";
import { NextPage } from "next";

const WALLET_ADDRESS = "0x04cdfb463600a29e8e93053b88daa11f54379907";

const socialLinks = [
  { href: "https://github.com/dharmanan", icon: GithubIcon, label: "GitHub", hoverBg: "hover:bg-[#333]" },
  { href: "https://x.com/KohenEric", icon: XIcon, label: "X", hoverBg: "hover:bg-black" },
  {
    href: "https://discordapp.com/users/dharma8447",
    icon: DiscordIcon,
    label: "Discord",
    hoverBg: "hover:bg-[#5865F2]",
  },
  { href: "https://t.me/darmadagan", icon: TelegramIcon, label: "Telegram", hoverBg: "hover:bg-[#0088cc]" },
  { href: "https://warpcast.com/dharman", icon: FarcasterIcon, label: "Farcaster", hoverBg: "hover:bg-[#8A63D2]" },
  {
    href: "https://speedrunethereum.com/builders/0x04cDfB463600a29e8E93053B88DAa11f54379907",
    icon: SpeedRunIcon,
    label: "SpeedRun",
    hoverBg: "hover:bg-[#8B5CF6]",
  },
];

const skills = ["Solidity", "Ethereum", "Smart Contracts", "Arbitrum", "Security", "Web3.js"];

const KohenEricBuilder: NextPage = () => {
  return (
    <div className="min-h-screen bg-base-200 dark:bg-base-300 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-base-100 dark:bg-base-200 border border-base-300 dark:border-base-100/10 rounded-3xl shadow-xl overflow-hidden">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center p-8 md:p-12 space-y-6">
          {/* Avatar */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full p-1 bg-linear-to-tr from-primary to-secondary shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-base-100 dark:bg-base-300">
                <Image
                  src="/avatar.webp"
                  alt="Kohen Eric Avatar"
                  width={120}
                  height={120}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Name & Title */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-base-content">Kohen Eric</h1>
            <p className="text-sm uppercase tracking-widest text-base-content/60 mt-2 font-semibold">
              Batch 22 Graduate
            </p>
          </div>

          {/* Bio */}
          <p className="text-base-content/80 max-w-md leading-relaxed">
            Smart contract developer building on Arbitrum. Passionate about creating secure Web3 infrastructure.
          </p>

          {/* Wallet Address - Using Scaffold-UI */}
          <div className="flex items-center gap-2">
            <Address address={WALLET_ADDRESS} />
          </div>

          {/* Skills */}
          <div className="w-full space-y-3">
            <h3 className="text-left text-xs font-bold uppercase tracking-widest text-base-content/50">
              Skills & Focus
            </h3>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {skills.map(skill => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-medium rounded-lg bg-base-200 dark:bg-base-300 text-base-content/80 border border-base-300 dark:border-base-100/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="w-full space-y-3">
            <h3 className="text-left text-xs font-bold uppercase tracking-widest text-base-content/50">Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-base-200 dark:bg-base-300 border border-base-300 dark:border-base-100/10 text-left">
                <div className="p-2 rounded-lg bg-success/10 text-success">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-base-content">Check-in Complete</h4>
                  <p className="text-xs text-base-content/60 mt-0.5">Successfully checked into BatchRegistry</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-base-200 dark:bg-base-300 border border-base-300 dark:border-base-100/10 text-left">
                <div className="p-2 rounded-lg bg-warning/10 text-warning">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-base-content">Batch 22 Member</h4>
                  <p className="text-xs text-base-content/60 mt-0.5">Active participant in BuidlGuidl</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="w-full pt-4 border-t border-base-300 dark:border-base-100/10 space-y-3">
            <h3 className="text-left text-xs font-bold uppercase tracking-widest text-base-content/50">Connect</h3>
            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
              {socialLinks.map(({ href, icon: Icon, label, hoverBg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className={`w-12 h-12 rounded-xl bg-base-200 dark:bg-base-300 border border-base-300 dark:border-base-100/10 flex items-center justify-center transition-all duration-300 ${hoverBg} hover:text-white hover:border-transparent active:scale-95`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer */}
          <p className="text-xs text-base-content/40 pt-2">Built with ❤️ on Scaffold-ETH 2</p>
        </div>
      </div>
    </div>
  );
};

export default KohenEricBuilder;
