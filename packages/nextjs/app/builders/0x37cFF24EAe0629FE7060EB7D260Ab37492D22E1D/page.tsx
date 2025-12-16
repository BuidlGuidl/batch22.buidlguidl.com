import Image from "next/image";
import { InfoCard } from "./components/InfoCard";
import { PROFILE_DATA, SOCIAL_LINKS } from "./constants";
import { Address } from "@scaffold-ui/components";
import type { NextPage } from "next";

const ZarccProfile: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-base-200 dark:bg-base-100">
      <div className="max-w-3xl w-full space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 dark:bg-secondary/20 border-4 border-primary/30 dark:border-secondary/40">
            <Image src={"/zarccAvatar.webp"} alt="Zarcc" width={100} height={100} className="rounded-full" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{PROFILE_DATA.name}</h1>
          <p className="text-lg text-base-content/70 dark:text-base-content/80 italic">{PROFILE_DATA.tagline}</p>
        </div>

        {/* Address Section */}
        <div className="flex justify-center">
          <div className="bg-base-100 dark:bg-base-300 rounded-lg px-6 py-3 border border-base-300 dark:border-base-100 shadow-sm">
            <Address address={PROFILE_DATA.address} format="long" />
          </div>
        </div>

        <InfoCard title="About Me">
          <p className="text-base-content/80 dark:text-base-content/90 leading-relaxed">{PROFILE_DATA.bio}</p>
        </InfoCard>

        <InfoCard title="Current Focus">
          <p className="text-base-content/80 dark:text-base-content/90 leading-relaxed">
            🎯 {PROFILE_DATA.currentFocus}
          </p>
        </InfoCard>

        <InfoCard title="Tech Stack">
          <div className="flex flex-wrap gap-3">
            {PROFILE_DATA.skills.map(skill => (
              <span
                key={skill}
                className="px-4 py-2 bg-primary/10 dark:bg-secondary/20 text-primary dark:text-white rounded-full text-sm font-medium border border-primary/20 dark:border-secondary/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </InfoCard>

        <InfoCard title="Connect with Me">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {SOCIAL_LINKS.map(link => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 bg-base-200 dark:bg-base-200 rounded-xl border border-base-300 dark:border-base-200 transition-all hover:scale-105 hover:shadow-md hover:border-primary/50 dark:hover:border-secondary/40 group"
                >
                  <IconComponent className="w-8 h-8 mb-3 text-primary dark:text-white/50 group-hover:text-primary-focus dark:group-hover:text-secondary-focus" />
                  <span className="font-semibold text-base-content mb-1">{link.name}</span>
                  <span className="text-sm text-center whitespace-nowrap text-base-content/60 dark:text-base-content/50">
                    {link.description}
                  </span>
                </a>
              );
            })}
          </div>
        </InfoCard>

        <div className="text-center pt-8">
          <p className="text-sm text-base-content/50 dark:text-base-content/40 italic">
            &ldquo;The best time to plant a tree was 20 years ago. The second best time is now.&rdquo; - Building in
            Web3 since 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default ZarccProfile;
