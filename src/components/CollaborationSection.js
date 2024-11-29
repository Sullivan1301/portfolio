'use client';

import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';
import Icon from './common/Icon';

// Real skills and technologies you work with
const skillTags = [
  'React', 'Node.js', 'Python', 'Django', 'Java', 'SpringBoot',
  'JavaScript', 'TypeScript','Jira', 'PostgreSQL', 'Google Workspace',
  'Next.js', 'TailwindCSS', 'Git', 'REST API', 'Linux'
];

export default function CollaborationSection() {
  const cloudControls = useAnimation();

  // Animate the skill cloud
  useEffect(() => {
    cloudControls.start({
      scale: [1, 1.1, 1],
      rotate: [0, 5, -5, 0],
      transition: { duration: 10, repeat: Infinity, repeatType: "reverse" }
    });
  }, [cloudControls]);

  const contactLinks = [
    {
      name: 'Email',
      icon: 'email',
      link: 'mailto:jorosullivan13@gmail.com',
      text: 'jorosullivan13@gmail.com',
      isPrimary: true
    },
    {
      name: 'LinkedIn',
      icon: 'linkedin',
      link: 'https://www.linkedin.com/in/Sullivan%20Rakotoniaina',
      text: 'Sullivan Rakotoniaina',
      isPrimary: false
    },
    {
      name: 'GitHub',
      icon: 'github',
      link: 'https://github.com/Sullivan1301',
      text: 'Sullivan1301',
      isPrimary: false
    }
  ];

  return (
    <section id="collaborate" className="py-20 bg-theme relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 grid grid-cols-6 gap-4">
          {[...Array(24)].map((_, i) => (
            <div
              key={i}
              className="w-full h-full bg-interactive rounded-full transform rotate-45"
            />
          ))}
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-theme">
            <span className="flex items-center justify-center gap-4">
              <Icon section="about" name="goals" size={32} className="text-interactive" />
              Open to Collaborations
            </span>
          </h2>
          <p className="mt-4 text-theme/80 max-w-2xl mx-auto">
            I'm always open to collaborating on exciting projects, whether it's for internships, 
            freelance work, or learning new technologies. Let's connect and discuss how we can 
            create something great together!
          </p>
        </motion.div>

        {/* Technologies and Skills */}
        <motion.div
          className="mb-12 p-8 bg-primaryBg-light dark:bg-primaryBg-dark rounded-lg shadow-lg"
          animate={cloudControls}
        >
          <h3 className="text-2xl font-semibold text-theme mb-4 text-center">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {skillTags.map((skill, index) => (
              <motion.span
                key={skill}
                className="px-3 py-1 bg-interactive text-white rounded-full text-sm"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        

        {/* Contact Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactLinks.map((contact, index) => (
            <motion.a
              key={contact.name}
              href={contact.link}
              target={contact.name !== 'Email' ? '_blank' : '_self'}
              rel={contact.name !== 'Email' ? 'noopener noreferrer' : ''}
              className={`group relative overflow-hidden ${
                contact.isPrimary 
                  ? 'bg-accent text-white' 
                  : 'bg-primaryBg-light dark:bg-primaryBg-dark text-theme'
              } p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Hover effect background */}
              <div className={`absolute inset-0 ${
                contact.isPrimary 
                  ? 'bg-accent/20' 
                  : 'bg-interactive/10'
              } transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300`} />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-3">
                  <Icon 
                    section="contact" 
                    name={contact.icon} 
                    size={28} 
                    className={contact.isPrimary ? 'text-white' : 'text-interactive'} 
                  />
                  <h3 className="text-xl font-semibold">{contact.name}</h3>
                </div>
                <p className={`text-sm ${contact.isPrimary ? 'text-white/90' : 'text-theme/80'}`}>
                  {contact.text}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          className="text-center bg-primaryBg-light dark:bg-primaryBg-dark p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-theme mb-4">
            Let's Create Something Amazing
          </h3>
          <p className="text-theme/80 mb-6 max-w-2xl mx-auto">
            Whether you have a specific project in mind or want to explore possibilities,
            I'm excited to hear from you. Let's turn ideas into reality!
          </p>
        </motion.div>
      </div>
    </section>
  );
} 