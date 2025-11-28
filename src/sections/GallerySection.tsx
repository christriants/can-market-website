import { Gallery } from "../components/Gallery";
import styles from "./GallerySection.module.scss";

const CLOUDINARY_BASE =
  "https://res.cloudinary.com/db0tdypom/image/upload/f_auto,q_auto,w_800";

const storeImages = [
  {
    src: `${CLOUDINARY_BASE}/Attachment_2_zhs1el.jpg`,
    alt: "C.A.N. Market",
    caption: "Welcome to C.A.N. Market",
  },
  {
    src: `${CLOUDINARY_BASE}/v1764193014/can_market_front_cmhwtw`,
    alt: "C.A.N. Market Store Front",
    caption: "Welcome to C.A.N. Market",
  },
  {
    src: `${CLOUDINARY_BASE}/groceries_azfaho`,
    alt: "Store Interior",
    caption: "Fresh food and snacks available",
  },
  {
    src: `${CLOUDINARY_BASE}/chips_ytqi3g`,
    alt: "Store Interior",
    caption: "Wide variety of snacks",
  },
  {
    src: `${CLOUDINARY_BASE}/yogurt_dhbbaf`,
    alt: "Store Interior",
    caption: "Yogurts and more!",
  },
  {
    src: `${CLOUDINARY_BASE}/lotto_and_pizza_lxuyme`,
    alt: "Hot Food Section",
    caption: "Hot food and lottery tickets",
  },
  {
    src: `${CLOUDINARY_BASE}/coffee_machine_hlctqh`,
    alt: "Coffee Station",
    caption: "Fresh coffee all day",
  },
  {
    src: `${CLOUDINARY_BASE}/coffee_w6iwee`,
    alt: "Coffee Station",
    caption: "Fresh coffee all day",
  },
  {
    src: `${CLOUDINARY_BASE}/drinks_gomjmi`,
    alt: "Refrigerated Section",
    caption: "Cold drinks and refreshments",
  },
  {
    src: `${CLOUDINARY_BASE}/ice_cream_and_slushee_loec4s`,
    alt: "Ice cream Section",
    caption: "Ice cream and slushies",
  },
  {
    src: `${CLOUDINARY_BASE}/supplies_kgrixi`,
    alt: "Household Supplies Section",
    caption: "Household supplies and essentials",
  },
  {
    src: `${CLOUDINARY_BASE}/car_supplies_jl28bq`,
    alt: "Car Supplies Section",
    caption: "Car supplies and accessories",
  },
];

export const GallerySection = () => {
  return (
    <section id="gallery" className={styles.gallerySection}>
      <div className={styles.container}>
        <h2>Inside Our Store</h2>
        <p className={styles.subtitle}>
          Take a look inside C.A.N. Market and see what we have to offer
        </p>
        <Gallery images={storeImages} />
      </div>
    </section>
  );
};
