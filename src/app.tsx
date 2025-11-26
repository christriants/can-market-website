import { useState, useEffect } from "preact/hooks";
import { Fuel, ShoppingBag, Coffee, Star } from "lucide-preact";
import styles from "./App.module.scss";
import { ContactSection } from "./sections/ContactSection";
import { SEOContent } from "./components/SEOContent";
import { ServicesSection } from "./sections/ServicesSection";
import { GallerySection } from "./sections/GallerySection";

export function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div class={styles.app}>
      {/* SEO Content */}
      <SEOContent />

      {/* Header */}
      <header class={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div class={styles.headerContent}>
          <div class={styles.logo}>
            <div class={styles.logoIcon}>
              <ShoppingBag size={24} />
            </div>
            <div>
              <h2 class={styles.logoTitle}>C.A.N. MARKET</h2>
              <p class={styles.logoSubtitle}>Mobil Gas Station</p>
            </div>
          </div>
          <nav class={styles.nav}>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section class={styles.hero}>
        <div class={styles.container}>
          <div class={styles.heroContent}>
            <div class={styles.badge}>NOW OPEN</div>
            <h1 class={styles.heroTitle}>
              Welcome to <span>C.A.N. MARKET</span>
            </h1>
            <p class={styles.heroSubtitle}>
              Your neighborhood Mobil station offering quality fuel, fresh
              snacks, and everything you need on the go.
            </p>
          </div>

          <div class={styles.features}>
            <div class={styles.featureCard}>
              <Fuel size={40} />
              <h3>Premium Fuel</h3>
              <p>Top-quality Mobil gasoline and diesel at competitive prices</p>
            </div>
            <div class={styles.featureCard}>
              <ShoppingBag size={40} />
              <h3>Convenience Store</h3>
              <p>Fresh food, snacks, drinks, and everyday essentials</p>
            </div>
            <div class={styles.featureCard}>
              <Coffee size={40} />
              <h3>Fresh Coffee</h3>
              <p>Hot coffee and refreshments available all day</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection />'
      
      {/* Services Section */}
      <ServicesSection />'

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

      {/* Contact Section */}
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
