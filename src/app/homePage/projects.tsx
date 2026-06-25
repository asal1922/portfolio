"use client";
import Image from "next/image";
import images from "@/assets/images";
import { useState } from "react";

const projects = [
  {
    id: 1,
    image: images.ferdowsiCloud,
    link: "https://ferdowsi.cloud/fa",
    title: "Ferdowsi Cloud",
    tags: ["Next.js", "API Integration", "Performance"],
    description:
      "Ferdowsi Cloud Computing Company provides cloud infrastructure solutions. I worked on frontend architecture, API integration, and performance optimization.",
  },
  {
    id: 2,
    image: images.certificate,
    link: "https://github.com/asal1922/mapbox-project",
    title: "Neshan Routing",
    tags: ["Mapbox", "React", "Routing"],
    description:
      "Ranked among the top 4 programmers out of nearly 700 participants in the Neshan routing competition, followed by a full-time one-month internship on real routing challenges.",
  },
  {
    id: 3,
    image: images.whisper,
    link: "https://github.com/asal1922/whisper",
    title: "Whisper Speech AI",
    tags: ["WebSocket", "Three.js", "OpenAI Whisper", "RTX 2080"],
    description:
      "Real-time speech recognition using OpenAI Whisper on an RTX 2080 GPU. Audio streams via WebSocket with instant language detection — built with Three.js for 3D audio visualizations.",
  },
  {
    id: 4,
    image: images.mug,
    link: "https://mug-configur-torr-3wik122hi-asal1922s-projects.vercel.app/",
    title: "Mug Configurator",
    tags: ["Three.js", "React", "3D", "Customization"],
    description:
      "An interactive 3D mug configurator that lets users personalize their own mug in real time — change colors, add text, and preview the final design before ordering.",
  },
];

const Projects = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i - 1 + projects.length) % projects.length);
  const next = () => setCurrent((i) => (i + 1) % projects.length);

  const project = projects[current];

  return (
    <section className="mb-24 px-4">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-3 mb-14">
        <p className="text-sky-400 text-xs tracking-[0.25em] uppercase font-medium">
          Projects
        </p>
        <h3 className="text-white text-2xl md:text-4xl font-semibold max-w-xl leading-snug">
          Here is a sample of projects I&apos;ve worked on
        </h3>
      </div>

      {/* Slider */}
      <div className="relative flex items-center justify-center gap-4">
        {/* Prev Button */}
        <button
          onClick={prev}
          className="z-10 p-2 rounded-full border border-white/10 bg-white/5 hover:bg-sky-500/20 hover:border-sky-500/40 transition-all duration-200 text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Card */}
        <div className="w-full max-w-[480px] overflow-hidden rounded-2xl border border-white/5 shadow-lg shadow-sky-900/10 bg-[#050f1f] transition-all duration-300 hover:border-sky-500/30 hover:shadow-[0_0_28px_4px_rgba(14,165,233,0.12)]">
          <div className="overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={480}
              height={300}
              unoptimized
              className="w-full h-[260px] object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="p-6 flex flex-col gap-4">
            <h4 className="text-white font-semibold text-lg">{project.title}</h4>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-2.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-2 w-fit text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors duration-200 group/link"
            >
              View Project
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Next Button */}
        <button
          onClick={next}
          className="z-10 p-2 rounded-full border border-white/10 bg-white/5 hover:bg-sky-500/20 hover:border-sky-500/40 transition-all duration-200 text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-sky-400 w-5" : "bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;