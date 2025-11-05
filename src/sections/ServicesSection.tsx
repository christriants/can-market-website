import { ServiceCard } from "../components/ServiceCard";
import styles from "./ServicesSection.module.scss";

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
