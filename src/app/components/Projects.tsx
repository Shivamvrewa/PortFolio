import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ExternalLink, Github, Zap, Users, TrendingUp, Home } from 'lucide-react';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Trade Clone',
      category: 'Fintech Platform',
      description: 'A comprehensive trading platform integrating multiple brokers with real-time WebSocket connections for live market data and trade execution.',
      problem: 'Managing 10,000+ concurrent WebSocket connections while maintaining low latency and high reliability',
      solution: 'Implemented microservices architecture with Spring Boot, Redis caching, and optimized WebSocket management',
      impact: [
        '10,000+ concurrent connections',
        '99.9% uptime achieved',
        '40% reduction in API response time',
        'Real-time data synchronization',
      ],
      tech: ['Java', 'Spring Boot', 'WebSocket', 'React.js', 'Redis', 'MySQL', 'AWS EC2'],
      icon: TrendingUp,
      gradient: 'from-neon-cyan to-neon-blue',
    },
    {
      title: 'Hashboard',
      category: 'Customer Experience Platform',
      description: 'A customer experience management system providing real-time analytics and insights for business decision-making.',
      problem: 'Processing and visualizing large volumes of customer data in real-time',
      solution: 'Built microservices-based architecture with data aggregation pipelines and interactive dashboards',
      impact: [
        'Real-time analytics processing',
        'Interactive data visualization',
        '60% reduction in database load',
        'Team leadership experience',
      ],
      tech: ['Spring Boot', 'Microservices', 'React.js', 'Redux', 'PostgreSQL', 'AWS S3'],
      icon: Users,
      gradient: 'from-neon-purple to-neon-blue',
    },
    {
      title: 'Broan-Nutone Overture',
      category: 'Home Automation Platform',
      description: 'A smart home automation platform for controlling and monitoring home appliances and systems.',
      problem: 'Creating a seamless user experience for complex home automation workflows',
      solution: 'Developed responsive React.js frontend with Redux state management and RESTful API integration',
      impact: [
        'Intuitive user interface',
        'Responsive across devices',
        'Successful feature releases',
        'Improved code quality',
      ],
      tech: ['React.js', 'Redux', 'Spring Boot', 'REST API', 'PostgreSQL'],
      icon: Home,
      gradient: 'from-neon-blue to-neon-cyan',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/5 via-transparent to-neon-purple/5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Featured </span>
            <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-glass-bg backdrop-blur-sm border border-glass-border rounded-2xl overflow-hidden hover:border-neon-cyan transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/20 h-full flex flex-col">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} p-8 flex items-center justify-center relative overflow-hidden`}>
                  <project.icon className="w-24 h-24 text-white opacity-20 absolute" strokeWidth={1} />
                  <div className="relative z-10 text-center">
                    <project.icon className="w-16 h-16 text-white mx-auto mb-2" />
                    <p className="text-white/80 text-sm font-semibold">{project.category}</p>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-neon-cyan text-sm font-semibold mb-2">Problem</h4>
                      <p className="text-gray-400 text-xs">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-neon-purple text-sm font-semibold mb-2">Solution</h4>
                      <p className="text-gray-400 text-xs">{project.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white text-sm font-semibold mb-3">Impact & Achievements</h4>
                    <ul className="space-y-2">
                      {project.impact.map((item, idx) => (
                        <li key={idx} className="text-gray-300 text-xs flex items-start gap-2">
                          <Zap className="w-3 h-3 text-neon-cyan flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-glass-bg border border-neon-cyan/30 rounded text-neon-cyan text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <button className="flex-1 px-4 py-2 bg-gradient-to-r from-neon-cyan to-neon-blue text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 text-sm flex items-center justify-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </button>
                      <button className="px-4 py-2 bg-glass-bg border border-glass-border text-white rounded-lg hover:border-neon-purple transition-all duration-300 flex items-center justify-center">
                        <Github className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/0 to-neon-purple/0 group-hover:from-neon-cyan/5 group-hover:to-neon-purple/5 rounded-2xl transition-all duration-300 -z-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
