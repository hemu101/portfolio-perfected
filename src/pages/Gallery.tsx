import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import profileMain from "@/assets/profile-main.jpg";
import profile2 from "@/assets/profile-2.jpg";
import profile3 from "@/assets/profile-3.jpg";
import profile4 from "@/assets/profile-4.jpg";
import profile5 from "@/assets/profile-5.jpg";
import profile6 from "@/assets/profile-6.jpg";
import profile7 from "@/assets/profile-7.jpg";
import profile8 from "@/assets/profile-8.jpg";

const galleryImages = [
  { src: profileMain, alt: "Professional portrait", category: "Professional", description: "Leading data teams with passion" },
  { src: profile2, alt: "Working environment", category: "Work", description: "Focused on delivering quality results" },
  { src: profile3, alt: "Team collaboration", category: "Team", description: "Building connections that matter" },
  { src: profile4, alt: "Conference presentation", category: "Events", description: "Sharing knowledge at tech events" },
  { src: profile5, alt: "Casual portrait", category: "Personal", description: "Beyond the professional life" },
  { src: profile6, alt: "Focus mode", category: "Work", description: "Deep in thought and problem-solving" },
  { src: profile7, alt: "Office environment", category: "Work", description: "Collaborative workspace moments" },
  { src: profile8, alt: "Outdoor portrait", category: "Personal", description: "Embracing adventure and nature" },
];

const categories = ["All", "Professional", "Work", "Team", "Events", "Personal"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter((img) => img.category === selectedCategory);

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? filteredImages.length - 1 : selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === filteredImages.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <>
      <Helmet>
        <title>Gallery | Khem Raj Ale Magar - Visual Journey</title>
        <meta name="description" content="A visual journey through the professional and personal life of Khem Raj Ale Magar, Data Team Lead." />
      </Helmet>

      <main className="min-h-screen bg-background">
        {/* Header */}
        <header className="pt-24 pb-12 relative overflow-hidden">
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
                Visual Journey
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Photo <span className="gradient-text">Gallery</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Capturing moments from my professional journey and personal adventures.
              </p>
            </motion.div>
          </div>
        </header>

        {/* Category Filters */}
        <section className="py-8 border-b border-border/50">
          <div className="container-custom">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-primary text-primary-foreground" : "border-border"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12">
          <div className="container-custom">
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  layout
                  className="relative group break-inside-avoid cursor-pointer"
                  onClick={() => setSelectedIndex(index)}
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center"
                        >
                          <ZoomIn className="w-6 h-6 text-primary-foreground" />
                        </motion.div>
                      </div>
                      
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/80 text-foreground mb-2 inline-block">
                          {image.category}
                        </span>
                        <p className="text-sm text-foreground">{image.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center"
              onClick={() => setSelectedIndex(null)}
            >
              {/* Close Button */}
              <button
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center text-foreground hover:bg-secondary transition-colors z-10"
                onClick={() => setSelectedIndex(null)}
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation */}
              <button
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary/50 flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="max-w-4xl mx-auto px-20"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={filteredImages[selectedIndex].src}
                  alt={filteredImages[selectedIndex].alt}
                  className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl mx-auto"
                />
                <div className="text-center mt-6">
                  <span className="px-4 py-2 text-sm font-medium rounded-full bg-primary/20 text-primary mb-2 inline-block">
                    {filteredImages[selectedIndex].category}
                  </span>
                  <p className="text-lg text-foreground mt-2">{filteredImages[selectedIndex].description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Footer />
      </main>
    </>
  );
};

export default Gallery;
