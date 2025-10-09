import { motion } from 'motion/react';
import { FileText, GraduationCap, Award, Code } from 'lucide-react';

export function AboutSection() {
  const highlights = [
    { icon: GraduationCap, text: 'MS & BS in Computer Science' },
    { icon: Award, text: 'AI & Cybersecurity Research' },
    { icon: Code, text: 'Experienced Software Developer' },
    { icon: FileText, text: 'Published Researcher' },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden" id="about">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            className="mb-8 text-center"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '700',
            }}
          >
            About Me
          </h2>

          <div className="p-8 rounded-lg border glass-morphism border-primary/20 relative overflow-hidden">
            <div className="space-y-4 text-foreground leading-relaxed w-full mx-auto">
              <p>
                I'm a passionate <span className="text-primary font-semibold">Software Developer</span> at the{' '}
                <span className="text-primary font-semibold">
                  National Aerospace Science and Technology Park (NASTP)
                </span>{' '}
                in Rawalpindi, Pakistan, where I work on cutting-edge defense simulation systems using C++ and Qt.
              </p>

              <p>
                With both a <span className="text-primary">Bachelor's and Master's degree in Computer Science</span>,
                I've dedicated my career to the intersection of software engineering, artificial intelligence, and
                cybersecurity. My academic journey has been marked by research in AI-driven human action recognition
                and software-defined networking.
              </p>

              <p>
                Beyond development, I'm passionate about education and knowledge sharing. I've served as a{' '}
                <span className="text-primary">Teaching Assistant</span> and{' '}
                <span className="text-primary">Flutter Trainer</span>, helping aspiring developers master modern
                technologies and build their own innovative solutions.
              </p>

              <p className="text-primary/90">
                My mission: Leveraging code and AI to build secure, intelligent systems that shape the future of
                defense technology.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="group p-4 rounded-lg border glass-morphism border-primary/20 hover:border-primary/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <highlight.icon className="w-6 h-6 mb-2 text-primary" />
                  <p className="text-sm relative z-10">{highlight.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
