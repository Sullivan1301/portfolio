'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { FaDownload, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';

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
          <div className="relative group">
            <Image
              src="/images/photo_cv.jpg"
              alt="Sullivan Icon"
              className="w-10 h-10 rounded-full mr-2 cursor-pointer"
              width={40}
              height={40}
            />
            <AnimatePresence>
              {isDropdownOpen &&(
              <motion.div
                className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10 border border-gray-300 opacity-0 group-hover:opacity-100 transition-opacity"
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }} 
                >
                  <ul className="py-2">
                <li>
                  <a
                    href="/public/docs/CV_Joro Sullivan_RAKOTONIAINA.pdf" // Replace with the actual path to your CV
                    download
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <FaDownload className="mr-2" />
                    Download CV
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/261341060802" // WhatsApp link
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <FaWhatsapp className="mr-2" />
                    Contact on WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/your-linkedin-profile" // Replace with your LinkedIn profile link
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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