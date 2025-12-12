import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Data Team Lead",
    company: "Veel",
    location: "Kathmandu, Nepal / San Francisco, CA",
    period: "Feb 2025 – Present",
    description: [
      "Led Data as a Service (DaaS) operations including ETL pipelines, data scraping, enrichment, and intent data discovery",
      "Built automated pipelines to extract and validate structured data across industries",
      "Managed team workflows, optimized processes, and aligned strategies with business goals",
      "Implemented data quality checks, deduplication logic, and metadata tracking",
      "Mentored team members and established best practices for data management",
    ],
    current: true,
  },
  {
    title: "Senior Technical Support Associate",
    company: "Veel",
    location: "Kathmandu, Nepal / San Francisco, CA",
    period: "Apr 2024 – Feb 2025",
    description: [
      "Conducted data scraping, lead generation, and content moderation using AI tools",
      "Developed automated workflows for system performance monitoring and error detection",
      "Coordinated with Dev, QA, Sales, and Marketing teams for backend fixes",
      "Trained new moderators on AI-assisted content review tools",
    ],
    current: false,
  },
  {
    title: "Technical Support Engineer",
    company: "TechnoVision Traders",
    location: "Kathmandu, Nepal",
    period: "Nov 2023 – Apr 2024",
    description: [
      "Implemented surveillance systems including software installation and network configuration",
      "Managed SQL Server configurations, query optimization, and backups",
      "Set up NAS devices for secure video data storage and client access",
      "Conducted training sessions for clients on system usage",
    ],
    current: false,
  },
  {
    title: "Technical Support Executive",
    company: "IMS Software Pvt. Ltd",
    location: "Kathmandu, Nepal",
    period: "Aug 2022 – Oct 2023",
    description: [
      "Deployed POS, inventory, and billing systems for SMEs",
      "Managed SQL Server, IIS, AWS backup automation, and IRD eBilling",
      "Provided L2 technical support and collaborated with developers for product improvement",
    ],
    current: false,
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(174,72%,56%,0.03)_0%,_transparent_60%)]" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Career Journey
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%]"
              }`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${
                  exp.current
                    ? "bg-primary animate-glow-pulse"
                    : "bg-primary/50"
                } border-4 border-background z-10`}
              />

              {/* Content Card */}
              <div
                className={`ml-8 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                }`}
              >
                <motion.div
                  className="glass-card p-6 rounded-2xl hover-lift"
                  whileHover={{ scale: 1.02 }}
                >
                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      Current Role
                    </span>
                  )}

                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    {exp.title}
                  </h3>

                  <div className={`flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}>
                    <div className="flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-primary" />
                      {exp.company}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-primary" />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-primary" />
                      {exp.period}
                    </div>
                  </div>

                  <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground text-sm flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
