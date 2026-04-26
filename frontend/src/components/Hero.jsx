import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass w-max">
            <Sparkles size={16} className="text-accent" />
            <span className="text-sm font-medium">The Future of AI Innovation</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Build Smarter with <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Atodya</span>
          </h1>
          
          <p className="text-lg text-gray-400 max-w-lg">
            Empower your team with cutting-edge AI-driven solutions. Streamline workflows, uncover insights, and scale like never before with Atodya's intuitive platform.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a href="#contact" className="px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-full font-medium transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.4)]">
              Start Now <ArrowRight size={20} />
            </a>
            <a href="#about" className="px-8 py-4 glass text-white hover:bg-white/10 rounded-full font-medium transition-all">
              Learn More
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          {/* Animated Floating Element */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative z-10 p-2 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 shadow-2xl glass"
          >
            <div className="bg-[#0f172a] rounded-xl overflow-hidden border border-white/5 shadow-inner">
              <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="p-6 h-[300px] flex flex-col gap-4">
                <div className="h-8 bg-white/5 rounded-md w-1/3 animate-pulse" />
                <div className="flex gap-4">
                  <div className="h-32 bg-primary/20 rounded-lg w-1/2 border border-primary/30" />
                  <div className="h-32 bg-accent/20 rounded-lg w-1/2 border border-accent/30" />
                </div>
                <div className="h-20 bg-white/5 rounded-lg w-full animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Decorative small cards */}
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -bottom-8 -left-8 glass-card p-4 z-20 flex items-center gap-4 hidden md:flex"
          >
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
              <span className="text-xl">🚀</span>
            </div>
            <div>
              <p className="text-sm font-bold">Performance</p>
              <p className="text-xs text-accent">+142% Growth</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
