import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ChevronUp } from 'lucide-react';
import { Palette, Lightbulb, Target } from 'lucide-react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
    const softSkills = [
        {
            title: "Collaboration",
            desc: "Working seamlessly with cross-functional teams",
            bg: "bg-teal-100",
            iconColor: "text-teal-600",
            icon: (
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            ),
        },
        {
            title: "Communication",
            desc: "Clear project discussions and client collaboration",
            bg: "bg-green-100",
            iconColor: "text-green-600",
            icon: (
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
            ),
        },
        {
            title: "Time Management",
            desc: "Efficient use of time for maximum productivity",
            bg: "bg-pink-100",
            iconColor: "text-pink-600",
            icon: (
                <path d="M12 20c4.41 0 8-3.59 8-8s-3.59-8-8-8-8 3.59-8 8 3.59 8 8 8zm.5-13h-1v6l5.25 3.15.75-1.23-5-2.92V7z" />
            ),
        },
        {
            title: "Creativity",
            desc: "Innovative solutions for unique design challenges",
            bg: "bg-blue-100",
            iconColor: "text-blue-600",
            icon: (
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            ),
        },
        {
            title: "Attention to Detail",
            desc: "Meticulous precision in every design element",
            bg: "bg-purple-100",
            iconColor: "text-purple-600",
            icon: (
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            ),
        },
        {
            title: "Client Focus",
            desc: "Understanding and exceeding client expectations",
            bg: "bg-yellow-100",
            iconColor: "text-yellow-600",
            icon: (
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
            ),
        },
        {
            title: "Project Management",
            desc: "Effective planning and timely delivery",
            bg: "bg-red-100",
            iconColor: "text-red-600",
            icon: (
                <path d="M12 7V3H2v18h20V7H12zM4 19V5h6v2H6v2h4v2H6v2h4v2H6v2h4v2H4zm16 0h-8v-8h8v8z" />
            ),
        },
        {
            title: "Problem Solving",
            desc: "Finding solutions to complex design challenges",
            bg: "bg-indigo-100",
            iconColor: "text-indigo-600",
            icon: (
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.51 5.05-1.39L21 22l-1.39-3.95A9.96 9.96 0 0022 12c0-5.52-4.48-10-10-10z" />
            ),
        },
    ];
    const [showAll, setShowAll] = useState(false);
    // First 4 only for small screen
    const visibleSkills =
        showAll || window.innerWidth >= 1024 ? softSkills : softSkills.slice(0, 4);

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
                <div className="container mx-auto space-y- px-3 lg:px-6">
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
                    </motion.div>

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


                    {/* soft skills */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {visibleSkills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: false }}
                                className="bg-white/10 p-2 rounded-lg shadow-md text-center hover:shadow-lg hover:shadow-green-400/30 transition-shadow duration-300"
                            >
                                <div className="mx-auto mb-4 rounded-full flex items-center justify-center">
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

                    {/* Show More Button (only for sm & md) */}
                    <div className="flex justify-center mt-6 lg:hidden">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white"
                        >
                            {showAll ? "Show Less" : "Show More"}
                            {showAll ? (
                                <ChevronUp className="w-5 h-5" />
                            ) : (
                                <ChevronDown className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
