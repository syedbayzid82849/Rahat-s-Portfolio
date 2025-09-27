import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Zap, Image, FileText, Award, Heart, Monitor, Layers } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Skills = () => {
    const [showAll, setShowAll] = useState(false);

    // Expertise items with corresponding SVG icons
    const expertise = [
        // 🟣 Social Media Branding (Newly Added)
        { name: "Social Media Branding", icon: <Monitor className="w-5 h-5" /> },
        { name: "Instagram Branding", icon: <Image className="w-5 h-5" /> },
        { name: "LinkedIn Branding", icon: <Monitor className="w-5 h-5" /> },

        // 🟢 Branding Related (Top Priority)
        { name: "Logo design", icon: <Award className="w-5 h-5" /> },
        { name: "Brand identity", icon: <Heart className="w-5 h-5" /> },
        { name: "Business card and Stationery design", icon: <Layers className="w-5 h-5" /> },
        { name: "Company profile", icon: <FileText className="w-5 h-5" /> },

        // 🔵 Other Design Services
        { name: "Flyer design", icon: <FileText className="w-5 h-5" /> },
        { name: "Brochure design", icon: <FileText className="w-5 h-5" /> },
        { name: "T-shirt design", icon: <Monitor className="w-5 h-5" /> },
        { name: "Book Cover design", icon: <FileText className="w-5 h-5" /> },
        { name: "Package design", icon: <Layers className="w-5 h-5" /> },
        { name: "Icon design", icon: <Image className="w-5 h-5" /> },
        { name: "Big print items (posters and billboards)", icon: <FileText className="w-5 h-5" /> },
        { name: "Infographics", icon: <Zap className="w-5 h-5" /> },
        { name: "Social media design", icon: <Monitor className="w-5 h-5" /> },
        { name: "Poster design", icon: <Image className="w-5 h-5" /> },
        { name: "Web Banner design", icon: <Monitor className="w-5 h-5" /> },
        { name: "CV/Resume", icon: <FileText className="w-5 h-5" /> },
    ];

    // Skills progress data
    const skills = [
        { name: "Branding Design", percent: "96%", color: "from-yellow-500 to-orange-500" },
        { name: "Social Media Design", percent: "85%", color: "from-indigo-500 to-purple-500" },
        { name: "Adobe Illustrator", percent: "95%", color: "from-purple-500 to-pink-500" },
        { name: "Adobe Photoshop", percent: "93%", color: "from-blue-500 to-purple-500" },
        { name: "Adobe InDesign", percent: "90%", color: "from-green-500 to-blue-500" },
        { name: "Print & Digital Design", percent: "88%", color: "from-pink-500 to-red-500" },
    ];

    return (
        <section id="skills" className="py-20 border-t border-gray-700">
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
                    viewport={{ once: false }}
                    className="text-center mb-10"
                >
                    <h2 className="text-4xl font-bold mb-3">
                        Skills & <span className="text-green-500">Expertise</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Here’s a showcase of the creative services and design expertise I provide for brands and businesses.
                    </p>
                </motion.div>

                {/* Skills Progress Bars */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: false }}
                        >
                            <div className="flex justify-between mb-2">
                                <span className="text-lg font-semibold text-gray-300">{skill.name}</span>
                                <span className="text-purple-400 font-medium">{skill.percent}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                                <motion.div
                                    className={`skill-bar bg-gradient-to-r ${skill.color} h-3 rounded-full`}
                                    initial={{ width: 0 }}
                                    whileInView={{ width: skill.percent }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: false }}
                                    style={{ width: skill.percent }}
                                ></motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Expertise Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {expertise.map((item, index) => {
                        // sm screen এর জন্য 9 items দেখাবে যদি showAll false হয়
                        if (index >= 9) {
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: showAll ? 1 : 0, y: showAll ? 0 : 20 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    className={`flex items-center space-x-3 p-4 rounded-lg bg-white/10 backdrop-blur-md hover:shadow-lg hover:shadow-green-300/50 transition-all duration-300 ${showAll ? "block" : "hidden sm:block"
                                        }`} // sm:block ensures md/lg always visible
                                >
                                    <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full text-green-500">
                                        {item.icon}
                                    </div>
                                    <span className="text-gray-100 font-medium">{item.name}</span>
                                </motion.div>
                            );
                        }

                        // প্রথম 9 items সব screen এ দেখাবে
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="flex items-center space-x-3 p-4 rounded-lg bg-white/10 backdrop-blur-md hover:shadow-lg hover:shadow-green-300/50 transition-all duration-300"
                            >
                                <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full text-green-500">
                                    {item.icon}
                                </div>
                                <span className="text-gray-100 font-medium">{item.name}</span>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Show More / Show Less Button only on sm */}
                <div className="flex justify-center mt-6 sm:block md:hidden lg:hidden">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white"
                    >
                        {showAll ? "Show Less" : "Show More"}
                        {showAll ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Skills;
