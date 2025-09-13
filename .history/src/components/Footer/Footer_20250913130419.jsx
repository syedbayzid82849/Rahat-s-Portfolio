import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <div className="bg-secondary/10 border-t border-secondary/20">
            <div className="container mx-auto px-6 py-6">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2 text-muted-foreground"
                    >
                        <span>© {currentYear} Rahat Hussain. Made with</span>
                        <Heart className="w-4 h-4 text-red-500 fill-current" />
                        <span>for creative brands</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-6"
                    >
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                            Terms of Service
                        </a>
                    </motion.div>
                </div>
            </div>
        </div >
    );
};

export default Footer;