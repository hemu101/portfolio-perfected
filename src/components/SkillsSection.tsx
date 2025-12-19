import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Database, 
  Code2, 
  Server, 
  Users, 
  FileText, 
  Brain,
  Zap,
  Cloud
} from "lucide-react";

const skillCategories = [
  {
    title: "Data Management & Analytics",
    icon: Database,
    skills: ["MSSQL", "PostgreSQL", "MongoDB","Supabase","SQL Optimization",  "Data Warehousing","Data Preprocessing","Data QA", "Metadata Tracking", "KPI Monitoring", "Data Visualization"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Web & Automation",
    icon: Zap,
    skills: ["ETL Pipelines","Web Scraping", "Task Automation", "API Integration", "Automated Workflows"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Infrastructure & Systems",
    icon: Server,
    skills: ["Microsoft IIS", "NAS","Software Implementations", "POS Systems","Backup & Recovery", "Surveillance Systems", "System Performance Monitoring"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Development",
    icon: Code2,
    skills: ["Python", "C#", "JavaScript", "HTML/CSS", "ASP.NET Core","Prompt Engineering","React", "Node.js","SQL"],
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Leadership & Team Management",
    icon: Users,
    skills: ["Team Leadership", "Task & Ticket Management", "Mentoring", "Cross-functional Collaboration", "Workflow Optimization", "Strategic Planning","Incident & Escalation Management", "Process Improvement","Project Coordination"],
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Cloud & Backend",
    icon: Cloud,
    skills: ["AWS", "Backend Support & Maintenance", "API Integration", "Hotfix Deployment", "Debugging & Issue Resolution"],
    color: "from-blue-500 to-indigo-500",
  },
  {
  title: "Toolkits & Platforms",
  icon: Cloud,
  skills: [
    "AppSheet","Metabase","Apps Script", "Power BI","Google Docs, Sheets", "Low-Code Platforms","CRM Tools", "AI Tools",
  ],
  color: "from-blue-500 to-indigo-500",
}
];

const programmingLanguages = [
  { name: "Python", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "C#", level: 75 },
  { name: "SQL", level: 90 },
  { name: "NOSQL", level: 50 },
  { name: "HTML/CSS", level: 85 },
  { name: "React", level: 60 },
  { name: "ASP.NET Core", level: 55 },
  { name: "Prompt Engineering", level: 80 },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(174,72%,56%,0.05)_0%,_transparent_50%)]" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Expertise
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit developed through years of hands-on experience in data engineering and technical support.
          </p>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl hover-lift group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-0.5`}>
                  <div className="w-full h-full rounded-[10px] bg-card flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-foreground" />
                  </div>
                </div>
                <h3 className="font-heading font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Programming Languages Progress */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="glass-card p-8 rounded-2xl"
        >
          <h3 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">
            Programming Languages
          </h3>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {programmingLanguages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-foreground">{lang.name}</span>
                  <span className="text-sm text-muted-foreground">{lang.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${lang.level}%` } : {}}
                    transition={{ delay: 0.6 + index * 0.1, duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
