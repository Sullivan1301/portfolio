'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
  return (
    <section className="bg-[#EDF2F6] py-20" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-[#6A7EFC] mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        {/* Add project details here */}
      </div>
    </section>
  );
} 