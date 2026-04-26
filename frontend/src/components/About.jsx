import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden glass border border-white/10 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" 
              alt="Dashboard visualization" 
              className="w-full h-[500px] object-cover opacity-80"
            />
          </div>
          
          <motion.div 
            animate={{ y: [-15, 15, -15] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute -bottom-8 -right-8 glass-card p-6 w-48 shadow-2xl z-20"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold">AI</span>
              </div>
              <div>
                <p className="text-xs text-gray-400">Powered by</p>
                <p className="font-bold text-sm">Atodya Engine</p>
              </div>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-accent w-3/4 rounded-full" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Innovate with an <span className="text-primary">AI-Driven</span> Platform</h2>
          <p className="text-gray-400 text-lg mb-8">
            At Atodya, we believe in the power of artificial intelligence to transform the way business works. Our platform integrates seamlessly into your operations, providing smart automations, predictive analytics, and an intuitive user experience.
          </p>
          
          <ul className="space-y-4">
            {[
              "Automate repetitive tasks with smart agents",
              "Uncover hidden insights in your data",
              "Scale operations securely in the cloud"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="text-accent min-w-[20px]" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
