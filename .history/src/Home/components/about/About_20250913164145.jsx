import { motion } from 'framer-motion';
import { CheckCircle, Palette, Target, Lightbulb } from 'lucide-react';
import { Helmet } from 'react-helmet';

const About = () => {
    const services = [
        "LinkedIn Profile Optimization",
        "Personal Branding Design",
        "Content Design for LinkedIn Posts",
        "Banner Revamp",
        "Prints Design",
        "Business Cards & Brand Identity",
        "Carousel Design for LinkedIn",
        "Logo & T-shirt Design",
        "Social Media Graphics",
        "YouTube Banner & Thumbnail Design"
    ];

    return (
        <>
            <Helmet>
                <title>Rahat Hussain | Portfolio</title>
                <meta
                    name="description"
                    content="About Rahat Hussain - Creative designer and branding expert helping businesses grow with visual storytelling."
                />
                <meta name="keywords" content="Rahat Hussain, Graphic Design, Branding, UI/UX, Portfolio" />
                <meta property="og:title" content="About Rahat Hussain | Portfolio" />
                <meta
                    property="og:description"
                    content="Creative designer and branding expert helping businesses grow with visual storytelling."
                />
            </Helmet>

            <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-4 lg:px-8">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl text-center font-bold mb-6">
                            About{" "}
                            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                                Me
                            </span>
                        </h2>

                        {/* Intro Paragraph */}
                        <div className="space-y-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                            <p>
                                Do you feel like your LinkedIn profile isn't getting the attention it
                                deserves? Is your content not reflecting the real value of your brand
                                or business? Is your content not getting the likes, comments, or views
                                you hoped for?
                            </p>
                            <p>
                                I help professionals and businesses transform their LinkedIn profiles
                                into powerful personal branding tools. Whether you're struggling with
                                an outdated profile, inconsistent content, or need help with your
                                overall strategy, I'm here to provide solutions.
                            </p>
                            <p>
                                My name is{" "}
                                <span className="font-semibold text-green-500">Rahat Hussain</span>, a
                                professional graphic designer with years of experience creating unique
                                designs that help clients grow their businesses. My passion is to make
                                every project successful with stunning design.
                            </p>
                        </div>

                        <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-200">
                            My Services Include:
                        </h3>
                        <ul className="grid md:grid-cols-2 gap-3">
                            {services.map((service) => (
                                <li
                                    key={service}
                                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                                >
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
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                            Premium Branding Partner & Senior Graphic Designer
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Helping Founders and Executives with creative designs that convert visitors
                            into customers through Strategic Brand Identity, LinkedIn Profile
                            Optimization, and Premium Visual Content.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            With over 5 years of experience in graphic design and digital marketing, I
                            specialize in creating cohesive brand experiences that resonate with target
                            audiences and drive business growth.
                        </p>

                        {/* Key Points */}
                        <div className="grid md:grid-cols-3 gap-6 mt-12">
                            <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl hover:shadow-lg transition border border-gray-200 dark:border-gray-700 hover:bg-green-50 dark:hover:bg-gray-800">
                                <Palette className="w-8 h-8 text-green-500" />
                                <h4 className="font-semibold">Creative Excellence</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Delivering pixel-perfect designs that exceed expectations
                                </p>
                            </div>

                            <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl hover:shadow-lg transition border border-gray-200 dark:border-gray-700 hover:bg-green-50 dark:hover:bg-gray-800">
                                <Lightbulb className="w-8 h-8 text-green-500" />
                                <h4 className="font-semibold">Strategic Thinking</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Every design decision is backed by strategy and purpose
                                </p>
                            </div>

                            <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl hover:shadow-lg transition border border-gray-200 dark:border-gray-700 hover:bg-green-50 dark:hover:bg-gray-800">
                                <Target className="w-8 h-8 text-green-500" />
                                <h4 className="font-semibold">Results-Driven</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
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
