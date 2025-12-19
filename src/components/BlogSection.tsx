import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Clock, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import profileImage5 from "@/assets/a3.jpg";
import profileImage6 from "@/assets/a2.jpg";
import profileImage7 from "@/assets/a4.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable ETL Pipelines with Python",
    excerpt: "Learn how to design and implement robust ETL pipelines that can handle millions of records efficiently using Python and modern data engineering practices.",
    image: profileImage5,
    category: "Data Engineering",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    slug: "scalable-etl-pipelines-python",
  },
  {
    id: 2,
    title: "Web Scraping Best Practices in 2024",
    excerpt: "Discover ethical web scraping techniques, avoiding rate limits, handling dynamic content, and structuring your scraped data for maximum value.",
    image: profileImage6,
    category: "Automation",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    slug: "web-scraping-best-practices-2024",
  },
  {
    id: 3,
    title: "Automating Lead Generation Workflows",
    excerpt: "A comprehensive guide to building automated lead generation systems that capture, validate, and enrich prospect data at scale.",
    image: profileImage7,
    category: "Tutorial",
    date: "Nov 28, 2024",
    readTime: "10 min read",
    slug: "automating-lead-generation-workflows",
  },
];

export const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="section-padding relative" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(174,72%,56%,0.03)_0%,_transparent_50%)]" />
      
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Latest Articles
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Insights & <span className="gradient-text">Tutorials</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge about data engineering, automation, and technical best practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="glass-card h-full rounded-2xl overflow-hidden hover-lift">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/90 text-primary-foreground">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>

                    <span className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-3 transition-all gap-2">
                      Read More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary/50 hover:bg-primary/10"
          >
            <Link to="/blog">
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
