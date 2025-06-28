"use client";

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export default function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const carouselRef = useRef(null);

  const handleSwipe = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left - go to next image
      const isLastImage = currentIndex === images.length - 1;
      const newIndex = isLastImage ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    } else if (touchEndX.current - touchStartX.current > 50) {
      // Swipe right - go to previous image
      const isFirstImage = currentIndex === 0;
      const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    }
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  // Mouse events for desktop
  const handleMouseDown = (e) => {
    touchStartX.current = e.clientX;
    carouselRef.current.style.cursor = 'grabbing';
  };

  const handleMouseUp = (e) => {
    touchEndX.current = e.clientX;
    carouselRef.current.style.cursor = 'grab';
    handleSwipe();
  };

  // Prevent dragging images
  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.style.cursor = 'grab';
    }
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div 
        ref={carouselRef}
        className="relative h-[250px] w-full rounded-md overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onDragStart={preventDragHandler}
      >
        <Image 
          src={images[currentIndex]} 
          alt={`Project image ${currentIndex + 1}`} 
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          draggable="false"
        />
      </div>
      
      {/* Dots indicator */}
      <div className="mt-3">
        <div className="flex items-center justify-center gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? 'w-5 bg-[#8B5CF6]' : 'w-2 bg-[#8B5CF6]/40'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
