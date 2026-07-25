import { useEffect, useRef, useState } from "react";
import { imageUrl, siteText, store } from "@/content";

const SLIDE_MS = 3500;
const TRANSITION_MS = 700;

export const HeroCarousel = () => {
  const images = siteText.hero.images;
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const paused = useRef(false);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      if (!paused.current) setIndex((i) => Math.min(i + 1, images.length));
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, [images.length]);

  // The track ends with a clone of the first slide; once we've slid onto it,
  // snap back (without animating) to the real first slide so the loop is seamless.
  useEffect(() => {
    if (index < images.length) return;
    const id = setTimeout(() => {
      setAnimate(false);
      setIndex(0);
    }, TRANSITION_MS);
    return () => clearTimeout(id);
  }, [index, images.length]);

  useEffect(() => {
    if (animate) return;
    const id = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(id);
  }, [animate]);

  const slides = images.length > 1 ? [...images, images[0]] : images;

  return (
    <div
      className="aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden bg-gradient-to-b from-secondary to-background"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
    >
      <div
        className={`flex h-full ${animate ? "transition-transform ease-in-out motion-reduce:transition-none" : ""}`}
        style={{ transform: `translateX(-${index * 100}%)`, transitionDuration: `${TRANSITION_MS}ms` }}
      >
        {slides.map((img, i) => (
          <div
            key={`${img}-${i}`}
            className="h-full w-full flex-shrink-0 flex items-center justify-center p-6 md:p-10"
          >
            <img
              src={imageUrl(img)}
              alt={i === 0 ? `Apple products at ${store.storeName}` : ""}
              width={1024}
              height={1024}
              loading={i === 0 ? "eager" : "lazy"}
              className="max-h-full max-w-full object-contain drop-shadow-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
