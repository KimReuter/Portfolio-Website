'use client';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">My Story</h2>

        {/* 💡 */}
        <motion.div
          className="flex items-center space-x-6 mb-6 flex-wrap"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl mb-4 sm:mb-0">💡</div>
          <p className="text-lg leading-relaxed flex-1">
            As an app developer with an entrepreneurial background, I bring not only technical expertise but also a clear understanding of the real value of digital solutions.
          </p>
        </motion.div>

        {/* 🚀 */}
        <motion.div
          className="flex items-center space-x-6 mb-6 flex-wrap"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl mb-4 sm:mb-0">🚀</div>
          <p className="text-lg leading-relaxed flex-1">
            My path into IT was anything but traditional – and that's exactly my strength. From the desire to work independently, remotely, and purposefully, I discovered app development during my parental leave.
          </p>
        </motion.div>

        {/* 🌱 */}
        <motion.div
          className="flex items-center space-x-6 mb-6 flex-wrap"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl mb-4 sm:mb-0">🌱</div>
          <p className="text-lg leading-relaxed flex-1">
            What excites me: the ability to improve the lives of others with intuitively designed, thoughtful applications – whether in the areas of sustainability, health, or family life.
          </p>
        </motion.div>

        {/* 💼 */}
        <motion.div
          className="flex items-center space-x-6 mb-6 flex-wrap"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl mb-4 sm:mb-0">💼</div>
          <p className="text-lg leading-relaxed flex-1">
            In addition to my work as an app developer, I am also an entrepreneur running my own business. This experience has not only strengthened my business acumen but also helped me develop a high level of creativity, time management, and the ability to balance multiple projects at once. My entrepreneurial journey continues to inspire and shape my work in the tech field.
          </p>
        </motion.div>

        {/* 🎓 */}
        <motion.div
          className="flex items-center space-x-6 flex-wrap"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl mb-4 sm:mb-0">🎓</div>
          <p className="text-lg leading-relaxed flex-1">
            Currently, I'm advancing my education in computer science and pursuing a part-time degree. My goal: projects with purpose, technology with integrity, and a working environment that emphasizes mutual respect, innovation, and real impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;