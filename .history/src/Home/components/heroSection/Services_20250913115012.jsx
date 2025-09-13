import React from "react";
import { motion } from "framer-motion";
import { , ArrowRight, Linkedin, Instagram, Palette, CreditCard, Youtube, Wordpress} from "lucide-react";

// cn utility
function cn(...classes) {
    return classes.filter(Boolean).join(" ");
}

// Button Component (inline)
const buttonVariants = {
    default: "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary/90 px-4 py-2 h-10",
    outline: "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 border border-white/20 bg-transparent hover:bg-white/10 px-4 py-2 h-10"
};
const Button = ({ variant = "default", children, ...props }) => {
    return <button className={cn(buttonVariants[variant])} {...props}>{children}</button>;
};

// Services Data (Friend's Services)
const services = [
    {
        icon: <Palette className="w-8 h-8" />,
        title: "Graphic Design",
        features: ["Custom illustrations", "Marketing graphics", "Social media visuals", "Print-ready designs"]
    },
    {
        icon: <Palette className="w-8 h-8" />,
        title: "Logo Design",
        features: ["Unique logo concepts", "Brand identity guide", "Vector & scalable files", "Multiple revisions"]
    },
    {
        icon: <Palette className="w-8 h-8" />,
        title: "Presentation Design",
        features: ["Professional slide templates", "Animations & transitions", "Infographics design", "Brand-aligned visuals"]
    },
    {
        icon: <Palette className="w-8 h-8" />,
        title: "Packaging Design",
        features: ["Product packaging mockups", "Brand consistent design", "Material & dieline guidance", "Print-ready files"]
    },
    {
        icon: <Palette className="w-8 h-8" />,
        title: "Print Design",
        features: ["Business cards", "Brochures", "Flyers", "Posters & banners"]
    },
    {
        icon: <Palette className="w-8 h-8" />,
        title: "Brand Design",
        features: ["Visual identity", "Typography & colors", "Brand guidelines", "Logo & assets"]
    },
    {
        icon: <Palette className="w-8 h-8" />,
        title: "Visual Design",
        features: ["UI elements", "Iconography", "Illustrations", "Consistency across assets"]
    },
    {
        icon: <Palette className="w-8 h-8" />,
        title: "Ad Design",
        features: ["Digital ads", "Social media campaigns", "Print ads", "Banner design"]
    },
    {
        icon: <Palette className="w-8 h-8" />,
        title: "Industrial Design",
        features: ["Product mockups", "3D visuals", "Packaging integration", "Material concept design"]
    },
    {
        icon: <Wordpress className="w-8 h-8" />,
        title: "WordPress Design",
        features: ["Custom themes", "Responsive layout", "Plugin integration", "SEO-friendly design"]
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
        <section id="services" className="py-16">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 text-white"
                >
                    <h2 className="text-4xl font-bold mb-3">
                        My <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">Services</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto">
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
                            className="relative group glass rounded-2xl p-6 shadow-lg"
                        >
                            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>

                            <div className="space-y-3 text-white">
                                <h3 className="text-xl font-bold">{service.title}</h3>
                                <ul className="space-y-1 text-gray-300 text-sm">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-white rounded-full"></div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-6 pt-4 border-t border-gray-700 flex items-center justify-between">
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
