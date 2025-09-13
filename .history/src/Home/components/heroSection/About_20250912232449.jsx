import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const AboutLinkedIn = () => {
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
        <section id="about" className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto space-y-8 text-gray-700"
                >
                    {/* Heading */}
                    <h2 className="text-4xl font-bold text-center">
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

                    {/* Services */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">𝗠𝘆 𝗦𝗲𝗿𝘃𝗶𝗰𝗲𝘀 𝗜𝗻𝗰𝗹𝘂𝗱𝗲𝗱:</h3>
                        <ul className="grid sm:grid-cols-2 gap-3">
                            {services.map((service) => (
                                <li key={service} className="flex items-center space-x-2">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    <span>{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tools */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">𝗧𝗼𝗼𝗹𝘀 𝗜 𝗨𝘀𝗲:</h3>
                        <div className="flex flex-wrap gap-3">
                            {tools.map((tool) => (
                                <span key={tool} className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Unique & CTA */}
                    <div className="space-y-4 text-lg leading-relaxed">
                        <p>
                            𝗪𝗵𝗮𝘁 𝗺𝗮𝗸𝗲𝘀 𝘂𝗻𝗶𝗾𝘂𝗲: My passion for every project makes me different from others. I take each task as a challenge & complete it with 100% perfection. My only target is to make every project successful. It helps me a lot to satisfy my clients & make them benefited.
                        </p>
                        <p>
                            If you're ready to take your LinkedIn presence to the next level, let’s connect and start transforming your profile today!
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutLinkedIn;
