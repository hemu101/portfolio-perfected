import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const education = [
  {
    degree: "Master in Computer Application",
    institution: "IGNOU",
    location: "Kathmandu, Nepal",
    period: "2025 - Present",
    description: "Focused on software development, database management, and information systems.",
    achievements: ["Dean's List", "Best Project Award", ],
  },
    {
    degree: "Bachelor in Computer Application",
    institution: "Aims Academy | Tribhuvan University",
    location: "Lalitpur, Nepal",
    period: "2018 - 2014",
    description: "Focused on software development, database management, and information systems.",
    achievements: ["Dean's List", "Best Project Award", "Technical Club President"],
  },
  {
    degree: "Higher Secondary Education",
    institution: " JanaJyoti College | HSEB",
    location: "Chandrapur, Rautahat, Nepal",
    period: "2015 - 2017",
    description: "Specialized in Science and Computer Applications with strong foundation in mathematics and programming.",
    achievements: ["Science Olympiad Finalist", "Computer Science Award"],
  },
];

const certifications = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2023" },
  { name: "Python for Data Science", issuer: "DataCamp", year: "2022" },
  { name: "Advanced SQL", issuer: "LinkedIn Learning", year: "2022" },
  { name: "Web Scraping with Python", issuer: "Udemy", year: "2021" },
];

export const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(174,72%,56%,0.03)_0%,_transparent_50%)]" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Academic Background
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development to stay ahead in the ever-evolving tech landscape.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="font-heading text-2xl font-bold mb-8 flex items-center gap-3"
            >
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </motion.h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 rounded-2xl hover-lift"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <h4 className="font-heading font-bold text-foreground">{edu.degree}</h4>
                    <span className="flex items-center gap-1 text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                      <Calendar className="w-3 h-3" />
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-2">{edu.institution}</p>
                  <p className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
                    <MapPin className="w-3 h-3" />
                    {edu.location}
                  </p>

                  <p className="text-sm text-muted-foreground mb-4">{edu.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="flex items-center gap-1 px-2 py-1 text-xs rounded-lg bg-secondary/50 text-muted-foreground"
                      >
                        <Award className="w-3 h-3 text-primary" />
                        {achievement}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-heading text-2xl font-bold mb-8 flex items-center gap-3"
            >
              <Award className="w-6 h-6 text-primary" />
              Certifications
            </motion.h3>

            <div className="glass-card p-6 rounded-2xl">
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {cert.name}
                        </p>
                        <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{cert.year}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
