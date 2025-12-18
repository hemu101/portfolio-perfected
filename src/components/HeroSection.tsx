import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Download, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-main.jpg";

// CV download URL - replace with actual CV file path
const CV_URL = "/Khem_Raj_Ale_Magar_CV.pdf";
const WHATSAPP_NUMBER = "9779840000000"; // Replace with actual WhatsApp number
const WHATSAPP_MESSAGE = "Hi Khem, I found your portfolio and would like to connect!";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(174,72%,56%,0.08)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(199,89%,48%,0.05)_0%,_transparent_50%)]" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(174, 72%, 56%) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(174, 72%, 56%) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-sm font-medium">Available for opportunities</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-7 leading-tight"
            >
              Hi, I'm{" "}
              <span className="gradient-text">Khem Ale Magar</span>
              {/* <br /> */}
              
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl text-muted-foreground mb-4 font-light"
            >
              Data Team Lead & Technical Expert
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Specialized in ETL pipelines, web scraping, automation, Database Management, and leading teams to deliver actionable data insights.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex items-center gap-2 text-muted-foreground mb-8 justify-center lg:justify-start"
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span>Kathmandu, Nepal</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8"
                asChild
              >
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary font-medium px-8"
                asChild
              >
                <a href="#projects">View Projects</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 font-medium"
                asChild
              >
                <a href={CV_URL} download="Khem_Raj_Ale_Magar_CV.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/khem-ale-38554b299", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/khemale3x3", label: "GitHub" },
                { icon: Mail, href: "mailto:khemale05@gmail.com", label: "Email" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-secondary/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl scale-75" />
              
              {/* Image Container */}
              <motion.div
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src={profileImage}
                  alt="Khem Raj Ale Magar - Data Team Lead"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/30"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-2 -left-6 w-12 h-12 rounded-full border-2 border-primary/30"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
