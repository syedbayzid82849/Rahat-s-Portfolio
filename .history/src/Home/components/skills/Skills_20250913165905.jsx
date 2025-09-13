import { motion } from 'framer-motion';
import {
    Palette, Monitor, Megaphone, Building, Image,
    FileText, Share2, Brush, Type, Camera,
    Layout, Layers, Target, Globe, Mail,
    CreditCard, Zap, Heart, Award
} from 'lucide-react';
import { Helmet } from 'react-helmet';

const Skills = () => {
    const skillCategories = [
        {
            title: "Design Software",
            icon: <Palette className="w-5 h-5 text-green-500" />,
            skills: [
                { name: "Adobe Photoshop", icon: <Image className="w-4 h-4 text-green-400" /> },
                { name: "Adobe Illustrator", icon: <Brush className="w-4 h-4 text-green-400" /> },
                { name: "Adobe InDesign", icon: <Layout className="w-4 h-4 text-green-400" /> },
                { name: "Figma", icon: <Monitor className="w-4 h-4 text-green-400" /> },
                { name: "Canva", icon: <Layers className="w-4 h-4 text-green-400" /> }
            ]
        },
        {
            title: "Brand & Marketing",
            icon: <Target className="w-5 h-5 text-green-500" />,
            skills: [
                { name: "Logo Design", icon: <Award className="w-4 h-4 text-green-400" /> },
                { name: "Brand Design", icon: <Heart className="w-4 h-4 text-green-400" /> },
                { name: "Marketing Materials", icon: <Megaphone className="w-4 h-4 text-green-400" /> },
                { name: "Branding", icon: <Target className="w-4 h-4 text-green-400" /> },
                { name: "Visual Design", icon: <Palette className="w-4 h-4 text-green-400" /> }
            ]
        },
        {
            title: "Print Design",
            icon: <FileText className="w-5 h-5 text-green-500" />,
            skills: [
                { name: "Business Cards", icon: <CreditCard className="w-4 h-4 text-green-400" /> },
                { name: "Brochure Design", icon: <FileText className="w-4 h-4 text-green-400" /> },
                { name: "Flyer Design", icon: <FileText className="w-4 h-4 text-green-400" /> },
                { name: "Poster Design", icon: <Image className="w-4 h-4 text-green-400" /> },
                { name: "Print Design", icon: <FileText className="w-4 h-4 text-green-400" /> }
            ]
        },
        {
            title: "Digital Marketing",
            icon: <Share2 className="w-5 h-5 text-green-500" />,
            skills: [
                { name: "Social Media Marketing", icon: <Share2 className="w-4 h-4 text-green-400" /> },
                { name: "Banner Ads", icon: <Monitor className="w-4 h-4 text-green-400" /> },
                { name: "Facebook Cover", icon: <Share2 className="w-4 h-4 text-green-400" /> },
                { name: "Social Media Post Design", icon: <Share2 className="w-4 h-4 text-green-400" /> },
                { name: "Youtube Thumbnail Design", icon: <Camera className="w-4 h-4 text-green-400" /> }
            ]
        },
        {
            title: "Design Fundamentals",
            icon: <Brush className="w-5 h-5 text-green-500" />,
            skills: [
                { name: "Typography", icon: <Type className="w-4 h-4 text-green-400" /> },
                { name: "Color Theory", icon: <Palette className="w-4 h-4 text-green-400" /> },
                { name: "Layout Design", icon: <Layout className="w-4 h-4 text-green-400" /> },
                { name: "Design Principles", icon: <Layers className="w-4 h-4 text-green-400" /> },
                { name: "Creative Design", icon: <Brush className="w-4 h-4 text-green-400" /> }
            ]
        },
        {
            title: "Industry Knowledge",
            icon: <Building className="w-5 h-5 text-green-500" />,
            skills: [
                { name: "Real Estate", icon: <Building className="w-4 h-4 text-green-400" /> },
                { name: "Google Workspace", icon: <Globe className="w-4 h-4 text-green-400" /> },
                { name: "Email Signature Design", icon: <Mail className="w-4 h-4 text-green-400" /> },
                { name: "Freelancing", icon: <Zap className="w-4 h-4 text-green-400" /> },
                { name: "Art & Illustration", icon: <Brush className="w-4 h-4 text-green-400" /> }
            ]
        }
    ];

    return (
        <section id="skills" className="pb-16">
            <Helmet>
                <title>Skills & Expertise - Portfolio of Rahat Hussain</title>
                <meta
                    name="description"
                    content="Explore my expertise in design software, branding, digital marketing, print design, and industry knowledge. I master tools like Photoshop, Illustrator, InDesign, and Figma."
                />
                <meta name="keywords" content="Design Skills, Photoshop, Illustrator, Branding, Marketing, Graphic Design, Portfolio" />
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
                        <span className="text-green-500">Skills</span> & Expertise
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        A comprehensive set of skills covering every aspect of design, from concept to completion.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/30 backdrop-blur-md rounded-2xl p-6 hover:shadow-lg hover:shadow-green-300/50 transition-all duration-300"
                        >
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-500">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-green-600">{category.title}</h3>
                            </div>

                            {/* Skills List */}
                            <div className="space-y-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.05 }}
                                        viewport={{ once: true }}
                                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-50 transition-colors group"
                                    >
                                        <div className="text-green-500 group-hover:text-green-600 transition-colors">
                                            {skill.icon}
                                        </div>
                                        <span className="font-medium text-gray-700 group-hover:text-green-700 transition-colors">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
