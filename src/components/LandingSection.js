'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Icon from './common/Icon';

export default function LandingSection() {
  const [hoveredNav, setHoveredNav] = useState(null);

  const navigationItems = [
    { name: 'About', icon: 'about', href: '#about' },
    { name: 'Experience', icon: 'experience', href: '#experience' },
    { name: 'Skills', icon: 'technical', href: '#skills' },
    { name: 'Soft Skills', icon: 'soft', href: '#soft-skills' },
    { name: 'Data Science', icon: 'technical', href: '#data-science' },
    { name: 'Projects', icon: 'projects', href: '#projects' },
    { name: 'Interests', icon: 'interests', href: '#interests' },
    { name: 'Blog', icon: 'about', href: '#blog' },
    { name: 'Collaborate', icon: 'goals', href: '#collaborate' },
    { name: 'Contact', icon: 'email', href: '#contact' }
  ];

  return (
    <section className="landing-section">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Sullivan Rakotoniaina</h1>
        <p className="text-xl md:text-2xl mt-4">Software Engineer & Data Science Enthusiast</p>
        <a href="#about" className="mt-8 inline-block px-6 py-3 bg-accent text-white rounded-lg">
          Who Am I?
        </a>
      </div>
    </section>
  );
} 