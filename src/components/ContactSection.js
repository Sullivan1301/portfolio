'use client';

import { motion } from 'framer-motion';
import Icon from './common/Icon';

export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 bg-theme">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-theme text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-4">
            <Icon section="contact" name="email" size={32} className="text-interactive" />
            Get In Touch
          </div>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <label htmlFor="name" className="block text-theme mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg bg-primaryBg-light dark:bg-primaryBg-dark text-theme border border-gray-300 dark:border-gray-700"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-theme mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg bg-primaryBg-light dark:bg-primaryBg-dark text-theme border border-gray-300 dark:border-gray-700"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-theme mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-primaryBg-light dark:bg-primaryBg-dark text-theme border border-gray-300 dark:border-gray-700 resize-none"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-interactive text-primaryBg-light dark:text-primaryBg-dark font-semibold hover:bg-accent transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4">
              <Icon section="contact" name="email" size={32} className="text-interactive" />
              <div>
                <h3 className="text-xl font-semibold text-theme">Email</h3>
                <p className="text-theme">jorosullivan13@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Icon section="contact" name="location" size={32} className="text-interactive" />
              <div>
                <h3 className="text-xl font-semibold text-theme">Location</h3>
                <p className="text-theme">Antananarivo, Madagascar</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Icon section="contact" name="linkedin" size={32} className="text-interactive" />
              <a href="https://www.linkedin.com/in/Sullivan%20Rakotoniaina" target="_blank" rel="noopener noreferrer" className="text-interactive hover:text-accent">
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Icon section="contact" name="download" size={32} className="text-interactive" />
              <a href="/your-cv.pdf" download className="text-interactive hover:text-accent">
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 