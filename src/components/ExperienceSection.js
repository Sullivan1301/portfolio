'use client';

import { motion } from 'framer-motion';
import Icon from './common/Icon';

const experiences = [
  {
    type: 'work',
    title: 'IT Support',
    company: "Haute École d'Informatique",
    date: 'February - August 2022',
    responsibilities: [
      'Managed IT infrastructure',
      'Resolved technical issues',
      'Maintained equipment',
      'Provided technical support to students and staff'
    ]
  },
  {
    type: 'project',
    title: 'Property Management System',
    company: 'Academic Project',
    date: '2022',
    responsibilities: [
      'Developed a real estate management system',
      'Implemented user authentication',
      'Created property listing features',
      'Integrated payment processing'
    ]
  },
  {
    type: 'project',
    title: 'Gas Station Management',
    company: 'Academic Project',
    date: '2022',
    responsibilities: [
      'Built a system for managing gas station operations',
      'Implemented inventory tracking',
      'Created sales reporting features',
      'Developed employee management system'
    ]
  },
  {
    type: 'project',
    title: 'Restaurant Chain Management',
    company: 'Academic Project',
    date: '2021',
    responsibilities: [
      'Developed a restaurant management platform',
      'Implemented order processing system',
      'Created staff scheduling features',
      'Integrated inventory management'
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-theme">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-theme text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-4">
            <Icon section="experience" name="work" size={32} className="text-interactive" />
            Experience
          </div>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-interactive" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-interactive rounded-full" />

                <div className={`bg-primaryBg-light dark:bg-primaryBg-dark p-6 rounded-lg shadow-lg ${
                  index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'
                }`}>
                  <div className="flex items-center gap-4 mb-4">
                    <Icon 
                      section="experience" 
                      name={experience.type === 'work' ? 'work' : 'project'} 
                      size={32}
                      className="text-interactive" 
                    />
                    <h3 className="text-2xl font-semibold text-theme">{experience.title}</h3>
                  </div>
                  <p className="text-theme/80 mb-2">{experience.company}</p>
                  <p className="text-theme/60 mb-4">{experience.date}</p>
                  <ul className="list-disc list-inside text-theme">
                    {experience.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 