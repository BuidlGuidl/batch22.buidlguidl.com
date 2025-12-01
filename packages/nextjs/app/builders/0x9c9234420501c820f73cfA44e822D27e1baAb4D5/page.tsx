import React from "react";
import Image from "next/image";
import { Address } from "@scaffold-ui/components";
import type { NextPage } from "next";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  location?: string;
}

const events: TimelineEvent[] = [
  {
    date: "2004",
    title: "Mobile Monday Silicon Valley",
    description: "Started a group that would grow to 10s of thousands of developers",
    location: "Palo Alto, CA",
  },
  {
    date: "2006",
    title: "AdMob",
    description: "Early technical team for a mobile advertising network, sold to Google",
    location: "Palo Alto, CA",
  },
  {
    date: "2009",
    title: "Chomp",
    description: "Server side work for an app recommendation service, sold to Apple",
    location: "San Francisco, CA",
  },
  {
    date: "2012",
    title: "Metaresolver",
    description: "Founder of a realtime bidding mobile platform, sold to Millenial Media",
    location: "San Francisco, CA",
  },
  {
    date: "2018",
    title: "Blochaus",
    description: "Work with content creators using NFTs and tokens to manage communities",
    location: "San Francisco, CA",
  },
  {
    date: "2021",
    title: "Glystn",
    description: "Used learning models and LLMs to help content creators digest feedback",
    location: "Half Moon Bay, CA",
  },
];

interface SocialLink {
  name: string;
  url: string;
}

const socials: SocialLink[] = [
  { name: "Github", url: "https://github.com/mikerowehl" },
  { name: "Blog", url: "https://rowehl.com" },
  { name: "Mastodon", url: "https://mastodon.social/@mikerowehl" },
  { name: "X/Twitter", url: "https://x.com/miker" },
];

const MikeRowehl: NextPage = () => {
  return (
    <div className="flex items-center flex-col grow pt-10">
      <Image src="/MikeRowehl.webp" alt="Mike Rowehl" width={120} height={120} className="rounded-full" />
      <h1 className="text-center">
        <span className="block text-4xl font-bold">Mike Rowehl</span>
      </h1>
      <div className="flex items-center">
        <Address address="0x9c9234420501c820f73cfA44e822D27e1baAb4D5" />
      </div>
      <p className="max-w-prose">
        {socials.map((social, index) => (
          <React.Fragment key={index}>
            {index > 0 && " | "}
            <a
              href={social.url}
              className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
              target="_blank"
            >
              {social.name}
            </a>
          </React.Fragment>
        ))}
      </p>
      <div className="max-w-4xl mx-auto p-8">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200" />

          {events.map((event, index) => (
            <div key={index} className="relative mb-12 ml-12">
              {/* Circle dot */}
              <div className="absolute -left-8 top-2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow" />

              {/* Content card */}
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
                <span className="text-sm font-semibold text-blue-600">{event.date}</span>
                <h3 className="text-2xl font-semibold text-gray-900 mt-1 mb-2">{event.title}</h3>
                {event.location && <p className="text-gray-600 text-sm mb-3">{event.location}</p>}
                <p className="text-gray-700">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MikeRowehl;
