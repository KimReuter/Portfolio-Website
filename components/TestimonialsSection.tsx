import { motion } from 'framer-motion';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "I've accompanied Kim on her journey to becoming an app developer over the past few months and was truly impressed by how quickly and confidently she dives into new topics. She's always fully motivated, asks smart questions, and brings amazing energy to every session. You can tell she's passionate – technically strong, reliable, and with a fantastic mindset. It's a joy to witness her growth!",
      author: "– Instructor, iOS & Android Module"
    },
    {
      text: "Kim is a dedicated student who hands in her work on time, oftentimes above expectations. She proactively participates in lectures to share her progress. Her projects use the taught concepts and extend them in sensible ways. She integrates Feedback eagerly and composes her apps and presentations into meaningful wholes.",
      author: "– Student Success Manager"
    },
    {
      text: "I've accompanied Kim on her journey to becoming an app developer over the past few months and was truly impressed by how quickly and confidently she dives into new topics. She's always fully motivated, asks smart questions, and brings amazing energy to every session. You can tell she's passionate – technically strong, reliable, and with a fantastic mindset. It's a joy to witness her growth!",
      author: "– Instructor, iOS & Android Module"
    },
    {
      text: "I feel at home with Kim every time. Her work is fast, high-quality, and full of heart. Plus, the honest, warm advice – simply top!",
      author: "– Client at the Dreadlock Studio"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What People Say About Me</h2>

        <div className="flex overflow-x-auto space-x-6 pb-4 -mx-4 px-4 snap-x snap-mandatory">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] max-w-sm flex-shrink-0 bg-white p-6 rounded-lg shadow-md snap-start"
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