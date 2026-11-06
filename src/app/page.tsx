"use client";

import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { HeroSection } from "@/components/hero-section/hero-section";
import { ExperienceSection } from "@/components/experience-section/experience-section";
import { EducationSection } from "@/components/education-section/education-section";
import { ProjectsSection } from "@/components/projects-section/projects-section";
import { ContactSection } from "@/components/contact-section/contact-section";

export default function Home() {
  return (
    <>
      <a className="fixed -top-20 left-5 z-10 bg-[rgb(var(--text))] p-4 text-[rgb(var(--bg-1))] focus:top-3" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
