import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface DeploymentCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function DeploymentCard({ Icon, title, description, delay = 0 }: DeploymentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-[#353538] p-6 rounded-2xl border border-[rgba(42,255,192,0.15)] hover:border-[rgba(42,255,192,0.4)] transition-all duration-300 group relative overflow-hidden"
    >
      <div className="relative z-10">
        <div className="mb-4">
          <Icon className="w-8 h-8 text-[#2affc0]" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-[#a0a0a0]">{description}</p>
      </div>
      
      {/* Top gradient border on hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2affc0] via-[#35d2b8] to-[#690094] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}
