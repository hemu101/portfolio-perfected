import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Download, Star, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    title: "ETL Pipeline Templates",
    description: "Production-ready Python ETL templates with error handling, logging, and monitoring built-in.",
    price: "Free",
    rating: 4.9,
    downloads: "1.2k+",
    type: "Template Pack",
    icon: Package,
  },
  {
    title: "Web Scraping Masterclass",
    description: "Complete guide to ethical web scraping with Python, Selenium, and BeautifulSoup. 50+ pages.",
    price: "$29",
    rating: 4.8,
    downloads: "500+",
    type: "eBook",
    icon: FileText,
  },
  {
    title: "SQL Optimization Cheatsheet",
    description: "Performance tips and query optimization techniques for PostgreSQL and MySQL databases.",
    price: "Free",
    rating: 5.0,
    downloads: "2.5k+",
    type: "Cheatsheet",
    icon: FileText,
  },
  {
    title: "Data Pipeline Architecture Guide",
    description: "Learn to design scalable data architectures for small to enterprise-level applications.",
    price: "$49",
    rating: 4.9,
    downloads: "300+",
    type: "eBook",
    icon: FileText,
  },
];

export const DigitalProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(174,72%,56%,0.05)_0%,_transparent_50%)]" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Resources
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Digital <span className="gradient-text">Products</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Curated resources to help you level up your data engineering and automation skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl hover-lift group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <product.icon className="w-7 h-7 text-primary" />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {product.type}
                      </span>
                      <h3 className="font-heading font-bold text-foreground mt-2 group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                    </div>
                    <span className="font-heading text-xl font-bold text-primary">
                      {product.price}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                        {product.rating}
                      </span>
                      <span className="flex items-center gap-1">
                        <Download className="w-3 h-3" />
                        {product.downloads}
                      </span>
                    </div>

                    <Button
                      size="sm"
                      className={product.price === "Free" ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground"}
                    >
                      {product.price === "Free" ? "Download Free" : "Get Now"}
                    </Button>
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
