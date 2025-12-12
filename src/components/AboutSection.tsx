import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Code2, Users } from "lucide-react";
import profileImage2 from "@/assets/profile-2.jpg";

const stats = [
  { label: "Years Experience", value: "3+", icon: Briefcase },
  { label: "Projects Completed", value: "15+", icon: Code2 },
  { label: "Teams Led", value: "5+", icon: Users },
  { label: "Certifications", value: "MCA", icon: GraduationCap },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl transform rotate-3 scale-105" />
              
              <div className="relative glass-card p-4 rounded-3xl">
                <img
                  src={profileImage2}
                  alt="Khem Raj Ale Magar"
                  className="w-full h-auto rounded-2xl object-cover aspect-[4/5]"
                />
              </div>

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-6 -right-6 glass-card px-6 py-4 rounded-2xl"
              >
                <div className="text-3xl font-bold gradient-text">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
              About Me
            </span>
            
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Transforming Data Into
              <span className="gradient-text"> Actionable Insights</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              I'm a Data Team Lead with expertise in ETL pipelines, web scraping, automation, and lead generation. Currently leading Data as a Service (DaaS) operations at Veel, serving clients across Nepal and San Francisco.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              With a strong foundation in technical support and software implementation, I bridge the gap between complex data systems and business outcomes. I'm passionate about process optimization, team mentorship, and delivering high-quality data solutions.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="glass-card p-4 rounded-xl hover-lift group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
