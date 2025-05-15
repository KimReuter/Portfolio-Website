import { motion } from 'framer-motion';

const SkillsSection = () => {
  return (
    <motion.section
      id="skills"
      className="py-24 bg-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-4">💻 Technologies</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Swift</li>
              <li>SwiftUI</li>
              <li>Kotlin</li>
              <li>Jetpack Compose</li>
              <li>Retrofrit</li>
              <li>MVVM</li>
              
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">🛠 Tools</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Git & GitHub</li>
              <li>Xcode</li>
              <li>Android Studio</li>
              <li>Firebase</li>
              <li>Postman</li>
              <li>Imgur</li>
              <li>VS Code</li>
              <li>Figma</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">🧠 Soft Skills</h3>
            <ul className="space-y-2 text-gray-700">
              <li>Organizational Skills</li>
              <li>Intuition & Empathy</li>
              <li>Creativity</li>
              <li>Analytical Thinking</li>
              <li>Structured Implementation</li>
              <li>Quick Learning</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;