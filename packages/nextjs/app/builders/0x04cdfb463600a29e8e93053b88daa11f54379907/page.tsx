"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Award,
  Check,
  CheckCircle2,
  Code2,
  Copy,
  Gem,
  Globe,
  Layers,
  Lock,
  Palette,
  ScrollText,
  Shield,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { NextPage } from "next";
import { useTheme } from "next-themes";

const WALLET_ADDRESS = "0x04cdfb463600a29e8e93053b88daa11f54379907";
const WALLET_SHORT = "0x04cD...9907";

const customStyles = `
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-scroll {
    animation: scroll 20s linear infinite;
  }
  .animate-scroll:hover {
    animation-play-state: paused;
  }

  .uiverse-card {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding: 10px;
  }
  .socialContainer {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background-color: rgb(44, 44, 44);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition-duration: .3s;
    border: 1px solid rgba(255,255,255,0.05);
  }
  .socialSvg {
    width: 20px;
    height: 20px;
    transition: all 0.3s;
    fill: white; 
    color: white;
  }
  .socialContainer:hover .socialSvg {
    animation: slide-in-top 0.3s both;
  }
  .containerGithub:hover { background-color: #333; }
  .containerX:hover { background-color: #000; }
  .containerDiscord:hover { background-color: #5865F2; }
  .containerTelegram:hover { background-color: #0088cc; }
  .containerFarcaster:hover { background-color: #8A63D2; }
  .containerSpeedRun:hover { background-color: #8B5CF6; }
  .socialContainer:active {
    transform: scale(0.9);
    transition-duration: .3s;
  }
  @keyframes slide-in-top {
    0% { transform: translateY(-50px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }
`;

function SkillTag({ label, icon, isDark }: { label: string; icon: React.ReactNode; isDark: boolean }) {
  const containerStyle = isDark
    ? "bg-slate-800/40 border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800/60 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] text-slate-300"
    : "bg-[#e2e8f0] border-slate-300 hover:border-blue-400 hover:shadow-md text-slate-700 hover:text-blue-700";

  const iconStyle = isDark ? "text-blue-400 group-hover:text-blue-300" : "text-slate-500 group-hover:text-blue-600";

  return (
    <div
      className={`group relative flex items-center gap-3 px-4 py-2.5 rounded-xl border transition-all duration-300 cursor-default backdrop-blur-sm ${containerStyle}`}
    >
      <div
        className={`absolute left-0 top-1/4 bottom-1/4 w-0.5 rounded-r-full transition-all duration-300 ${isDark ? "bg-blue-500/0 group-hover:bg-blue-500/80" : "bg-blue-600/0 group-hover:bg-blue-600/80"}`}
      ></div>
      <div className={`transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${iconStyle}`}>
        {icon}
      </div>
      <span className="text-xs font-semibold tracking-wide group-hover:translate-x-0.5 transition-transform duration-300">
        {label}
      </span>
      <div
        className={`absolute top-2 right-2 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isDark ? "bg-blue-400 shadow-[0_0_5px_rgba(96,165,250,0.8)]" : "bg-blue-600"}`}
      ></div>
    </div>
  );
}

function AchievementCard({
  title,
  desc,
  active = false,
  icon,
  isDark,
}: {
  title: string;
  desc: string;
  active?: boolean;
  icon?: React.ReactNode;
  isDark: boolean;
}) {
  const cardStyle = isDark
    ? "bg-black/20 border-white/5 hover:bg-black/30"
    : "bg-[#e2e8f0] border-slate-300 hover:border-blue-400 hover:shadow-lg";
  const titleColor = isDark ? "text-white" : "text-slate-900";
  const descColor = isDark ? "text-slate-400" : "text-slate-600";

  return (
    <div className={`flex items-start gap-4 p-4 rounded-2xl border transition-all text-left group ${cardStyle}`}>
      <div
        className={`mt-1 p-2 rounded-lg ${active ? "bg-green-500/10 text-green-500" : "bg-yellow-500/10 text-yellow-600"}`}
      >
        {icon ? icon : <CheckCircle2 size={20} />}
      </div>
      <div>
        <h4 className={`font-semibold text-sm group-hover:text-blue-600 transition-colors ${titleColor}`}>{title}</h4>
        <p className={`text-[11px] mt-1 leading-snug ${descColor}`}>{desc}</p>
      </div>
    </div>
  );
}

