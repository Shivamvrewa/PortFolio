import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Mail, Phone, Linkedin, Github, MapPin, Send, CheckCircle, Instagram } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shivamvr1998@gmail.com',
      href: 'mailto:shivamvr1998@gmail.com',
      color: 'neon-cyan',
    },
    {
      icon: Phone,
      label: 'Phone / WhatsApp',
      value: '+91 8224839819',
      href: 'tel:+918224839819',
      color: 'neon-purple',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/shivavrewa/',
      href: 'https://www.linkedin.com/in/shivavrewa/',
      color: 'neon-blue',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/shivam',
      href: 'https://github.com/Shivamvrewa',
      color: 'neon-cyan',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: 'instagram.com/shivamv1601',
      href: 'https://www.instagram.com/shivamv1601/',
      color: 'neon-purple',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: '#',
      color: 'neon-purple',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'bbc40834-59b3-4b43-aeee-17142a6ac0f4',
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Contact from Portfolio',
          'Inquiry Subject': formData.subject,
          message: formData.message,
        })
      });
      
      const result = await response.json();
      
      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setError(result.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
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
            <span className="text-foreground">Get In </span>
            <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 text-lg">Let's Build Something Great Together</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            <p className="text-muted-foreground mb-8">
              I'm available for full-time, remote, and contract opportunities. Whether you have a project
              in mind or just want to connect, feel free to reach out!
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-glass-bg backdrop-blur-sm border border-glass-border rounded-xl hover:border-neon-cyan transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/20 group"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color === 'neon-cyan'
                      ? 'from-neon-cyan/20 to-neon-cyan/5'
                      : info.color === 'neon-purple'
                        ? 'from-neon-purple/20 to-neon-purple/5'
                        : 'from-neon-blue/20 to-neon-blue/5'
                      } flex items-center justify-center`}
                  >
                    <info.icon
                      className={`w-6 h-6 ${info.color === 'neon-cyan'
                        ? 'text-neon-cyan'
                        : info.color === 'neon-purple'
                          ? 'text-neon-purple'
                          : 'text-neon-blue'
                        }`}
                    />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">{info.label}</p>
                    <p className="text-foreground font-medium group-hover:text-neon-cyan transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 p-6 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 backdrop-blur-sm border border-glass-border rounded-xl"
            >
              <h4 className="text-foreground font-semibold mb-2">Open to Opportunities</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                  Full-time positions
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-neon-purple rounded-full"></div>
                  Remote work
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
                  Contract projects
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-neon-cyan rounded-full"></div>
                  Consulting opportunities
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-glass-bg backdrop-blur-sm border border-glass-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-neon-cyan mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h4>
                  <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-glass-bg border border-glass-border rounded-lg text-foreground focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-glass-bg border border-glass-border rounded-lg text-foreground focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-glass-bg border border-glass-border rounded-lg text-foreground focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all"
                      placeholder="Project inquiry / Job opportunity"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-glass-bg border border-glass-border rounded-lg text-foreground focus:border-neon-cyan focus:outline-none focus:ring-2 focus:ring-neon-cyan/20 transition-all resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-blue text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  {error && (
                    <p className="text-red-500 text-sm text-center mt-4">
                      {error}
                    </p>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
