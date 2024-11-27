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
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-theme">
      {/* Animated background pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 grid grid-cols-8 gap-4 transform -rotate-12">
          {[...Array(64)].map((_, i) => (
            <div
              key={i}
              className="w-full h-full bg-interactive rounded-full"
            />
          ))}
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 py-20 relative z-10">
        {/* Main content */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-theme mb-6">
              Sullivan Rakotoniaina
            </h1>
            <motion.div
              className="text-xl md:text-2xl text-theme/80 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="text-interactive">Software Engineer</span> & 
              <span className="text-accent ml-2">Data Science Enthusiast</span>
            </motion.div>
          </motion.div>

          {/* Quick intro */}
          <motion.p
            className="text-lg text-theme/80 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Passionate about creating innovative solutions and exploring data-driven insights.
            Let's build something amazing together!
          </motion.p>

          {/* Primary CTA buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.a
              href="#projects"
              className="px-8 py-3 bg-accent text-white rounded-lg font-semibold flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon section="projects" name="demo" size={24} />
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-interactive text-white rounded-lg font-semibold flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon section="contact" name="email" size={24} />
              Get in Touch
            </motion.a>
          </motion.div>
        </div>

        {/* Navigation grid */}
        <motion.nav
          className="grid grid-cols-2 md:grid-cols-5 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {navigationItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className={`relative group p-4 bg-primaryBg-light dark:bg-primaryBg-dark rounded-lg shadow-lg 
                hover:shadow-xl transition-all duration-300 ${
                hoveredNav === index ? 'bg-interactive text-white' : 'text-theme'
              }`}
              onMouseEnter={() => setHoveredNav(index)}
              onMouseLeave={() => setHoveredNav(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex flex-col items-center gap-2">
                <Icon 
                  section="nav" 
                  name={item.icon} 
                  size={24} 
                  className={hoveredNav === index ? 'text-white' : 'text-interactive'} 
                />
                <span className="font-medium">{item.name}</span>
              </div>
              
              {/* Hover effect */}
              <motion.div
                className="absolute inset-0 bg-interactive/10 rounded-lg"
                initial={false}
                animate={{
                  opacity: hoveredNav === index ? 0.1 : 0,
                  scale: hoveredNav === index ? 1.05 : 1,
                  rotate: hoveredNav === index ? 360 : 0
                }}
                transition={{ duration: 0.5 }}
              >
                {/* Add any additional hover effects here */}
              </motion.div>
            </motion.a>
          ))}
        </motion.nav>
      </div>
    </section>
  );
} 