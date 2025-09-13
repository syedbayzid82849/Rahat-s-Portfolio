import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Zap, Heart, Eye } from "lucide-react";
import { Button } from "../../../components/ui/button";

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    const categories = [
        { id: "all", label: "All Projects" },
        { id: "branding", label: "Branding" },
        { id: "social", label: "Social Media" },
        { id: "print", label: "Print Design" },
        { id: "web", label: "Web Design" },
    ];

    const projects = [
        {
            id: 1,
            title: "Tech Startup Branding",
            category: "branding",
            description:
                "Complete brand identity for a fintech startup including logo, guidelines, and marketing materials.",
            image: "/api/placeholder/400/300",
            tags: ["Logo Design", "Brand Guidelines", "Business Cards"],
            likes: 156,
            views: 2340,
            featured: true,
        },
        {
            id: 2,
            title: "Instagram Carousel Series",
            category: "social",
            description:
                "Educational carousel series for a digital marketing agency that increased engagement by 300%.",
            image: "/api/placeholder/400/300",
            tags: ["Social Media", "Instagram", "Content Design"],
            likes: 89,
            views: 1890,
            featured: false,
        },
        {
            id: 3,
            title: "Executive LinkedIn Makeover",
            category: "social",
            description:
                "LinkedIn profile redesign for C-level executive resulting in 500% more profile views.",
            image: "/api/placeholder/400/300",
            tags: ["LinkedIn", "Personal Branding", "Professional"],
            likes: 234,
            views: 3210,
            featured: true,
        },
    ];

    const filteredProjects =
        activeFilter === "all"
            ? projects
            : projects.filter((project) => project.category === activeFilter);

    return (
        <section id="portfolio" className="py-20 bg-surface">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Featured <span className="gradient-text">Work</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        A showcase of my best projects across branding, digital design, and
                        marketing materials.
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <Button
                            key={category.id}
                            variant={activeFilter === category.id ? "default" : "outline"}
                            onClick={() => setActiveFilter(category.id)}
                        >
                            {category.label}
                        </Button>
                    ))}
                </div>

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
                                <div className="glass rounded-2xl overflow-hidden h-full hover:shadow-lg transition-all duration-300">
                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <div className="absolute top-4 left-4 z-10">
                                            <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                                                <Zap className="w-3 h-3" />
                                                <span>Featured</span>
                                            </div>
                                        </div>
                                    )}

                                    {/* Project Image */}
                                    <div className="relative aspect-video bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                                        <span className="text-6xl font-bold text-white opacity-20">
                                            {project.title.split(" ").map((word) => word[0]).join("")}
                                        </span>

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                                            <Button variant="default" size="sm">
                                                <ExternalLink size={16} />
                                                View Details
                                            </Button>
                                        </div>

                                        {/* Stats */}
                                        <div className="absolute bottom-4 right-4 flex items-center space-x-4 text-white text-sm">
                                            <div className="flex items-center space-x-1">
                                                <Heart className="w-4 h-4" />
                                                <span>{project.likes}</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <Eye className="w-4 h-4" />
                                                <span>{project.views}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Project Info */}
                                    <div className="p-6 space-y-4">
                                        <h3 className="text-xl font-bold">{project.title}</h3>
                                        <p className="text-muted-foreground text-sm">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
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
            </div>
        </section>
    );
};

export default Portfolio;
