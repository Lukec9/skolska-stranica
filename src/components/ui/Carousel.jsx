import React, { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./Carousel.css";

export function Carousel({ children, options = {} }) {
  const autoplayRef = useRef(
    options.duration
      ? Autoplay({ delay: options.duration * 1000, stopOnInteraction: false })
      : null,
  );

  const carouselOptions = {
    ...options,
    duration: 30,
  };

  const plugins = autoplayRef.current ? [autoplayRef.current] : [];

  const [emblaRef, emblaApi] = useEmblaCarousel(carouselOptions, plugins);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      if (autoplayRef.current) autoplayRef.current.reset();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      if (autoplayRef.current) autoplayRef.current.reset();
    }
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="carousel">
      <div className="carousel-viewport" ref={emblaRef}>
        <div className="carousel-container">{children}</div>
      </div>
      {canScrollPrev && (
        <button
          className="carousel-button carousel-button-prev"
          onClick={scrollPrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
      )}
      {canScrollNext && (
        <button
          className="carousel-button carousel-button-next"
          onClick={scrollNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      )}
      <div className="carousel-dots">
        {Array.from({ length: emblaApi?.scrollSnapList().length || 0 }).map(
          (_, index) => (
            <button
              key={index}
              className={`carousel-dot ${
                index === selectedIndex ? "carousel-dot-active" : ""
              }`}
              onClick={() => {
                emblaApi?.scrollTo(index);
                if (autoplayRef.current) autoplayRef.current.reset();
              }}
            />
          ),
        )}
      </div>
    </div>
  );
}

export function CarouselItem({ children, className = "" }) {
  return <div className={`carousel-item ${className}`}>{children}</div>;
}
