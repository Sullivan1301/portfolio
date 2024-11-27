'use client';

import { motion } from 'framer-motion';
import Icon from './common/Icon';
import { useState } from 'react';

export default function AboutSection() {
  const aboutItems = [
    {
      icon: 'education',
      title: 'Education',
      description: 'Haute École d Informatique - Software Engineering'
    },
    {
      icon: 'goals',
      title: 'Goals',
      description: 'Passionate about creating innovative solutions and contributing to meaningful projects'
    },
    {
      icon: 'interests',
      title: 'Interests',
      description: 'Technology, Programming, Problem Solving, and Continuous Learning'
    }
  ];

  return (
    <section id="about" className="py-20 bg-theme">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-theme">
            <span className="flex items-center justify-center gap-4">
              <Icon section="about" name="education" size={32} className="text-interactive" />
              About Me
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="w-64 h-64 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-500">Profile Image</span>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {aboutItems.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center gap-4">
                  <Icon 
                    section="about" 
                    name={item.icon} 
                    size={32} 
                    className="text-interactive"
                  />
                  <h3 className="text-xl font-semibold text-theme">
                    {item.title}
                  </h3>
                </div>
                <p className="text-theme/80 pl-12">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
    
  );
  <div className="space-y-4">
              <div>
                <h3 className="text-[#6A7EFC] font-semibold text-xl mb-2">
                  Academic Background
                </h3>
                <p className="text-[#494953]">
                  3rd-year student at Haute École d'Informatique, Antananarivo.
                </p>
              </div>

              <div>
                <h3 className="text-[#6A7EFC] font-semibold text-xl mb-2">
                  Professional Goals
                </h3>
                <p className="text-[#494953]">
                  Aspiring to become an expert in Data Science, Front-End Development, and Product Management.
                </p>
              </div>

              <div>
                <h3 className="text-[#6A7EFC] font-semibold text-xl mb-2">
                  Personal Interests
                </h3>
                <p className="text-[#494953]">
                  I enjoy reading, listening to music, and playing PUBG Mobile.
                </p>
              </div>
            </div>
} 
            

              