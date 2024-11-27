'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import Icon from './Icon';

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-interactive"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon
        section="theme"
        name={isDarkMode ? 'light' : 'dark'}
        size={24}
        className="text-secondaryBg"
      />
    </motion.button>
  );
} 