'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="bg-[#EDF2F6] py-20" id="about">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
          src="/images/pull_rouge.jpg"
          alt="Sullivan"
          className="rounded-full shadow-lg max-w-96  h-85"
          width={384}
          height={256}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="md:w-1/2 md:pl-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-[#6A7EFC] mb-4">About Me</h2>
          <p className="text-[#494953] mb-2">
            Hi, I’m Sullivan, a tech enthusiast aiming to bridge the gap between technology and business.
          </p>
          <p className="text-[#494953] mb-2">
            Currently, I’m a 3rd-year computer science student at Haute École d’Informatique, Madagascar, with a strong foundation in programming and project management.
          </p>
          <p className="text-[#494953] mb-2">
            I aspire to become a leader in the tech industry, specializing in digital marketing and IT management, to drive innovation and growth for businesses.
          </p>
          <p className="text-[#494953] mb-2">
            Outside of work, I enjoy playing PUBG Mobile, exploring new tools in digital marketing, and reading about leadership and strategy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

              