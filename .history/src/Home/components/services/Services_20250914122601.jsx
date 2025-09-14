import React from "react";
import { motion } from "framer-motion";
import { Star, ArrowRight, User, Linkedin, Instagram, Palette, CreditCard, Youtube } from "lucide-react";

// cn utility
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

// Button Component
const buttonVariants = {
    default: "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 bg-green-500 text-white hover:bg-green-600 px-4 py-2 h-10",
    outline: "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 border border-white/20 bg-transparent hover:bg-white/10 px-4 py-2 h-10"
};

const Button = ({ variant = "default", children, ...props }) => {
    return (
        <button className={cn(buttonVariants[variant])} {...props}>
            {children}
        </button>
    );
};

// Services Data
const services = [
    {
        icon: <Linkedin className="w-8 h-8" />,
        title: "LinkedIn Profile Optimization",
        description: "Transform your LinkedIn presence with professional banners, headshots, and content strategy.",
        features: ["Professional Banner Design", "Profile Photo Enhancement", "Content Strategy", "Engagement Optimization"],
        price: "Starting at $199",
        popular: false,
        variant: "primary"
    },
    {
        icon: <User className="w-8 h-8" />,
        title: "Personal Branding Design",
        description: "Build a cohesive personal brand that tells your story and positions you as an industry leader.",
        features: ["Brand Identity", "Color Palette", "Typography", "Visual Guidelines"],
        price: "Starting at $299",
        popular: true,
        variant: "secondary"
    },
    {
        icon: <Instagram className="w-8 h-8" />,
        title: "Carousel & Content Design",
        description: "Eye-catching social media carousels and content that drives engagement.",
        features: ["Instagram Carousels", "Story Templates", "Post Designs", "Content Planning"],
        price: "Starting at $149",
        popular: false,
        variant: "accent"
    },
    {
        icon: <Palette className="w-8 h-8" />,
        title: "Logo & Brand Identity",
        description: "Memorable logos and brand identities that make your business stand out.",
        features: ["Logo Design", "Brand Guidelines", "Business Cards", "Letterheads"],
        price: "Starting at $399",
        popular: false,
        variant: "primary"
    },
    {
        icon: <CreditCard className="w-8 h-8" />,
        title: "Print & Marketing Materials",
        description: "Professional print designs including business cards, brochures, flyers, and banners.",
        features: ["Business Cards", "Brochures", "Flyers", "Banners"],
        price: "Starting at $99",
        popular: false,
        variant: "secondary"
    },
    {
        icon: <Youtube className="w-8 h-8" />,
        title: "YouTube Branding",
        description: "Complete YouTube channel branding including thumbnails, banners, and visuals.",
        features: ["Channel Art", "Thumbnail Templates", "End Screens", "Intro/Outro Graphics"],
        price: "Starting at $249",
        popular: false,
        variant: "accent"
    }
];

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// Services Section
const Services = () => {
    return (
        <section id="services" className="py-16 bg-gray-900">
            <div className="container mx-auto px-6">
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

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.03 }}
                            className={`relative group rounded-2xl p-6 shadow-lg bg-gray-800/60 backdrop-blur border border-gray-700 hover:border-green-400/40 transition-all duration-300 ${service.popular ? 'ring-2 ring-green-400/60' : ''}`}
                        >
                            {service.popular && (
                                <div className="absolute -top-3 left-6 z-10">
                                    <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                                        <Star className="w-3 h-3 fill-current" />
                                        <span>Most Popular</span>
                                    </div>
                                </div>
                            )}

                            {/* Service Icon */}
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 
                ${service.variant === "primary" ? "bg-gradient-to-r from-green-400 to-emerald-500" : ""}
                ${service.variant === "secondary" ? "bg-gradient-to-r from-purple-500 to-pink-500" : ""}
                ${service.variant === "accent" ? "bg-gradient-to-r from-sky-400 to-cyan-500" : ""}
                text-white group-hover:scale-110 transition-transform duration-300`}>
                                {service.icon}
                            </div>

                            {/* Service Content */}
                            <div className="space-y-3 text-white">
                                <h3 className="text-xl font-bold">{service.title}</h3>
                                <p className="text-gray-300 text-sm">{service.description}</p>

                                <ul className="space-y-1 text-gray-400 text-sm">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Pricing + Button */}
                            <div className="mt-6 pt-4 border-t border-gray-700 flex items-center justify-between">
                                <div>
                                    <div className="text-lg font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">{service.price}</div>
                                    <div className="text-xs text-gray-500">Custom quotes available</div>
                                </div>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button variant="outline">
                                        <span>Learn More</span>
                                        <ArrowRight size={14} />
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
