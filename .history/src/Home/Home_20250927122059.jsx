import React from 'react';
import HeroSection from './components/heroSection/HeroSection';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import WorkedWith from './components/workWith/WorkWith';
import { motion } from 'framer-motion';
import { FaBehance } from "react-icons/fa";
import { Linkedin, Instagram } from 'lucide-react';

const Home = () => {
    const socialLinks = [
        { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", url: "https://www.linkedin.com/in/rgxfigure/", color: "hover:text-primary" },
        { icon: <Instagram className="w-5 h-5" />, name: "Instagram", url: "https://instagram.com/rgxfigure", color: "hover:text-accent" },
        {
            icon: <FaBehance className="w-5 h-5" />,
            name: "Behance",
            url: "https://www.behance.net/rgxfigure",
            color: "hover:text-secondary"
        }];
    return (
        <div>
            <HeroSection></HeroSection>
            <About></About>
            <WorkedWith></WorkedWith>
            <Skills></Skills>
            <Portfolio></Portfolio>
            <Services></Services>
            <Contact></Contact>
            <div className="fixed right-4 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-4 mt-7 z-50">
                {socialLinks.map((social, index) => (
                    <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="w-12 h-12 rounded-xl flex items-center justify-center 
                     bg-gradient-to-r from-green-400 to-green-600 text-white 
                     shadow-lg transition-all duration-300"
                    >
                        {social.icon}
                    </motion.a>
                ))}
            </div>

        </div>
    );
};

export default Home;