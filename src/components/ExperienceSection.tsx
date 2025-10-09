import { motion } from 'motion/react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

interface Experience {
    title: string;
    company: string;
    location: string;
    period: string;
    description: string[];
    tech: string[];
}

export function ExperienceSection() {
    const experiences: Experience[] = [
        {
            title: 'Software Developer',
            company: 'National Aerospace Science and Technology Park (NASTP)',
            location: 'Rawalpindi, Pakistan',
            period: 'April 2025 - Current',
            description: [
                'Developing cross platform responsive desktop apps using C++ and Qt framework',
                'Collaborating with cross-functional teams to ensure interoperability and seamless user experience',
                'Implementing advanced features like 3D graphics and real-time data visualization',
            ],
            tech: ['C++', 'Qt', 'OpenGL', 'Java', 'Python', 'Git', 'JavaFX', 'Interoperability', 'Teamwork', '3D Graphics', 'Real-time Data Visualization', 'NextJS'],
        },
        {
            title: 'Software Engineering Intern',
            company: 'RippleBerry Technologies',
            location: 'Islamabad, Pakistan',
            period: 'September 2024 - February 2025',
            description: [
                'Worked with no-code/low-code platforms including Bubble and Joget',
                'Developed web applications using Laravel framework',
                'Gained experience in rapid application development methodologies',
            ],
            tech: ['Bubble', 'Joget', 'Laravel', 'PHP'],
        },
        {
            title: 'Director (Software Development)',
            company: 'Techno Spot',
            location: 'Rawalpindi, Pakistan',
            period: 'January 2023 - August 2024',
            description: [
                'Managed Software development projects for clients including mobile apps, web apps, and 3D games',
                'Managed Social Media and executed ad campaigns',
                'Managed training programs and workshops',
            ],
            tech: ['Social Media Management', 'Team Leadership', 'Project Management', 'Public Speaking'],
        },
        {
            title: 'Flutter Trainer',
            company: 'Techno Spot',
            location: 'Rawalpindi, Pakistan',
            period: 'January 2024 - August 2024',
            description: [
                'Trained students and professionals in Data Analytics, programming fundamentals, and mobile app development',
                'Designed curriculum and hands-on projects for practical learning',
                'Managed training programs and workshops',
            ],
            tech: ['Teaching', 'Mentoring', 'Mobile Development', 'Programming'],
        },
        {
            title: 'Teaching Assistant',
            company: 'Arid Agriculture University',
            location: 'Rawalpindi, Pakistan',
            period: '2021 - 2021',
            description: [
                'Assisted in computer science courses and lab sessions',
                'Mentored students in programming and software development',
                'Graded assignments and provided academic support',
            ],
            tech: ['Computer network', 'Operating Systems', 'Data Structures', 'Mentoring'],
        },
    ];

    return (
        <section className="py-20 px-4 bg-secondary/20 relative overflow-hidden" id="experience">
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
                        Experience
                    </h2>

                    <div className="space-y-6">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className="p-6 rounded-lg border glass-morphism border-primary/20 hover:shadow-[0_0_30px_rgba(0,217,255,0.3)] transition-all duration-300"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Briefcase className="w-5 h-5 text-primary" />
                                            <h3
                                                className="text-primary"
                                                style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', fontWeight: '600' }}
                                            >
                                                {exp.title}
                                            </h3>
                                        </div>
                                        <p
                                            className="mb-2"
                                            style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', fontWeight: '500' }}
                                        >
                                            {exp.company}
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-2 text-sm text-muted-foreground lg:text-right">
                                        <div className="flex items-center gap-2 lg:justify-end">
                                            <MapPin className="w-4 h-4" />
                                            <span>{exp.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2 lg:justify-end">
                                            <Calendar className="w-4 h-4" />
                                            <span>{exp.period}</span>
                                        </div>
                                    </div>
                                </div>

                                <ul className="space-y-2 mb-4 text-foreground/90">
                                    {exp.description.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-primary mt-1">→</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 rounded-full text-sm glass-morphism border border-primary/30 text-primary"
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
