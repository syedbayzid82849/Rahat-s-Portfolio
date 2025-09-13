import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Zap, Heart, Eye } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

// ✅ Custom Light Green Button Component
const Button = ({ children, className = "", ...props }) => {
    return (
        <button
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold 
        bg-green-500 text-white shadow-md hover:bg-green-600 
        transition-all duration-300 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'branding', label: 'Branding' },
        { id: 'social', label: 'Social Media' },
        { id: 'print', label: 'Print Design' },
        { id: 'web', label: 'Web Design' },
    ];

    const projects = [
        {
            id: 1,
            title: "Tech Startup Branding",
            category: "branding",
            description: "Complete brand identity for a fintech startup including logo, guidelines, and marketing materials.",
            image: "/api/placeholder/400/300",
            tags: ["Logo Design", "Brand Guidelines", "Business Cards"],
            likes: 156,
            views: 2340,
            featured: true
        },
        {
            id: 2,
            title: "Instagram Carousel Series",
            category: "social",
            description: "Educational carousel series for a digital marketing agency that increased engagement by 300%.",
            image: "/api/placeholder/400/300",
            tags: ["Social Media", "Instagram", "Content Design"],
            likes: 89,
            views: 1890,
            featured: false
        },
        {
            id: 3,
            title: "Executive LinkedIn Makeover",
            category: "social",
            description: "LinkedIn profile redesign for C-level executive resulting in 500% more profile views.",
            image: "/api/placeholder/400/300",
            tags: ["LinkedIn", "Personal Branding", "Professional"],
            likes: 234,
            views: 3210,
            featured: true
        }
    ];

    const filteredProjects =
        activeFilter === 'all'
            ? projects
            : projects.filter((project) => project.category === activeFilter);

    return (
        <section id="portfolio">
            <div className="container mx-auto pb-20 px-3 lg:px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-3">
                        My <span className="text-green-500">Portfolio</span>
                    </h2>
                    <p className="text-xl text-gray-500 max-w-3xl mx-auto">
                        Showcasing top projects in branding, digital design, and marketing with impactful results.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ y: -10 }}
                                className="group relative"
                            >
                                <div className="bg-gray-800 rounded-2xl overflow-hidden h-full hover:shadow-xl transition-all duration-300">
                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <div className="absolute top-4 left-4 z-10">
                                            <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                                                <Zap className="w-3 h-3" />
                                                <span>Featured</span>
                                            </div>
                                        </div>
                                    )}

                                    {/* Project Image */}
                                    <div className="relative aspect-video bg-green-700 overflow-hidden flex items-center justify-center">
                                        <div className="text-6xl font-bold text-green-200 opacity-20">
                                            {project.title.split(' ').map((word) => word[0]).join('')}
                                        </div>

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                                <Button>
                                                    <ExternalLink size={16} />
                                                    <span>View Details</span>
                                                </Button>
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Project Info */}
                                    <div className="p-6 space-y-4">
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-green-400 group-hover:text-green-300 transition-all duration-300">
                                                {project.title}
                                            </h3>
                                            <p className="text-green-200 text-sm leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-xs font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* View More */}
                <div className="text-center mt-6 flex justify-center">
                    <motion.div
                    >
                        <Button
                        hre
                            size="lg"
                            className="bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-300/50 transition-all duration-300"
                        >
                            <span>View All Projects</span>
                            <ArrowRight size={16} className="ml-2" />
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
