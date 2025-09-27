import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ArrowUp } from "lucide-react";
import { Button } from "../../../components/ui/button"; // adjust path
import { Helmet } from "react-helmet";
import { Link } from "react-scroll";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Hero = () => {
    const [scrolled, setScrolled] = useState(false);

    // For counter visibility
    const { ref: statRef, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll to top function
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
                <meta
                    name="keywords"
                    content="Portfolio, Design, Creative, Branding"
                />
            </Helmet>
            <section
                id="home"
                className="min-h-screen flex items-center relative overflow-hidden py-20"
            >
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute top-20 right-20 w-32 h-32 bg-green-400 rounded-full opacity-10 blur-3xl"
                    />
                    <motion.div
                        animate={{ rotate: -360, scale: [1, 0.8, 1] }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute bottom-20 left-20 w-24 h-24 bg-green-300 rounded-full opacity-10 blur-3xl"
                    />
                </div>

                <div className="container mx-auto px-3 lg:px-6 relative z-10 pb-30">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            {/* Main Heading */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="space-y-4"
                            >
                                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                                    <span className="text-green-500">
                                        Rahat
                                    </span>
                                    <br />
                                    <span className="text-green-500">
                                        Hussain
                                    </span>
                                    <br />
                                </h1>
                                <span className="text-green-600 text-3xl font-semibold">
                                    Creative Design Solutions
                                </span>
                                <p className="text-xl max-w-lg leading-relaxed">
                                    Helping founders and executives with
                                    creative designs, LinkedIn optimization,
                                    and premium branding solutions that drive
                                    results.
                                </p>
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                ref={statRef}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="flex items-center space-x-8"
                            >
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-500">
                                        {inView ? (
                                            <CountUp start={0} end={500} duration={3} />
                                        ) : (
                                            0
                                        )}
                                        +
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        Projects
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-600">
                                        {inView ? (
                                            <CountUp start={0} end={50} duration={3} />
                                        ) : (
                                            0
                                        )}
                                        +
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        Happy Clients
                                    </div>
                                </div>
                            </motion.div>

                            {/* CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
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

                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
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
                        {/* ... তোমার আগের image + animations 그대로 থাকবে ... */}
                    </div>
                </div>

                {/* back to home button */}
                {scrolled && (
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="fixed bottom-8 right-8 z-50"
                    >
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
