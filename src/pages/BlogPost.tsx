import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Clock, Calendar, User, Share2, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import profileImage5 from "@/assets/profile-5.jpg";
import profileImage6 from "@/assets/profile-6.jpg";
import profileImage7 from "@/assets/profile-7.jpg";
import profileImage8 from "@/assets/profile-8.jpg";

const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  content: string[];
}> = {
  "scalable-etl-pipelines-python": {
    title: "Building Scalable ETL Pipelines with Python",
    excerpt: "Learn how to design and implement robust ETL pipelines that can handle millions of records efficiently.",
    image: profileImage5,
    category: "Data Engineering",
    date: "Dec 10, 2024",
    readTime: "8 min read",
    author: "Khem Raj Ale Magar",
    content: [
      "Building scalable ETL (Extract, Transform, Load) pipelines is crucial for any data-driven organization. In this comprehensive guide, we'll explore the best practices and patterns for creating robust data pipelines using Python.",
      "## Understanding ETL Fundamentals",
      "ETL pipelines are the backbone of modern data infrastructure. They enable organizations to collect data from various sources, transform it into a usable format, and load it into target systems for analysis and reporting.",
      "The key challenges in ETL development include handling large volumes of data, ensuring data quality, managing pipeline failures gracefully, and maintaining performance as data scales.",
      "## Designing for Scale",
      "When designing ETL pipelines for scale, consider implementing chunked processing for large datasets. Instead of loading entire datasets into memory, process data in smaller batches to manage memory efficiently.",
      "Use connection pooling for database operations to reduce the overhead of establishing new connections. Libraries like SQLAlchemy provide excellent connection pooling capabilities out of the box.",
      "## Error Handling and Recovery",
      "Robust error handling is essential for production ETL pipelines. Implement retry logic with exponential backoff for transient failures, and ensure your pipeline can resume from checkpoints after failures.",
      "Log all errors comprehensively with context about the data being processed. This makes debugging and troubleshooting significantly easier when issues arise.",
      "## Monitoring and Observability",
      "Implement comprehensive monitoring from the start. Track key metrics like records processed, processing time, error rates, and data quality scores. Use alerting to notify your team of anomalies or failures.",
      "Consider implementing data lineage tracking to understand how data flows through your pipeline and to troubleshoot data quality issues effectively.",
    ],
  },
  "web-scraping-best-practices-2024": {
    title: "Web Scraping Best Practices in 2024",
    excerpt: "Discover ethical web scraping techniques and modern approaches to data extraction.",
    image: profileImage6,
    category: "Web Scraping",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    author: "Khem Raj Ale Magar",
    content: [
      "Web scraping remains a powerful technique for data collection, but it requires careful consideration of ethical and technical factors. This guide covers modern best practices for responsible web scraping.",
      "## Respecting Robots.txt",
      "Always check and respect the robots.txt file of any website you're scraping. This file indicates which parts of the site the owner prefers not to be accessed by automated tools.",
      "## Rate Limiting",
      "Implement appropriate rate limiting to avoid overwhelming target servers. A good rule of thumb is to add delays between requests and limit concurrent connections.",
      "## Handling Dynamic Content",
      "Modern websites often use JavaScript to render content dynamically. Tools like Selenium, Playwright, or Puppeteer can help handle such content effectively.",
      "## Data Quality",
      "Implement validation checks to ensure the scraped data meets quality standards. Handle missing data gracefully and log any anomalies for review.",
    ],
  },
  "automating-lead-generation-workflows": {
    title: "Automating Lead Generation Workflows",
    excerpt: "Build automated systems that capture, validate, and enrich prospect data at scale.",
    image: profileImage7,
    category: "Automation",
    date: "Nov 28, 2024",
    readTime: "10 min read",
    author: "Khem Raj Ale Magar",
    content: [
      "Lead generation is a critical function for sales and marketing teams. Automating this process can significantly improve efficiency and lead quality.",
      "## Understanding Intent Data",
      "Intent data helps identify prospects who are actively researching solutions. By tracking online behavior signals, you can prioritize leads more likely to convert.",
      "## Data Enrichment",
      "Enrich your lead data with additional information like company size, industry, and technology stack. This helps sales teams personalize their outreach.",
      "## Validation and Scoring",
      "Implement automated validation to verify email addresses and phone numbers. Use lead scoring to prioritize the most promising prospects.",
      "## CRM Integration",
      "Seamlessly integrate your lead generation pipeline with your CRM system to ensure leads flow directly to your sales team for follow-up.",
    ],
  },
  "leading-data-teams": {
    title: "Leading High-Performance Data Teams",
    excerpt: "Insights from managing data teams across Nepal and San Francisco.",
    image: profileImage8,
    category: "Leadership",
    date: "Nov 20, 2024",
    readTime: "7 min read",
    author: "Khem Raj Ale Magar",
    content: [
      "Leading data teams requires a unique blend of technical expertise and people management skills. Here are key insights from my experience leading teams across different geographies.",
      "## Building Remote Team Culture",
      "Remote teams need intentional culture building. Regular video calls, virtual team activities, and clear communication channels help maintain team cohesion.",
      "## Quality Over Quantity",
      "Focus on delivering high-quality work rather than maximizing output. Quality-first approaches lead to better long-term outcomes and team satisfaction.",
      "## Continuous Learning",
      "The data field evolves rapidly. Create opportunities for team members to learn new technologies and share knowledge with each other.",
      "## Clear Documentation",
      "Good documentation reduces dependencies on individuals and helps onboard new team members quickly. Make documentation a team habit.",
    ],
  },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPosts[slug] : null;

  if (!post) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Khem Raj Ale Magar</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Header */}
        <header className="pt-24 pb-8">
          <div className="container-custom max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 mb-8"
            >
              <Button asChild variant="ghost" size="sm" className="gap-2">
                <Link to="/blog">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <span className="text-primary font-medium text-sm mb-4 block">{post.category}</span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="container-custom max-w-5xl mb-12"
        >
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>
        </motion.div>

        {/* Content */}
        <article className="container-custom max-w-4xl pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            {post.content.map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="font-heading text-2xl font-bold mt-12 mb-4 text-foreground">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              return (
                <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                  {paragraph}
                </p>
              );
            })}
          </motion.div>

          {/* Share */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 pt-8 border-t border-border"
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <span className="text-muted-foreground flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share this article
              </span>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="gap-2">
                  <Twitter className="w-4 h-4" />
                  Twitter
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </motion.div>
        </article>

        <Footer />
      </main>
    </>
  );
};

export default BlogPost;
