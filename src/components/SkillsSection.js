'use client';

import { motion } from 'framer-motion';
import Icon from './common/Icon';

const skills = [
  {
    name: 'Technical Skills',
    icon: 'technical',
    items: [
      { name: 'JavaScript/TypeScript', level: 85 },
      { name: 'React', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'Django', level: 70 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'Node.js', level: 65 }
    ]
  },
  {
    name: 'Soft Skills',
    icon: 'soft',
    items: [
      { name: 'Communication', level: 90 },
      { name: 'Problem Solving', level: 85 },
      { name: 'Team Work', level: 90 },
      { name: 'Adaptability', level: 85 }
    ]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-theme">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-theme text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-4">
            <Icon section="skills" name="technical" size={32} className="text-interactive" />
            Skills
          </div>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Icon section="skills" name={category.icon} size={32} className="text-interactive" />
                <h3 className="text-2xl font-semibold text-theme">{category.name}</h3>
              </div>
              
              {category.items.map((skill, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between text-theme">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div 
                      className="bg-interactive h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 