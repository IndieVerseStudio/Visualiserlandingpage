import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ProblemCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function ProblemCard({ Icon, title, description, delay = 0 }: ProblemCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-[#353538] p-8 rounded-2xl"
    >
      <div className="mb-4">
        <div className="w-12 h-12 rounded-lg bg-[rgba(42,255,192,0.1)] flex items-center justify-center">
          <Icon className="w-6 h-6 text-[#2affc0]" />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-[#a0a0a0] leading-relaxed">{description}</p>
    </motion.div>
  );
}
