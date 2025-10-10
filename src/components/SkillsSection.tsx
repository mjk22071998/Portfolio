import { motion } from "motion/react";

interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Proficient" | "Expert";
  category: string;
}

export function SkillsSection() {
  const skills: Skill[] = [
    { name: "Qt Framework", level: "Intermediate", category: "Frameworks" },
    { name: "Next.js", level: "Beginner", category: "Frameworks" },
    { name: "Java", level: "Proficient", category: "Languages" },
    { name: "C++", level: "Proficient", category: "Languages" },
    { name: "JavaFX", level: "Beginner", category: "Frameworks" },
    { name: "OpenGL", level: "Beginner", category: "Graphics" },
    { name: "AI / ML", level: "Intermediate", category: "Domains" },
    { name: "Dart / Flutter", level: "Beginner", category: "Frameworks" },
    { name: "Android Development", level: "Proficient", category: "Mobile" },
  ];

  const levelColors: Record<Skill["level"], string> = {
    Beginner: "bg-red-500",
    Intermediate: "bg-yellow-500",
    Proficient: "bg-green-500",
    Expert: "bg-blue-500",
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden" id="skills">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-12 text-center text-4xl font-bold text-foreground">
            Skills & Expertise
          </h2>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="p-4 rounded-lg border bg-card border-border"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-foreground font-medium">
                    {skill.name}
                  </span>
                  <span className="text-sm font-semibold text-muted-foreground">
                    {skill.level}
                  </span>
                </div>

                <div className="mt-1 text-xs text-muted-foreground">
                  {skill.category}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Category Tags */}
          <motion.div
            className="p-6 rounded-lg border bg-card border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 rounded-lg border bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
