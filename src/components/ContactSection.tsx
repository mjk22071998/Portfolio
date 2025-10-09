import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo)');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mjk22071998@gmail.com',
      link: 'mailto:mjk22071998@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/mjk22071998',
      link: 'https://linkedin.com/in/mjk22071998',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Rawalpindi, Pakistan',
    },
  ];

  return (
    <section className="py-20 px-4 bg-secondary/20 relative overflow-hidden" id="contact">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            className="mb-12 text-center"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: '700',
            }}
          >
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="p-6 rounded-lg border glass-morphism border-primary/20 h-full transition-all duration-300">
                <h3
                  className="mb-6"
                  style={{
                    fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                    fontWeight: '600',
                  }}
                >
                  Let's Collaborate
                </h3>

                <p className="mb-6 text-foreground/80">
                  I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.
                  Feel free to reach out!
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="p-4 rounded-lg border glass-morphism border-primary/20 hover:border-primary/50 transition-all duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center gap-3">
                        <info.icon className="w-5 h-5 text-primary" />
                        <div className="flex-1">
                          <p className="text-xs text-muted-foreground mb-1">{info.label}</p>
                          {info.link ? (
                            <a
                              href={info.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form
                onSubmit={handleSubmit}
                className="p-6 rounded-lg border glass-morphism border-primary/20 h-full"
              >
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 text-sm text-foreground/80">Name</label>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background/40 border border-primary/20 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary/40 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-foreground/80">Email</label>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background/40 border border-primary/20 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary/40 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-foreground/80">Subject</label>
                    <Input
                      type="text"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="bg-background/40 border border-primary/20 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary/40 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-foreground/80">Message</label>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background/40 border border-primary/20 text-foreground placeholder:text-muted-foreground min-h-[150px] focus:ring-2 focus:ring-primary focus:border-primary/40 transition-all"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        className="mt-16 text-center text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p>© 2025 Muhammad Junaid Khalid. Built with React & Tailwind CSS.</p>
        <p className="mt-2">Designed with passion for innovation and excellence.</p>
      </motion.div>
    </section>
  );
}
