import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Code2, Database, Cloud, Wrench, Terminal, TrendingUp } from 'lucide-react';

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Backend',
      icon: Terminal,
      color: 'neon-cyan',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Spring Boot', level: 90 },
        { name: 'Hibernate/JPA', level: 85 },
        { name: 'REST APIs', level: 92 },
        { name: 'Microservices', level: 88 },
      ],
    },
    {
      title: 'Frontend',
      icon: Code2,
      color: 'neon-purple',
      skills: [
        { name: 'React.js', level: 88 },
        { name: 'JavaScript', level: 90 },
        { name: 'Redux', level: 80 },
        { name: 'HTML/CSS', level: 92 },
      ],
    },
    {
      title: 'Database',
      icon: Database,
      color: 'neon-blue',
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 85 },
      ],
    },
    {
      title: 'Cloud/DevOps',
      icon: Cloud,
      color: 'neon-cyan',
      skills: [
        { name: 'AWS EC2', level: 85 },
        { name: 'AWS S3', level: 88 },
        { name: 'AWS SES', level: 80 },
        { name: 'CI/CD', level: 82 },
      ],
    },
    {
      title: 'Tools',
      icon: Wrench,
      color: 'neon-purple',
      skills: [
        { name: 'Git/GitHub', level: 92 },
        { name: 'Swagger', level: 85 },
        { name: 'Postman', level: 90 },
        { name: 'Jira', level: 88 },
      ],
    },
    {
      title: 'Trading Platforms',
      icon: TrendingUp,
      color: 'neon-blue',
      skills: [
        { name: 'MT4', level: 85 },
        { name: 'MT5', level: 85 },
        { name: 'cTrader', level: 82 },
        { name: 'DxTrade', level: 80 },
        { name: 'MatchTrader', level: 78 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/5 via-transparent to-neon-cyan/5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Technical </span>
            <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="group relative"
            >
              <div className="bg-glass-bg backdrop-blur-sm border border-glass-border rounded-2xl p-6 hover:border-neon-cyan transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/20 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
                      category.color === 'neon-cyan'
                        ? 'from-neon-cyan/20 to-neon-cyan/5'
                        : category.color === 'neon-purple'
                        ? 'from-neon-purple/20 to-neon-purple/5'
                        : 'from-neon-blue/20 to-neon-blue/5'
                    } flex items-center justify-center`}
                  >
                    <category.icon
                      className={`w-6 h-6 ${
                        category.color === 'neon-cyan'
                          ? 'text-neon-cyan'
                          : category.color === 'neon-purple'
                          ? 'text-neon-purple'
                          : 'text-neon-blue'
                      }`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                        <span className="text-neon-cyan text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.1 + skillIndex * 0.1,
                            ease: 'easeOut',
                          }}
                          className={`h-full rounded-full ${
                            category.color === 'neon-cyan'
                              ? 'bg-gradient-to-r from-neon-cyan to-neon-blue'
                              : category.color === 'neon-purple'
                              ? 'bg-gradient-to-r from-neon-purple to-neon-blue'
                              : 'bg-gradient-to-r from-neon-blue to-neon-cyan'
                          }`}
                        />
                      </div>
                    </div>
                  ))}
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
