import { useEffect } from "react";
import Navbar from "./components/Navbar";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";
import logo from "./assets/logo.png";

import HeroSection from "./sections/HeroSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import ExperienceSection from "./sections/ExperienceSection";
import SystemsSection from "./sections/SystemsSection";
import ContactSection from "./sections/ContactSection";

// 🔥 Main Portfolio Layout
export default function App() {
  useEffect(() => {
    const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
    if (!favicon) return;

    const image = new Image();
    image.src = logo;

    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;

      const context = canvas.getContext("2d");
      if (!context) return;

      context.beginPath();
      context.arc(32, 32, 32, 0, Math.PI * 2);
      context.closePath();
      context.clip();
      context.drawImage(image, 0, 0, 64, 64);

      favicon.href = canvas.toDataURL("image/png");
      favicon.type = "image/png";
    };
  }, []);

  return (
    <div className="relative text-white overflow-x-hidden">
      <Navbar />

      <div className="fixed inset-0 -z-50 bg-gradient-to-br from-[#050816] via-black to-[#02040a]" />
      <div className="fixed inset-0 -z-40 bg-gradient-to-r from-indigo-500/10 via-transparent to-purple-500/10" />
      <div className="fixed top-[-150px] left-[-150px] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[140px] -z-30" />
      <div className="fixed bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[140px] -z-30" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[160px] -z-30" />
      <div className="fixed inset-0 -z-20 opacity-[0.07] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="fixed inset-0 -z-10 opacity-[0.05] bg-[url('/noise.png')]" />

      <ScrollProgress />
      <CursorGlow />

      <main className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <SystemsSection />
        <ContactSection />
      </main>
    </div>
  );
}
