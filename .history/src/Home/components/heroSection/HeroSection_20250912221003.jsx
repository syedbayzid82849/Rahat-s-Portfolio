import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { Button } from './Button'; // adjust path if needed

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden hero-pattern">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 right-20 w-32 h-32 bg-gradient-primary rounded-full opacity-10 blur-xl"
                />
                <motion.div
                    animate={{ rotate: -360, scale: [1, 0.8, 1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-accent rounded-full opacity-10 blur-xl"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full"
                        >
                            <Sparkles className="text-accent" size={16} />
                            <span className="text-sm font-medium">Premium Branding Partner</span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="space-y-4"
                        >
                            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                                <span className="gradient-text">Creative</span><br />
                                <span className="text-foreground">Design</span><br />
                                <span className="gradient-text">Solutions</span>
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                                Helping founders and executives with creative designs, LinkedIn optimization,
                                and premium branding solutions that drive results.
                            </p>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex items-center space-x-8"
                        >
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text">500+</div>
                                <div className="text-sm text-muted-foreground">Projects</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text">50+</div>
                                <div className="text-sm text-muted-foreground">Happy Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                                    ))}
                                </div>
                                <div className="text-sm text-muted-foreground">5.0 Rating</div>
                            </div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    size="lg"
                                    className="group bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground shadow-glow"
                                >
                                    <span>View My Work</span>
                                    <ArrowRight
                                        size={16}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-primary/20 bg-card/50 hover:bg-primary/10 text-foreground"
                                >
                                    <span>Get in Touch</span>
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="relative">
                            {/* Animated glow effect */}
                            <motion.div
                                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30"
                            />

                            {/* Profile image placeholder */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-80 h-80 mx-auto glass rounded-full overflow-hidden border-4 border-primary/20"
                            >
                                <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
                                    <div className="text-6xl font-bold text-primary-foreground">RH</div>
                                </div>
                            </motion.div>

                            {/* Floating elements */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute -top-4 -right-4 w-16 h-16 glass rounded-full flex items-center justify-center"
                            >
                                <Sparkles className="text-accent" size={24} />
                            </motion.div>

                            <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-full"
                            >
                                <span className="text-sm font-medium gradient-text">Available for hire</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
