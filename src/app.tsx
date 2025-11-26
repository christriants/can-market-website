import { useState, useEffect } from "preact/hooks";
import { Star } from "lucide-preact";
import styles from "./App.module.scss";
import { ContactSection } from "./sections/ContactSection";
import { SEOContent } from "./components/SEOContent";
import { ServicesSection } from "./sections/ServicesSection";
import { GallerySection } from "./sections/GallerySection";
import { HeroSection } from "./sections/HeroSection";
import { HeaderSection } from "./sections/HeaderSection";
import { FooterSection } from "./sections/FooterSection";

export function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div class={styles.app}>
      <SEOContent />
      <HeaderSection scrolled={scrolled} />
      <HeroSection />
      <GallerySection />
      <ServicesSection />

        {/* About Section */}
        <section id="about" class={styles.about}>
          <div class={styles.containerSmall}>
            <h2>About C.A.N. MARKET</h2>
            <p>
              <strong>Proudly family-owned and operated</strong>, we're dedicated to serving our 
              Long Beach community with quality products and friendly service. Whether you're 
              filling up your tank, grabbing a quick snack, or picking up essentials, 
              C.A.N. MARKET is here for you.
            </p>
            <div class={styles.rating}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="currentColor" />
              ))}
              <span>5-Star Service</span>
            </div>
          </div>
        </section>

      <ContactSection />
      <FooterSection />
    </div>
  );
}
