import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationSection } from "@/components/EducationSection";
import { BlogSection } from "@/components/BlogSection";
import { DigitalProductsSection } from "@/components/DigitalProductsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ClientsSection } from "@/components/ClientsSection";
import { GallerySection } from "@/components/GallerySection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Khem Raj Ale Magar | Data Team Lead & Technical Expert</title>
        <meta
          name="description"
          content="Portfolio of Khem Raj Ale Magar - Data Team Lead specializing in ETL pipelines, web scraping, automation, and leading high-performance data teams."
        />
        <meta
          name="keywords"
          content="Data Team Lead, ETL, Web Scraping, Python, SQL, Data Engineering, Kathmandu, Nepal"
        />
        <meta property="og:title" content="Khem Raj Ale Magar | Data Team Lead" />
        <meta
          property="og:description"
          content="Data and technical support professional with expertise in ETL pipelines, web scraping, automation, and lead generation."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://khemale.dev" />
      </Helmet>

      <main className="min-h-screen bg-background overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ClientsSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <DigitalProductsSection />
        <BlogSection />
        <TestimonialsSection />
        <GallerySection />
        <NewsletterSection />
        <ContactSection />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Index;
