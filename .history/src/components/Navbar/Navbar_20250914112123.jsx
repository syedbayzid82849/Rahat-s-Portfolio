import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Download, Mail } from "lucide-react";
import { Link } from "react-scroll"; // ✅ react-scroll import
import profile from '../../../public/assets/profile.jpg';
import toast from "react-hot-toast";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleResumeBtn = () => toast.success('Coming Soon! 🚀');

    const navItems = [
        { href: "home", label: "Home" },
        { href: "about", label: "About" },
        { href: "skills", label: "Skills" },
        { href: "portfolio", label: "Portfolio" },
        { href: "services", label: "Services" },
        { href: "contact", label: "Contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "backdrop-blur-md text-black shadow-md py-2"
                : "bg-transparent py-2"
                }`}
        >
            <div className="mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center">
                            <img src={profile} alt="Profile" className="w-8 h-8 rounded-full border border-from-green-400 to-green-600" />
                        </div>
                        {scrolled && (
                            <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                                Rahat Hussain
                            </span>
                        )}
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                to={item.href}
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-70} // navbar height adjust
                                className="cursor-pointer text-gray-400 hover:text-green-500 transition-colors font-medium"
                                activeClass="text-green-600 font-semibold border-b-2 border-green-500 pb-1"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <motion.button
                            onClick={handleResumeBtn}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 rounded-lg bg-green-400 text-white hover:bg-green-500 flex items-center space-x-2 shadow-lg shadow-green-300/50 transition"
                        >
                            <Download size={16} />
                            <span>Resume</span>
                        </motion.button>
                        <motion.a
                            href="mailto:your-email@example.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 rounded-lg bg-green-400 text-white hover:bg-green-500 flex items-center space-x-2 shadow-lg shadow-green-300/50 transition"
                        >
                            <Mail size={16} />
                            <span>Hire Me</span>
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg bg-green-100/50 backdrop-blur-md text-green-700 shadow-md"
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
                        className="md:hidden mt-6 backdrop-blur-md bg-green-50/80 shadow-lg rounded-2xl p-6"
                    >
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    to={item.href}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-70}
                                    onClick={() => setIsOpen(false)}
                                    className="cursor-pointer text-gray-800 hover:text-green-600 transition-colors font-medium py-2"
                                    activeClass="text-green-600 font-semibold border-b-2 border-green-500 pb-1"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-gray-200 space-y-3">
                                <button
                                    onClick={handleResumeBtn}
                                    className="w-full flex items-center justify-center px-4 py-2 rounded-lg border border-green-400 text-green-600 hover:bg-green-100 space-x-2 transition"
                                >
                                    <Download size={16} />
                                    <span>Download Resume</span>
                                </button>
                                <a
                                    href="mailto:your-email@example.com"
                                    className="w-full flex items-center justify-center px-4 py-2 rounded-lg bg-green-400 text-white hover:bg-green-500 space-x-2 transition"
                                >
                                    <Mail size={16} />
                                    <span>Hire Me</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;
