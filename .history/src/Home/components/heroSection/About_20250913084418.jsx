import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Award, Users, Clock, Target, Palette, Lightbulb } from 'lucide-react';
import { Helmet } from 'react-helmet';

const About = () => {
    const skills = [
        { name: 'Adobe Photoshop', level: 95, icon: '🎨' },
        { name: 'Adobe Illustrator', level: 90, icon: '✏️' },
        { name: 'Adobe InDesign', level: 85, icon: '📄' },
        { name: 'Brand Strategy', level: 92, icon: '🎯' },
        { name: 'Digital Marketing', level: 88, icon: '📱' },
        { name: 'UI/UX Design', level: 80, icon: '💻' },
    ];


    const tools = [
        { name: 'Photoshop', color: 'bg-blue-500/20 text-blue-600 border-blue-500/30' },
        { name: 'Illustrator', color: 'bg-orange-500/20 text-orange-600 border-orange-500/30' },
        { name: 'InDesign', color: 'bg-pink-500/20 text-pink-600 border-pink-500/30' },
        { name: 'Figma', color: 'bg-green-500/20 text-green-600 border-green-500/30' },
        { name: 'Canva', color: 'bg-purple-500/20 text-purple-600 border-purple-500/30' },
        { name: 'After Effects', color: 'bg-red-500/20 text-red-600 border-red-500/30' },
    ];

    const services = [
        "LinkedIn Profile Optimization",
        "Personal Branding Design",
        "Content Design for LinkedIn Posts",
        "Banner revamp",
        "Prints design",
        "Business Cards & Brand Identity",
        "Carousel Design for LinkedIn",
        "Logo & T-shirt Design",
        "Social Media Graphics",
        "YouTube banner & thumbnail design"
    ];

    return (
        <>
            <Helmet>
                <title>Rahat Hussain | Portfolio</title>
                <meta name="description" content="About Rahat Hussain - Creative designer and branding expert helping businesses grow with visual storytelling." />
                <meta name="keywords" content="Rahat Hussain, Graphic Design, Branding, UI/UX, Portfolio" />
                <meta property="og:title" content="About Rahat Hussain | Portfolio" />
                <meta property="og:description" content="Creative designer and branding expert helping businesses grow with visual storytelling." />
            </Helmet>
            <section id="about" className="py-15 ">
                <div className="container mx-auto px-6">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className=" mb-16"
                    >
                        <h2 className="text-4xl text-center font-bold mb-6">
                            About <span className="text-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">Me</span>
                        </h2>
                        {/* Intro Paragraph */}
                        <div className="space-y-4 text-lg leading-relaxed">
                            <p>
                                𝗗𝗼 𝘆𝗼𝘂 𝗳𝗲𝗲𝗹 𝗹𝗶𝗸𝗲 𝘆𝗼𝘂𝗿 LinkedIn profile isn't getting the attention it deserves?
                                Is your content not reflecting the real value of your brand or business?
                                Is your content not getting the likes, comments, or views you hoped for?
                            </p>
                            <p>
                                I help professionals and businesses transform their LinkedIn profiles into powerful personal branding tools.
                                Whether you're struggling with an outdated profile, inconsistent content, or need help with your overall strategy, I'm here to provide solutions.
                            </p>
                            <p>
                                My name is Rahat Hussain, I am a professional graphic designer. I have many years of experience creating unique designs that help clients grow their business.
                                My passion is to make every project successful with stunning design.
                            </p>
                        </div>

                        <h3 className="text-2xl font-bold mt-6 mb-4">𝗠𝘆 𝗦𝗲𝗿𝘃𝗶𝗰𝗲𝘀 𝗜𝗻𝗰𝗹𝘂𝗱𝗲𝗱:</h3>
                        <ul className="grid md:grid-cols-2 gap-2">
                            {services.map((service) => (
                                <li key={service} className="flex items-center space-x-2">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span>{service}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* About Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6 text-center max-w-3xl mx-auto lg:pt-5"
                    >
                        <h3 className="text-3xl font-bold">
                            Premium Branding Partner & Senior Graphic Designer
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            Helping Founders and Executives with creative designs that convert
                            visitors into customers through Strategic Brand Identity, LinkedIn
                            Profile Optimization, and Premium Visual Content.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            With over 5 years of experience in graphic design and digital
                            marketing, I specialize in creating cohesive brand experiences that
                            resonate with target audiences and drive business growth.
                        </p>

                        {/* Key Points */}
                        <div className="grid md:grid-cols-3 gap-6 mt-12">
                            <div className="flex flex-col items-center space-y-3 p-6 glass rounded-2xl hover:shadow-lg transition border border-[#f0f0f0] hover:bg-gray-700">
                                <Palette className="w-8 h-8 text-primary" />
                                <h4 className="font-semibold">Creative Excellence</h4>
                                <p className="text-sm text-gray-500">
                                    Delivering pixel-perfect designs that exceed expectations
                                </p>
                            </div>

                            <div className="flex flex-col items-center space-y-3 p-6 glass rounded-2xl hover:shadow-lg transition border border-[#f0f0f0] hover:bg-gray-700">
                                <Lightbulb className="w-8 h-8 text-accent" />
                                <h4 className="font-semibold">Strategic Thinking</h4>
                                <p className="text-sm text-gray-500">
                                    Every design decision is backed by strategy and purpose
                                </p>
                            </div>

                            <div className="flex flex-col items-center space-y-3 p-6  rounded-2xl hover:shadow-lg transition border border-[#f0f0f0] hover:bg-gray-700">
                                <Target className="w-8 h-8 text-secondary" />
                                <h4 className="font-semibold">Results-Driven</h4>
                                <p className="text-sm text-gray-500">
                                    Focus on designs that convert and drive business outcomes
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default About;
