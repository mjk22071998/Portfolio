import { motion } from 'motion/react';
import { Github, Star, GitFork, Package } from 'lucide-react';

interface Contribution {
    name: string;
    type: 'repo' | 'package';
    description: string;
    link: string;
    stats?: {
        stars?: string;
        forks?: string;
        downloads?: string;
    };
    tech: string[];
    badge?: string;
}

export function OpenSourceSection() {
    const contributions: Contribution[] = [
        {
            name: 'TheAlgorithms/C-Plus-Plus',
            type: 'repo',
            description:
                'Contributed algorithms and data structures implementations to this popular open-source repository.',
            link: 'https://github.com/TheAlgorithms/C-Plus-Plus',
            stats: { stars: '30k+', forks: '7k+' },
            tech: ['C++', 'Algorithms', 'Data Structures'],
        },
        {
            name: 'TheAlgorithms/Java',
            type: 'repo',
            description:
                'Contributed various algorithm implementations to help developers learn and understand algorithms.',
            link: 'https://github.com/TheAlgorithms/Java',
            stats: { stars: '58k+', forks: '19k+' },
            tech: ['Java', 'Algorithms', 'Open Source'],
        },
        {
            name: 'CollapsiblePane',
            type: 'package',
            description:
                'A PyPI package providing collapsible pane widget for PySide6 applications. Available on PyPI with active downloads.',
            link: 'https://pypi.org/project/collapsiblepane/',
            stats: { downloads: 'View Badge' },
            tech: ['Python', 'PySide6', 'Qt', 'PyPI'],
            badge:
                'https://static.pepy.tech/personalized-badge/collapsiblepane?period=total&units=international_system&left_color=black&right_color=blue&left_text=downloads',
        },
    ];

    return (
        <section className="py-20 px-4 relative overflow-hidden" id="opensource">
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="mb-12 text-center text-4xl font-bold text-foreground">
                        Open Source
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {contributions.map((contrib, index) => (
                            <motion.a
                                key={index}
                                href={contrib.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-6 rounded-lg border bg-card border-border hover:border-primary transition-all duration-300 cursor-pointer block"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    {contrib.type === 'package' ? (
                                        <Package className="w-8 h-8 text-primary" />
                                    ) : (
                                        <Github className="w-8 h-8 text-primary" />
                                    )}
                                </div>

                                <h3 className="mb-2 text-lg font-semibold text-primary transition-all duration-300">
                                    {contrib.name}
                                </h3>

                                <p className="text-foreground/80 mb-4 text-sm leading-relaxed">
                                    {contrib.description}
                                </p>

                                {contrib.stats && (
                                    <div className="flex gap-4 mb-4 text-sm text-muted-foreground">
                                        {contrib.stats.stars && (
                                            <div className="flex items-center gap-1">
                                                <Star className="w-4 h-4" />
                                                <span>{contrib.stats.stars}</span>
                                            </div>
                                        )}
                                        {contrib.stats.forks && (
                                            <div className="flex items-center gap-1">
                                                <GitFork className="w-4 h-4" />
                                                <span>{contrib.stats.forks}</span>
                                            </div>
                                        )}
                                        {contrib.stats.downloads && contrib.badge && (
                                            <div className="flex items-center gap-1">
                                                <img
                                                    src={contrib.badge}
                                                    alt="PyPI Downloads"
                                                    className="h-5"
                                                />
                                            </div>
                                        )}
                                    </div>
                                )}

                                <div className="flex flex-wrap gap-2">
                                    {contrib.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-2 py-1 rounded bg-primary/10 text-primary"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
