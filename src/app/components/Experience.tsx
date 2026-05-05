import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      company: 'Garioxtech Private Limited',
      url: 'https://www.garioxtech.com/',
      position: 'Full Stack Developer',
      location: 'India',
      period: 'Present',
      duration: '3+ Years',
      responsibilities: [
        'Led development of Trade Clone - a comprehensive fintech platform with 10,000+ concurrent WebSocket connections',
        'Architected microservices-based Hashboard system for customer experience analytics',
        'Implemented real-time data synchronization across MT4, MT5, cTrader platforms',
        'Achieved 99.9% uptime through robust error handling and monitoring',
        'Mentored junior developers and conducted code reviews',
      ],
      achievements: [
        'Reduced API response time by 40% through optimization',
        'Implemented caching strategies reducing database load by 60%',
        'Led team of 3 developers for Hashboard project',
      ],
      tech: ['Java', 'Spring Boot', 'React.js', 'WebSocket', 'AWS', 'MySQL'],
    },
    {
      company: 'Dream Filler Software Solution',
      url: 'https://dream-filler.com/',
      position: 'Software Engineer Trainee',
      location: 'India',
      period: '2020 - 2021',
      duration: '1 Year',
      responsibilities: [
        'Developed Broan-Nutone Overture platform for home automation',
        'Built responsive React.js components with Redux state management',
        'Integrated REST APIs with Spring Boot backend',
        'Collaborated with senior developers on architectural decisions',
        'Participated in agile development processes',
      ],
      achievements: [
        'Successfully delivered 3 major feature releases',
        'Improved code quality through unit testing',
        'Received recognition for quick learning and adaptation',
      ],
      tech: ['Java', 'Spring Boot', 'React.js', 'Redux', 'PostgreSQL'],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Work </span>
            <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-blue"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                <div className="md:w-1/2">
                  <div className="bg-glass-bg backdrop-blur-sm border border-glass-border rounded-2xl p-8 hover:border-neon-cyan transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/20 group">
                    <div className="flex items-start gap-4 mb-6 md:flex-row-reverse md:justify-end">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-7 h-7 text-neon-cyan" />
                      </div>
                      <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.position}</h3>
                        <p className="text-neon-cyan text-lg font-semibold mb-2">
                          <a href={exp.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {exp.company}
                          </a>
                        </p>
                        <div className="flex flex-wrap gap-3 text-gray-400 text-sm md:justify-end">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                          <span className="px-3 py-1 bg-neon-purple/20 rounded-full text-neon-purple">
                            {exp.duration}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-white font-semibold mb-3 flex items-center gap-2 md:justify-end">
                          <span>Key Responsibilities</span>
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <li
                              key={idx}
                              className="text-gray-300 text-sm flex items-start gap-2 md:flex-row-reverse md:text-right"
                            >
                              <ChevronRight className="w-4 h-4 text-neon-cyan flex-shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-white font-semibold mb-3 md:text-right">Achievements</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="text-gray-300 text-sm flex items-start gap-2 md:flex-row-reverse md:text-right"
                            >
                              <div className="w-2 h-2 bg-neon-purple rounded-full flex-shrink-0 mt-1.5"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 md:justify-end">
                        {exp.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-glass-bg border border-neon-cyan/30 rounded-full text-neon-cyan text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple border-4 border-background"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
