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

    const tools = ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign"];


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
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8 max-w-4xl mx-auto text-gray-700"
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

                        <h3 className="text-2xl font-bold mt-6 mb-4">𝗧𝗼𝗼𝗹𝘀 𝗜 𝗨𝘀𝗲:</h3>
                        <ul className="flex flex-wrap gap-4">
                            {tools.map((tool) => (
                                <li key={tool} className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">{tool}</li>
                            ))}
                        </ul>

                        <p className="text-lg leading-relaxed mt-6">
                            𝗪𝗵𝗮𝘁 𝗺𝗮𝗸𝗲𝘀 𝘂𝗻𝗶𝗾𝘂𝗲: My passion for every project makes me different from others. I take each task as a challenge & complete it with 100% perfection. My only target is to make every project successful. It helps me a lot to satisfy my clients & make them benefited.
                        </p>

                        <p className="text-lg leading-relaxed mt-4">
                            If you're ready to take your LinkedIn presence to the next level, let’s connect and start transforming your profile today!
                        </p>
                    </motion.div>
                </div>
            </section>

        </>
    );
};

export default About;
