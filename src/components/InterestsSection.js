'use client';

import { motion } from 'framer-motion';
import Icon from './common/Icon';

const interests = [
  {
    title: 'Gaming Enthusiast',
    icon: 'gaming',
    description: "When I'm not coding, I love playing PUBG Mobile, where I enjoy the challenge and the competitive aspect of the game.",
    details: {
      game: 'PUBG Mobile',
      achievement: 'Competitive Player',
      platform: 'Mobile'
    }
  },
  {
    title: 'Sports Lover',
    icon: 'sports',
    description: "I also play volleyball and basketball in my free time, which keeps me active and helps me develop team-oriented skills.",
    details: {
      sports: ['Volleyball', 'Basketball'],
      type: 'Recreational'
    }
  },
  {
    title: 'Reading',
    icon: 'book',
    description: "I enjoy reading books, especially those related to technology, personal growth, and productivity.",
    details: {
      genres: ['Technology', 'Personal Growth', 'Productivity'],
      format: ['Physical Books', 'E-books']
    }
  }
];

export default function InterestsSection() {
  return (
    <section id="interests" className="py-20 bg-theme">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-theme">
            <span className="flex items-center justify-center gap-4">
              <Icon section="about" name="interests" size={32} className="text-interactive" />
              Fun Facts About Me
            </span>
          </h2>
          <p className="mt-4 text-theme/80 max-w-2xl mx-auto">
            Beyond coding, here are some activities that keep me energized and balanced.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Card Front */}
              <motion.div
                className="bg-primaryBg-light dark:bg-primaryBg-dark p-6 rounded-lg shadow-lg h-full transform-gpu transition-transform duration-500 group-hover:scale-95"
                whileHover={{ scale: 0.95 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-interactive/10"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon 
                      section="interests" 
                      name={interest.icon} 
                      size={24} 
                      className="text-interactive" 
                    />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-theme group-hover:text-accent transition-colors">
                    {interest.title}
                  </h3>
                </div>
                <p className="text-theme/80 mb-4">
                  {interest.description}
                </p>

                {/* Details Section */}
                <div className="space-y-2">
                  {Object.entries(interest.details).map(([key, value]) => (
                    <div key={key} className="text-sm">
                      <span className="text-interactive font-medium capitalize">
                        {key}:
                      </span>
                      <span className="text-theme/80 ml-2">
                        {Array.isArray(value) ? value.join(', ') : value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Hover Effect Overlay */}
              <motion.div
                className="absolute inset-0 bg-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional Interactive Element */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-theme/80 mb-4">
            Want to connect over shared interests?
          </p>
          <motion.div
            className="flex items-center justify-center gap-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* PUBG Mobile */}
            <a
              href="https://www.pubgmobile.com/en-US/home.shtml"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-interactive text-white rounded-lg font-medium flex items-center gap-2 hover:bg-accent transition-colors"
            >
              <Icon section="interests" name="gaming" size={20} />
              PUBG Profile
            </a>

            {/* LinkedIn for professional connections */}
            <a
              href="https://www.linkedin.com/in/Sullivan%20Rakotoniaina"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-interactive text-white rounded-lg font-medium flex items-center gap-2 hover:bg-accent transition-colors"
            >
              <Icon section="contact" name="linkedin" size={20} />
              Connect
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 