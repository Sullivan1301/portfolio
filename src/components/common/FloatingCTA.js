 'use client';

import { motion } from 'framer-motion';
import Icon from './Icon';
import { useState } from 'react';

export default function FloatingCTA() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="fixed bottom-4 right-4 z-50 flex items-center gap-4"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1 }}
    >
      {/* Contact Options - Only visible when expanded */}
      {isExpanded && (
        <motion.div
          className="flex gap-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
        >
          <a
            href="mailto:your.email@example.com"
            className="bg-interactive p-3 rounded-full text-white hover:bg-accent transition-colors shadow-lg"
            title="Email me"
          >
            <Icon section="contact" name="email" size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-interactive p-3 rounded-full text-white hover:bg-accent transition-colors shadow-lg"
            title="Connect on LinkedIn"
          >
            <Icon section="contact" name="linkedin" size={24} />
          </a>
        </motion.div>
      )}

      {/* Main CTA Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-accent text-white px-6 py-3 rounded-full font-semibold shadow-lg flex items-center gap-2 hover:bg-accent/90 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Icon 
          section={isExpanded ? 'nav' : 'about'} 
          name={isExpanded ? 'close' : 'interests'} 
          size={24} 
        />
        <span className="whitespace-nowrap">
          {isExpanded ? 'Close' : "Let's Collaborate!"}
        </span>
      </motion.button>
    </motion.div>
  );
}