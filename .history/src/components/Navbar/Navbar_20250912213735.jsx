import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Download, Mail } from "lucide-react";
import profile from '../../../public/assets/profile.jpeg'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#services", label: "Services" },
        { href: "#portfolio", label: "Portfolio" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? " backdrop-blur-md text-black shadow-md py-2"
                : "bg-transparent py-6"
                }`}
        >
            <div className=" mx-auto px-4 border">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2"
                    >
                        <div className="w-10 h-10 rounded-full flex items-center justify-center">
                            <img src={profile} alt="Profile" className="w-8 h-8 rounded-full" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                            Rahat Hussain
                        </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <motion.a
                                key={item.href}
                                href={item.href}
                                whileHover={{ y: -2 }}
                                className="text-gray-300 hover:text-indigo-500 transition-colors font-medium"
                            >
                                {item.label}
                            </motion.a>
                        ))}
                    </div>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 flex items-center space-x-2 transition"
                        >
                            <Download size={16} />
                            <span>Resume</span>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 flex items-center space-x-2 transition"
                        >
                            <Mail size={16} />
                            <span>Hire Me</span>
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg bg-white/30 backdrop-blur-md text-black shadow-md"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden mt-6 backdrop-blur-md bg-white/80 shadow-lg rounded-2xl p-6"
                    >
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <motion.a
                                    key={item.href}
                                    href={item.href}
                                    whileHover={{ x: 10 }}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-800 hover:text-indigo-500 transition-colors font-medium py-2"
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                            <div className="pt-4 border-t border-gray-200 space-y-3">
                                <button className="w-full flex items-center justify-center px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 space-x-2 transition">
                                    <Download size={16} />
                                    <span>Download Resume</span>
                                </button>
                                <button className="w-full flex items-center justify-center px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 space-x-2 transition">
                                    <Mail size={16} />
                                    <span>Download Resume</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;
