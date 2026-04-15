import { motion } from 'motion/react';

interface MetricCardProps {
  value: string;
  label: string;
  delay?: number;
}

export function MetricCard({ value, label, delay = 0 }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center px-4 md:px-8 py-4"
    >
      <div className="text-3xl md:text-5xl font-bold text-[#2affc0] mb-2">{value}</div>
      <div className="text-sm md:text-base text-[#a0a0a0]">{label}</div>
    </motion.div>
  );
}
