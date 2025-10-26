import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Code,
  Mail,
  Github,
  Linkedin,
  ChevronRight,
  Award,
  Briefcase,
  GraduationCap,
  BookOpen,
} from "lucide-react";

interface CommandResult {
  output: string;
  type: "info" | "error" | "success" | "section" | "clear";
}

interface CommandHistoryItem extends CommandResult {
  command: string;
}

interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: string;
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  details?: string;
}

interface Project {
  name: string;
  description: string;
  tech: string;
}

interface Publication {
  title: string;
  authors: string;
  journal: string;
  citations: string;
  year: string;
}

interface Section {
  title: string;
  content: any;
  icon: React.ElementType;
  additional?: string;
}

const Portfolio: React.FC = () => {
  const [currentPath] = useState<string>("~");
  const [commandHistory, setCommandHistory] = useState<CommandHistoryItem[]>(
    []
  );
  const [currentInput, setCurrentInput] = useState<string>("");
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory]);

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
        return;
      }

      if (!e.ctrlKey && !e.metaKey && e.key !== "F5" && e.key !== "F12") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  const sections: Record<string, Section> = {
    about: {
      title: "About Me",
      content: `I'm Muhammad Junaid Khalid, a Software Developer at the National Aerospace Science and Technology Park (NASTP), Rawalpindi, where I work on building and simulating complex systems — integrating advanced software, AI, and real-time simulation technologies.

My journey began during my Bachelor's in Computer Science at the University of Science and Technology, Taxila. By 2020, I pursued an MS in Computer Science to strengthen my foundation.

During my MS, I developed Android and Flutter applications, delivered three projects, and served as a Teaching Assistant mentoring over 250 students.

My research centered on Cybersecurity using AI, particularly DDoS detection and mitigation in Software-Defined Networks (SDN). I implemented over five AI models including ANNs, CNNs, and LSTMs.

After my MS, I led the startup "Techno Spot," developing leadership and management skills before refocusing on technical growth. I then joined Rippleberry Tech as an intern before receiving my current offer from NASTP.`,
      icon: Terminal,
    },
    experience: {
      title: "Work Experience",
      content: [
        {
          role: "Software Developer",
          company: "National Aerospace Science & Technology Park (NASTP)",
          period: "Apr 2025 – Present (7 mos)",
          location: "Rawalpindi, Punjab, Pakistan",
          description:
            "Working on simulation and software systems using C++, Java, MFC, and Qt. Involved in UI/UX design, system modeling, and database integration.",
          skills: "C++, Java, MFC, Qt, Python, Database Design, Figma, UI/UX",
        },
        {
          role: "Software Developer (Intern)",
          company: "RippleBerry Tech",
          period: "Sep 2024 – Feb 2025 (6 mos)",
          location: "Rawalpindi, Punjab, Pakistan",
          description:
            "Developed web applications using Laravel, Bubble.io, and Joget. Integrated AI technologies using OpenAI API, Google Gemini, and ChatGPT.",
          skills:
            "Flutter, Laravel, PHP, Bubble.io, Joget, MySQL, Tailwind CSS, JavaScript, Figma",
        },
        {
          role: "Director of Software / Flutter Development Trainer",
          company: "Techno Spot",
          period: "Jan 2023 – Aug 2024 (1 yr 8 mos)",
          location: "Rawalpindi, Punjab, Pakistan",
          description:
            "Led training programs on Flutter and mobile app development. Trained students to publish their own apps. Managed social media, client relations, and ad campaigns.",
          skills:
            "Flutter, Dart, Teaching, Team Leadership, Project Management",
        },
        {
          role: "Teaching Assistant",
          company: "Arid Agriculture University",
          period: "Oct 2021 – Jun 2022 (9 mos)",
          location: "Rawalpindi, Punjab, Pakistan",
          description:
            "Assisted in teaching undergraduate computer science courses and labs. Helped students with programming fundamentals and project guidance.",
          skills: "University Teaching, Lecturing, Problem Solving",
        },
      ] as Experience[],
      icon: Briefcase,
    },
    education: {
      title: "Education",
      content: [
        {
          degree: "Master of Science - MS, Computer Science",
          institution: "Arid Agriculture University",
          period: "Sep 2020 - Oct 2022",
          grade: "3.64/4",
          details: "Research and Teaching Assistance",
        },
        {
          degree: "Bachelors, Computer Science",
          institution: "University of Engineering and Technology, Taxila",
          period: "Aug 2016 - Sep 2020",
          grade: "3.37/4 CGPA",
        },
      ] as Education[],
      icon: GraduationCap,
    },
    projects: {
      title: "Projects",
      content: [
        {
          name: "Power Consumption Meter",
          description:
            "IoT solution measuring real-time power consumption using ESP32, transmitting data via Firebase.",
          tech: "Android (Java), Arduino C, Firebase, ESP32",
        },
        {
          name: "Plant Disease Detection",
          description:
            "Mobile app detecting plant infections using EfficientNet trained on PlantVillage dataset.",
          tech: "EfficientNet, Android (Java), Machine Learning",
        },
        {
          name: "Android Vulnerability Scanner",
          description:
            "AI-powered security tool analyzing intent filters and permissions to detect malicious behavior.",
          tech: "Python, PyQt5, TensorFlow, Application Security",
        },
        {
          name: "Owleto Groceries (Foodpanda Clone)",
          description:
            "Complete food delivery platform with customer and rider Android apps.",
          tech: "Android (Java), Firebase, Google Maps",
        },
        {
          name: "Blogging Website",
          description:
            "Full-stack blog application with authentication, comments, and modern UI.",
          tech: "Laravel, Blade, Tailwind CSS, Vite",
        },
        {
          name: "CollapsiblePane (PyPI Package)",
          description:
            "Developed PyPI package providing collapsible pane widget for PySide6/Qt applications.",
          tech: "Python, PySide6, Qt, PyPI",
        },
      ] as Project[],
      icon: Code,
    },
    publications: {
      title: "Research Publications",
      content: [
        {
          title:
            "Skeleton based Human Action Recognition using a Structured-Tree Neural Network",
          authors: "MS Khan, A Ware, M Karim, N Bahoo, MJ Khalid",
          journal:
            "European Journal of Engineering and Technology Research 5 (8), 849-854",
          citations: "6 citations",
          year: "2020",
        },
        {
          title:
            "SD-ALB: Software Defined Adaptive Load Balancing in Data Center Network",
          authors: "R Fazal, SMM Gilani, MJ Khalid",
          journal:
            "KIET Journal of Computing and Information Sciences 6 (2), 51-67",
          year: "2023",
        },
      ] as Publication[],
      additional: "60+ verified peer reviews for IEEE Access",
      icon: BookOpen,
    },
    certifications: {
      title: "Certifications",
      content: [
        "McKinsey Forward Program - McKinsey & Company (Dec 2024)",
        "Python 3 Programming Specialization - University of Michigan (Jan 2024)",
        "AWS Machine Learning Foundations - Udacity (Aug 2022)",
        "Neural Networks and Deep Learning - Coursera (Nov 2022)",
        "Software Defined Networking - University of Chicago (Mar 2021)",
        "Google IT Support Specialization - Google (Sep 2021)",
        "Introduction to Cybersecurity - Cisco Networking Academy (Jan 2021)",
        "Project Management Workshop (36 hrs) - IBA (Feb 2020)",
      ] as string[],
      icon: Award,
    },
    skills: {
      title: "Technical Skills",
      content: {
        Languages: [
          "C++",
          "Java",
          "Python",
          "Dart",
          "PHP",
          "JavaScript",
          "TypeScript",
        ],
        "Frameworks & Libraries": [
          "Qt",
          "Flutter",
          "Laravel",
          "Next.js",
          "React",
          "JavaFX",
          "OpenGL",
        ],
        "AI/ML": [
          "TensorFlow",
          "Classification",
          "Time Series Forecasting",
          "Neural Networks",
        ],
        Databases: ["MySQL", "Firebase", "PostgreSQL"],
        "Tools & Platforms": [
          "Git",
          "Figma",
          "Android Studio",
          "Arduino",
          "Vite",
        ],
      },
      icon: Terminal,
    },
    contact: {
      title: "Contact Information",
      content: {
        email: "mjk22071998@gmail.com",
        linkedin: "linkedin.com/in/mjk22071998",
        github: "github.com/mjk22071998",
        location: "Rawalpindi, Pakistan",
      },
      icon: Mail,
    },
  };

  const commands: Record<string, () => CommandResult> = {
    help: () => ({
      output: `Available commands:
  help              Show this help message
  clear             Clear terminal
  ls                List available sections
  cat <section>     View section content (e.g., cat about)
  tree              Show directory structure
  whoami            Display brief info
  contact           Show contact information
  
Available sections: ${Object.keys(sections).join(", ")}`,
      type: "info",
    }),
    clear: () => ({ output: "", type: "clear" }),
    ls: () => ({
      output: Object.keys(sections)
        .map((key) => `📁 ${key}`)
        .join("\n"),
      type: "success",
    }),
    tree: () => ({
      output: `mjk22071998-portfolio/
├── 📄 about
├── 💼 experience
├── 🎓 education
├── 💻 projects
├── 📚 publications
├── 🏆 certifications
├── ⚡ skills
└── 📧 contact`,
      type: "success",
    }),
    whoami: () => ({
      output:
        "Muhammad Junaid Khalid - Software Developer @ NASTP\nMS Computer Science | AI/ML Enthusiast | Open Source Contributor",
      type: "success",
    }),
    contact: () => ({
      output: `📧 Email: mjk22071998@gmail.com
🔗 LinkedIn: linkedin.com/in/mjk22071998
💻 GitHub: github.com/mjk22071998
📍 Location: Rawalpindi, Pakistan`,
      type: "success",
    }),
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    const [command, ...args] = trimmedCmd.split(" ");

    if (command === "") return;

    let result: CommandResult;
    if (commands[command]) {
      result = commands[command]();
    } else if (command === "cat" && args.length > 0) {
      const section = args[0];
      if (sections[section]) {
        result = { output: section, type: "section" };
      } else {
        result = {
          output: `cat: ${section}: No such file or directory`,
          type: "error",
        };
      }
    } else {
      result = {
        output: `Command not found: ${command}. Type 'help' for available commands.`,
        type: "error",
      };
    }

    if (result.type === "clear") {
      setCommandHistory([]);
    } else {
      setCommandHistory((prev) => [
        ...prev,
        { command: trimmedCmd, ...result },
      ]);
    }
    setCurrentInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(currentInput);
    }
  };

  const renderSectionContent = (sectionKey: string) => {
    const section = sections[sectionKey];

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-2 mb-4"
      >
        <div className="text-green-400 font-bold mb-2 flex items-center gap-2">
          {React.createElement(section.icon, { size: 20 })}
          {section.title}
        </div>

        {sectionKey === "experience" && (
          <div className="space-y-4">
            {(section.content as Experience[]).map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="border-l-2 border-cyan-500 pl-4 py-2"
              >
                <div className="text-cyan-400 font-semibold">{exp.role}</div>
                <div className="text-gray-400 text-sm">
                  {exp.company} | {exp.period}
                </div>
                <div className="text-gray-500 text-xs mb-2">{exp.location}</div>
                <div className="text-gray-300 text-sm mb-2">
                  {exp.description}
                </div>
                <div className="text-yellow-400 text-xs">
                  Skills: {exp.skills}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {sectionKey === "education" && (
          <div className="space-y-3">
            {(section.content as Education[]).map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="border-l-2 border-purple-500 pl-4 py-2"
              >
                <div className="text-purple-400 font-semibold">
                  {edu.degree}
                </div>
                <div className="text-gray-400 text-sm">{edu.institution}</div>
                <div className="text-gray-500 text-xs">
                  {edu.period} | Grade: {edu.grade}
                </div>
                {edu.details && (
                  <div className="text-gray-400 text-sm mt-1">
                    {edu.details}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {sectionKey === "projects" && (
          <div className="space-y-3">
            {(section.content as Project[]).map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="border-l-2 border-blue-500 pl-4 py-2"
              >
                <div className="text-blue-400 font-semibold">{proj.name}</div>
                <div className="text-gray-300 text-sm mb-1">
                  {proj.description}
                </div>
                <div className="text-green-400 text-xs">Tech: {proj.tech}</div>
              </motion.div>
            ))}
          </div>
        )}

        {sectionKey === "publications" && (
          <div className="space-y-3">
            {(section.content as Publication[]).map((pub, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="border-l-2 border-orange-500 pl-4 py-2"
              >
                <div className="text-orange-400 font-semibold">{pub.title}</div>
                <div className="text-gray-400 text-sm">{pub.authors}</div>
                <div className="text-gray-500 text-xs">{pub.journal}</div>
                <div className="text-yellow-400 text-xs">
                  {pub.citations} ({pub.year})
                </div>
              </motion.div>
            ))}
            <div className="text-cyan-400 text-sm mt-3">
              + {section.additional}
            </div>
          </div>
        )}

        {sectionKey === "certifications" && (
          <ul className="space-y-1">
            {(section.content as string[]).map((cert, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="text-gray-300 text-sm flex items-start gap-2"
              >
                <ChevronRight
                  size={16}
                  className="text-green-400 mt-0.5 shrink-0"
                />
                <span>{cert}</span>
              </motion.li>
            ))}
          </ul>
        )}

        {sectionKey === "skills" && (
          <div className="space-y-3">
            {Object.entries(section.content).map(([category, skills], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
              >
                <div className="text-yellow-400 font-semibold mb-1">
                  {category}:
                </div>
                <div className="flex flex-wrap gap-2 ml-4">
                  {(skills as string[]).map((skill, skillIdx) => (
                    <motion.span
                      key={skillIdx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: idx * 0.1 + skillIdx * 0.05,
                      }}
                      className="bg-gray-800 text-cyan-400 px-2 py-1 rounded text-xs border border-cyan-700"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {sectionKey === "about" && (
          <div className="text-gray-300 text-sm whitespace-pre-line leading-relaxed">
            {section.content}
          </div>
        )}

        {sectionKey === "contact" && (
          <div className="space-y-2">
            {Object.entries(section.content).map(([key, value], idx) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="text-gray-300 text-sm flex items-center gap-2"
              >
                <ChevronRight size={14} className="text-cyan-400" />
                <span className="text-yellow-400 capitalize">{key}:</span>
                <span>{value}</span>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    );
  };

  const NavButton: React.FC<{ sectionKey: string; label: string }> = ({
    sectionKey,
    label,
  }) => (
    <motion.button
      whileHover={{ scale: 1.05, borderColor: "#06b6d4" }}
      whileTap={{ scale: 0.95 }}
      onClick={() => handleCommand(`cat ${sectionKey}`)}
      className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded text-sm text-cyan-400 transition-all hover:shadow-lg hover:shadow-cyan-500/20"
    >
      {React.createElement(sections[sectionKey].icon, { size: 16 })}
      {label}
    </motion.button>
  );

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-4">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-b border-green-900 pb-4 mb-6"
      >
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <Terminal className="text-green-400" size={32} />
            <div>
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl font-bold text-green-400"
              >
                Muhammad Junaid Khalid
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-base text-cyan-400 mt-1"
              >
                Software Developer @ NASTP | MS Computer Science
              </motion.p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-3"
          >
            <motion.a
              whileHover={{ scale: 1.2, color: "#4ade80" }}
              href="https://github.com/mjk22071998"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: "#4ade80" }}
              href="https://linkedin.com/in/mjk22071998"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, color: "#4ade80" }}
              href="mailto:mjk22071998@gmail.com"
              className="text-gray-400 transition-colors"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </div>
      </motion.header>

      {/* Quick Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mb-6 border border-gray-800 rounded p-4 bg-gray-900"
      >
        <div className="text-xs text-gray-500 mb-3">QUICK NAVIGATION:</div>
        <div className="flex flex-wrap gap-2">
          <NavButton sectionKey="about" label="About" />
          <NavButton sectionKey="experience" label="Experience" />
          <NavButton sectionKey="education" label="Education" />
          <NavButton sectionKey="projects" label="Projects" />
          <NavButton sectionKey="publications" label="Publications" />
          <NavButton sectionKey="certifications" label="Certifications" />
          <NavButton sectionKey="skills" label="Skills" />
          <NavButton sectionKey="contact" label="Contact" />
        </div>
      </motion.nav>

      {/* Terminal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="border border-green-900 rounded-lg overflow-hidden shadow-2xl shadow-green-900/20"
      >
        <div className="bg-gray-900 border-b border-green-900 px-4 py-2 flex items-center gap-2">
          <div className="flex gap-2">
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="w-3 h-3 rounded-full bg-red-500"
            ></motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="w-3 h-3 rounded-full bg-yellow-500"
            ></motion.div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="w-3 h-3 rounded-full bg-green-500"
            ></motion.div>
          </div>
          <span className="text-gray-500 text-sm ml-2">terminal - bash</span>
        </div>

        <div
          ref={terminalRef}
          className="bg-black p-4 h-96 overflow-y-auto"
          onClick={() => inputRef.current?.focus()}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-cyan-400 mb-2"
          >
            Welcome to Muhammad Junaid Khalid's Portfolio Terminal v1.0.0
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 text-sm mb-4"
          >
            Type 'help' to see available commands or use the navigation buttons
            above.
          </motion.div>

          <AnimatePresence>
            {commandHistory.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="mb-3"
              >
                <div className="flex items-center gap-2">
                  <span className="text-green-400">mjk22071998@portfolio</span>
                  <span className="text-gray-500">:</span>
                  <span className="text-blue-400">{currentPath}</span>
                  <span className="text-gray-500">$</span>
                  <span className="text-white">{item.command}</span>
                </div>

                {item.type === "section" ? (
                  renderSectionContent(item.output)
                ) : item.type === "error" ? (
                  <div className="text-red-400 mt-1">{item.output}</div>
                ) : item.type === "info" ? (
                  <div className="text-yellow-400 mt-1 whitespace-pre-line">
                    {item.output}
                  </div>
                ) : (
                  <div className="text-gray-300 mt-1 whitespace-pre-line">
                    {item.output}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          <div className="flex items-center gap-2">
            <span className="text-green-400">mjk22071998@portfolio</span>
            <span className="text-gray-500">:</span>
            <span className="text-blue-400">{currentPath}</span>
            <span className="text-gray-500">$</span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none text-white"
              style={{ caretColor: "#4ade80" }}
              autoFocus
            />
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-6 text-center text-gray-600 text-sm"
      >
        <p>
          © 2025 Muhammad Junaid Khalid | Built with React, TypeScript & Framer
          Motion
        </p>
        <p className="mt-1">
          Type 'help' in terminal or use navigation buttons to explore
        </p>
      </motion.footer>
    </div>
  );
};

export default Portfolio;
