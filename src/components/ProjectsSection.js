'use client';

import { motion } from 'framer-motion';
import Icon from './common/Icon';

const projects = [
  {
    name: 'Harena-UI',
    description: 'A comprehensive UI component library for modern web applications.',
    technologies: ['React', 'TypeScript', 'Styled Components'],
    github: 'https://github.com/yourusername/harena-ui',
    demo: 'https://harena-ui.demo.com'
  },
  {
    name: 'Family Calendar',
    description: 'A collaborative calendar app for families to manage schedules and events.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/family-calendar',
    demo: 'https://family-calendar.demo.com'
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-theme">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-theme text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-4">
            <Icon section="projects" name="github" size={32} className="text-interactive" />
            Projects
          </div>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-primaryBg-light dark:bg-primaryBg-dark p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold text-theme mb-4">{project.name}</h3>
              <p className="text-theme mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="bg-interactive text-primaryBg-light dark:text-primaryBg-dark px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-interactive hover:text-accent">
                  <Icon section="projects" name="github" size={24} />
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-interactive hover:text-accent">
                  <Icon section="projects" name="demo" size={24} />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 