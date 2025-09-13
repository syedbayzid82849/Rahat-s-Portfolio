import React, { useState } from "react";

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleMenuBtn = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <nav className="w-full bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between h-16 items-center">
                    {/* Left: Logo */}
                    <div className="flex-shrink-0 text-2xl font-bold text-indigo-600">
                        Bayzid.dev
                    </div>

                    {/* Middle: Nav Links (Desktop) */}
                    <div className="hidden md:flex space-x-6">
                        <a href="#home" className="text-gray-700 hover:text-indigo-600 font-medium">Home</a>
                        <a href="#about" className="text-gray-700 hover:text-indigo-600 font-medium">About</a>
                        <a href="#projects" className="text-gray-700 hover:text-indigo-600 font-medium">Projects</a>
                        <a href="#contact" className="text-gray-700 hover:text-indigo-600 font-medium">Contact</a>
                    </div>

                    {/* Right: CV Download (Desktop) */}
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
                        <button onClick={handleMenuBtn} className="text-gray-700 text-2xl">
                            ☰
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Modal Menu */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
                    <div className="bg-white w-11/12 max-w-sm mx-auto rounded-lg shadow-lg p-6 relative">
                        {/* Close button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-3 text-2xl text-gray-600 hover:text-red-500"
                        >
                            ✕
                        </button>

                        {/* Menu Items */}
                        <nav className="flex flex-col space-y-4 text-center mt-6">
                            <a onClick={closeModal} href="#home" className="text-lg font-medium text-gray-800 hover:text-indigo-600">
                                Home
                            </a>
                            <a onClick={closeModal} href="#about" className="text-lg font-medium text-gray-800 hover:text-indigo-600">
                                About
                            </a>
                            <a onClick={closeModal} href="#projects" className="text-lg font-medium text-gray-800 hover:text-indigo-600">
                                Projects
                            </a>
                            <a onClick={closeModal} href="#contact" className="text-lg font-medium text-gray-800 hover:text-indigo-600">
                                Contact
                            </a>
                            <a
                                href="/Bayzid-CV.pdf"
                                download
                                onClick={closeModal}
                                className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
                            >
                                Download CV
                            </a>
                        </nav>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
