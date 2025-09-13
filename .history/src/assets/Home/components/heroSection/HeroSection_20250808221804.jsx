import React from 'react';

const HeroSection = () => {
    return (
        <section className="max-w-7xl p-3 mx-auto border h-screen flex justify-around items-center flex-col md:flex-row gap-8">
            <div className='md:w-2/3 border-2'>
                <h1 className="text-4xl font-bold font-poppins text-gray-800">Hello, I’m <br /> <span className="text-purple-600">Rahat Husain Roni</span></h1>
                <p className=" text-gray-600">I’m a Professional Graphic Designer with experience in branding, logo, and social media design. I’ve worked with 5+ clients remotely.</p>
                <div className="mt-8 flex justify-center gap-4 text-sm font-semibold">  
                    <div className="bg-white p-4 rounded-lg shadow text-purple-600">5+ Clients</div>
                    <div className="bg-white p-4 rounded-lg shadow text-purple-600">50+ Projects</div>
                    <div className="bg-white p-4 rounded-lg shadow text-purple-600">3+ Years</div>
                </div>
            </div>
            <div className='border-2 w-1/3 flex justify-center items-center'>
                <img src="/images/roni.png" alt="Roni" className=" mt-8 rounded-full mx-auto shadow-lg" />
            </div>
        </section>
    );
};

export default HeroSection;