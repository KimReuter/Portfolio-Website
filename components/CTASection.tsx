'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const CTASection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end start'] });

  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ['-40px', '60px']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <section ref={ref} className="relative w-full h-[60vh] sm:h-screen overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{
          backgroundImage: "url('/teamwork.jpg')",
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          scale,
          y,
          opacity
        }}
        className="absolute inset-0 z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Text Box */}
      <div className="relative z-20 flex justify-center items-center h-full px-4">
        <div className="max-w-4xl text-center bg-white bg-opacity-70 p-6 sm:p-10 rounded-3xl shadow-lg">
          <h2 className="text-2xl sm:text-4xl font-bold text-green-600 mb-4">
            Ready to bring your app idea to life?
          </h2>
          <p className="text-md sm:text-lg text-gray-800 leading-relaxed">
            As a developer with a strong entrepreneurial mindset, I’m always looking for new challenges.<br />
            Whether you’re looking for a passionate developer to join your team<br />
            or you have an idea that needs an app, let’s talk!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;