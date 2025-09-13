import React from "react";

const Navbar = () => {
    return (
        <nav className="w-full bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
                <div className="flex justify-between h-16 items-center">
                    {/* Left: Logo */}
                    <div className="flex-shrink-0 text-2xl font-bold text-indigo-600">
                        Bayzid.dev
                    </div>

                    {/* Middle: Nav Links */}
                    <div className="hidden md:flex space-x-6">
                        <a href="#home" className="text-gray-700 hover:text-indigo-600 font-medium">Home</a>
                        <a href="#about" className="text-gray-700 hover:text-indigo-600 font-medium">About</a>
                        <a href="#projects" className="text-gray-700 hover:text-indigo-600 font-medium">Projects</a>
                        <a href="#contact" className="text-gray-700 hover:text-indigo-600 font-medium">Contact</a>
                    </div>

                    {/* Right: Download CV */}
                    <div className="hidden md:block">
                        <a
                            href="/Bayzid-CV.pdf"
                            download
                            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
                        >
                            Download CV
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        {/* Optional: Add mobile menu button later */}
                        <button onClick={ha} className="text-gray-700 focus:outline-none">☰</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
