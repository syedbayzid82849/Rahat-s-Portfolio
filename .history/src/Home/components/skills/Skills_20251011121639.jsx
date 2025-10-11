import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { Zap, Image, FileText, Award, Heart, Monitor, Layers } from "lucide-react";
import { Helmet } from "react-helmet";
import { CheckCircle } from 'lucide-react';

const Skills = () => {
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
        { name: "Adobe Illustrator", percent: "95%", color: "from-green-300 to-green-500" },
        { name: "Branding Design", percent: "96%", color: "from-green-400 to-green-600" },
        { name: "Social Media Design", percent: "85%", color: "from-green-500 to-green-700" },
        { name: "Adobe Photoshop", percent: "93%", color: "from-green-400 to-green-600" },
        { name: "Adobe InDesign", percent: "90%", color: "from-green-500 to-green-700" },
        { name: "Print & Digital Design", percent: "88%", color: "from-green-400 to-green-600" },
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
                        <span className="text-green-500">Skills</span> & Expertise
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

                {/* Expertise List */}
                <h3 className="text-2xl font-bold mt-6 mb-4">𝗘𝘅𝗽𝗲𝗿𝘁𝗶𝘀𝗲:</h3>
                <ul className="grid md:grid-cols-2 gap-2">
                    {expertise.map((item, index) => (
                        <li key={index} className="flex items-center space-x-2">
                            <span className="text-gray-300 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-400" />
                                {item.name}
                            </span>
                        </li>
                    ))}
                </ul>

            </div>
        </section>
    );
};

export default Skills;
