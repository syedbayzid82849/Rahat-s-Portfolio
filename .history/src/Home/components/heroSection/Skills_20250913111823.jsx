import { motion } from 'framer-motion';
import { image, img } from 'framer-motion/client';
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
            icon: <Palette className="w-5 h-5" />,
            skills: [
                { name: "Adobe Photoshop", icon: <Image className="w-4 h-4" /> },
                { name: "Adobe Illustrator", icon: <Brush className="w-4 h-4" /> },
                { name: "Adobe InDesign", icon: <Layout className="w-4 h-4" /> },
                { name: "Figma", icon: <Monitor className="w-4 h-4" /> },
                { name: "Canva", icon: <Layers className="w-4 h-4" /> }
            ]
        },
        {
            title: "Brand & Marketing",
            icon: <Target className="w-5 h-5" />,
            skills: [
                { name: "Logo Design", icon: <Award className="w-4 h-4" /> },
                { name: "Brand Design", icon: <Heart className="w-4 h-4" /> },
                { name: "Marketing Materials", icon: <Megaphone className="w-4 h-4" /> },
                { name: "Branding", icon: <Target className="w-4 h-4" /> },
                { name: "Visual Design", icon: <Palette className="w-4 h-4" /> }
            ]
        },
        {
            title: "Print Design",
            icon: <FileText className="w-5 h-5" />,
            skills: [
                { name: "Business Cards", icon: <CreditCard className="w-4 h-4" /> },
                { name: "Brochure Design", icon: <FileText className="w-4 h-4" /> },
                { name: "Flyer Design", icon: <FileText className="w-4 h-4" /> },
                { name: "Poster Design", icon: <Image className="w-4 h-4" /> },
                { name: "Print Design", icon: <FileText className="w-4 h-4" /> }
            ]
        },
        {
            title: "Digital Marketing",
            icon: <Share2 className="w-5 h-5" />,
            skills: [
                { name: "Social Media Marketing", icon: <Share2 className="w-4 h-4" /> },
                { name: "Banner Ads", icon: <Monitor className="w-4 h-4" /> },
                { name: "Facebook Cover", icon: <Share2 className="w-4 h-4" /> },
                { name: "Social Media Post Design", icon: <Share2 className="w-4 h-4" /> },
                { name: "Youtube Thumbnail Design", icon: <Camera className="w-4 h-4" /> }
            ]
        },
        {
            title: "Design Fundamentals",
            icon: <Brush className="w-5 h-5" />,
            skills: [
                { name: "Typography", icon: <Type className="w-4 h-4" /> },
                { name: "Color Theory", icon: <Palette className="w-4 h-4" /> },
                { name: "Layout Design", icon: <Layout className="w-4 h-4" /> },
                { name: "Design Principles", icon: <Layers className="w-4 h-4" /> },
                { name: "Creative Design", icon: <Brush className="w-4 h-4" /> }
            ]
        },
        {
            title: "Industry Knowledge",
            icon: <Building className="w-5 h-5" />,
            skills: [
                { name: "Real Estate", icon: <Building className="w-4 h-4" /> },
                { name: "Google Workspace", icon: <Globe className="w-4 h-4" /> },
                { name: "Email Signature Design", icon: <Mail className="w-4 h-4" /> },
                { name: "Freelancing", icon: <Zap className="w-4 h-4" /> },
                { name: "Art & Illustration", icon: <Brush className="w-4 h-4" /> }
            ]
        }
    ];
    const tools = [
        {
            name: "Photoshop",
            image: '/public/assets/photoshop.svg',
        },
        {
            name: "Illustrator",
            image: '/public/assets/illustrator.svg',
        },
        {
            name: "InDesign",
            image: '/public/assets/indesign.svg',
        },
        {
            name: "Figma",
            image: '/public/assets/figma.svg',
        },
        {
            name: "Canva",
            image: '/public/assets/canva.svg',
        },
        {
            name: "After Effects",
            image: '/public/assets/after-effects.svg',
        },
    ];



    return (
        <section id="skills" className="py-20 bg-background">
            {/* Helmet SEO Setup */}
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
                    className="text-center mb-1"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Skills & <span className="gradient-text">Expertise</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        A comprehensive set of skills covering every aspect of design, from concept to completion.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-300"
                        >
                            {/* Category Header */}
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold">{category.title}</h3>
                            </div>

                            {/* Skills List */}
                            <div className="space-y-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                                        viewport={{ once: true }}
                                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                                    >
                                        <div className="text-primary group-hover:text-accent transition-colors">
                                            {skill.icon}
                                        </div>
                                        <span className="font-medium">{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Tools Mastery Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <h3 className="text-2xl font-bold mb-8">Tools I Master</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {tools.map((tool, index) => (
                            <motion.div
                                key={tool.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass px-6 py-3 flex items-center space-x-2 rounded-full font-medium text-foreground border border-primary/20 hover:bg-primary/10 transition-colors"
                            >
                                <img src={tool.image} alt={tool.name} className="w-6 h-6" />
                                <span>{tool?.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
