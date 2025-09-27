import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Palette, Lightbulb, Target } from 'lucide-react';
import { Helmet } from 'react-helmet';

const About = () => {

    const expertise = [
        "Logo design",
        "Brand identity",
        "Flyer design",
        "Brochure design",
        "Business card and Stationery design",
        "T-shirt design",
        "Book Cover design",
        "Package design",
        "Icon design",
        "Big print items (posters and billboards)",
        "Infographics",
        "Social media design",
        "Poster design",
        "Web Banner design",
        "Company profile",
        "CV/Resume"
    ];

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

            <section id="about" className="pb-20">
                <div className="container mx-auto px-3 lg:px-6">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
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
                            <p className="font-semibold">Best regards, <br /> Rahat Hussain</p>
                        </div>

                        {/* Expertise List */}
                        <h3 className="text-2xl font-bold mt-6 mb-4">𝗠𝘆 𝗘𝘅𝗽𝗲𝗿𝘁𝗶𝘀𝗲:</h3>
                        <ul className="grid md:grid-cols-2 gap-2">
                            {expertise.map((item) => (
                                <li key={item} className="flex items-center space-x-2">
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Key Points */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
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
