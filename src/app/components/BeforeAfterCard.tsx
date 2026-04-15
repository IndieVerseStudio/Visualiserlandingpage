import { useState } from 'react';
import { motion } from 'motion/react';

interface BeforeAfterCardProps {
  beforeImage: string;
  afterImage: string;
  label: string;
}

export function BeforeAfterCard({ beforeImage, afterImage, label }: BeforeAfterCardProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#353538] rounded-xl overflow-hidden border border-[rgba(42,255,192,0.2)] hover:border-[rgba(42,255,192,0.4)] transition-all duration-300"
    >
      <div
        className="relative aspect-[4/3] cursor-ew-resize select-none"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Bottom Layer) */}
        <div className="absolute inset-0">
          <img src={afterImage} alt="After" className="w-full h-full object-cover" />
          <div className="absolute top-4 right-4 text-white text-sm font-medium bg-black/50 px-3 py-1 rounded">
            After
          </div>
        </div>

        {/* Before Image (Top Layer with Clip) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img src={beforeImage} alt="Before" className="w-full h-full object-cover" />
          <div className="absolute top-4 left-4 text-white text-sm font-medium bg-black/50 px-3 py-1 rounded">
            Before
          </div>
        </div>

        {/* Slider Line and Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg cursor-ew-resize">
            <svg className="w-5 h-5 text-[#2b2b2d]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 8l-4 4 4 4m-6-8l-4 4 4 4" />
            </svg>
          </div>
        </div>
      </div>

      {label && (
        <div className="p-4 text-center">
          <p className="text-[#2affc0] font-medium">{label}</p>
        </div>
      )}
    </motion.div>
  );
}
