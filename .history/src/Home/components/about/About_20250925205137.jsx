import { motion } from 'framer-motion';
import { Palette, Lightbulb, Target } from 'lucide-react';
import { Helmet } from 'react-helmet';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Rahat Hussain | Graphic Designer & Branding Expert</title>
                <meta
                    name="description"
                    content="Hi, I'm Rahat Hussain — a seasoned graphic designer with 5+ years of experience. I craft compelling visual identities, brand strategies, and impactful designs including logos, social media graphics, posters, and more."
                />
                <meta
                    name="keywords"
                    content="Rahat Hussain, Graphic Designer, Logo Design, Branding, Flyer Design, Business Card, Resume Design, Package Design, Poster Design, Social Media Design"
                />
                <meta property="og:title" content="About Rahat Hussain | Creative Graphic Designer" />
                <meta
                    property="og:description"
                    content="Explore the expertise of Rahat Hussain — expert in Logo Design, Brand Identity, Social Media Graphics, Posters, Business Cards, and Premium Visual Storytelling."
                />
            </Helmet>

            <section id="about" className="py-20 border-t border-gray-700">
                <div className="container mx-auto px-3 lg:px-6">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl text-center font-bold mb-6">
                            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                                About
                            </span>
                            {" "}Me
                        </h2>

                        {/* Intro Paragraph */}
                        <div className="space-y-4 text-lg leading-relaxed text-gray-100">
                            <p>
                                Hi, I'm <span className="font-semibold">Rahat Hussain</span>, a seasoned graphic designer with over 5 years of experience in the industry. Crafting compelling visual identities is not just a job for me, it's my passion. If you're in need of top-notch design solutions, you've come to the right place.
                            </p>
                            <p>
                                I'm skilled in using essential design tools like <span className="font-semibold">Adobe Illustrator, Photoshop, and InDesign</span>, and I pay meticulous attention to detail. This combination has resulted in successful collaborations across various industries.
                            </p>
                            <p>
                                I help professionals and businesses transform their social profiles into powerful personal branding tools. Whether you're struggling with an outdated profile, inconsistent content, or need help with your overall strategy, I'm here to provide solutions.
                            </p>
                            <p>
                                If you've decided to take your brand to the next level, let's talk about how we can create impactful designs that leave a lasting impression.
                            </p>
                        </div>

                    </motion.div>

                    {/* soft skills  */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {softSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: false }} // যতবার আসবে ততবার animate হবে
                                className="bg-white/10 p-6 rounded-lg shadow-md text-center hover:shadow-lg hover:shadow-green-400/30 transition-shadow duration-300"
                            >
                                <div
                                    className={`w-16 h-16 mx-auto mb-4 ${skill.bg} rounded-full flex items-center justify-center`}
                                >
                                    <svg
                                        className={`w-8 h-8 ${skill.iconColor}`}
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        {skill.icon}
                                    </svg>
                                </div>
                                <h4 className="text-lg font-semibold text-gray-100 mb-2">
                                    {skill.title}
                                </h4>
                                <p className="text-gray-400 text-sm">{skill.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Key Points */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false }}
                        className="space-y-6 text-center max-w-3xl mx-auto"
                    >

                        <div className="grid md:grid-cols-3 gap-6 mt-12">
                            <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl hover:shadow-lg transition border border-[#f0f0f0] hover:bg-gray-700">
                                <Palette className="w-8 h-8 text-green-400" />
                                <h4 className="font-semibold">Creative Excellence</h4>
                                <p className="text-sm text-gray-500">
                                    Delivering pixel-perfect designs that exceed expectations
                                </p>
                            </div>

                            <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl hover:shadow-lg transition border border-[#f0f0f0] hover:bg-gray-700">
                                <Lightbulb className="w-8 h-8 text-green-400" />
                                <h4 className="font-semibold">Strategic Thinking</h4>
                                <p className="text-sm text-gray-500">
                                    Every design decision is backed by strategy and purpose
                                </p>
                            </div>

                            <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl hover:shadow-lg transition border border-[#f0f0f0] hover:bg-gray-700">
                                <Target className="w-8 h-8 text-green-400" />
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
