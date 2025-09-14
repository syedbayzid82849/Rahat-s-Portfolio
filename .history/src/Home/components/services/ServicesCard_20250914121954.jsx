import React from "react";
import Slider from "react-slick";
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
        <div className="bg-gray-800 shadow-lg rounded-2xl p-6 group hover:shadow-2xl hover:shadow-green-600 transition duration-300">
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
            <h3 className="text-xl font-semibold mt-4">
                {service.title}
            </h3>
            <p className="text-green-600 font-bold">{service.price}</p>
            <p className="text-sm  mt-2 line-clamp-2">{service.description}</p>
            <p className="text-sm mt-2">
                <strong>Delivery:</strong> {service.delivery}
            </p>
Button>
        </div>
    );
};

export default ServicesCard;
