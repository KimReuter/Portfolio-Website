import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "I've accompanied Kim on her journey to becoming an app developer over the past few months and was truly impressed by how quickly and confidently she dives into new topics. She's always fully motivated, asks smart questions, and brings amazing energy to every session. You can tell she's passionate – technically strong, reliable, and with a fantastic mindset. It's a joy to witness her growth!",
      author: "– Instructor, iOS & Android Module"
    },
    {
      text: "Kim is consistently present, reliable, and actively engaged. She shows continuous progress as an aspiring app developer and approaches new challenges with curiosity and a solution-oriented mindset. Her positive attitude makes her a real asset to any team.",
      author: "– Student Success Manager"
    },
    {
      text: "I feel at home with Kim every time. Her work is fast, high-quality, and full of heart. Plus, the honest, warm advice – simply top!",
      author: "– Client at the Dreadlock Studio"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What People Say About Me</h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2, ease: 'easeOut' }}
            >
              <p className="text-gray-700 italic">{testimonial.text}</p>
              <p className="mt-4 font-semibold text-green-700">{testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;