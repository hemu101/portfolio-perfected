import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Send, CheckCircle, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export const NewsletterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive weekly insights on data engineering and automation.",
      });
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(174,72%,56%,0.08)_0%,_transparent_50%)]" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="glass-card rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
          >
            <Mail className="w-8 h-8 text-primary" />
          </motion.div>

          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            Subscribe to My <span className="gradient-text">Newsletter</span>
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Get weekly insights on data engineering best practices, Python tutorials, 
            automation tips, and career advice delivered straight to your inbox.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              Data Engineering Tips
            </span>
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              Python & SQL Tutorials
            </span>
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              Career Insights
            </span>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-secondary/50 border-border h-12"
            />
            <Button
              type="submit"
              className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8"
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Subscribed!
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Subscribe
                </>
              )}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            No spam, unsubscribe anytime. Join 500+ subscribers.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
