import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Database, Code2, BarChart3, Users, Zap, Shield, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

const services = [
  {
    icon: Database,
    title: "ETL Pipeline Development",
    description: "Design and implement robust Extract, Transform, Load pipelines that handle millions of records efficiently with comprehensive error handling and monitoring.",
    features: [
      "Custom data extraction from various sources",
      "Data transformation and cleansing",
      "Automated scheduling and monitoring",
      "Error handling and recovery",
      "Performance optimization",
    ],
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: Code2,
    title: "Web Scraping Solutions",
    description: "Build ethical, scalable web scraping solutions that extract structured data from websites while respecting robots.txt and rate limits.",
    features: [
      "Dynamic content handling",
      "Anti-detection measures",
      "Data validation and cleaning",
      "Multi-format export (CSV, JSON, XLSX)",
      "API integration capabilities",
    ],
    color: "from-emerald-500/20 to-teal-500/20",
  },
    {
    icon: Database,
    title: "ETL Pipeline Development",
    description: "Design and implement robust Extract, Transform, Load pipelines that handle millions of records efficiently with comprehensive error handling and monitoring.",
    features: [
      "Custom data extraction from various sources",
      "Data transformation and cleansing",
      "Automated scheduling and monitoring",
      "Error handling and recovery",
      "Performance optimization",
    ],
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: Code2,
    title: "Web Scraping Solutions",
    description: "Build ethical, scalable web scraping solutions that extract structured data from websites while respecting robots.txt and rate limits.",
    features: [
      "Dynamic content handling",
      "Anti-detection measures",
      "Data validation and cleaning",
      "Multi-format export (CSV, JSON, XLSX)",
      "API integration capabilities",
    ],
    color: "from-emerald-500/20 to-teal-500/20",
  },
    {
    icon: Database,
    title: "ETL Pipeline Development",
    description: "Design and implement robust Extract, Transform, Load pipelines that handle millions of records efficiently with comprehensive error handling and monitoring.",
    features: [
      "Custom data extraction from various sources",
      "Data transformation and cleansing",
      "Automated scheduling and monitoring",
      "Error handling and recovery",
      "Performance optimization",
    ],
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: Code2,
    title: "Web Scraping Solutions",
    description: "Build ethical, scalable web scraping solutions that extract structured data from websites while respecting robots.txt and rate limits.",
    features: [
      "Dynamic content handling",
      "Anti-detection measures",
      "Data validation and cleaning",
      "Multi-format export (CSV, JSON, XLSX)",
      "API integration capabilities",
    ],
    color: "from-emerald-500/20 to-teal-500/20",
  },
    {
    icon: Database,
    title: "ETL Pipeline Development",
    description: "Design and implement robust Extract, Transform, Load pipelines that handle millions of records efficiently with comprehensive error handling and monitoring.",
    features: [
      "Custom data extraction from various sources",
      "Data transformation and cleansing",
      "Automated scheduling and monitoring",
      "Error handling and recovery",
      "Performance optimization",
    ],
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: Code2,
    title: "Web Scraping Solutions",
    description: "Build ethical, scalable web scraping solutions that extract structured data from websites while respecting robots.txt and rate limits.",
    features: [
      "Dynamic content handling",
      "Anti-detection measures",
      "Data validation and cleaning",
      "Multi-format export (CSV, JSON, XLSX)",
      "API integration capabilities",
    ],
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: BarChart3,
    title: "Lead Generation",
    description: "Create automated lead generation pipelines that capture, validate, and enrich prospect data for your sales and marketing teams.",
    features: [
      "Intent data discovery",
      "Contact information enrichment",
      "Data quality validation",
      "CRM integration",
      "Automated workflows",
    ],
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Automate repetitive tasks and business processes to increase efficiency, reduce errors, and free up your team for higher-value work.",
    features: [
      "Workflow automation",
      "Report generation",
      "Data synchronization",
      "Email automation",
      "Task scheduling",
    ],
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    icon: Users,
    title: "Team Leadership & Training",
    description: "Build and mentor high-performance data teams with proven methodologies for remote collaboration and continuous improvement.",
    features: [
      "Team structure design",
      "Training programs",
      "Quality assurance processes",
      "Performance metrics",
      "Documentation standards",
    ],
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    icon: Shield,
    title: "Data Quality Assurance",
    description: "Implement comprehensive data quality frameworks to ensure accuracy, consistency, and reliability across your data ecosystem.",
    features: [
      "Automated quality checks",
      "Data profiling and analysis",
      "Anomaly detection",
      "Quality reporting dashboards",
      "Continuous monitoring",
    ],
    color: "from-indigo-500/20 to-blue-500/20",
  },
];

const Services = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Services | Khem Raj Ale Magar - Data Engineering Solutions</title>
        <meta name="description" content="Professional data engineering services including ETL pipelines, web scraping, lead generation, and process automation by Khem Raj Ale Magar." />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Header */}
        <header className="pt-24 pb-16 relative overflow-hidden">
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
                Services
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Data Engineering <span className="gradient-text">Solutions</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Transforming raw data into actionable insights with custom solutions tailored to your business needs.
              </p>
            </motion.div>
          </div>
        </header>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="glass-card h-full rounded-2xl overflow-hidden hover-lift">
                    {/* Header */}
                    <div className={`relative h-32 bg-gradient-to-br ${service.color} p-6 flex items-center justify-center`}>
                      <motion.div
                        className="w-16 h-16 rounded-2xl bg-background/10 backdrop-blur-sm flex items-center justify-center"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <service.icon className="w-8 h-8 text-foreground" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(174,72%,56%,0.05)_0%,_transparent_50%)]" />
          
          <div className="container-custom relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your <span className="gradient-text">Data Operations?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how I can help you build efficient data pipelines, automate processes, and deliver actionable insights for your business.
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/#contact">
                  Get In Touch
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  );
};

export default Services;
