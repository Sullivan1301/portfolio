'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Icon from './common/Icon';

const blogPosts = [
  {
    title: "How I built my first React app",
    excerpt: "In this post, I share my journey of building my first React application, including challenges faced and lessons learned.",
    date: "2023-05-15",
    readTime: "5 min read",
    link: "#"
  },
  {
    title: "Lessons from a Data Science project I completed",
    excerpt: "Dive into the insights I gained from a recent data science project, exploring data analysis techniques and machine learning algorithms.",
    date: "2023-06-02",
    readTime: "8 min read",
    link: "#"
  },
  {
    title: "The importance of soft skills in tech",
    excerpt: "Discover why soft skills are crucial in the tech industry and how they can complement your technical abilities to advance your career.",
    date: "2023-06-20",
    readTime: "6 min read",
    link: "#"
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-theme">
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
              Blog
            </span>
          </h2>
          <p className="mt-4 text-theme/80 max-w-2xl mx-auto">
            I write about topics that interest me, including tech trends, Data Science, 
            programming tips, and lessons learned from various projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              className="bg-primaryBg-light dark:bg-primaryBg-dark p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={post.link} className="block group">
                <h3 className="text-xl font-semibold text-theme mb-3 group-hover:text-interactive transition-colors">
                  {post.title}
                </h3>
                <p className="text-theme/80 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center text-sm text-theme/60">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link 
            href="#"
            className="inline-flex items-center gap-2 text-interactive hover:text-accent transition-colors"
          >
            <span>View all blog posts</span>
            <Icon section="projects" name="demo" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 