import styles from "./SEOContent.module.scss";

export const SEOContent = () => {
  return (
    <div className={styles.seoHidden}>
      <h1>
        C.A.N. MARKET - 24/7 Convenience Store & Mobil Gas Station in Long
        Beach, NY
      </h1>
      <p>
        Family-owned C.A.N. MARKET at 390 W Park Ave, Long Beach, NY offers cold
        beer, wine, fresh food, hot coffee, snacks, household essentials, clean
        bathrooms, lottery tickets, ATM services, and premium Mobil fuel. Open
        24 hours a day, 7 days a week.
      </p>
      <h2>Services</h2>
      <ul>
        <li>Cold Beer & Wine Selection</li>
        <li>Fresh Food & Hot Sandwiches</li>
        <li>Hot Coffee & Beverages</li>
        <li>Snacks & Household Essentials</li>
        <li>Clean Public Bathrooms</li>
        <li>Premium Mobil Gasoline & Diesel</li>
        <li>ATM & Lottery Tickets</li>
      </ul>
      <h2>Location</h2>
      <p>
        Located at 390 W Park Ave, Long Beach, NY 11561. Serving Long Beach,
        East Rockaway, Oceanside, and surrounding communities.
      </p>
    </div>
  );
};
