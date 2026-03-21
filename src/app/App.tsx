import { motion } from 'motion/react';
import { 
  Upload, 
  Palette, 
  Zap, 
  Cloud, 
  Code, 
  Puzzle, 
  Server,
  Layers,
  AlertCircle,
  Grid3x3
} from 'lucide-react';
import { BeforeAfterCard } from './components/BeforeAfterCard';
import { ProblemCard } from './components/ProblemCard';
import { StepCard } from './components/StepCard';
import { DeploymentCard } from './components/DeploymentCard';
import { MetricCard } from './components/MetricCard';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  return (
    <div className="bg-[#2b2b2d] text-white min-h-screen">
      {/* Decorative Background Pattern */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2affc0" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#35d2b8" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#690094" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M -100 300 Q 250 100 600 300 T 1200 300 T 1800 300 T 2400 300"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M -100 500 Q 350 300 700 500 T 1300 500 T 1900 500 T 2500 500"
            stroke="#35d2b8"
            strokeWidth="1.5"
            fill="none"
            opacity="0.2"
          />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                See Paint on Any Building Before a Single Brushstroke
              </h1>
              <p className="text-xl text-[#a0a0a0] mb-8 leading-relaxed">
                The AI paint visualiser that handles complex exteriors, cluttered interiors, and everything your current tool can't.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-[#2affc0] text-[#2b2b2d] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#35d2b8] transition-all duration-300 hover:scale-105">
                  Try It On Your Building
                </button>
                <button className="border-2 border-[#2affc0] text-[#2affc0] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[rgba(42,255,192,0.1)] transition-all duration-300">
                  Book a Demo
                </button>
              </div>

              <p className="text-sm text-[#a0a0a0]">
                Trusted by one of India's top 3 paint brands | Millions of visualizations served
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-[rgba(42,255,192,0.3)] shadow-2xl">
                <BeforeAfterCard
                  beforeImage="https://images.unsplash.com/photo-1770319566939-710a8306eba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGZhY2FkZSUyMGFyY2hpdGVjdHVyZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc3NDExOTU2MHww&ixlib=rb-4.1.0&q=80&w=1080"
                  afterImage="https://images.unsplash.com/photo-1763058796629-453816d7379a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHBhaW50ZWQlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc3NDExOTU2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                  label="Hero Example"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">See the Difference</h2>
            <p className="text-xl text-[#a0a0a0]">Real results on real buildings</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <BeforeAfterCard
              beforeImage="https://images.unsplash.com/photo-1770319566939-710a8306eba7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGZhY2FkZSUyMGFyY2hpdGVjdHVyZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc3NDExOTU2MHww&ixlib=rb-4.1.0&q=80&w=1080"
              afterImage="https://images.unsplash.com/photo-1763058796629-453816d7379a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHBhaW50ZWQlMjBidWlsZGluZyUyMGV4dGVyaW9yfGVufDF8fHx8MTc3NDExOTU2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
              label="Complex Exterior"
            />
            <BeforeAfterCard
              beforeImage="https://images.unsplash.com/photo-1687180498602-5a1046defaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMHJvb20lMjBmdXJuaXR1cmUlMjBkZXNpZ258ZW58MXx8fHwxNzc0MTE5NTYxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              afterImage="https://images.unsplash.com/photo-1687180498602-5a1046defaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMHJvb20lMjBmdXJuaXR1cmUlMjBkZXNpZ258ZW58MXx8fHwxNzc0MTE5NTYxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              label="Cluttered Interior"
            />
            <BeforeAfterCard
              beforeImage="https://images.unsplash.com/photo-1760072513403-d70003481414?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwc2hvd3Jvb20lMjByZXRhaWwlMjBzcGFjZXxlbnwxfHx8fDE3NzQxMTk1NjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              afterImage="https://images.unsplash.com/photo-1760072513403-d70003481414?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwc2hvd3Jvb20lMjByZXRhaWwlMjBzcGFjZXxlbnwxfHx8fDE3NzQxMTk1NjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              label="Commercial Space"
            />
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="relative py-20 px-6 bg-[#232325]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Why Most Paint Visualisers Fail</h2>
            <p className="text-xl text-[#a0a0a0]">The truth about existing tools</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProblemCard
              Icon={Layers}
              title="Flat Color Overlays"
              description="Most tools paint a flat color on a detected wall. Shadows, textures, and lighting disappear. It looks fake."
              delay={0}
            />
            <ProblemCard
              Icon={AlertCircle}
              title="Can't Handle Complexity"
              description="Upload a real building exterior or a room with furniture, and existing tools break down completely."
              delay={0.1}
            />
            <ProblemCard
              Icon={Grid3x3}
              title="Limited to Simple Scenes"
              description="They work on a plain white wall in a studio photo. Not on the buildings your customers actually live in."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">3 Steps to Photorealistic Visualization</h2>
            <p className="text-xl text-[#a0a0a0]">Simple process, stunning results</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <StepCard
              stepNumber="01"
              title="Upload Any Image"
              description="Interior, exterior, simple or complex. Our AI understands every surface in the image — walls, trim, facades, columns — no matter how cluttered the scene."
              image="https://images.unsplash.com/photo-1640419238789-85f92c946cb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBidWlsZGluZyUyMHVyYmFuJTIwZmFjYWRlfGVufDF8fHx8MTc3NDExOTU2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
              delay={0}
            />
            <StepCard
              stepNumber="02"
              title="Pick Your Colors"
              description="Select from your brand's color catalog. Our AI identifies every paintable surface and lets your customer apply colors individually or in groups."
              image="https://images.unsplash.com/photo-1687180498602-5a1046defaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMHJvb20lMjBmdXJuaXR1cmUlMjBkZXNpZ258ZW58MXx8fHwxNzc0MTE5NTYxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              delay={0.1}
            />
            <StepCard
              stepNumber="03"
              title="See It in Seconds"
              description="Get a photorealistic preview with accurate shadows, textures, and lighting. Not a color overlay — a true visualization of how paint will actually look."
              image="https://images.unsplash.com/photo-1773558048595-0eb9c121f119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGhvbWUlMjBleHRlcmlvciUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzQxMTk1NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Deployment Options Section */}
      <section className="relative py-20 px-6 bg-[#232325]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Built to Fit Your Stack</h2>
            <p className="text-xl text-[#a0a0a0]">Deploy however you need</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <DeploymentCard
              Icon={Cloud}
              title="SaaS Platform"
              description="Ready to use, your brand colors loaded"
              delay={0}
            />
            <DeploymentCard
              Icon={Puzzle}
              title="White-Label SDK"
              description="Embed in your app or website, fully branded as yours"
              delay={0.1}
            />
            <DeploymentCard
              Icon={Code}
              title="API Integration"
              description="Plug into your existing tools and workflows"
              delay={0.2}
            />
            <DeploymentCard
              Icon={Server}
              title="On-Premise"
              description="Runs on your infrastructure for full data control"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <blockquote className="text-3xl lg:text-4xl font-semibold mb-12 leading-relaxed max-w-4xl mx-auto">
              "Trusted by one of India's top 3 paint companies, serving millions of users across web and mobile."
            </blockquote>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-center items-center divide-y md:divide-y-0 md:divide-x divide-[rgba(255,255,255,0.1)]">
            <MetricCard value="10M+" label="Visualizations" delay={0} />
            <MetricCard value="99.5%" label="Uptime" delay={0.1} />
            <MetricCard value="< 5s" label="Generation Time" delay={0.2} />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2affc0] via-[#35d2b8] to-[#690094] opacity-90" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-[#2b2b2d]">
              See It On Your Buildings
            </h2>
            <p className="text-xl mb-8 text-[#2b2b2d]">
              Upload a photo of any building. We'll show you what your paint looks like on it — free.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button className="bg-[#2b2b2d] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1a1a1c] transition-all duration-300 hover:scale-105">
                Try the Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300">
                Book a Call
              </button>
            </div>

            <p className="text-sm text-[#2b2b2d]">
              Free pilot available — 60 days, 200 visualizations, no commitment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-[rgba(255,255,255,0.1)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Indieverse Studio</h3>
              <p className="text-[#a0a0a0]">visualiser.indieverse.studio</p>
              <p className="text-[#a0a0a0]">hello@indieverse.studio</p>
            </div>
            <div className="flex flex-wrap gap-6 md:justify-end items-start">
              <a href="#" className="text-[#a0a0a0] hover:text-[#2affc0] transition-colors">Product</a>
              <a href="#" className="text-[#a0a0a0] hover:text-[#2affc0] transition-colors">Pricing</a>
              <a href="#" className="text-[#a0a0a0] hover:text-[#2affc0] transition-colors">Contact</a>
              <a href="#" className="text-[#a0a0a0] hover:text-[#2affc0] transition-colors">Privacy</a>
            </div>
          </div>
          <div className="text-center text-sm text-[#a0a0a0] border-t border-[rgba(255,255,255,0.1)] pt-8">
            © 2026 Indieverse Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
