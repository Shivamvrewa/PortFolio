import { Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-transparent to-black/5 dark:to-black/50 border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-neon-cyan">Shivam</span>
              <span className="text-foreground"> Vishwakarma</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              Full Stack Java Developer specializing in building scalable, high-performance enterprise applications.
            </p>
            <p className="text-sm text-muted-foreground/70">
              Engineering Reliable Digital Products.
            </p>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-neon-cyan transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Download Resume</h4>
            <a
              href="/shivam_resume_05_MAY_2026.pdf"
              download="shivam_resume_05_MAY_2026.pdf"
              className="inline-block px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 mb-4"
            >
              Download CV
            </a>
            <p className="text-muted-foreground text-sm">
              Available for full-time, remote, and contract opportunities.
            </p>
          </div>
        </div>

        <div className="border-t border-glass-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} Shivam Vishwakarma. Made with{' '}
            <Heart className="inline w-4 h-4 text-neon-purple fill-neon-purple" /> using React & Tailwind CSS
          </p>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-glass-bg backdrop-blur-sm border border-glass-border flex items-center justify-center text-neon-cyan hover:border-neon-cyan hover:shadow-lg hover:shadow-neon-cyan/30 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
