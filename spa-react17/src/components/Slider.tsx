import React, { useEffect, useRef, useState } from 'react';

type Slide = {
  src: string;
  alt: string;
  credit?: string;
  href?: string;
};

const slides: Slide[] = [
  {
    src: 'https://images.unsplash.com/photo-1720811559395-3ed8d1b16649?q=80&w=1600&auto=format&fit=crop',
    alt: 'Truck on highway at sunset',
    credit: 'Unsplash',
    href: 'https://images.unsplash.com/photo-1720811559395-3ed8d1b16649?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
];

export default function Slider() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, []);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <div className="slider">
      <div className="slider-viewport">
        {slides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            className={`slide ${i === index ? 'is-active' : ''}`}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>
      <button className="slider-btn left" onClick={prev} aria-label="Previous">‹</button>
      <button className="slider-btn right" onClick={next} aria-label="Next">›</button>
      <div className="dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? 'is-active' : ''}`}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}


