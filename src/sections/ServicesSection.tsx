import { ServiceCard } from "../components/ServiceCard";
import styles from "./ServicesSection.module.scss";

const services = [
  "Fresh Food & Snacks",
  "Cold Beer & Drinks",
  "Coffee & Tea",
  "Hot Food",
  "Free Air",
  "Household Essentials",
  "Clean Bathrooms",
  "Lottery Tickets",
  "ATM Services",
  "Premium Gasoline",
];

export const ServicesSection = () => {
  return (
    <section id="services" class={styles.services}>
      <div class={styles.container}>
        <h2>What We Offer</h2>
        <div class={styles.servicesGrid}>
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};