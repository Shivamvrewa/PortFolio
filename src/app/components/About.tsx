import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Code2, Rocket, Users, Trophy } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { icon: Trophy, value: 4, suffix: '+', label: 'Years Experience', color: 'text-neon-cyan' },
    { icon: Code2, value: 10000, suffix: '+', label: 'WebSocket Connections', color: 'text-neon-purple' },
    { icon: Rocket, value: 3, suffix: '+', label: 'Major Projects', color: 'text-neon-blue' },
    { icon: Users, value: 1, suffix: '', label: 'Team Lead Experience', color: 'text-neon-cyan' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 backdrop-blur-sm border border-glass-border p-8 flex items-center justify-center">
              <div className="text-center">
                <Code2 className="w-32 h-32 mx-auto mb-4 text-neon-cyan" strokeWidth={1.5} />
                <p className="text-gray-300 text-lg">Full Stack Java Developer</p>
                <p className="text-neon-cyan text-2xl font-bold mt-2">4+ Years</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-neon-purple/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-neon-cyan/20 rounded-full blur-3xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a <span className="text-neon-cyan font-semibold">Full Stack Java Developer</span> with{' '}
              <span className="text-neon-purple font-semibold">4+ years of experience</span> specializing in
              building scalable, high-performance enterprise applications.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My expertise spans across <span className="text-neon-cyan font-semibold">Java, Spring Boot,
              Microservices, React.js, WebSocket systems, and AWS</span>. I've successfully architected and
              delivered complex fintech platforms, real-time trading systems, and customer experience solutions.
            </p>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white mb-4">Key Strengths:</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Scalable APIs',
                  'Real-time Systems',
                  'AWS Deployment',
                  'Team Leadership',
                  'Microservices Architecture',
                  'Performance Optimization',
                ].map((strength, index) => (
                  <motion.div
                    key={strength}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-2 text-gray-300"
                  >
                    <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                    <span>{strength}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  index,
  isInView,
}: {
  stat: { icon: any; value: number; suffix: string; label: string; color: string };
  index: number;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
      className="relative group"
    >
      <div className="bg-glass-bg backdrop-blur-sm border border-glass-border rounded-xl p-6 text-center hover:border-neon-cyan transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/20">
        <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} strokeWidth={1.5} />
        <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
          {count.toLocaleString()}
          {stat.suffix}
        </div>
        <p className="text-gray-400 text-sm">{stat.label}</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/0 to-neon-purple/0 group-hover:from-neon-cyan/5 group-hover:to-neon-purple/5 rounded-xl transition-all duration-300 -z-10"></div>
    </motion.div>
  );
}
