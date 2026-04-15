import { motion } from 'motion/react';
import { X, Check, ImageOff } from 'lucide-react';

interface ComparisonRowProps {
  feature: string;
  otherTools: string;
  ourAI: string;
  otherStatus: 'fail' | 'partial';
  otherImage?: string;
  ourImage?: string;
  delay?: number;
}

function PlaceholderImage() {
  return (
    <div className="w-full aspect-[3/2] bg-[#2b2b2d] border border-[rgba(255,255,255,0.1)] flex flex-col items-center justify-center gap-1 rounded-lg">
      <ImageOff className="w-6 h-6 text-[#555]" />
      <span className="text-[#555] text-[10px]">Coming soon</span>
    </div>
  );
}

export function ComparisonRow({ feature, otherTools, ourAI, otherStatus, otherImage, ourImage, delay = 0 }: ComparisonRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="py-6 border-b border-[rgba(255,255,255,0.08)] last:border-b-0"
    >
      {/* Desktop: 3-column row layout */}
      <div className="hidden md:grid grid-cols-[1fr_1fr_1fr] gap-6 items-start">
        {/* Feature name */}
        <div className="pt-2">
          <span className="text-white font-semibold text-lg leading-tight">{feature}</span>
        </div>

        {/* Other Tools */}
        <div>
          <div className="rounded-lg overflow-hidden border border-red-500/20 mb-2">
            {otherImage ? (
              <img src={otherImage} alt={`Other tools - ${feature}`} className="w-full aspect-[3/2] object-cover" />
            ) : (
              <PlaceholderImage />
            )}
          </div>
          <div className="flex items-start gap-1.5">
            <div className={`mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center ${
              otherStatus === 'fail' ? 'bg-red-500/20' : 'bg-yellow-500/20'
            }`}>
              {otherStatus === 'fail' ? (
                <X className="w-3 h-3 text-red-400" />
              ) : (
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              )}
            </div>
            <p className="text-[#a0a0a0] text-sm leading-relaxed">{otherTools}</p>
          </div>
        </div>

        {/* Our AI */}
        <div>
          <div className="rounded-lg overflow-hidden border border-[rgba(42,255,192,0.2)] mb-2">
            {ourImage ? (
              <img src={ourImage} alt={`Our AI - ${feature}`} className="w-full aspect-[3/2] object-cover" />
            ) : (
              <PlaceholderImage />
            )}
          </div>
          <div className="flex items-start gap-1.5">
            <div className="mt-0.5 w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center bg-[rgba(42,255,192,0.15)]">
              <Check className="w-3 h-3 text-[#2affc0]" />
            </div>
            <p className="text-white text-sm leading-relaxed">{ourAI}</p>
          </div>
        </div>
      </div>

      {/* Mobile: feature name on top, 2-column images below */}
      <div className="md:hidden">
        <h3 className="text-white font-semibold text-base mb-3">{feature}</h3>
        <div className="grid grid-cols-2 gap-3">
          {/* Other Tools */}
          <div>
            <div className="rounded-lg overflow-hidden border border-red-500/20 mb-2">
              {otherImage ? (
                <img src={otherImage} alt={`Other tools - ${feature}`} className="w-full aspect-[3/2] object-cover" />
              ) : (
                <PlaceholderImage />
              )}
            </div>
            <div className="flex items-start gap-1">
              <div className={`mt-0.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center ${
                otherStatus === 'fail' ? 'bg-red-500/20' : 'bg-yellow-500/20'
              }`}>
                {otherStatus === 'fail' ? (
                  <X className="w-2.5 h-2.5 text-red-400" />
                ) : (
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                )}
              </div>
              <p className="text-[#a0a0a0] text-xs leading-relaxed">{otherTools}</p>
            </div>
          </div>

          {/* Our AI */}
          <div>
            <div className="rounded-lg overflow-hidden border border-[rgba(42,255,192,0.2)] mb-2">
              {ourImage ? (
                <img src={ourImage} alt={`Our AI - ${feature}`} className="w-full aspect-[3/2] object-cover" />
              ) : (
                <PlaceholderImage />
              )}
            </div>
            <div className="flex items-start gap-1">
              <div className="mt-0.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center bg-[rgba(42,255,192,0.15)]">
                <Check className="w-2.5 h-2.5 text-[#2affc0]" />
              </div>
              <p className="text-white text-xs leading-relaxed">{ourAI}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
