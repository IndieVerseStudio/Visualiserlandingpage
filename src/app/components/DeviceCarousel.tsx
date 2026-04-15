import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Slide {
  image: string;
  label: string;
}

const slides: Slide[] = [
  { image: '/images/device_mockup_desktop.jpg', label: 'Desktop' },
  { image: '/images/device_mockup_tablet.jpg', label: 'Tablet' },
  { image: '/images/06c_mockup_mobile_three_screens.jpg', label: 'Mobile' },
];

const AUTO_ROTATE_INTERVAL = 4000;

export function DeviceCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTO_ROTATE_INTERVAL);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
    resetTimer();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swipe left - next
        setDirection(1);
        setCurrent((prev) => (prev + 1) % slides.length);
      } else {
        // Swipe right - prev
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      }
      resetTimer();
    }
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <div className="relative">
      {/* Image container */}
      <div
        className="relative rounded-2xl overflow-hidden aspect-[16/9]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={current}
            src={slides[current].image}
            alt={`Paint Visualiser on ${slides[current].label}`}
            className="absolute inset-0 w-full h-full object-cover"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          />
        </AnimatePresence>
      </div>

      {/* Dots + labels */}
      <div className="flex justify-center gap-6 mt-6">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className="flex flex-col items-center gap-2 group"
          >
            <div
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === current
                  ? 'bg-[#2affc0] scale-125'
                  : 'bg-[#555] group-hover:bg-[#888]'
              }`}
            />
            <span
              className={`text-xs md:text-sm transition-colors duration-300 ${
                index === current ? 'text-[#2affc0]' : 'text-[#666] group-hover:text-[#888]'
              }`}
            >
              {slide.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
