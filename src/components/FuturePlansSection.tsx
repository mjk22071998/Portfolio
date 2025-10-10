import { motion } from "motion/react";
import { GraduationCap, Shield, Atom, Code2, TrendingUp } from "lucide-react";

interface FuturePlan {
  title: string;
  description: string;
  icon: typeof GraduationCap;
  areas: string[];
}

export function FuturePlansSection() {
  const plans: FuturePlan[] = [
    {
      title: "PhD in IoT Security",
      description:
        "Pursuing doctoral research in Internet of Things security, focusing on secure communication protocols, threat detection, and privacy-preserving mechanisms for connected devices.",
      icon: Shield,
      areas: ["IoT Security", "Cryptography", "Privacy", "Threat Detection"],
    },
    {
      title: "PhD in Quantum Computing",
      description:
        "Exploring quantum algorithms, quantum machine learning, and the intersection of quantum computing with cryptography and optimization problems.",
      icon: Atom,
      areas: [
        "Quantum Algorithms",
        "Quantum ML",
        "Quantum Cryptography",
        "Optimization",
      ],
    },
    {
      title: "Continue in Software Development",
      description:
        "Growing expertise in advanced software engineering, focusing on high-performance systems, distributed computing, and cutting-edge technologies in defense and aerospace.",
      icon: Code2,
      areas: [
        "System Architecture",
        "Performance Optimization",
        "Defense Tech",
        "Innovation",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden" id="future">
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
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: "700",
            }}
          >
            Future Plans
          </h2>

          {/* Intro Text */}
          <motion.div
            className="mb-12 p-6 rounded-lg border text-center glass-morphism border-primary/20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <TrendingUp className="w-10 h-10 mx-auto mb-4 text-primary" />
            <p className="text-foreground/90 max-w-3xl mx-auto leading-relaxed">
              I'm at an exciting crossroads with multiple compelling paths
              ahead. Whether pursuing cutting-edge research in academia or
              continuing to innovate in the software development industry, my
              goal is to push the boundaries of technology and contribute to
              meaningful advancements.
            </p>
          </motion.div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className="group p-6 rounded-lg border relative overflow-hidden glass-morphism border-primary/20 hover:border-primary transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="relative z-10">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 rounded-full bg-primary/10 border border-primary/30">
                      <plan.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  <h3
                    className="mb-3 text-center text-primary transition-all duration-300"
                    style={{
                      fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)",
                      fontWeight: "600",
                    }}
                  >
                    {plan.title}
                  </h3>

                  <p className="text-foreground/80 mb-4 text-sm leading-relaxed text-center">
                    {plan.description}
                  </p>

                  <div className="space-y-2">
                    <div className="text-xs uppercase tracking-wider mb-2 text-center text-primary">
                      Focus Areas
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {plan.areas.map((area, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded glass-morphism border border-primary/30 text-primary"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
