import { motion } from 'framer-motion';
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

    const achievements = [
        {
            icon: <Award className="w-6 h-6 text-white" />,
            title: "500+ Projects",
            description: "Successfully delivered across various industries"
        },
        {
            icon: <Users className="w-6 h-6 text-white" />,
            title: "50+ Happy Clients",
            description: "From startups to Fortune 500 companies"
        },
        {
            icon: <Clock className="w-6 h-6 text-white" />,
            title: "5+ Years Experience",
            description: "In graphic design and digital marketing"
        },
        {
            icon: <Target className="w-6 h-6 text-white" />,
            title: "98% Success Rate",
            description: "Client satisfaction and project completion"
        }
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
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-center mb-6">
                            About <span className="text-gradient bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">Me</span>
                        </h2>

                        <p className="text-lg leading-relaxed">
                            𝗗𝗼 𝘆𝗼𝘂 𝗳𝗲𝗲𝗹 𝗹𝗶𝗸𝗲 𝘆𝗼𝘂𝗿 LinkedIn profile isn't getting the attention it deserves?
                            Is your content not reflecting the real value of your brand or business?
                            Is your content not getting the likes, comments, or views you hoped for?
                        </p>

                        <p className="text-lg leading-relaxed">
                            I help professionals and businesses transform their LinkedIn profiles into powerful personal branding tools.
                            Whether you're struggling with an outdated profile, inconsistent content, or need help with your overall strategy,
                            I'm here to provide solutions.
                        </p>

                        <p className="text-lg leading-relaxed">
                            My name is Rahat Hussain, I am a professional graphic designer. I have many years of experience creating unique designs that help clients grow their business.
                            My passion is to make every project successful with stunning design.
                        </p>

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

                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold">Premium Branding Partner & Senior Graphic Designer</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Helping Founders and Executives With Creative Designs that Convert Visitors into Customers
                                    through Strategic Brand Identity, LinkedIn Profile Optimization, and Premium Visual Content.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    With over 5 years of experience in graphic design and digital marketing, I specialize in
                                    creating cohesive brand experiences that resonate with target audiences and drive business growth.
                                </p>
                            </div>

                            {/* Key Points */}
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <Palette className="w-5 h-5 text-blue-500 mt-1" />
                                    <div>
                                        <h4 className="font-semibold">Creative Excellence</h4>
                                        <p className="text-sm text-gray-500">Delivering pixel-perfect designs that exceed expectations</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Lightbulb className="w-5 h-5 text-yellow-500 mt-1" />
                                    <div>
                                        <h4 className="font-semibold">Strategic Thinking</h4>
                                        <p className="text-sm text-gray-500">Every design decision is backed by strategy and purpose</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <Target className="w-5 h-5 text-green-500 mt-1" />
                                    <div>
                                        <h4 className="font-semibold">Results-Driven</h4>
                                        <p className="text-sm text-gray-500">Focus on designs that convert and drive business outcomes</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Content - Skills */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h3 className="text-2xl font-bold">Skills & Expertise</h3>
                            <div className="space-y-6">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="space-y-2"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                <span className="text-lg">{skill.icon}</span>
                                                <span className="font-medium">{skill.name}</span>
                                            </div>
                                            <span className="text-sm text-gray-500">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: index * 0.1 }}
                                                viewport={{ once: true }}
                                                className="h-full bg-blue-500 rounded-full"
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Tools Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h3 className="text-2xl font-bold text-center mb-8">Tools I Master</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {tools.map((tool, index) => (
                                <motion.div
                                    key={tool.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`px-6 py-3 rounded-full font-medium border ${tool.color} transition-colors text-center`}
                                >
                                    {tool.name}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Achievements */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-center mb-12">Achievements</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={achievement.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="rounded-2xl p-6 text-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                                        {achievement.icon}
                                    </div>
                                    <h4 className="font-bold text-lg mb-2">{achievement.title}</h4>
                                    <p className="text-sm text-gray-500">{achievement.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default About;
