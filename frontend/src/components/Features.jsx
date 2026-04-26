import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Zap, BarChart3, Cloud, Cpu } from 'lucide-react';

const features = [
  { icon: Zap, title: "Lightning Fast", description: "Optimized for speed. Deliver results in milliseconds without compromising on quality." },
  { icon: ShieldCheck, title: "Bank-Grade Security", description: "Your data is encrypted and protected with industry-leading security protocols." },
  { icon: Layers, title: "Seamless Integration", description: "Connect with your favorite tools. Our API ensures smooth interoperability." },
  { icon: BarChart3, title: "Advanced Analytics", description: "Gain deep insights into your metrics with real-time dynamic dashboards." },
  { icon: Cloud, title: "Cloud Native", description: "Built for the cloud to ensure high availability, scalability, and performance." },
  { icon: Cpu, title: "AI-Powered", description: "Leverage advanced machine learning algorithms to automate your daily tasks." }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Features = () => {
  return (
    <section id="features" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose <span className="text-primary">Atodya</span>?</h2>
          <p className="text-gray-400">Everything you need to manage your business operations efficiently and scale to new heights.</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feat, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glass-card p-8 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />
              <div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center mb-6 text-accent group-hover:scale-110 shadow-lg transition-transform">
                <feat.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feat.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
