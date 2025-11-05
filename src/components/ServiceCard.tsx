import styles from './ServiceCard.module.scss';

type ServiceCardProps = {
    service: string;
    idx: number;
}

export const ServiceCard = ({
    service,
    idx,
}: ServiceCardProps) => {
  return (
    <div key={idx} class={styles.serviceCard}>
      <div class={styles.serviceIcon}>
        <div></div>
      </div>
      <h3>{service}</h3>
    </div>
  );
};
