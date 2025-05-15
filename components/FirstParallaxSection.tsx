'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const FirstParallaxSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start center', 'end start'] });

  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]); // statt 1.05
  const y = useTransform(scrollYProgress, [0, 1], ['-50px', '80px']); // statt 0 → 50

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section ref={ref} className="relative w-full h-[60vh] sm:h-screen overflow-hidden">
      <motion.div
        style={{
          backgroundImage: "url('/code-flowers.jpg')",
          backgroundPosition: 'center 10%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          scale,
          y,
          opacity
        }}
        className="absolute inset-0 z-0"
      />

      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <div className="relative z-20 text-center text-white flex flex-col justify-center items-center h-full px-4">
        <h1 className="text-3xl sm:text-6xl font-bold leading-tight text-balance">
          Hi, I'm Kim!
        </h1>
        <p className="text-md sm:text-xl mt-4 sm:mt-6 leading-relaxed max-w-xl">
          „I create mobile apps with impact – digital tools for a more conscious world.“
        </p>
      </div>
    </section>
  );
};

export default FirstParallaxSection;