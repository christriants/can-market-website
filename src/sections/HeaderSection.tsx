import styles from "./HeaderSection.module.scss";

interface HeaderSectionProps {
    scrolled: boolean;
}

export const HeaderSection = ({ scrolled }: HeaderSectionProps) => {
    const scrolledClassName = scrolled ? styles.scrolled : "";

    return (
        <header class={`${styles.header} ${scrolledClassName}`}>
        <div class={styles.headerContent}>
          <a href="#" class={styles.logo}>
            <img
              src="logo.png"
              alt="C.A.N. MARKET"
              class={styles.logoImage}
            />
          </a>
          <nav class={styles.nav}>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>
    );
}
