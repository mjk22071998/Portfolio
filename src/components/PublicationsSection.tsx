import { motion } from 'motion/react';
import { FileText } from 'lucide-react';

interface Publication {
    title: string;
    authors: string;
    venue: string;
    year: string;
    citations?: number;
    link?: string;
}

export function PublicationsSection() {
    const publications: Publication[] = [
        {
            title: 'Skeleton based Human Action Recognition using a Structured-Tree Neural Network',
            authors: 'MS Khan, A Ware, M Karim, N Bahoo, MJ Khalid',
            venue: 'European Journal of Engineering and Technology Research 5 (8), 849-854',
            year: '2020',
            citations: 6,
        },
        {
            title: 'SD-ALB: Software Defined Adaptive Load Balancing in Data Center Network',
            authors: 'R Fazal, SMM Gilani, MJ Khalid',
            venue: 'KIET Journal of Computing and Information Sciences 6 (2), 51-67',
            year: '2023',
        },
    ];

    return (
        <section className="py-20 px-4 relative overflow-hidden" id="publications">
            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="mb-12 text-center text-4xl font-bold text-foreground">
                        Publications
                    </h2>

                    <div className="space-y-6">
                        {publications.map((pub, index) => (
                            <motion.div
                                key={index}
                                className="group p-6 rounded-lg border bg-card border-border hover:border-primary transition-all duration-300 relative overflow-hidden"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="flex items-start gap-4">
                                    <FileText className="w-6 h-6 flex-shrink-0 mt-1 text-primary" />

                                    <div className="flex-1">
                                        <h3 className="mb-2 text-lg font-semibold text-primary">
                                            {pub.title}
                                        </h3>

                                        <div className="space-y-1 text-sm text-foreground/80 mb-3">
                                            <p>{pub.authors}</p>
                                            <p>{pub.venue}</p>
                                        </div>

                                        {pub.citations && (
                                            <div className="inline-block px-3 py-1 rounded-full text-sm mb-2 bg-primary/10 text-primary">
                                                {pub.citations} citation{pub.citations !== 1 ? 's' : ''}
                                            </div>
                                        )}
                                    </div>

                                    <div className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary flex-shrink-0">
                                        {pub.year}
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
