import React from "react";
import ServicesCard from "./ServicesCard";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Button Component
const Button = ({ children, ...props }) => (
    <button
        {...props}
        className={`px-5 py-3 rounded-lg font-semibold inline-flex items-center justify-center transition-all duration-300 ${props.className}`}
    >
        {children}
    </button>
);

const services = [
    {
        title: "Business Card Design",
        price: "From US$10",
        delivery: "Less than a week",
        concepts: "3 concepts, 3 revisions",
        description: "Available 24/5 with passion for design. Client satisfaction is my goal.",
        images: [
            "https://mir-s3-cdn-cf.behance.net/projects/max_808/59040f166941275.Y3JvcCwxNDAwLDEwOTUsMCwxNTI.jpg",
            "https://mir-s3-cdn-cf.behance.net/projects/max_808/527a78166942065.Y3JvcCwxNDAwLDEwOTUsMCwxNTI.jpg",
            "https://mir-s3-cdn-cf.behance.net/projects/max_808/7b6ee3169645271.Y3JvcCwxNDAwLDEwOTUsMCwxNTI.jpg",
            "https://mir-s3-cdn-cf.behance.net/projects/max_808/726e6e166942715.Y3JvcCwxNDAwLDEwOTUsMCwxNTI.jpg",
        ],
        link: "https://www.behance.net/rgxfigure/services/90651/Business-Card-Design"
    },
    {
        title: "Food Menu Design",
        price: "From US$20",
        delivery: "Less than a week",
        concepts: "2 concepts, 10 revisions",
        description: "Available 24/7 with full dedication. Your menu will stand out beautifully.",
        images: [
            "https://mir-s3-cdn-cf.behance.net/projects/max_808/ded9e3192079301.Y3JvcCwyODc2LDIyNTAsNjQsMA.jpg",
            "https://mir-s3-cdn-cf.behance.net/projects/max_808/9d7bfc185390585.Y3JvcCwxMTkyLDkzMywxMDMsMA.jpg",
            "https://mir-s3-cdn-cf.behance.net/projects/max_808/c484d2192075535.Y3JvcCwzODM1LDMwMDAsMzMyLDA.jpg",
            "https://mir-s3-cdn-cf.behance.net/projects/max_808/a88f7d185463517.Y3JvcCwxMTkyLDkzMywxMDMsMA.jpg",
        ],
        link: "https://www.behance.net/rgxfigure/services/253629/Food-Menu-Design"
    },
    {
        title: "Social Media Post",
        price: "From US$15",
        delivery: "Less than a week",
        concepts: "3 concepts, 10 revisions",
        description: "Available 24/7 with creativity. Helping your brand shine on social media.",
        images: [
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/dd49b4178692263.64ecc53ae19e8.jpg",
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/c4a32c178932703.64f08dc816fe5.jpg",
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/57b6fc178932329.64f08cbc14463.jpg",
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/7579e1179286303.64f727af9aabb.jpg",
        ],
        link: "https://www.behance.net/rgxfigure/services/154753/Social-media-post"
    },
    {
        title: "YouTube Thumbnail Design",
        price: "From US$30",
        delivery: "Less than a week",
        concepts: "2 concepts, 10 revisions",
        description: "Available 24/7 with passion. Engaging thumbnails that grab attention.",
        images: [
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/07de85179466561.64f9e9095a8aa.jpg",
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/5a073e179466441.64f9e89d149af.jpg"
        ],
        link: "https://www.behance.net/rgxfigure/services/154757/Youtube-thumbnail-design"
    },
    {
        title: "Flyer Design",
        price: "From US$15",
        delivery: "Less than a week",
        concepts: "3 concepts, 10 revisions",
        description: "Available 24/5 with creativity. Eye-catching flyers for your brand.",
        images: [
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/fe9298177419937.64d5bb7097731.jpg",
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/133ba1177419223.64d5b7773a5f4.jpg",
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/b07b1c177419781.64d5ba95938b9.jpg",
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/1234ec177419873.64d5bb0d8f5fb.jpg",
        ],
        link: "https://www.behance.net/rgxfigure/services/111657/Flyer-Design"
    },
    {
        title: "Logo Design",
        price: "From US$125",
        delivery: "Less than a week",
        concepts: "2 concepts, 3 revisions",
        description: "If you need logo design, then I'm available 24/5. Love to work with all of my passion for my clients. I want to achieve my client's satisfaction. So, if you need a graphic designer, you are in the right place.",
        images: [
            "https://mir-s3-cdn-cf.behance.net/projects/max_808/764672171213375.Y3JvcCwxMjc4LDEwMDAsNjAsMA.jpg",
            "https://mir-s3-cdn-cf.behance.net/projects/max_808/a79382168806511.Y3JvcCwyNTU2LDIwMDAsMjIxLDA.jpg",
            "https://mir-s3-cdn-cf.behance.net/projects/max_808/1d4a59168806187.Y3JvcCwyNTU2LDIwMDAsMjIxLDA.jpg",
            "https://mir-s3-cdn-cf.behance.net/projects/max_808/6e3814167537217.Y3JvcCwyNTU2LDIwMDAsMjIxLDA.jpg",
        ],
        link: "https://www.behance.net/rgxfigure/services/90649/Logo-Design"
    },
];


// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Services = () => {
    return (
        <section className="pb-16">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 text-white"
                >
                    <h2 className="text-4xl text-center font-bold mb-3">
                        My <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">Services</span>
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
                        Comprehensive design solutions to elevate your brand and drive business growth.
                    </p>
                </motion.div>

                {/* Animated Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className=""
                >
                    {services.map((service, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <ServicesCard service={service} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* View all services */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center mt-10 flex justify-center"
                >
                    <Button
                        href="https://www.behance.net/rgxfigure"
                        className="bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-300/50"
                    >
                        <a
                            className="flex items-center"
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.behance.net/rgxfigure/services"
                        >
                            <span>View All Services</span>
                            <ArrowRight size={16} className="ml-2" />
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
