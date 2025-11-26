import { useState, useEffect } from 'preact/hooks';
import { ChevronLeft, ChevronRight } from 'lucide-preact';
import styles from './Gallery.module.scss';

interface GalleryProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
}

export const Gallery = ({ images }: GalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselContainer}>
        <div 
          className={styles.carouselTrack}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className={styles.carouselSlide}>
              <img src={image.src} alt={image.alt} />
              {image.caption && (
                <div className={styles.caption}>{image.caption}</div>
              )}
            </div>
          ))}
        </div>

        <button
          className={`${styles.navBtn} ${styles.prevBtn}`}
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          <ChevronLeft size={32} />
        </button>

        <button
          className={`${styles.navBtn} ${styles.nextBtn}`}
          onClick={goToNext}
          aria-label="Next image"
        >
          <ChevronRight size={32} />
        </button>

        <div className={styles.counter}>
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      <div className={styles.indicators}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className={styles.thumbnails}>
        {images.map((image, index) => (
          <button
            key={index}
            className={`${styles.thumbnail} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
          >
            <img src={image.src} alt={`Thumbnail ${index + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
};
