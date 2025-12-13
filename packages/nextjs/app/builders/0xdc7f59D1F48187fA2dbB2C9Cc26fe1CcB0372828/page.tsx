"use client";

import { KEY_SKILLS, PROFILE_DATA } from "./constants";
import { Address } from "@scaffold-ui/components";
import type { NextPage } from "next";

const PrathmeshProfile: NextPage = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <div className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        <div className="bg-base-100 rounded-3xl border border-base-300 p-8 md:p-10 space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <div className="text-3xl md:text-4xl font-bold">{PROFILE_DATA.name}</div>
              <div className="bg-base-200 rounded-lg px-2 py-1 border border-base-300 w-fit">
                <Address address={PROFILE_DATA.address} format="short" />
              </div>
            </div>
            <p className="text-sm md:text-base text-base-content/80">{PROFILE_DATA.subtitle}</p>
            <div className="flex flex-col gap-1 text-sm text-base-content/60">
              <span>Age: {PROFILE_DATA.age}</span>
              <span>Birthday: {PROFILE_DATA.birthday}</span>
            </div>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">About</h2>
            <p className="text-base text-base-content/80 leading-relaxed">{PROFILE_DATA.bio}</p>
          </div>

          {/* What I Do */}
          <div className="space-y-3 pt-4 border-t border-base-300">
            <h2 className="text-xl font-semibold">What I Do</h2>
            <p className="text-base text-base-content/80">
              <span className="font-bold">Core Platform Engineer at VectorShift</span> - Building innovative AI/ML
              solutions and full-stack applications.
            </p>
            <p className="text-base text-base-content/80">
              Previously worked on AI-driven experiences and recommendation systems.
            </p>
          </div>

          {/* Skills */}
          <div className="space-y-4 pt-4 border-t border-base-300">
            <h2 className="text-xl font-semibold">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {KEY_SKILLS.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs rounded-full bg-base-200 border border-base-300 hover:border-primary transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrathmeshProfile;
