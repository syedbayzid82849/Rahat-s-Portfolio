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
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-4xl font-bold mb-3">
                        Skills & <span className="text-green-500">Expertise</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Here’s a showcase of the creative services and design expertise I provide for brands and businesses.
                    </p>
                </motion.div>

                {/* skills  */}
                <div class="space-y-6">
                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="text-lg font-semibold text-gray-700">Adobe Illustrator</span>
                            <span class="text-purple-600 font-medium">95%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-3">
                            <div class="skill-bar bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full" style="width: 95%"></div>
                        </div>
                    </div>

                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="text-lg font-semibold text-gray-700">Adobe Photoshop</span>
                            <span class="text-purple-600 font-medium">93%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-3">
                            <div class="skill-bar bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full" style="width: 93%"></div>
                        </div>
                    </div>

                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="text-lg font-semibold text-gray-700">Adobe InDesign</span>
                            <span class="text-purple-600 font-medium">90%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-3">
                            <div class="skill-bar bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full" style="width: 90%"></div>
                        </div>
                    </div>
                </div>

                <div class="space-y-6">
                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="text-lg font-semibold text-gray-700">Brand Identity Design</span>
                            <span class="text-purple-600 font-medium">92%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-3">
                            <div class="skill-bar bg-gradient-to-r from-yellow-500 to-orange-500 h-3 rounded-full" style="width: 92%"></div>
                        </div>
                    </div>

                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="text-lg font-semibold text-gray-700">Print & Digital Design</span>
                            <span class="text-purple-600 font-medium">88%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-3">
                            <div class="skill-bar bg-gradient-to-r from-pink-500 to-red-500 h-3 rounded-full" style="width: 88%"></div>
                        </div>
                    </div>

                    <div>
                        <div class="flex justify-between mb-2">
                            <span class="text-lg font-semibold text-gray-700">Social Media Design</span>
                            <span class="text-purple-600 font-medium">85%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-3">
                            <div class="skill-bar bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full" style="width: 85%"></div>
                        </div>
                    </div>
                </div>

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
