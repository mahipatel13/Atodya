import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Strategic leadership, platform vision, and foundational governance.",
    author: "Ms. Hasti Bhalodia",
    role: "CEO",
    email: "hastibhalodia@atodya.in",
    avatar: "/ceo.png"
  },
  {
    id: 2,
    content: "Operational excellence, delivery readiness, and program oversight.",
    author: "Ms. Mahi Patel",
    role: "CTO",
    email: "mahipatel@atodya.in",
    avatar: "/cto.png"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Trusted by <span className="text-accent">Innovators</span></h2>
        </div>

        <div className="relative h-[350px] md:h-[250px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center text-center px-8"
            >
              <Quote size={40} className="text-primary/40 mb-6" />
              <p className="text-lg md:text-2xl text-gray-300 font-light italic mb-8">
                "{testimonials[current].content}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonials[current].avatar} 
                  alt={testimonials[current].author} 
                  className="w-12 h-12 rounded-full border-2 border-primary/50"
                />
                <div className="text-left">
                  <h4 className="font-bold text-white">{testimonials[current].author}</h4>
                  <p className="text-sm text-gray-400">{testimonials[current].role}</p>
                  {testimonials[current].email && (
                    <p className="text-xs text-primary mt-1">{testimonials[current].email}</p>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between pointer-events-none">
            <button 
              onClick={prevSlide}
              className="pointer-events-auto w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors -ml-4 md:-ml-12"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="pointer-events-auto w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors -mr-4 md:-mr-12"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
