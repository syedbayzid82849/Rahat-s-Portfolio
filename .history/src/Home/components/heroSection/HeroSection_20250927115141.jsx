import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, ArrowUp } from "lucide-react";
import { Button } from "../../../components/ui/button"; // adjust path
import { Helmet } from "react-helmet";
import { Link } from "react-scroll";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Hero = () => {
    const [scrolled, setScrolled] = useState(false);

    // Define the stats data
    const statsData = [
        { label: 'Projects', endValue: 500, duration: 2, suffix: '+' },
        { label: 'Happy Clients', endValue: 50, duration: 2, suffix: '+' },
        { label: 'Years Experience', endValue: 5, duration: 2, suffix: '+' }, // New 'Experience' stat
    ];
    // Intersection observer for stats
    const { ref: statRef, inView: statsInView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <Helmet>
                <meta
                    name="description"
                    content="Helping founders and executives with creative designs, LinkedIn optimization, and premium branding solutions."
                />
                <meta name="keywords" content="Portfolio, Design, Creative, Branding" />
            </Helmet>

            <section
                id="home"
                className="min-h-screen flex items-center relative overflow-hidden py-20"
            >
                {/* Background Animated Circles */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute top-20 right-20 w-32 h-32 bg-green-400 rounded-full opacity-10 blur-3xl"
                    />
                    <motion.div
                        animate={{ rotate: -360, scale: [1, 0.8, 1] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-20 left-20 w-24 h-24 bg-green-300 rounded-full opacity-10 blur-3xl"
                    />
                </div>

                <div className="container mx-auto px-3 lg:px-6 relative z-10 pb-30">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            {/* Main Heading */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: 0.4 }}
                                className="space-y-4"
                            >
                                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                                    <span className="text-green-500">Rahat</span>
                                    <br />
                                    <span className="text-green-500">Hussain</span>
                                </h1>
                                <span className="text-green-600 text-3xl font-semibold">
                                    Creative Design Solutions
                                </span>
                                <p className="text-xl max-w-lg leading-relaxed">
                                    Helping founders and executives with creative designs,
                                    LinkedIn optimization, and premium branding solutions that
                                    drive results.
                                </p>
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                ref={statRef}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: 0.6 }}
                                className="flex items-center"
                            >
                                {statsData.map((stat, index) => (
                                    <React.Fragment key={stat.label}>
                                        {/* Individual Stat Block */}
                                        <div className=" p-4 sm:p-6 lg:p-8">
                                            {/* Stat Value (CountUp or static display) */}
                                            <div className="text-3xl font-bold text-green-500">
                                                {statsInView ? (
                                                    <CountUp
                                                        start={0}
                                                        end={stat.endValue}
                                                        duration={stat.duration}
                                                        suffix={stat.suffix}
                                                    />
                                                ) : (
                                                    `0${stat.suffix}` // Fallback display before view
                                                )}
                                            </div>
                                            {/* Stat Label */}
                                            <div className="text-lg opacity-90">{stat.label}</div>
                                        </div>

                                        {/* Vertical Separator Line: Render only if it's not the last item */}
                                        {index < statsData.length - 1 && (
                                            <div className="hidden sm:block h-20 w-px bg-white/50 mx-4 lg:mx-8"></div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: 0.8 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        size="lg"
                                        className="bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-300/50 transition-all duration-300"
                                    >
                                        <Link
                                            to="portfolio"
                                            smooth={true}
                                            duration={500}
                                            className="w-full h-full flex items-center justify-center cursor-pointer"
                                        >
                                            <span>View My Work</span>
                                            <ArrowRight size={16} className="ml-2" />
                                        </Link>
                                    </Button>
                                </motion.div>

                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-green-500 text-green-700 hover:bg-green-100 hover:text-green-900 transition-all duration-300"
                                    >
                                        <a
                                            href="https://www.linkedin.com/in/rgxfigure/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full h-full flex items-center justify-center"
                                        >
                                            Hire Me
                                        </a>
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Right Content - Profile Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative flex justify-center mt-10"
                        >
                            <div className="relative">
                                {/* Animated glow effect */}
                                <motion.div
                                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-green-300 rounded-full blur-3xl opacity-30"
                                />

                                {/* Profile image */}
                                <motion.div
                                    animate={{ y: [-10, 10, -10] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-green-500"
                                >
                                    <img
                                        src="/assets/profile.jpg"
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>

                                {/* Floating elements */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute -top-4 -right-4 w-16 h-16 bg-green-300/50 backdrop-blur-md rounded-full flex items-center justify-center"
                                >
                                    <Sparkles className="text-gray-950" size={24} />
                                </motion.div>

                                <motion.div
                                    animate={{ y: [-5, 5, -5] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -bottom-4 -left-4 bg-green-200/50 backdrop-blur-md px-4 py-2 rounded-full"
                                >
                                    <span className="text-sm font-medium text-green-950">
                                        Available for hire
                                    </span>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Back to top button */}
                {scrolled && (
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="fixed bottom-8 right-8 z-50">
                        <Button
                            onClick={scrollToTop}
                            size="icon"
                            variant="outline"
                            className="rounded-full glass border-green-500 bg-card/50 hover:bg-green-100 hover:shadow-glow transition-all duration-300"
                        >
                            <ArrowUp size={16} />
                        </Button>
                    </motion.div>
                )}
            </section>
        </>
    );
};

export default Hero;
