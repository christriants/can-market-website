import { useState, useEffect } from "preact/hooks";
import { ShoppingBag, Star } from "lucide-preact";
import styles from "./App.module.scss";
import { ContactSection } from "./sections/ContactSection";
import { SEOContent } from "./components/SEOContent";
import { ServicesSection } from "./sections/ServicesSection";
import { GallerySection } from "./sections/GallerySection";
import { HeroSection } from "./sections/HeroSection";
import { HeaderSection } from "./sections/HeaderSection";

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

        {/* Footer */}
        <footer class={styles.footer}>
          <div class={styles.container}>
            <div class={styles.footerLogo}>
              <div class={styles.footerIcon}>
                <ShoppingBag size={18} />
              </div>
              <span>C.A.N. MARKET</span>
            </div>
            <p class={styles.footerText}>
              Your Local Mobil Gas Station & Convenience Store
            </p>
            <p class={styles.footerCopyright}>
              © 2025 C.A.N. MARKET. All rights reserved.
            </p>
          </div>
        </footer>
    </div>
  );
}
