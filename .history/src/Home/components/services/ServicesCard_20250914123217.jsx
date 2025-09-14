import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ServicesCard = ({ service }) => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <motion.div
            className="bg-gray-800 shadow-lg rounded-2xl p-3 group hover:shadow-xl hover:shadow-green-600 transition duration-300"
            whileHover={{ scale: 1.03 }}
        >
            {/* Image Carousel */}
            <Slider {...settings}>
                {service.images.map((img, index) => (
                    <div key={index}>
                        <img
                            src={img}
                            alt={service.title}
                            className="w-full h-48 object-cover rounded-xl"
                        />
                    </div>
                ))}
            </Slider>

            {/* Service Info */}
            <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
            <p className="text-green-600 font-bold">{service.price}</p>
            <p className="text-sm mt-2 line-clamp-2 overflow-hidden">{service.description}</p>
            <p className="text-sm mt-2">
                <strong>Delivery:</strong> {service.delivery}
            </p>

            {/* Details Button */}
            <div className="flex justify-end">
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

            </div>
        </motion.div>
    );
};

export default ServicesCard;
