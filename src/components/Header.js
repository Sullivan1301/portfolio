'use client';

import { motion } from 'framer-motion';
import Icon from './common/Icon';

const navigationItems = [
  { name: 'About Me', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Interests', href: '#interests' },
 // { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Collaborate', href: '#collaborate' },
  { name: 'Contact', href: '#contact' }
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-black items-center justify-center">
        Joro Sullivan
        </h1>
          <ul className="flex space-x-6">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <motion.a
                  href={item.href}
                  className="text-theme hover:text-accent transition-colors"
                >
                  {item.name}
                </motion.a>
              </li>
            ))}
          </ul>
          <img
          src="/images/photo_cv.jpg"
          alt="Sullivan Icon"
          className="w-10 h-10 rounded-full mr-2"
        />
        </nav>
      </div>
    </header>
  );
} 