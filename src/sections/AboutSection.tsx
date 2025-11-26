import { Star } from "lucide-preact";
import styles from "./AboutSection.module.scss";

export const AboutSection = () => {
  return (
    <section id="about" class={styles.about}>
      <div class={styles.containerSmall}>
        <h2>About C.A.N. MARKET</h2>
        <p>
          <strong>Proudly family-owned and operated</strong>, we're dedicated to
          serving our Long Beach community with quality products and friendly
          service. Whether you're filling up your tank, grabbing a quick snack,
          or picking up essentials, C.A.N. MARKET is here for you.
        </p>
        <div class={styles.rating}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} fill="currentColor" />
          ))}
          <span>5-Star Service</span>
        </div>
      </div>
    </section>
  );
};
