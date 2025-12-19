import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Calendar, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import profileImage5 from "@/assets/a1.jpg";
import profileImage6 from "@/assets/a3.jpg";
import profileImage7 from "@/assets/a4.jpg";
import profileImage8 from "@/assets/a5.jpg";

const categories = ["All", "Data Engineering", "Automation", "Tutorial", "Web Scraping", "Leadership"];

const allPosts = [
  {
    id: 1,
    title: "Building Scalable ETL Pipelines with Python",
    excerpt: "Learn how to design and implement robust ETL pipelines that can handle millions of records efficiently using Python and modern data engineering practices.",
    image: profileImage5,
    category: "Data Engineering",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    slug: "scalable-etl-pipelines-python",
    featured: true,
  },
  {
    id: 2,
    title: "Web Scraping Best Practices in 2024",
    excerpt: "Discover ethical web scraping techniques, avoiding rate limits, handling dynamic content, and structuring your scraped data for maximum value.",
    image: profileImage6,
    category: "Web Scraping",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    slug: "web-scraping-best-practices-2024",
    featured: true,
  },
  {
    id: 3,
    title: "Automating Lead Generation Workflows",
    excerpt: "A comprehensive guide to building automated lead generation systems that capture, validate, and enrich prospect data at scale.",
    image: profileImage7,
    category: "Automation",
    date: "Nov 28, 2024",
    readTime: "10 min read",
    slug: "automating-lead-generation-workflows",
    featured: false,
  },
  {
    id: 4,
    title: "Leading High-Performance Data Teams",
    excerpt: "Insights from managing data teams across Nepal and San Francisco, focusing on communication, mentorship, and delivering quality results.",
    image: profileImage8,
    category: "Leadership",
    date: "Nov 20, 2024",
    readTime: "7 min read",
    slug: "leading-data-teams",
    featured: false,
  },
  {
    id: 5,
    title: "Python Selenium Advanced Techniques",
    excerpt: "Master advanced Selenium patterns including page object models, custom waits, and handling complex JavaScript-rendered pages.",
    image: profileImage5,
    category: "Tutorial",
    date: "Nov 15, 2024",
    readTime: "12 min read",
    slug: "python-selenium-advanced",
    featured: false,
  },
  {
    id: 6,
    title: "Data Quality Automation with Python",
    excerpt: "Build automated data quality checks using Python to ensure your pipelines deliver accurate, consistent, and reliable data.",
    image: profileImage6,
    category: "Data Engineering",
    date: "Nov 10, 2024",
    readTime: "9 min read",
    slug: "data-quality-automation",
    featured: false,
  },
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = allPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = allPosts.find((post) => post.featured);

  return (
    <PageTransition>
      <Helmet>
        <title>Blog | Khem Raj Ale Magar - Data Engineering & Automation</title>
        <meta name="description" content="Articles and tutorials about data engineering, web scraping, automation, and technical leadership by Khem Raj Ale Magar." />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Header */}
        <header className="pt-24 pb-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(174,72%,56%,0.08)_0%,_transparent_50%)]" />
          
          <div className="container-custom relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <Button asChild variant="ghost" size="sm" className="gap-2">
                <Link to="/">
                  <ArrowLeft className="w-4 h-4" />
                  Back Home
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
                Blog
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Insights & <span className="gradient-text">Tutorials</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Exploring data engineering, automation, web scraping, and technical leadership through practical articles and tutorials.
              </p>
            </motion.div>
          </div>
        </header>

        {/* Search and Filters */}
        <section className="py-8 border-b border-border/50">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-secondary/50 border-border"
                />
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-primary text-primary-foreground" : "border-border"}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && selectedCategory === "All" && !searchQuery && (
          <section className="py-12">
            <div className="container-custom">
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card rounded-3xl overflow-hidden"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 text-sm font-medium rounded-full bg-primary text-primary-foreground">
                        Featured
                      </span>
                    </div>
                  </div>

                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <span className="text-primary text-sm font-medium mb-3">{featuredPost.category}</span>
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <Button asChild className="w-fit bg-primary text-primary-foreground hover:bg-primary/90">
                      <Link to={`/blog/${featuredPost.slug}`}>
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.article>
            </div>
          </section>
        )}

        {/* Posts Grid */}
        <section className="py-12">
          <div className="container-custom">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <Link to={`/blog/${post.slug}`}>
                      <div className="glass-card h-full rounded-2xl overflow-hidden hover-lift">
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/90 text-primary-foreground">
                              {post.category}
                            </span>
                          </div>
                        </div>

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

                          <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>

                          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                            {post.excerpt}
                          </p>

                          <span className="inline-flex items-center text-primary text-sm font-medium">
                            Read More
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  );
};

export default Blog;
