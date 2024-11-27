'use client';

import { 
  FaBriefcase, 
  FaProjectDiagram,
  FaCode,
  FaUsers,
  FaGraduationCap,
  FaBullseye,
  FaHeart,
  FaGithub,
  FaExternalLinkAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaFileDownload,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes
} from 'react-icons/fa';

const icons = {
  experience: {
    work: FaBriefcase,
    project: FaProjectDiagram
  },
  skills: {
    technical: FaCode,
    soft: FaUsers
  },
  about: {
    education: FaGraduationCap,
    goals: FaBullseye,
    interests: FaHeart
  },
  projects: {
    github: FaGithub,
    demo: FaExternalLinkAlt
  },
  contact: {
    email: FaEnvelope,
    location: FaMapMarkerAlt,
    linkedin: FaLinkedin,
    download: FaFileDownload
  },
  theme: {
    dark: FaMoon,
    light: FaSun
  },
  nav: {
    menu: FaBars,
    close: FaTimes
  }
};

export default function Icon({ section, name, size = 24, className = '' }) {
  const IconComponent = icons[section]?.[name];

  if (!IconComponent) {
    console.warn(`Icon not found: ${section}/${name}`);
    return null;
  }

  return <IconComponent size={size} className={`${className} transition-colors duration-200`} />;
} 