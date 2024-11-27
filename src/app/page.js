'use client';

import LandingSection from '../components/LandingSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import CollaborationSection from '../components/CollaborationSection';
import ContactSection from '../components/ContactSection';
import DataScienceSection from '@/components/DataScienceSection';
import BlogSection from '@/components/BlogSection';
import SoftSkillsSection from '@/components/SoftSkillsSection';
import InterestsSection from '@/components/InterestsSection';

export default function Home() {
  return (
    <main>
      <LandingSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <SoftSkillsSection />
      <InterestsSection />
      <DataScienceSection />
      <ProjectsSection />
      <BlogSection />
      <CollaborationSection />
      <ContactSection />
    </main>
  );
} 