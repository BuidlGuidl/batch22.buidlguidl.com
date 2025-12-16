import Link from "next/link";
import { Address } from "@scaffold-ui/components";
import { Globe, Linkedin } from "lucide-react";
import type { NextPage } from "next";
import { BlockieAvatar } from "~~/components/scaffold-eth";

const builderAddress = "0xEe3869d7dFc3e1a2CB6399E00C6a39E019E1A80b";
const linkedinUrl = "https://www.linkedin.com/in/oscar-yu-cheuk-chun/";
const websiteUrl = "https://oscar-yu-portfolio.vercel.app/";
const skills = ["Solidity", "TypeScript", "React", "Python"];

const OscarYuBuilderPage: NextPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center mt-10 px-5">
        <div className="max-w-3xl w-full">
          {/* Profile Section */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <BlockieAvatar address={builderAddress} size={80} />
            <h1 className="text-4xl font-bold">Oscar Yu</h1>
            <Address address={builderAddress} />
            <div className="flex gap-4 mt-4">
              <Link
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:opacity-80 transition-opacity"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:opacity-80 transition-opacity"
              >
                <Globe className="w-6 h-6" />
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-br from-base-100/80 to-base-100/40 backdrop-blur-sm border border-primary/10 rounded-3xl p-8 mb-6">
            {/* Skills Section */}
            <div className="flex items-start gap-3 mb-2">
              <h2 className="text-3xl font-bold">Skills</h2>
            </div>
            <div className="flex flex-wrap gap-3 mb-6">
              {skills.map(skill => (
                <span key={skill} className="px-4 py-2 bg-primary rounded-full font-medium">
                  {skill}
                </span>
              ))}
            </div>

            {/* About Me Section */}
            <div className="flex items-start gap-3 mb-4">
              <h2 className="text-3xl font-bold">About Me</h2>
            </div>
            <p className="text-lg leading-relaxed text-base-content/80">
              I&apos;m a CS graduate trying to build my Solidity skills while looking for a job. Feel free to connect
              via LinkedIn!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OscarYuBuilderPage;
