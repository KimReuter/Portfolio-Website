'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const FirstParallaxSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ['0px', '50px']);

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
        }}
        className="absolute inset-0 z-0"
      />

      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <div className="relative z-20 text-center text-white flex flex-col justify-center items-center h-full px-4">
        <h1 className="text-3xl sm:text-6xl font-bold leading-tight text-balance">
          Welcome to my Portfolio Page!
        </h1>
        <p className="text-md sm:text-xl mt-4 sm:mt-6 leading-relaxed max-w-xl">
          „Apps that not only challenge the status quo but also shape a sustainable future.“
        </p>
      </div>
    </section>
  );
};

export default FirstParallaxSection;