'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { FaDownload, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import { useEffect, useRef } from 'react';

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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-black">
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
          <div className="relative" ref={dropdownRef}>
            {/* Bouton pour ouvrir/fermer le dropdown */}
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <Image
                src="/images/photo_cv.jpg"
                alt="Sullivan Icon"
                className="w-15 h-15 rounded-full"
                width={45}
                height={40}
              />
      
            </button>

            {/* Dropdown menu */}
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10 border border-gray-300"
                >
                  <ul className="py-2">
                    <li>
                      <a
                        href="/public/docs/CV_Joro Sullivan_RAKOTONIAINA.pdf"
                        download
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        <FaDownload className="mr-2" />
                        Download CV
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://wa.me/261341060802"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        <FaWhatsapp className="mr-2" />
                        Contact on WhatsApp
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/your-linkedin-profile"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        <FaLinkedinIn className="mr-2" />
                        LinkedIn Profile
                      </a>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>
      </div>
    </header>
  );
}