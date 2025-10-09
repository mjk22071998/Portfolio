import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Download } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
    const [displayedText, setDisplayedText] = useState('');
    const fullText = 'Building the future of defense through code and AI';

    // Typewriter effect (just a subtle one-time animation)
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayedText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(interval);
            }
        }, 40);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
            {/* Background Gradient Orbs */}
            <div className="absolute inset-0 opacity-40">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
                        filter: 'blur(100px)',
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 40, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                />
            </div>

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <motion.h1
                    className="mb-4 via-blue-500 bg-clip-text text-transparent"
                    style={{
                        fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                        fontWeight: '700',
                        lineHeight: '1.1',
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    Muhammad Junaid Khalid
                </motion.h1>

                <motion.p
                    className="mb-6 text-muted-foreground"
                    style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Software Developer @ NASTP | C++ | AI | Defense Simulation
                </motion.p>

                <motion.div
                    className="mb-8 text-primary text-lg font-mono"
                    style={{ minHeight: '2rem' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {displayedText}
                    {displayedText.length < fullText.length && (
                        <span className="animate-blink">█</span>
                    )}
                </motion.div>

                <motion.div
                    className="flex flex-wrap items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <Button className="gap-2 border border-primary/30 hover:shadow-[0_0_20px_rgba(0,217,255,0.4)]">
                        <Download className="w-4 h-4" />
                        Download Resume
                    </Button>

                    <Button
                        variant="outline"
                        className="gap-2 border-primary/30 hover:bg-primary/10"
                        onClick={() => window.open('https://linkedin.com/in/mjk22071998', '_blank')}
                    >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                    </Button>

                    <Button
                        variant="outline"
                        className="gap-2 border-primary/30 hover:bg-primary/10"
                        onClick={() => window.open('https://github.com/mjk22071998', '_blank')}
                    >
                        <Github className="w-4 h-4" />
                        GitHub
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
                    <motion.div
                        className="w-1 h-2 rounded-full bg-primary"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
