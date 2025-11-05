import styles from "./Map.module.scss";

export const Map = () => {
  return (
    <div class={styles.mapPlaceholder}>
      <iframe
        src="https://maps.google.com/maps?q=390+West+Park+Ave,+Long+Beach,+NY+11561&output=embed"        width="100%"
        height="300"
        style={{ border: 0, borderRadius: "0.5rem" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="CAN Market Location"
      ></iframe>
      <a
        href="https://www.google.com/maps/dir/?api=1&destination=390+W+Park+Ave,+Long+Beach,+NY+11561"
        target="_blank"
        rel="noopener noreferrer"
        class={styles.directionsButton}
      >
        Get Directions
      </a>
    </div>
  );
};
