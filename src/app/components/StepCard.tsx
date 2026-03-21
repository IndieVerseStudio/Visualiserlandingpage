import { motion } from 'motion/react';

interface StepCardProps {
  stepNumber: string;
  title: string;
  description: string;
  image: string;
  delay?: number;
}

export function StepCard({ stepNumber, title, description, image, delay = 0 }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-[#353538] rounded-2xl p-8 relative overflow-hidden group hover:bg-[#3d3d40] transition-colors duration-300"
    >
      <div className="relative z-10">
        <div className="text-[8rem] font-bold text-[rgba(42,255,192,0.1)] leading-none mb-4">
          {stepNumber}
        </div>
        <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
        <p className="text-[#a0a0a0] leading-relaxed mb-6">{description}</p>
        <div className="rounded-xl overflow-hidden aspect-video">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </div>
      
      {/* Hover gradient effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2affc0] via-[#35d2b8] to-[#690094] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}
