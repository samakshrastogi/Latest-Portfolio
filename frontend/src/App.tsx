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
      <div className="bg-[var(--bg)] text-[var(--text)] overflow-x-hidden">

        {/* 🌐 Global UI */}
        <ScrollProgress />
        <CursorGlow />

        {/* 🚀 Routes */}
        <Routes>
          {/* Public */}
          <Route path="/" element={<MainPortfolio />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Protected */}
          <Route
            path="/software"
            element={
              <ProtectedRoute>
                <SoftwarePage />
              </ProtectedRoute>
            }
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

      </div>
    </Router>
  );
}