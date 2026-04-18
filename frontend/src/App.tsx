import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";

import HeroSection from "./sections/HeroSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ContactSection from "./sections/ContactSection";

import SoftwarePage from "./pages/SoftwarePage";
import LoginPage from "./pages/LoginPage";

import type { ReactNode } from "react";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

// 🔥 Main Portfolio Layout
function MainPortfolio() {
  return (
    <>
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="relative text-white overflow-x-hidden">

        {/* 🌌 BASE GRADIENT */}
        <div className="fixed inset-0 -z-50 bg-gradient-to-br from-[#050816] via-black to-[#02040a]" />

        {/* 🌈 SIDE LIGHTING */}
        <div className="fixed inset-0 -z-40 bg-gradient-to-r from-indigo-500/10 via-transparent to-purple-500/10" />

        {/* 🔵 TOP GLOW */}
        <div className="fixed top-[-150px] left-[-150px] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[140px] -z-30" />

        {/* 🟣 BOTTOM GLOW */}
        <div className="fixed bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[140px] -z-30" />

        {/* 🟦 CENTER GLOW */}
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[160px] -z-30" />

        {/* ✨ GRID */}
        <div className="fixed inset-0 -z-20 opacity-[0.07] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* 🎛️ NOISE (optional) */}
        <div className="fixed inset-0 -z-10 opacity-[0.05] bg-[url('/noise.png')]" />

        {/* 🌐 Global UI */}
        <ScrollProgress />
        <CursorGlow />

        {/* 🚀 Routes */}
        <Routes>
          <Route path="/" element={<MainPortfolio />} />
          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/software"
            element={
              <ProtectedRoute>
                <SoftwarePage />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}