import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Outside click detector
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-white shadow-md px-4 py-3 flex items-center justify-between">
<div>
                {/* Logo */}
            <div className="text-2xl font-bold">MyPortfolio</div>

            {/* Desktop Nav */}
            <ul className="hidden md:flex space-x-6 font-medium">
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            {/* CV Download Button */}
            <div className="hidden md:block">
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                    Download CV
                </button>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)}>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            </div>

            {/* Dropdown Menu */}
            {isOpen && (
                <div
                    ref={dropdownRef}
                    className="absolute top-16 right-4 w-40 bg-white shadow-lg rounded-md md:hidden z-50"
                >
                    <ul className="p-4 space-y-2">
                        <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
                        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
                        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
                        <li>
                            <button
                                className="w-full text-left text-blue-600"
                                onClick={() => {
                                    // modal open logic
                                    setIsOpen(false);
                                    alert("CV Modal Open");
                                }}
                            >
                                Download CV
                            </button>
                        </li>
                    </ul>
                </div>
            )}

</div>
        </nav>
    );
};

export default Navbar;
