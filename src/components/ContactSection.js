'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="bg-[#EDF2F6] py-20" id="contact">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#6A7EFC] mb-4">Contact Me</h2>
        <p className="text-[#494953] mb-4">I would love to hear from you!</p>
        <button
          onClick={handleModalToggle}
          className="bg-[#6A7EFC] text-white px-6 py-2 rounded-lg"
        >
          Send a Message
        </button>

        {/* Modal */}
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-6 max-w-sm w-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <h3 className="text-lg font-bold mb-4">Send Me a Message</h3>
              <p className="mb-4">Choose how you would like to contact me:</p>
              <div className="flex flex-col space-y-2">
                <a
                  href="mailto:your-email@example.com" // Replace with your email
                  className="bg-[#6A7EFC] text-white text-center px-4 py-2 rounded-lg"
                >
                  Send Email
                </a>
                <a
                  href="https://wa.me/261341060802" // WhatsApp link
                  className="bg-[#25D366] text-white text-center px-4 py-2 rounded-lg"
                >
                  Send WhatsApp Message
                </a>
              </div>
              <button
                onClick={handleModalToggle}
                className="mt-4 text-red-500"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
} 