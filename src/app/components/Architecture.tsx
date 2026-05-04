import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Server, Database, Cloud, Layers, Network, Cpu } from 'lucide-react';

export default function Architecture() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const architectures = [
    {
      title: 'Microservices Architecture',
      icon: Layers,
      description: 'Scalable, independent services for high availability',
      components: [
        { name: 'API Gateway', color: 'neon-cyan' },
        { name: 'Service Discovery', color: 'neon-purple' },
        { name: 'Load Balancer', color: 'neon-blue' },
        { name: 'Service Mesh', color: 'neon-cyan' },
      ],
    },
    {
      title: 'WebSocket Real-time System',
      icon: Network,
      description: '10,000+ concurrent connections with low latency',
      components: [
        { name: 'WebSocket Server', color: 'neon-purple' },
        { name: 'Message Queue', color: 'neon-blue' },
        { name: 'Redis Cache', color: 'neon-cyan' },
        { name: 'Event Processing', color: 'neon-purple' },
      ],
    },
    {
      title: 'AWS Deployment Flow',
      icon: Cloud,
      description: 'Cloud-native infrastructure for reliability',
      components: [
        { name: 'EC2 Instances', color: 'neon-blue' },
        { name: 'S3 Storage', color: 'neon-cyan' },
        { name: 'RDS Database', color: 'neon-purple' },
        { name: 'CloudWatch', color: 'neon-blue' },
      ],
    },
    {
      title: 'API Ecosystem',
      icon: Server,
      description: 'RESTful APIs with optimal performance',
      components: [
        { name: 'Spring Boot', color: 'neon-cyan' },
        { name: 'Authentication', color: 'neon-purple' },
        { name: 'Rate Limiting', color: 'neon-blue' },
        { name: 'Caching Layer', color: 'neon-cyan' },
      ],
    },
  ];

  return (
    <section id="architecture" className="py-20 md:py-32 relative overflow-hidden">
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
            <span className="text-white">Architecture </span>
            <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Technical excellence in designing scalable, high-performance systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {architectures.map((arch, index) => (
            <motion.div
              key={arch.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-glass-bg backdrop-blur-sm border border-glass-border rounded-2xl p-8 hover:border-neon-cyan transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center">
                    <arch.icon className="w-8 h-8 text-neon-cyan" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{arch.title}</h3>
                    <p className="text-gray-400 text-sm">{arch.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {arch.components.map((component, idx) => (
                    <motion.div
                      key={component.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.1 }}
                      className={`p-3 bg-glass-bg border border-glass-border rounded-lg hover:border-${component.color} transition-all duration-300 group/item`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 rounded-full bg-${component.color} group-hover/item:animate-pulse`}
                        ></div>
                        <span className="text-gray-300 text-sm">{component.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/0 to-neon-purple/0 group-hover:from-neon-cyan/5 group-hover:to-neon-purple/5 rounded-2xl transition-all duration-300 -z-10"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-neon-cyan/10 via-neon-purple/5 to-neon-blue/10 backdrop-blur-sm border border-glass-border rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Performance Metrics</h3>
            <p className="text-gray-400">Real-world impact of architectural decisions</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Cpu, value: '99.9%', label: 'Uptime', color: 'neon-cyan' },
              { icon: Database, value: '60%', label: 'DB Load Reduction', color: 'neon-purple' },
              { icon: Network, value: '40%', label: 'Faster Response', color: 'neon-blue' },
              { icon: Server, value: '10K+', label: 'Connections', color: 'neon-cyan' },
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-glass-bg border border-glass-border flex items-center justify-center">
                  <metric.icon className={`w-8 h-8 text-${metric.color}`} />
                </div>
                <div className={`text-2xl font-bold text-${metric.color} mb-1`}>{metric.value}</div>
                <div className="text-gray-400 text-sm">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
