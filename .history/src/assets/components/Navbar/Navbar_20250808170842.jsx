import React from 'react';

const Navbar = () => {
    return (
        <nav className="w-full h-[700px] p-5 bg-gradient-to-r from-[#F2F5F9] via-[#F2F5F9] to-[#FEF4F4] flex flex-col items-center">
            <div className="w-full max-w-[1200px] flex justify-between items-center">
                <a href="#"><img src="assets/logo.png" alt="logo" className="mt-1 w-[140px] h-[165px] p-2" /></a>
                <ul className="flex gap-4 mr-8 items-center">
                    <li><a href="#" className="text-black font-medium px-4 py-2 hover:text-[#f6e82e]">Home</a></li>
                    <li><a href="#" className="text-black font-medium px-4 py-2 hover:text-[#f6e82e]">About</a></li>
                    <li><a href="#" className="text-black font-medium px-4 py-2 hover:text-[#f6e82e]">Skills</a></li>
                    <li><a href="#" className="text-black font-medium px-4 py-2 hover:text-[#f6e82e]">Education</a></li>
                    <li><a href="#" className="text-black font-medium px-4 py-2 hover:text-[#f6e82e]">Works</a></li>
                    <li><a href="#" className="text-black font-medium px-4 py-2 hover:text-[#f6e82e]">Experience</a></li>
                    <button className="bg-[#f6e82e] hover:bg-[#ffb703] font-semibold px-6 py-2 rounded-full transition-transform hover:scale-105">
                        <a href="#" className="text-black">Contact Me</a>
                    </button>
                </ul>
            </div>

            {/* hero-section start */}
            <div className="w-full max-w-[1200px] mt-16 p-10 bg-gradient-to-r from-[#F2F5F9] to-[#FEF4F4] rounded-xl flex justify-between items-center">
                <div className="max-w-[600px]">
                    <h1 className="text-3xl font-bold mb-5">Hello! I'm Rahat Hussain.</h1>
                    <p className="leading-relaxed">
                        Hey, I have several years of expertise as a competent creator of graphics. I am a skilled designer. My greatest love is design. My skills include designing business cards, flyers, brochures, logos, advertisements, banners, web banners, and more. For my clientele, I want to do my absolute best. Whenever you need my assistance, don't hesitate to get in touch with me. Always available full-time freelancer. I want my customers to be happy.
                    </p>
                </div>
                <img src="assets/roni.jpg" alt="Roni's image" className="w-[300px] h-[300px] rounded-full object-cover" />
            </div>
            {/* hero-section end */}
        </nav>
    );
};

export default Navbar;
