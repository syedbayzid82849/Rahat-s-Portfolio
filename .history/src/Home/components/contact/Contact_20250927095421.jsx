import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Dribbble } from 'lucide-react';
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

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
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();

    const onSubmit = async (data) => {
        try {
            await emailjs.send(
                "service_5ppcy0w",
                "template_y5uudlh",
                data,
                "wg6QbPS1kkioimXdq"
            );
            alert("Message sent successfully!");
            reset();
        } catch (error) {
            console.error(error);
            alert("Failed to send message. Try again.");
        }
    };

    const contactInfo = [
        { icon: <Mail className="w-6 h-6" />, title: "Email", value: "rahatfigure10@gmail.com", link: "mailto:rahatfigure10@gmail.com" },
        { icon: <Phone className="w-6 h-6" />, title: "Phone", value: "+880 172 285 3978", link: "tel:+8801722853978" },
        { icon: <MapPin className="w-6 h-6" />, title: "Location", value: "Kanishail, Golapgonj, Dhaka Dakshin - 3161, Sylhet", link: null }
    ];

    const socialLinks = [
        { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", url: "https://www.linkedin.com/in/rgxfigure/", color: "hover:text-primary" },
        { icon: <Instagram className="w-5 h-5" />, name: "Instagram", url: "https://instagram.com/rgxfigure", color: "hover:text-accent" },
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
        <section id="contact" className="py-20 border-t border-gray-700">
            <div className="container mx-auto px-3 lg:px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: false }}
                    className="text-center mb-10"
                >
                    <h2 className="text-4xl text-center font-bold mb-3">
                        <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                            Let's Work
                        </span>
                        Together
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Ready to elevate your brand with professional design? Let’s connect!
                    </p>
                </motion.div>


                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left Column - Contact Form */}
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false }}>
                        <div className="glass rounded-3xl p-4">
                            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                        <input
                                            type="text" id="name" placeholder="John Doe"
                                            className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-foreground"
                                            {...register("name", { required: "Name is required" })}
                                        />
                                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                                        <input
                                            type="email" id="email" placeholder="john@example.com"
                                            className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-foreground"
                                            {...register("email", { required: "Email is required", pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" } })}
                                        />
                                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Project Type</label>
                                    <select id="subject" className="w-full px-4 py-3 rounded-xl bg-transparent border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-foreground"
                                        {...register("subject", { required: "Please select a service" })}>
                                        <option value="">Select a service</option>
                                        {services.map((service, i) => <option className='text-black' key={i} value={service}>{service}</option>)}
                                    </select>
                                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">Project Details</label>
                                    <textarea
                                        id="message" rows={6} placeholder="Tell me about your project..."
                                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 text-foreground"
                                        {...register("message", { required: "Message is required" })}
                                    />
                                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                                </div>

                                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white shadow-lg group flex justify-center items-center gap-2.5 p-3 rounded-xl"
                                        disabled={isSubmitting}
                                    >
                                        <Send size={16} className="group-hover:translate-x-1 transition-transform" /> Send Message
                                    </Button>
                                </motion.div>
                            </form>

                        </div>
                    </motion.div>

                    {/* Right Column - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: false }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-green-400">Get in Touch</h3>
                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={info.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        viewport={{ once: false }}
                                        className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-green-300 via-green-400 to-green-500 hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-green-50">{info.title}</h4>
                                            {info.link ? (
                                                <strong>
                                                    <a
                                                        href={info.link}
                                                        className="text-black hover:text-green-50 transition-colors"
                                                    >
                                                        {info.value}
                                                    </a>
                                                </strong>
                                            ) : (
                                                <strong>
                                                    <p className="text-black">{info.value}</p>
                                                </strong>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold mb-4 text-green-400">Follow Me</h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        viewport={{ once: false }}
                                        className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r from-green-400 to-green-600 text-white transition-all duration-300`}
                                    >
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










