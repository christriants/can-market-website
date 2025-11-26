import { ShoppingBag } from "lucide-preact";
import styles from "./HeaderSection.module.scss";

interface HeaderSectionProps {
    scrolled: boolean;
}

export const HeaderSection = ({ scrolled }: HeaderSectionProps) => {
    const scrolledClassName = scrolled ? styles.scrolled : "";

    return (
        <header class={`${styles.header} ${scrolledClassName}`}>
        <div class={styles.headerContent}>
          <div class={styles.logo}>
            <div class={styles.logoIcon}>
              <ShoppingBag size={24} />
            </div>
            <div>
              <h2 class={`${styles.logoTitle} ${scrolledClassName}`}>C.A.N. MARKET</h2>
              <p class={`${styles.logoSubtitle} ${scrolledClassName}`}>Mobil Gas Station</p>
            </div>
          </div>
          <nav class={styles.nav}>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>
    );
}
