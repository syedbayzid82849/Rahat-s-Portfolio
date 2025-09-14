import React from "react";
import ServicesCard from "./ServicesCard";

const services = [
    {
        title: "Business Card Design",
        price: "From US$10",
        delivery: "Less than a week",
        concepts: "3 concepts, 3 revisions",
        description:
            "Available 24/5 with passion for design. Client satisfaction is my goal.",
        images: [
            "https://mir-s3-cdn-cf.behance.net/projects/max_808/59040f166941275.Y3JvcCwxNDAwLDEwOTUsMCwxNTI.jpg",
            "https://mir-s3-cdn-cf.behance.net/projects/max_808/527a78166942065.Y3JvcCwxNDAwLDEwOTUsMCwxNTI.jpg",
            "https://mir-s3-cdn-cf.behance.net/projects/max_808/7b6ee3169645271.Y3JvcCwxNDAwLDEwOTUsMCwxNTI.jpg",
            "https://mir-s3-cdn-cf.behance.net/projects/max_808/726e6e166942715.Y3JvcCwxNDAwLDEwOTUsMCwxNTI.jpg",
            "https://mir-s3-cdn-cf.behance.net/projects/max_808/1f39c3169645403.Y3JvcCwxNDAwLDEwOTUsMCwxNTI.jpg",
            "https://mir-s3-cdn-cf.behance.net/projects/max_808/b86bcf169645483.Y3JvcCwxNDAwLDEwOTUsMCwxNTI.jpg"
        ],
    },
    {
        title: "Food Menu Design",
        price: "From US$20",
        delivery: "Less than a week",
        concepts: "2 concepts, 10 revisions",
        description:
            "Available 24/7 with full dedication. Your menu will stand out beautifully.",
        images: [
            "https://mir-s3-cdn-cf.behance.net/projects/max_808/ded9e3192079301.Y3JvcCwyODc2LDIyNTAsNjQsMA.jpg",
            "https://mir-s3-cdn-cf.behance.net/projects/max_808/9d7bfc185390585.Y3JvcCwxMTkyLDkzMywxMDMsMA.jpg",
            "https://mir-s3-cdn-cf.behance.net/projects/max_808/c484d2192075535.Y3JvcCwzODM1LDMwMDAsMzMyLDA.jpg",
            "https://mir-s3-cdn-cf.behance.net/projects/max_808/a88f7d185463517.Y3JvcCwxMTkyLDkzMywxMDMsMA.jpg",
            "https://mir-s3-cdn-cf.behance.net/projects/max_808/1e19cf185368665.Y3JvcCwxMTkyLDkzMywxMDMsMA.jpg",
        ],
    },
    {
        title: "Social Media Post",
        price: "From US$15",
        delivery: "Less than a week",
        concepts: "3 concepts, 10 revisions",
        description:
            "Available 24/7 with creativity. Helping your brand shine on social media.",
        images: [
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/dd49b4178692263.64ecc53ae19e8.jpg",
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/c4a32c178932703.64f08dc816fe5.jpg",
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/57b6fc178932329.64f08cbc14463.jpg",
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/7579e1179286303.64f727af9aabb.jpg",
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/7f08b5179286083.64f72701da427.jpg",
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/27a4bb179202001.64f5da49c7f35.jpg",
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/0e8ffe179201859.64f5d9e21f794.jpg",
        ],
    },
    {
        title: "YouTube Thumbnail Design",
        price: "From US$30",
        delivery: "Less than a week",
        concepts: "2 concepts, 10 revisions",
        description:
            "Available 24/7 with passion. Engaging thumbnails that grab attention.",
        images: [
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/07de85179466561.64f9e9095a8aa.jpg",
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/5a073e179466441.64f9e89d149af.jpg"
        ],
    },
    {
        title: "Flyer Design",
        price: "From US$15",
        delivery: "Less than a week",
        concepts: "3 concepts, 10 revisions",
        description:
            "Available 24/5 with creativity. Eye-catching flyers for your brand.",
        images: [
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/fe9298177419937.64d5bb7097731.jpg",
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/133ba1177419223.64d5b7773a5f4.jpg",
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/b07b1c177419781.64d5ba95938b9.jpg",
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_632/1234ec177419873.64d5bb0d8f5fb.jpg",
        ],
    },
    {
        title: "Logo Design",
        price: "From US$125",
        delivery: "Less than a week",
        concepts: "2 concepts, 3 revisions",
        description:
            "If you need logo design, then I'm available 24/5. Love to work with all of my passion for my clients. I want to achieve my client's satisfaction. So, if you need a graphic designer, you are in the right place.",
        images: [
            "https://mir-s3-cdn-cf.behance.net/projects/max_808/764672171213375.Y3JvcCwxMjc4LDEwMDAsNjAsMA.jpg",
            "https://mir-s3-cdn-cf.behance.net/projects/max_808/a79382168806511.Y3JvcCwyNTU2LDIwMDAsMjIxLDA.jpg",
            "https://mir-s3-cdn-cf.behance.net/projects/max_808/1d4a59168806187.Y3JvcCwyNTU2LDIwMDAsMjIxLDA.jpg",
            "https://mir-s3-cdn-cf.behance.net/projects/max_808/6e3814167537217.Y3JvcCwyNTU2LDIwMDAsMjIxLDA.jpg"
        ],
    },
];

const Services = () => {
    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                    My Services
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <ServicesCard key={index} service={service} />
                    ))}
                </div>
                {/* View all services */}
                <div className="text-center mt-6 flex justify-center">
                    <motion.div
                    >
                        <Button
                            href="https://www.behance.net/rgxfigure"
                            size="lg"
                            className="bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-300/50 transition-all duration-300"
                        >
                            <a
                                className='flex items-center'
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://www.behance.net/rgxfigure">
                                <span>View All Projects</span>
                                <ArrowRight size={16} className="ml-2" />
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;
