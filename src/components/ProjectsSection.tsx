import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Database, Hotel, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "DAAS – Web Data Scraper",
    description:
      "Developed a web scraping tool that identifies data patterns, scans HTML structures, and detects repeated elements. Features automatic pagination handling and exports to CSV/XLSX.",
    icon: Database,
    tags: ["Python", "Web Scraping", "ETL", "Automation"],
    highlights: [
      "CSS selectors for precise extraction",
      "Rate-limiting avoidance",
      "Multi-format export support",
    ],
    color: "from-cyan-500/20 to-blue-500/20",
    githubUrl: "https://github.com/username/daas-scraper", // Placeholder
    demoUrl: "https://demo.daas-scraper.com", // Placeholder
  },
    {
    title: "IG – Web Data Scraper",
    description:
      "Developed a Instagram Data Scraper: system to scrape Instagram content, detect patterns, and handle pagination automatically, producing clean CSV/XLSX datasets.",
    icon: Database,
    tags: ["Python", "Web Scraping", "ETL", "Automation"],
    highlights: [
      "Precise data extraction using targeted selectors",
      "Data analysis for pattern detection",
     "Seamless integration with various data pipelines",
    ],
    color: "from-cyan-500/20 to-green-500/20",
    githubUrl: "https://github.com/username/ig-scraper", // Placeholder
    demoUrl: "https://demo.ig-scraper.com", // Placeholder
  },
{
  title: "TikTok – Data Scraper",
  description:
    "Developed a system to extract, analyze, and structure TikTok content, identify engagement trends, and handle automatic pagination, producing clean CSV/XLSX datasets for analytics and decision-making.",
  icon: Database,
  tags: ["Python", "Web Scraping", "ETL", "Automation", "Data Analysis"],
  highlights: [
    "Efficient data extraction from TikTok profiles",
    "Analysis for content engagement metrics",
    "Multi-format dataset export for analytics",
  ],
  color: "from-pink-500/20 to-red-500/20",
  githubUrl: "https://github.com/username/tiktok-scraper", // Placeholder
  demoUrl: "https://demo.tiktok-scraper.com", // Placeholder
  },
{
  title: "ToolHub – AI Multi-Tool Converter",
  description:
    "Developed ToolHub, an AI-powered platform that allows users to convert and process multiple file types (images, CSV, PDF, etc.) seamlessly. Features automated workflow management and user-driven conversion options.",
  icon: Database,
  tags: ["AI", "Automation", "File Conversion"],
  highlights: [
    "Automated conversion of images, CSV, PDF, and other formats",
    "AI-assisted workflow for user-driven processing",
    "Batch processing and multi-format export support",
  ],
  color: "from-purple-500/20 to-pink-500/20",
  githubUrl: "https://github.com/username/toolhub", // Placeholder
  demoUrl: "https://demo.toolhub.com", // Placeholder
},
  {
    title: "Web HMS – Hospitality Management",
    description:
      "Developed a responsive hospitality management system for SMEs with guest management, inventory control, and POS billing modules.",
    icon: Hotel,
    tags: ["C#", "SQL Server", "JavaScript", "ASP.NET"],
    highlights: [
      "Real-time reporting dashboard",
      "Role-based access control",
      "Integrated POS billing",
    ],
    color: "from-emerald-500/20 to-teal-500/20",
    githubUrl: "https://github.com/username/web-hms", // Placeholder
    demoUrl: "https://demo.web-hms.com", // Placeholder
  },
  {
    title: "Lead Generation Pipeline",
    description:
      "Built automated pipelines to extract and validate structured data across industries, delivering high-intent leads for marketing and sales workflows.",
    icon: BarChart3,
    tags: ["Apps Script", "Metabase", "API Integration", "Data Quality"],
    highlights: [
      "Intent data discovery",
      "Data enrichment workflows",
      "Quality validation checks",
    ],
    color: "from-violet-500/20 to-purple-500/20",
    githubUrl: "https://github.com/username/lead-pipeline", // Placeholder
    demoUrl: "https://demo.lead-pipeline.com", // Placeholder
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Portfolio
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in data engineering, automation, and system development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card h-full rounded-2xl overflow-hidden hover-lift">
                {/* Header with Icon */}
                <div className={`relative h-40 bg-gradient-to-br ${project.color} p-6 flex items-center justify-center`}>
                  <motion.div
                    className="w-20 h-20 rounded-2xl bg-background/10 backdrop-blur-sm flex items-center justify-center"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <project.icon className="w-10 h-10 text-foreground" />
                  </motion.div>
                  
                  {/* Decorative circles */}
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-full border border-foreground/10" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 rounded-full bg-foreground/5" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button asChild variant="outline" size="sm" className="flex-1 border-border hover:bg-secondary">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.demoUrl ? (
                      <Button asChild size="sm" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    ) : (
                      <Button size="sm" className="flex-1 bg-muted text-muted-foreground" disabled>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
