import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
                {/* Left: Logo and Dropdown (mobile) */}
                <div className="flex items-center">
                    {/* Mobile Dropdown */}
                    <div className="lg:hidden mr-2">
                        <button onClick={toggleDropdown} className="text-gray-700 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </button>
                    </div>
                    {/* Logo */}
                    <a href="#" className="text-xl font-bold text-indigo-600">Bayzid.dev</a>
                </div>

                {/* Center Nav (Desktop only) */}
                <div className="hidden lg:flex space-x-6">
                    <a href="#home" className="text-gray-700 hover:text-indigo-600">Home</a>
                    <div className="group relative">
                        <button className="text-gray-700 hover:text-indigo-600">Parent</button>
                        <div className="absolute hidden group-hover:block bg-white shadow-md rounded p-2 mt-1 space-y-2">
                            <a href="#submenu1" className="block hover:text-indigo-600">Submenu 1</a>
                            <a href="#submenu2" className="block hover:text-indigo-600">Submenu 2</a>
                        </div>
                    </div>
                    <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
                </div>

                {/* Right: Button */}
                <div>
                    <a
                        href="/Bayzid-CV.pdf"
                        download
                        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
                    >
                        Download CV
                    </a>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="w-3 lg:hidden bg-white shadow-md border-t px-4 py-4 space-y-2">
                    <a href="#home" className="block text-gray-700 hover:text-indigo-600">Home</a>
                    <div>
                        <p className="font-medium text-gray-700">Parent</p>
                        <div className="ml-4 mt-1 space-y-1">
                            <a href="#submenu1" className="block hover:text-indigo-600">Submenu 1</a>
                            <a href="#submenu2" className="block hover:text-indigo-600">Submenu 2</a>
                        </div>
                    </div>
                    <a href="#contact" className="block text-gray-700 hover:text-indigo-600">Contact</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
