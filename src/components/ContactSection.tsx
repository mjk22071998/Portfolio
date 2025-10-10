import { motion } from "motion/react";
import { Mail, Linkedin, MapPin, Github, Send } from "lucide-react";
import { Button } from "./ui/button";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mjk22071998@gmail.com",
      link: "mailto:mjk22071998@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/mjk22071998",
      link: "https://linkedin.com/in/mjk22071998",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/mjk22071998",
      link: "https://github.com/mjk22071998",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Rawalpindi, Pakistan",
    },
  ];

  return (
    <section
      className="py-20 px-4 bg-secondary/20 relative overflow-hidden"
      id="contact"
    >
      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            className="mb-8"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: "700",
            }}
          >
            How to Reach Me
          </h2>

          <p className="max-w-2xl mx-auto text-foreground/80 mb-12">
            Whether you want to collaborate, discuss ideas, or just say hi — I'm
            always open to meaningful conversations. You can reach me through
            any of the channels below.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="p-6 w-full rounded-lg border glass-morphism border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-[1.03]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col items-center gap-3">
                  <info.icon className="w-6 h-6 text-primary" />
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-center break-all"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-foreground text-center">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <Button
              onClick={() =>
                window.open("mailto:mjk22071998@gmail.com", "_blank")
              }
              className="gap-2 px-6 py-3 text-base"
            >
              <Send className="w-4 h-4" />
              Let's Connect
            </Button>
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
        <p className="mt-2">
          Designed with passion for innovation and excellence.
        </p>
      </motion.div>
    </section>
  );
}
