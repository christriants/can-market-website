import { ShoppingBag, Coffee, Beer } from "lucide-preact";
import styles from "./HeroSection.module.scss";

export const HeroSection = () => {
    return (
        <section class={styles.hero}>
        <div class={styles.heroBackground}>
          <img 
            src="https://res.cloudinary.com/db0tdypom/image/upload/f_auto,q_auto,w_1920/screenshot_2025-11-28_at_9.53.45_AM_pw84l6.png" 
            alt="C.A.N. Market at night"
            class={styles.heroImage}
          />
          <div class={styles.heroOverlay}></div>
        </div>
        
          <div class={styles.container}>
            <div class={styles.heroContent}>
              <div class={styles.neonSign}>
                <span class={styles.neonText}>OPEN</span>
                <span class={styles.neonSubtext}>24/7</span>
              </div>
              <h1 class={styles.heroTitle}>
                Welcome to <span>C.A.N. MARKET</span>
              </h1>
              <p class={styles.heroSubtitle}>
                Your neighborhood family-owned convenience store offering fresh
                food, cold beer, hot coffee, and everything you need on the go.
              </p>
            </div>

            <div class={styles.features}>
              <div class={styles.featureCard}>
                <ShoppingBag size={40} />
                <h3>Fresh Food & Snacks</h3>
                <p>Hot food, fresh sandwiches, and all your favorite snacks</p>
              </div>
              <div class={styles.featureCard}>
                <Beer size={40} />
                <h3>Cold Beer & Drinks</h3>
                <p>Wide selection of beer and cold beverages</p>
              </div>
              <div class={styles.featureCard}>
                <Coffee size={40} />
                <h3>Fresh Coffee</h3>
                <p>Hot coffee and refreshments available all day</p>
              </div>
            </div>
          </div>
        </section>
    )
}
