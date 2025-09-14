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
            "/images/business1.jpg",
            "/images/business2.jpg",
            "/images/business3.jpg",
            "/images/business4.jpg",
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
            "/images/menu1.jpg",
            "/images/menu2.jpg",
            "/images/menu3.jpg",
            "/images/menu4.jpg",
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
            "/images/social1.jpg",
            "/images/social2.jpg",
            "/images/social3.jpg",
            "/images/social4.jpg",
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
            "/images/thumb1.jpg",
            "/images/thumb2.jpg",
            "/images/thumb3.jpg",
            "/images/thumb4.jpg",
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
            ".jpg",
            "/images/flyer4.jpg",
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
            </div>
        </section>
    );
};

export default Services;
