"use client";
import { useState } from "react";
import Image from "next/image";
import images from "@/assets/images";

type Skill = {
  name: string;
  image: any;
};

type SkillCategory = {
  title: string;
  icon: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Core",
    icon: "⚡",
    skills: [
      { name: "JavaScript", image: images.js },
      { name: "TypeScript", image: images.typeScript },
      { name: "React", image: images.react },
      { name: "Next.js", image: images.nextJs },
      { name: "React Three Fiber", image: images.reactThreeFiber },
      { name: "Mapbox", image: images.mapBox },
    ],
  },
  {
    title: "State Management",
    icon: "🗂️",
    skills: [
      { name: "Redux", image: images.redux },
      { name: "Redux Thunk", image: images.reduxThunk },
      { name: "Zustand", image: images.zustand },
      { name: "React Query", image: images.reactQuery },
    ],
  },
  {
    title: "API & Real-Time",
    icon: "🔌",
    skills: [
      { name: "Axios", image: images.axios },
      { name: "REST API", image: images.rest },
      { name: "WebSocket", image: images.webSocket },
    ],
  },
  {
    title: "UI & Styling",
    icon: "🎨",
    skills: [
      { name: "Tailwind CSS", image: images.tailwind },
      { name: "shadcn/ui", image: images.shadcn },
      { name: "Material UI", image: images.mui },
    ],
  },
  {
    title: "Tools",
    icon: "🛠️",
    skills: [
      { name: "Git", image: images.git },
      { name: "Linux", image: images.linux },
      { name: "Docker", image: images.docker },
    ],
  },
];

const SkillCard = ({ name, image }: Skill) => (
  <div className="skill-card flex flex-col items-center gap-3 cursor-pointer group">
    <div className="skill-icon-wrapper relative w-20 h-20 flex items-center justify-center  transition-all duration-300  group-hover:-translate-y-1">
      <Image
        src={image}
        alt={name}
        width={80}
        height={80}
        unoptimized
        className="object-contain !w-20 !h-20 shadow transition-transform duration-300 group-hover:scale-110 rounded-xl border-2 border-blue-500"
      />
    </div>
    <p className="text-xs text-gray-500 text-center leading-tight tracking-wide group-hover:text-blue-300 transition-colors duration-300">
      {name}
    </p>
  </div>
);

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);

  const active = skillCategories[activeTab];

  return (
    <section className="w-full py-20 px-4 flex flex-col items-center gap-12">
      <div className="text-center space-y-3">
        <p className="text-blue-400 text-xs tracking-[0.25em] uppercase font-medium">Skills</p>
        <h1 className="text-2xl md:text-4xl font-semibold text-white">
          Tools &amp; Technologies I Use
        </h1>
        <p className="text-gray-500 text-sm">Technologies I work with in real projects</p>
      </div>

      <div className="w-full max-w-3xl">
        <div className="flex flex-wrap justify-center gap-2">
          {skillCategories.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 border
                ${activeTab === i
                  ? "bg-blue-500/15 border-blue-400/50 text-blue-300 shadow-[0_0_14px_2px_rgba(96,165,250,0.2)]"
                  : "bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-200 hover:border-white/15"
                }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.title}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="w-full max-w-3xl">
        <div
          key={active.title}
          className="animate-fade-in flex flex-wrap gap-6 justify-center"
        >
          {active.skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default Skills;