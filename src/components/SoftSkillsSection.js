'use client';

import { motion } from 'framer-motion';
import Icon from './common/Icon';

const softSkills = [
  {
    name: 'Adaptability',
    icon: 'adaptability',
    description: "Throughout my studies and projects, I've learned how to quickly adapt to new technologies and changing environments. For instance, during my role as IT Support, I was tasked with troubleshooting various new tools and tech setups, which required a flexible approach."
  },
  {
    name: 'Communication',
    icon: 'communication',
    description: "Whether it's explaining complex technical problems or discussing project requirements with non-tech team members, I always strive to communicate clearly and effectively."
  },
  {
    name: 'Teamwork & Leadership',
    icon: 'teamwork',
    description: "I've worked on multiple collaborative projects, both in school and professionally, where my ability to work well in teams has been essential to success."
  }
];

export default function SoftSkillsSection() {
  return (
    <section id="soft-skills" className="py-20 bg-theme">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-theme">
            <span className="flex items-center justify-center gap-4">
              <Icon section="skills" name="soft" size={32} className="text-interactive" />
              Soft Skills
            </span>
          </h2>
          <p className="mt-4 text-theme/80 max-w-2xl mx-auto">
            Beyond technical expertise, these interpersonal skills have been crucial in my professional journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {softSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-primaryBg-light dark:bg-primaryBg-dark p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-interactive/10 mx-auto"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Icon 
                  section="skills" 
                  name={skill.icon} 
                  size={32} 
                  className="text-interactive" 
                />
              </motion.div>
              <h3 className="text-xl font-semibold text-interactive mb-2 text-center">
                {skill.name}
              </h3>
              <p className="text-theme/80 text-center">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Interactive element: Skill endorsement */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-theme/80 mb-4">
            Do these soft skills resonate with you? Endorse them!
          </p>
          <motion.button
            className="px-6 py-3 bg-interactive text-white rounded-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert("Thank you for the endorsement!")}
          >
            Endorse Skills
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 