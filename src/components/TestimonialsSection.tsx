import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Dileep Dhakal",
    role: "Founder & CEO",
    company: "Veel Inc.",
    content: "The web scraping infrastructure Khem developed was highly robust and scalable, handling millions of records seamlessly. His technical depth and reliability make him a strong asset to any data-driven team.",
    rating: 5,
    avatar: "VEEL",
  },
  {
    name: "Arjun Basnet",
    role: "Founder & CEO",
    company: "Technovision Traders",
    content: "Working with Khem was exceptional.demonstrated outstanding technical expertise and problem solving skills. He ensured our systems ran smoothly, DB optimization,quickly resolved critical issues, and optimized workflows, significantly improving team efficiency and operational reliability.",
    rating: 5,
    avatar: "TVT",
  },
  {
    name: "Nikesh Shrestha",
    role: "Product Manager",
    company: " IMS Software Pvt.Ltd",
    content: "Khem’s technical expertise and proactive approach greatly improved our systems’ reliability. He efficiently handled database management, AWS,testing, and deployments, saving the team significant time and ensuring smooth operations.",
    rating: 5,
    avatar: "IMS",
  },
  {
    name: "Pepjin Trapman",
    role: "Chief Operating Officer",
    company: "ICCO Corporation",
    content: "The infrastructure Khem built is incredibly robust. His strong attention to detail, structured approach, and problem-solving mindset consistently elevated our delivery standards Highly recommend!",
    rating: 5,
    avatar: "ICCO",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(174,72%,56%,0.05)_0%,_transparent_50%)]" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest mb-4 block">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
           Professional Endorsements <span className="gradient-text">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feedback from managers and senior leaders. I've had the pleasure of working with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl hover-lift relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-cyan-500 flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
