
import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../../constants';

export default function TenantTestimonials() {
  return (
    <section className="py-20 bg-neutral-light">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          قصص نجاح من شركائنا
        </motion.h2>
        <div className="space-y-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="md:w-1/2">
                <div className="p-4 bg-white shadow-lg rounded-lg">
                  <img src={testimonial.storeImageUrl} alt={testimonial.author} className="rounded-lg w-full h-auto object-cover" />
                </div>
              </div>
              <div className="md:w-1/2">
                <img src={testimonial.logoUrl} alt={`${testimonial.author} logo`} className="h-12 mb-4" />
                <p className="text-xl italic text-gray-600 mb-4">"{testimonial.quote}"</p>
                <p className="font-bold text-lg">{testimonial.author}</p>
                <div className="mt-4 bg-highlight/10 text-highlight font-bold py-2 px-4 rounded-full inline-block">
                  {testimonial.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
