import { motion } from 'motion/react';
import {
    Cpu,
    Smartphone,
    Database,
    Shield,
    ShoppingCart,
    Globe,
    Code2,
    ExternalLink,
} from 'lucide-react';

interface Project {
    title: string;
    description: string;
    tech: string[];
    icon: typeof Cpu;
    link?: string;
}

export function ProjectsSection() {
    const projects: Project[] = [
        {
            title: 'Power Consumption Meter',
            description:
                'IoT solution measuring real-time power consumption of appliances using ESP32, transmitting data to mobile app via Firebase realtime database.',
            tech: ['Android-Java', 'Arduino C', 'Firebase', 'ESP32'],
            icon: Cpu,
        },
        {
            title: 'Plant Disease Detection',
            description:
                'Mobile application to detect infections in plants using EfficientNet model trained on PlantVillage dataset from Kaggle.',
            tech: ['EfficientNet', 'Android-Java', 'PlantVillage', 'ML'],
            icon: Smartphone,
        },
        {
            title: 'Fruit Quality Monitoring System',
            description:
                'IoT device monitoring gases, temperature and color of bananas. Transmits data to Firebase and raises alarms when thresholds are exceeded.',
            tech: ['IoT', 'Android-Java', 'Firebase', 'Sensors'],
            icon: Database,
        },
        {
            title: 'Android Vulnerability Scanner',
            description:
                'AI-powered security tool analyzing intent filters and permissions to detect malicious apps using TensorFlow models.',
            tech: ['PyQt5', 'TensorFlow', 'Security', 'Python'],
            icon: Shield,
        },
        {
            title: 'Owleto Groceries (Foodpanda Clone)',
            description:
                'Complete food delivery platform. Built Android apps for both clients and riders as part of a team, replicating Foodpanda functionality.',
            tech: ['Android-Java', 'Firebase', 'Google Maps', 'Team Project'],
            icon: ShoppingCart,
        },
        {
            title: 'Blogging Website',
            description:
                'Full-stack blog application with authentication, comments, post editing and modern UI. Built for learning web development.',
            tech: ['Laravel', 'Blade', 'Tailwind', 'Vite'],
            icon: Globe,
        },
        {
            title: 'KES Vehicle Inspection Backend',
            description:
                'Backend system for KES mobile app. Created REST APIs and designed database architecture for vehicle inspection workflows.',
            tech: ['Laravel', 'REST API', 'MySQL', 'Backend'],
            icon: Database,
        },
        {
            title: 'Joget Plugin',
            description:
                'Custom plugin for Joget low-code platform, extending functionality for enterprise workflow automation.',
            tech: ['Java 8', 'Joget', 'Plugin Development'],
            icon: Code2,
        },
    ];

    return (
        <section className="py-20 px-4 relative overflow-hidden" id="projects">
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="mb-12 text-center text-4xl font-bold text-foreground">
                        Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="group p-6 rounded-lg border bg-card border-border hover:border-primary transition-all duration-300 cursor-pointer relative overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <project.icon className="w-8 h-8 text-primary" />
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                                        </a>
                                    )}
                                </div>

                                <h3 className="mb-2 text-lg font-semibold text-primary transition-all duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-2 py-1 rounded bg-primary/10 text-primary"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
