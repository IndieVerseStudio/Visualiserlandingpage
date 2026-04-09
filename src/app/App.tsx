import { motion } from 'motion/react';
import {
  Cloud,
  Code,
  Puzzle,
  Server,
  Layers,
  AlertCircle,
  Grid3x3,
  Mail,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { ProblemCard } from './components/ProblemCard';
import { DeploymentCard } from './components/DeploymentCard';
import { MetricCard } from './components/MetricCard';

const CALENDLY_LINK = "https://calendly.com/PLACEHOLDER";

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

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-bold">
          <span className="text-[#2affc0]">Indieverse</span> Studio
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#showcase" className="text-[#a0a0a0] hover:text-white transition-colors">Results</a>
          <a href="#how-it-works" className="text-[#a0a0a0] hover:text-white transition-colors">How It Works</a>
          <a href="#deploy" className="text-[#a0a0a0] hover:text-white transition-colors">Deployment</a>
          <a
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2affc0] text-[#2b2b2d] px-5 py-2 rounded-lg font-semibold hover:bg-[#35d2b8] transition-all duration-300"
          >
            Book a Demo
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20">
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
                The AI paint visualiser that handles complex exteriors, cluttered interiors, and everything your current tool can't. Photorealistic results, not simple color overlays.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2affc0] text-[#2b2b2d] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#35d2b8] transition-all duration-300 hover:scale-105 text-center"
                >
                  Book a Demo
                </a>
                <a
                  href="#showcase"
                  className="border-2 border-[#2affc0] text-[#2affc0] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[rgba(42,255,192,0.1)] transition-all duration-300 text-center"
                >
                  See Examples
                </a>
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
                <img
                  src="/images/01b_hero_exterior_villa.jpg"
                  alt="AI Paint Visualiser — before and after on a villa exterior"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="bg-black/50 px-3 py-1 rounded">Before</span>
                    <span className="bg-[#2affc0]/80 text-[#2b2b2d] px-3 py-1 rounded">After</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section id="showcase" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">See the Difference</h2>
            <p className="text-xl text-[#a0a0a0]">Real results on real buildings — exteriors and interiors</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { src: "/images/01a_hero_exterior_before_after.jpg", label: "Apartment Exterior", alt: "Apartment building before and after paint visualization" },
              { src: "/images/02a_hero_interior_before_after.jpg", label: "Living Room Interior", alt: "Living room before and after paint visualization" },
              { src: "/images/01_hero_exterior_before_after.jpg", label: "Multi-Story Building", alt: "Multi-story building before and after paint visualization" },
              { src: "/images/02c_hero_interior_bedroom.jpg", label: "Bedroom Interior", alt: "Bedroom before and after paint visualization" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#353538] rounded-xl overflow-hidden border border-[rgba(42,255,192,0.2)] hover:border-[rgba(42,255,192,0.4)] transition-all duration-300"
              >
                <div className="relative">
                  <img src={item.src} alt={item.alt} className="w-full h-auto" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="bg-black/50 px-2 py-1 rounded">Before</span>
                      <span className="bg-[#2affc0]/80 text-[#2b2b2d] px-2 py-1 rounded">After</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <p className="text-[#2affc0] font-medium">{item.label}</p>
                </div>
              </motion.div>
            ))}
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

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden border-2 border-red-500/30"
            >
              <img
                src="/images/04a_problem_bad_visualisation.jpg"
                alt="Example of a bad paint visualiser — flat color overlay that looks fake"
                className="w-full h-auto"
              />
              <div className="absolute top-4 left-4 bg-red-500/80 px-3 py-1 rounded text-sm font-medium">
                Typical "Visualiser" Result
              </div>
            </motion.div>

            <div className="grid gap-6">
              <ProblemCard
                Icon={Layers}
                title="Flat Color Overlays"
                description="Most tools paint a flat color on a detected wall. Shadows, textures, and lighting disappear. It looks fake — and your customers notice."
                delay={0}
              />
              <ProblemCard
                Icon={AlertCircle}
                title="Can't Handle Complexity"
                description="Upload a real building exterior or a room with furniture, and existing tools break down completely. Columns, trim, and facades? Forget it."
                delay={0.1}
              />
              <ProblemCard
                Icon={Grid3x3}
                title="Limited to Simple Scenes"
                description="They work on a plain white wall in a studio photo. Not on the buildings your customers actually live and work in."
                delay={0.2}
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-[#a0a0a0]">Three steps to photorealistic visualization</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Upload Any Image",
                description: "Interior, exterior, simple or complex. Our AI understands every surface — walls, trim, facades, columns — no matter how cluttered the scene.",
              },
              {
                step: "02",
                title: "Pick Your Colors",
                description: "Select from your brand's color catalog. Our AI identifies every paintable surface and lets your customers apply colors individually or in groups.",
              },
              {
                step: "03",
                title: "See It in Seconds",
                description: "Get a photorealistic preview with accurate shadows, textures, and lighting. Not a color overlay — a true visualization of how paint will actually look.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#353538] rounded-2xl p-8 relative overflow-hidden group hover:bg-[#3d3d40] transition-colors duration-300"
              >
                <div className="relative z-10">
                  <div className="text-[8rem] font-bold text-[rgba(42,255,192,0.1)] leading-none mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-[#a0a0a0] leading-relaxed">{item.description}</p>
                </div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2affc0] via-[#35d2b8] to-[#690094] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Device Mockup Section */}
      <section className="relative py-20 px-6 bg-[#232325]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Works Everywhere Your Customers Are</h2>
            <p className="text-xl text-[#a0a0a0]">Web, tablet, and mobile — fully responsive, fully branded as yours</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src="/images/05c_mockup_multi_device.jpg"
              alt="Paint Visualiser running on laptop, tablet, and mobile"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Deployment Options Section */}
      <section id="deploy" className="relative py-20 px-6">
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

      {/* Why Choose Us */}
      <section className="relative py-20 px-6 bg-[#232325]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Why Paint Companies Choose Us</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Best-in-Class Accuracy", description: "GenAI-powered surface detection that handles complex buildings, columns, trim, and facades — not just plain walls." },
              { title: "Photorealistic Results", description: "Preserves shadows, textures, and natural lighting. Your customers see how paint actually looks, not a flat overlay." },
              { title: "Exteriors That Work", description: "The only visualiser that reliably handles complex building exteriors — commercial, residential, multi-story." },
              { title: "Smart AI Features", description: "Auto-grouping of similar surfaces, AI Cleanup, and intelligent surface detection that improves with every image." },
              { title: "Your Brand, Your Product", description: "White-label ready. Load your color catalog, apply your branding, deploy on your domain. Customers never see us." },
              { title: "Production-Proven", description: "Trusted by one of India's top 3 paint companies. Millions of visualizations served across web and mobile." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-[#2affc0] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-[#a0a0a0] leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
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

      {/* Complex Exterior Showcase */}
      <section className="relative py-20 px-6 bg-[#232325]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Complex Exteriors? That's Where We Shine.</h2>
              <p className="text-xl text-[#a0a0a0] mb-6 leading-relaxed">
                Most visualisers give up on buildings with columns, arches, decorative trim, or mixed materials. Ours doesn't. Our AI identifies every paintable surface — even on the most architecturally complex buildings.
              </p>
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#2affc0] font-semibold text-lg hover:gap-3 transition-all duration-300"
              >
                See it on your buildings <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden border border-[rgba(42,255,192,0.2)]"
            >
              <img
                src="/images/03a_showcase_complex_exterior.jpg"
                alt="Complex building exterior with precise paint visualization"
                className="w-full h-auto"
              />
            </motion.div>
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
              Ready to Upgrade Your Paint Experience?
            </h2>
            <p className="text-xl mb-8 text-[#2b2b2d]">
              Book a 15-minute call. We'll show you what our AI can do on your actual buildings — free, no commitment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2b2b2d] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#1a1a1c] transition-all duration-300 hover:scale-105"
              >
                Book a Demo
              </a>
              <a
                href="mailto:hello@indieverse.studio"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" /> Email Us
              </a>
            </div>

            <p className="text-sm text-[#2b2b2d]">
              Free pilot available — 60 days, 200 visualizations, no commitment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-[rgba(255,255,255,0.1)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                <span className="text-[#2affc0]">Indieverse</span> Studio
              </h3>
              <p className="text-[#a0a0a0]">The world's most accurate AI paint visualiser</p>
              <p className="text-[#a0a0a0] mt-2">hello@indieverse.studio</p>
            </div>
            <div className="flex flex-wrap gap-6 md:justify-end items-start">
              <a href="#showcase" className="text-[#a0a0a0] hover:text-[#2affc0] transition-colors">Results</a>
              <a href="#how-it-works" className="text-[#a0a0a0] hover:text-[#2affc0] transition-colors">How It Works</a>
              <a href="#deploy" className="text-[#a0a0a0] hover:text-[#2affc0] transition-colors">Deployment</a>
              <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="text-[#a0a0a0] hover:text-[#2affc0] transition-colors">Book a Demo</a>
              <a href="https://www.indieverse.studio" target="_blank" rel="noopener noreferrer" className="text-[#a0a0a0] hover:text-[#2affc0] transition-colors">Indieverse.studio</a>
            </div>
          </div>
          <div className="text-center text-sm text-[#a0a0a0] border-t border-[rgba(255,255,255,0.1)] pt-8">
            &copy; 2026 Indieverse Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
