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

        </nav>
    );
};

export default Navbar;
