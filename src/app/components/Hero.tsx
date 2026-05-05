import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Phone, Download, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Java Developer',
    'Spring Boot Expert',
    'Microservices Architect',
    'React Frontend Engineer',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Shivamvrewa', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shivavrewa/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:shivamvr1998@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:+918224839819', label: 'WhatsApp' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-purple/10"></div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-neon-cyan rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="text-neon-cyan text-lg font-medium">Hello, I'm</span>
          </motion.div>

          <motion.h1
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-2">
              Shivam Vishwakarma
            </span>
          </motion.h1>

          <motion.div
            className="h-20 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.h2
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent"
            >
              {roles[currentRole]}
            </motion.h2>
          </motion.div>

          <motion.p
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Building Scalable Systems That Perform. From Backend Logic to Frontend Excellence.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-blue text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 flex items-center gap-2"
            >
              Hire Me
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="/shivam_resume_05_MAY_2026.pdf"
              download="shivam_resume_05_MAY_2026.pdf"
              className="px-8 py-4 bg-glass-bg backdrop-blur-sm border border-glass-border text-white font-semibold rounded-lg hover:border-neon-purple hover:shadow-lg hover:shadow-neon-purple/30 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-glass-bg backdrop-blur-sm border border-glass-border text-white font-semibold rounded-lg hover:border-neon-cyan hover:shadow-lg hover:shadow-neon-cyan/30 transition-all duration-300"
            >
              View Projects
            </a>
          </motion.div>

          <motion.div
            className="flex gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-glass-bg backdrop-blur-sm border border-glass-border flex items-center justify-center text-gray-300 hover:text-neon-cyan hover:border-neon-cyan hover:shadow-lg hover:shadow-neon-cyan/30 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.3 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-3 bg-neon-cyan rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
