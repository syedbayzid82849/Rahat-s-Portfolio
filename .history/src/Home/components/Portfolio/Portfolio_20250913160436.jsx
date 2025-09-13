import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Zap, Heart, Eye } from "lucide-react";

// ✅ Custom Button Component
const Button = ({ children, variant = "default", size = "md", className = "", ...props }) => {
  const baseStyle =
    "inline-flex items-center gap-2 rounded-full font-medium transition-all duration-300";

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variants = {
    default: "bg-gradient-primary text-white shadow-glow hover:opacity-90",
    outline:
      "border border-primary/20 bg-transparent hover:bg-primary/10 text-primary",
  };

  return (
    <button
      className={`${baseStyle} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

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
    {
      id: 4,
      title: "Restaurant Menu Design",
      category: "print",
      description:
        "Premium menu design for upscale restaurant featuring elegant typography and food photography.",
      image: "/api/placeholder/400/300",
      tags: ["Menu Design", "Print", "Typography"],
      likes: 67,
      views: 980,
      featured: false,
    },
    {
      id: 5,
      title: "SaaS Landing Page",
      category: "web",
      description:
        "High-converting landing page design for B2B SaaS platform with 45% conversion rate.",
      image: "/api/placeholder/400/300",
      tags: ["Web Design", "UI/UX", "Conversion"],
      likes: 198,
      views: 4560,
      featured: true,
    },
    {
      id: 6,
      title: "Coffee Brand Identity",
      category: "branding",
      description:
        "Artisanal coffee brand identity with eco-friendly packaging and sustainable messaging.",
      image: "/api/placeholder/400/300",
      tags: ["Branding", "Packaging", "Sustainability"],
      likes: 145,
      views: 2100,
      featured: false,
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
            marketing materials. Each project tells a unique story and delivers
            measurable results.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-gradient-primary text-primary-foreground shadow-glow"
                  : "glass hover:glass-border"
              }`}
            >
              {category.label}
            </motion.button>
          ))}
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
                <div className="glass rounded-2xl overflow-hidden h-full hover:shadow-glow transition-all duration-300">
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className="bg-gradient-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                        <Zap className="w-3 h-3 fill-current" />
                        <span>Featured</span>
                      </div>
                    </div>
                  )}

                  {/* Project Image */}
                  <div className="relative aspect-video bg-gradient-primary overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center">
                      <div className="text-6xl font-bold text-primary-foreground opacity-20">
                        {project.title
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button>
                          <ExternalLink size={16} />
                          <span>View Details</span>
                        </Button>
                      </motion.div>
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
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tags */}
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

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" variant="outline">
              View Complete Portfolio
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
