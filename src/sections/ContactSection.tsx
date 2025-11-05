import { Clock, MapPin, Phone } from "lucide-preact";
import { Map } from "../components/Map";
import styles from "./ContactSection.module.scss";

const strings = {
    visitUsToday: "Visit Us Today",
    locationTitle: "Location",
    locationAddressLine1: "390 W Park Ave",
    locationAddressLine2: "Long Beach, NY 11561",
    phoneTitle: "Phone",
    phoneNumber: "(516) 432-6581",
    openHoursTitle: "Open 24 Hours",
}

export const ContactSection = () => {
    return (
        <section id="contact" class={styles.contact}>
        <div class={styles.containerSmall}>
          <h2>{strings.visitUsToday}</h2>
          <div class={styles.contactGrid}>
            <div class={styles.contactInfo}>
              <div class={styles.contactItem}>
                <MapPin size={24} />
                <div>
                  <h3>{strings.locationTitle}</h3>
                  <p>
                    {strings.locationAddressLine1}
                    <br />
                    {strings.locationAddressLine2}
                  </p>
                </div>
              </div>
              <div class={styles.contactItem}>
                <Phone size={24} />
                <div>
                  <h3>{strings.phoneTitle}</h3>
                  <p>{strings.phoneNumber}</p>
                </div>
              </div>
              <div class={styles.contactItem}>
                <Clock size={24} />
                <div>
                  <h3>{strings.openHoursTitle}</h3>
                </div>
              </div>
            </div>
            <Map />
          </div>
        </div>
      </section>
    )
}
