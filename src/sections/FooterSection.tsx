import { ShoppingBag } from "lucide-preact";
import styles from "./FooterSection.module.scss";

export const FooterSection = () => {
  return (
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
  );
};
