'use client';

import LandingSection from '../components/LandingSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import CollaborationSection from '../components/CollaborationSection';
import ContactSection from '../components/ContactSection';
import BlogSection from '@/components/BlogSection';
import InterpersonalSkillsSection from '@/components/InterpersonalSkillsSection';
import InterestsSection from '@/components/InterestsSection';

export default function Home() {
  return (
    <main>
      <LandingSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <InterpersonalSkillsSection />
      <InterestsSection />
      <ProjectsSection />
      <BlogSection />
      <CollaborationSection />
      <ContactSection />
    </main>
  );
} 