import { useState, useEffect } from "preact/hooks";
import {
  MapPin,
  Phone,
  Clock,
  Fuel,
  ShoppingBag,
  Coffee,
  Star,
} from "lucide-preact";
import styles from "./App.module.scss";

export function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    "Premium Gasoline",
    "Diesel Fuel",
    "Snacks & Beverages",
    "Fresh Food",
    "Coffee & Tea",
    "Lottery Tickets",
    "ATM Services",
    "Car Accessories",
  ];

  return (
    <div class={styles.app}>
      {/* SEO Content */}
      <div class={styles.seoHidden}>
        <h1>CAN Market - Your Local Mobil Gas Station & Convenience Store</h1>
        <p>
          Quality fuel, fresh food, and everyday essentials at CAN Market. Visit
          our Mobil station for gas, snacks, beverages, and more.
        </p>
      </div>

      {/* Header */}
      <header class={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div class={styles.headerContent}>
          <div class={styles.logo}>
            <div class={styles.logoIcon}>
              <ShoppingBag size={24} />
            </div>
            <div>
              <h2 class={styles.logoTitle}>CAN Market</h2>
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
              Welcome to <span>CAN Market</span>
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

      {/* About Section */}
      <section id="about" class={styles.about}>
        <div class={styles.containerSmall}>
          <h2>About CAN Market</h2>
          <p>
            We're proud to serve our community with quality products and
            friendly service. Whether you're filling up your tank, grabbing a
            quick snack, or picking up essentials, CAN Market is here for you.
          </p>
          <div class={styles.rating}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} fill="currentColor" />
            ))}
            <span>5-Star Service</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" class={styles.services}>
        <div class={styles.container}>
          <h2>What We Offer</h2>
          <div class={styles.servicesGrid}>
            {services.map((service, idx) => (
              <div key={idx} class={styles.serviceCard}>
                <div class={styles.serviceIcon}>
                  <div></div>
                </div>
                <h3>{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" class={styles.contact}>
        <div class={styles.containerSmall}>
          <h2>Visit Us Today</h2>
          <div class={styles.contactGrid}>
            <div class={styles.contactInfo}>
              <div class={styles.contactItem}>
                <MapPin size={24} />
                <div>
                  <h3>Location</h3>
                  <p>
                    390 W Park Ave
                    <br />
                    Long Beach, NY 11561
                  </p>
                </div>
              </div>
              <div class={styles.contactItem}>
                <Phone size={24} />
                <div>
                  <h3>Phone</h3>
                  <p>(516) 432-6581</p>
                </div>
              </div>
              <div class={styles.contactItem}>
                <Clock size={24} />
                <div>
                  <h3>Open 24 Hours</h3>
                </div>
              </div>
            </div>
            <div class={styles.mapPlaceholder}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.2!2d-73.6608!3d40.5886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDM1JzE5LjAiTiA3M8KwMzknMzkuNyJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "0.5rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CAN Market Location"
              ></iframe>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=390+West+Park+Ave,+Long+Beach,+NY+11561"
                target="_blank"
                rel="noopener noreferrer"
                class={styles.directionsButton}
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class={styles.footer}>
        <div class={styles.container}>
          <div class={styles.footerLogo}>
            <div class={styles.footerIcon}>
              <ShoppingBag size={18} />
            </div>
            <span>CAN Market</span>
          </div>
          <p class={styles.footerText}>
            Your Local Mobil Gas Station & Convenience Store
          </p>
          <p class={styles.footerCopyright}>
            © 2025 CAN Market. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
