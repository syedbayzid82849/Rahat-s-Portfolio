import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button"; // তোমার project এ যদি না থাকে তবে custom Button বানাতে হবে

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <div className="bg-white shadow-lg rounded-2xl p-6 group hover:shadow-2xl transition duration-300 flex flex-col justify-between">
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
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-800">
          {service.title}
        </h3>
        <p className="text-sm text-gray-500 mt-2">{service.description}</p>
        <p className="text-sm text-gray-700 mt-2">
          <strong>Delivery:</strong> {service.delivery}
        </p>
        <p className="text-sm text-gray-700">
          <strong>Concepts & Revisions:</strong> {service.concepts}
        </p>
      </div>

      {/* Bottom price + button part (unchanged) */}
      <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between">
        <div>
          <div className="text-lg font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
            {service.price}
          </div>
          <div className="text-xs text-gray-400">Custom quotes available</div>
        </div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button variant="outline">
            <span>Learn More</span>
            <ArrowRight size={14} />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesCard;
