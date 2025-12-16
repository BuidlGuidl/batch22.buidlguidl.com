import Image from "next/image";
import { Address } from "@scaffold-ui/components";
import { NextPage } from "next";

const skillTreeItems = ["JavaScript", "HTML", "CSS", "React", "Next.js", "Solidity"];

const currentLearningItems = ["TypeScript", "Node.js"];

const EasonPage: NextPage = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-3xl mx-auto px-4 py-10 flex flex-col items-center text-center">
          <Image
            src="/Eason.webp"
            alt="Eason Profile"
            width={128}
            height={128}
            className="w-32 h-32 rounded-full object-cover mb-6 ring-4 ring-gray-100 dark:ring-gray-700"
          />
          <h1 className="text-4xl text-black dark:text-white font-bold mb-4">Eason Yang</h1>
          <Address address="0xB42Bc19a919cFEF651fC3f83EF60C6cb7aD77b8A" />
          <p className="text-gray-600 dark:text-gray-300 mt-6 mb-0">Web3 Newbie</p>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            {/* Medium */}
            <a
              href="https://medium.com/@a16320116129123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
              aria-label="Medium"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
              </svg>
            </a>
          </div>
        </div>
      </header>
      {/* About Section */}
      <main className="max-w-2xl mx-auto px-6 py-12 space-y-20">
        <section id="about" className="mb-8">
          <h2 className="text-gray-900 dark:text-gray-100 mb-6 font-semibold">About Me</h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p>
              I am a university student from Taiwan majoring in Economics, and currently self-studying to become a
              full-stack blockchain developer. It may still be a little bit far from my goal, but I wish to improve
              myself and steadily move forward every day.
            </p>
          </div>
        </section>

        <section id="learning" className="space-y-10">
          {/* Skill Tree */}
          <div>
            <h2 className="text-gray-900 dark:text-gray-100 mb-6 font-semibold">Skill Tree</h2>
            <div className="flex flex-wrap gap-3">
              {skillTreeItems.map(skill => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Currently Learning */}
          <div>
            <h2 className="text-gray-900 dark:text-gray-100 mb-6 font-semibold">Currently Learning</h2>
            <div className="flex flex-wrap gap-3">
              {currentLearningItems.map(skill => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EasonPage;
