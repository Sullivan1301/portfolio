'use client';

import { motion } from 'framer-motion';
import Icon from './common/Icon';

const navigationItems = [
  { name: 'About Me', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Soft Skills', href: '#soft-skills' },
  { name: 'Data Science', href: '#data-science' },
  { name: 'Projects', href: '#projects' },
  { name: 'Interests', href: '#interests' },
  { name: 'Blog', href: '#blog' },
  { name: 'Collaborate', href: '#collaborate' },
  { name: 'Contact', href: '#contact' }
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-theme shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-interactive">My Portfolio</h1>
          <ul className="flex space-x-6">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <motion.a
                  href={item.href}
                  className="text-theme hover:text-accent transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
} 