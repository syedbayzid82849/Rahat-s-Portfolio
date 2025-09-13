import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Dribbble } from 'lucide-react';
import { useState } from 'react';

// Inline Button Component (import করার দরকার নেই)
const buttonVariants = {
    default: "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300",
    lg: "h-11 px-8",
};
const Button = ({ children, variant = "default", size = "default", ...props }) => {
    return (
        <button className={`${buttonVariants[variant]} ${buttonVariants[size]}`} {...props}>
            {children}
        </button>
    );
};

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        { icon: <Mail className="w-6 h-6" />, title: "Email", value: "rahatfigure10@gmail.com", link: "mailto:rahatfigure10@gmail.com" },
        { icon: <Phone className="w-6 h-6" />, title: "Phone", value: "+880 172 285 3978", link: "tel:+8801722853978" },
        { icon: <MapPin className="w-6 h-6" />, title: "Location", value: "Kanishail, Golapgonj, Dhaka Dakshin - 3161, Sylhet", link: null }
    ];

    const socialLinks = [
        { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", url: "https://www.linkedin.com/in/rgxfigure/", color: "hover:text-primary" },
        { icon: <Instagram className="w-5 h-5" />, name: "Instagram", url: "https://instagram.com/rahathussain", color: "hover:text-accent" },
        { icon: <Dribbble className="w-5 h-5" />, name: "Dribbble", url: "https://dribbble.com/rahathussain", color: "hover:text-secondary" }
    ];

    const services = [
        "Logo Design & Brand Identity",
        "LinkedIn Profile Optimization",
        "Social Media Graphics",
        "Print Design & Marketing Materials",
        "Web Design & UI/UX",
        "Digital Marketing Content"
    ];

    return (
        <section id="contact" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-6">
                    <h2 className="text-4xl text-center font-bold mb-3">
                        <span className="gradient-text">Let's Work </span>Together
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Ready to transform your brand with professional design? Get in touch and let's discuss how we can bring your vision to life.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left Column - Contact Form */}
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                        <div className="glass rounded-3xl p-8">
                            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground" placeholder="john@example.com" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Project Type</label>
                                    <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl bg-transparent border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground">
                                        <option className='text-gray-600' value="">Select a service</option>
                                        {services.map((service, index) => (
                                            <option key={index} className='text-gray-800' value={service}>{service}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">Project Details</label>
                                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none text-foreground" placeholder="Tell me about your project, timeline, and budget..." />
                                </div>

                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground shadow-glow group">
                                        <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                                        <span>Send Message</span>
                                    </Button>
                                </motion.div>
                            </form>
                        </div>
                    </motion.div>

                    {/* Right Column - Contact Info */}
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-green-400">Get in Touch</h3>
                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <motion.div key={info.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }} className="flex items-center space-x-4 p-4 glass rounded-xl hover:shadow-glow transition-all duration-300">
                                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground">{info.icon}</div>
                                        <div>
                                            <h4 className="font-semibold">{info.title}</h4>
                                            {info.link ? (
                                                <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors">{info.value}</a>
                                            ) : (
                                                <p className="text-muted-foreground">{info.value}</p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold mb-4">Follow Me</h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.3, delay: index * 0.1 }} viewport={{ once: true }} className={`w-12 h-12 glass rounded-xl flex items-center justify-center transition-all duration-300 ${social.color} text-foreground`}>
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
