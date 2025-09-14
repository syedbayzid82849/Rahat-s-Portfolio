import React from "react";
import ServicesCard from "./ServicesCard";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Button Component
const Button = ({ children, ...props }) => (
    <button
        {...props}
        className={`px-5 py-3 rounded-lg font-semibold inline-flex items-center justify-center transition-all duration-300 ${props.className}`}
    >
        {children}
    </button>
);

F

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Services = () => {
    return (
        <section className="pb-16">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 text-white"
                >
                    <h2 className="text-4xl text-center font-bold mb-3">
                        My <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Services</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
                        Comprehensive design solutions to elevate your brand and drive business growth.
                    </p>
                </motion.div>

                {/* Animated Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {services.map((service, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <ServicesCard service={service} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* View all services */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center mt-10 flex justify-center"
                >
                    <Button
                        href="https://www.behance.net/rgxfigure"
                        className="bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-300/50"
                    >
                        <a
                            className="flex items-center"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.behance.net/rgxfigure/services"
                        >
                            <span>View All Services</span>
                            <ArrowRight size={16} className="ml-2" />
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