const DharmaBuilder: NextPage = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [prices, setPrices] = useState<Record<string, { usd: number; usd_24h_change: number }> | null>(null);

  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,arbitrum,solana,optimism&vs_currencies=usd&include_24hr_change=true",
        );
        if (!response.ok) throw new Error("API Error");
        const data = await response.json();
        setPrices(data);
      } catch {
        setPrices({
          bitcoin: { usd: 96500, usd_24h_change: 2.5 },
          ethereum: { usd: 3650, usd_24h_change: -1.2 },
          arbitrum: { usd: 1.85, usd_24h_change: 5.4 },
          solana: { usd: 195, usd_24h_change: 1.1 },
          optimism: { usd: 2.1, usd_24h_change: -0.5 },
        });
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  const coins = [
    { id: "bitcoin", symbol: "BTC" },
    { id: "ethereum", symbol: "ETH" },
    { id: "arbitrum", symbol: "ARB" },
    { id: "solana", symbol: "SOL" },
    { id: "optimism", symbol: "OP" },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(WALLET_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!mounted) {
    return null;
  }

  const theme = {
    bg: isDark ? "bg-[#0f172a]" : "bg-[#94a3b8]",
    text: isDark ? "text-white" : "text-slate-900",
    subText: isDark ? "text-slate-300" : "text-slate-800",
    mutedText: isDark ? "text-slate-400" : "text-slate-700",
    cardBg: isDark ? "bg-white/5 border-white/10" : "bg-[#cbd5e1] border-slate-400/50 shadow-2xl",
    glowPurple: isDark ? "bg-purple-600/30" : "bg-purple-500/5",
    glowBlue: isDark ? "bg-blue-600/20" : "bg-blue-500/5",
    walletBg: isDark
      ? "bg-black/40 border-white/5 hover:border-red-500/50"
      : "bg-[#e2e8f0] border-slate-400 hover:border-red-400 shadow-sm",
    walletText: isDark ? "text-slate-300" : "text-slate-800",
    divider: isDark ? "border-white/5" : "border-slate-400/20",
    footerText: isDark ? "text-slate-500" : "text-slate-600",
    selection: isDark ? "selection:bg-red-500 selection:text-white" : "selection:bg-red-200 selection:text-red-900",
  };

  return (
    <>
      <style>{customStyles}</style>
      <div
        className={`min-h-screen ${theme.bg} ${theme.text} ${theme.selection} flex items-center justify-center p-4 relative overflow-hidden font-sans transition-colors duration-500`}
      >
        <div
          className={`absolute bottom-0 left-0 w-96 h-96 ${theme.glowPurple} rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none transition-colors duration-500`}
        />
        <div
          className={`absolute top-0 right-0 w-[500px] h-[500px] ${theme.glowBlue} rounded-full blur-[128px] translate-x-1/3 -translate-y-1/3 pointer-events-none transition-colors duration-500`}
        />

        <div
          className={`relative z-10 w-full max-w-2xl backdrop-blur-xl border rounded-3xl overflow-hidden transition-all duration-500 flex flex-col items-center ${theme.cardBg}`}
        >
          <div
            className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${isDark ? "via-white/20" : "via-slate-300/50"} to-transparent`}
          />

          <div
            className={`w-full py-3 border-b overflow-hidden relative ${theme.divider} ${isDark ? "bg-black/20" : "bg-slate-400/10"}`}
          >
            <div className="absolute top-0 bottom-0 left-0 w-8 z-10 bg-gradient-to-r from-[#0f172a] to-transparent opacity-50"></div>
            <div className="absolute top-0 bottom-0 right-0 w-8 z-10 bg-gradient-to-l from-[#0f172a] to-transparent opacity-50"></div>

            <div className="flex w-max animate-scroll">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex gap-8 px-4">
                  {coins.map(coin => {
                    const coinData = prices ? prices[coin.id] : null;
                    const price = coinData?.usd || 0;
                    const change = coinData?.usd_24h_change || 0;
                    const isPositive = change >= 0;

                    return (
                      <div key={coin.id} className="flex items-center gap-2 select-none">
                        <span className={`font-bold text-xs uppercase ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                          {coin.symbol}
                        </span>
                        <span className={`font-mono text-sm font-medium ${isDark ? "text-white" : "text-slate-900"}`}>
                          ${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                        <span className={`text-xs flex items-center ${isPositive ? "text-green-500" : "text-red-600"}`}>
                          {isPositive ? (
                            <TrendingUp size={10} className="mr-0.5" />
                          ) : (
                            <TrendingDown size={10} className="mr-0.5" />
                          )}
                          {Math.abs(change).toFixed(1)}%
                        </span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center text-center space-y-8 w-full p-8 md:p-12">
            <div className="space-y-5 flex flex-col items-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-tr from-red-600 via-rose-500 to-orange-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-red-500 to-orange-500 shadow-2xl flex items-center justify-center">
                  <div
                    className={`w-full h-full rounded-full border-4 flex items-center justify-center overflow-hidden ${isDark ? "border-[#0f172a] bg-slate-800" : "border-slate-400 bg-[#e2e8f0]"}`}
                  >
                    <Image
                      src="/var.png"
                      alt="Kohen Eric Avatar"
                      width={120}
                      height={120}
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h1
                  className={`text-4xl md:text-6xl font-black tracking-tight mb-2 ${isDark ? "text-white" : "text-slate-900"}`}
                >
                  Kohen Eric
                </h1>
                <p className={`${theme.mutedText} text-sm uppercase tracking-[0.2em] font-bold`}>Batch 22 Graduate</p>
              </div>

              <p className={`${theme.subText} max-w-lg leading-relaxed text-sm md:text-base font-medium opacity-90`}>
                Smart contract developer building on Arbitrum. Passionate about creating secure Web3 infrastructure.
              </p>

              <button
                onClick={handleCopy}
                className={`group flex items-center gap-3 transition-all rounded-full py-2 pl-2 pr-5 max-w-full cursor-pointer backdrop-blur-sm border ${theme.walletBg}`}
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-[10px] font-bold text-white shadow-inner flex-shrink-0">
                  0x
                </div>
                <span
                  className={`font-mono text-sm truncate group-hover:text-red-500 transition-colors ${theme.walletText}`}
                >
                  {WALLET_SHORT}
                </span>
                <div className="flex-shrink-0">
                  {copied ? (
                    <Check size={16} className="text-green-500" />
                  ) : (
                    <Copy
                      size={16}
                      className={`${isDark ? "text-slate-500" : "text-slate-600"} group-hover:text-red-500`}
                    />
                  )}
                </div>
              </button>
            </div>

            <div className="w-full space-y-4">
              <h3
                className={`text-left text-xs font-bold uppercase tracking-widest pl-1 opacity-70 ${theme.mutedText}`}
              >
                Skills & Focus
              </h3>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <SkillTag icon={<Code2 size={16} />} label="Solidity" isDark={isDark} />
                <SkillTag icon={<Gem size={16} />} label="Ethereum" isDark={isDark} />
                <SkillTag icon={<ScrollText size={16} />} label="Smart Contracts" isDark={isDark} />
                <SkillTag icon={<Layers size={16} />} label="Arbitrum" isDark={isDark} />
                <SkillTag icon={<Shield size={16} />} label="Security" isDark={isDark} />
                <SkillTag icon={<Lock size={16} />} label="Cryptography" isDark={isDark} />
                <SkillTag icon={<Palette size={16} />} label="Design" isDark={isDark} />
                <SkillTag icon={<Globe size={16} />} label="Web3.js" isDark={isDark} />
              </div>
            </div>

            <div className="w-full space-y-4">
              <h3
                className={`text-left text-xs font-bold uppercase tracking-widest pl-1 opacity-70 ${theme.mutedText}`}
              >
                Achievements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <AchievementCard
                  title="Check-in Complete"
                  desc="Successfully checked into BatchRegistry"
                  active={true}
                  isDark={isDark}
                />
                <AchievementCard
                  title="Batch 22 Member"
                  desc="Active participant in BuidlGuidl"
                  icon={<Award className="text-yellow-500" size={20} />}
                  isDark={isDark}
                />
              </div>
            </div>

            <div className={`w-full pt-6 border-t ${theme.divider}`}>
              <h3
                className={`text-left text-xs font-bold uppercase tracking-widest pl-1 mb-4 opacity-70 ${theme.mutedText}`}
              >
                Connect
              </h3>

              <div className="uiverse-card w-full flex-wrap justify-center sm:justify-start">
                <a
                  href="https://github.com/dharmanan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="socialContainer containerGithub group"
                  title="GitHub"
                >
                  <svg
                    className="socialSvg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0 3-1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a
                  href="https://x.com/KohenEric"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="socialContainer containerX group"
                  title="X (Twitter)"
                >
                  <svg className="socialSvg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231h0.001zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
                  </svg>
                </a>
                <a
                  href="https://discordapp.com/users/dharma8447"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="socialContainer containerDiscord group"
                  title="Discord: dharma8447"
                >
                  <svg className="socialSvg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
                  </svg>
                </a>
                <a
                  href="https://t.me/darmadagan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="socialContainer containerTelegram group"
                  title="Telegram"
                >
                  <svg className="socialSvg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </a>
                <a
                  href="https://warpcast.com/dharman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="socialContainer containerFarcaster group"
                  title="Farcaster"
                >
                  <svg className="socialSvg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.24 3H5.76A2.76 2.76 0 0 0 3 5.76v12.48A2.76 2.76 0 0 0 5.76 21h12.48A2.76 2.76 0 0 0 21 18.24V5.76A2.76 2.76 0 0 0 18.24 3zM17 17h-1.5v-4.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V17h-1.5v-4.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V17H6V7h11v10z" />
                  </svg>
                </a>
                <a
                  href="https://speedrunethereum.com/builders/0x04cDfB463600a29e8E93053B88DAa11f54379907"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="socialContainer containerSpeedRun group"
                  title="SpeedRunEthereum"
                >
                  <svg className="socialSvg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </a>
              </div>
            </div>

            <div className={`text-xs pt-2 ${theme.footerText} opacity-60`}>Built with ❤️ on Scaffold-ETH 2</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DharmaBuilder;
