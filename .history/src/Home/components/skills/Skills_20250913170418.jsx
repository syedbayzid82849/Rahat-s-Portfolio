import { motion } from 'framer-motion';
import { Zap, Image, FileText, Award, Heart, Monitor, Camera, Layers } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Skills = () => {
    // Expertise items with corresponding SVG icons
    const expertise = [
        { name: "Logo design", icon: <Award className="w-5 h-5" /> },
        { name: "Brand identity", icon: <Heart className="w-5 h-5" /> },
        { name: "Flyer design", icon: <FileText className="w-5 h-5" /> },
        { name: "Brochure design", icon: <FileText className="w-5 h-5" /> },
        { name: "Business card and Stationery design", icon: <Layers className="w-5 h-5" /> },
        { name: "T-shirt design", icon: <Monitor className="w-5 h-5" /> },
        { name: "Book Cover design", icon: <FileText className="w-5 h-5" /> },
        { name: "Package design", icon: <Layers className="w-5 h-5" /> },
        { name: "Icon design", icon: <Image className="w-5 h-5" /> },
        { name: "Big print items (posters and billboards)", icon: <FileText className="w-5 h-5" /> },
        { name: "Infographics", icon: <Zap className="w-5 h-5" /> },
        { name: "Social media design", icon: <Monitor className="w-5 h-5" /> },
        { name: "Poster design", icon: <Image className="w-5 h-5" /> },
        { name: "Web Banner design", icon: <Monitor className="w-5 h-5" /> },
        { name: "Company profile", icon: <FileText className="w-5 h-5" /> },
        { name: "CV/Resume", icon: <FileText className="w-5 h-5" /> },
    ];

    return (
        <section id="skills" className="pb-16">
            <Helmet>
                <title>Skills & Expertise - Portfolio of Rahat Hussain</title>
                <meta
                    name="description"
                    content="Explore my expertise in Logo Design, Brand Identity, Print Design, Social Media, Web Banners, CV/Resume design, and more."
                />
            </Helmet>

            <div className="container mx-auto px-3 lg:px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-4xl font-bold mb-3">
                        <span className="text-green-500">Skills</span> Expertise
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Here’s a showcase of the creative services and design expertise I provide for brands and businesses.
                    </p>
                </motion.div>

                {/* Expertise Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {expertise.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-3 p-4 rounded-lg bg-white/30 backdrop-blur-md hover:shadow-lg hover:shadow-green-300/50 transition-all duration-300"
                        >
                            <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full text-green-500">
                                {item.icon}
                            </div>
                            <span className="text-gray-100 font-medium group-hover:text-green-600 transition-colors">{item.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
