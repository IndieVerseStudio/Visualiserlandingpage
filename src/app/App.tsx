import { motion } from 'motion/react';
import {
  Cloud,
  Code,
  Puzzle,
  Server,
  Mail,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { BeforeAfterCard } from './components/BeforeAfterCard';
import { ComparisonRow } from './components/ComparisonRow';
import { DeploymentCard } from './components/DeploymentCard';
import { MetricCard } from './components/MetricCard';
import { DeviceCarousel } from './components/DeviceCarousel';

const CALENDLY_LINK = "https://calendly.com/prakhar-29/30min";

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
        <a href="https://www.indieverse.studio" target="_blank" rel="noopener noreferrer">
          <img src="/images/indieverse-logo-full.png" alt="Indieverse Studio" className="h-8 md:h-10" />
        </a>
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
        <a
          href={CALENDLY_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden bg-[#2affc0] text-[#2b2b2d] px-4 py-2 rounded-lg font-semibold text-sm hover:bg-[#35d2b8] transition-all duration-300"
        >
          Book a Demo
        </a>
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
                A Paint Visualiser for Real Buildings
              </h1>
              <p className="text-xl text-[#a0a0a0] mb-8 leading-relaxed">
                Built for the images your customers actually upload - complex exteriors, mixed materials, and imperfect conditions. Delivers accurate, true-to-life results instead of flat overlays.
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
                  See Results
                </a>
              </div>

              <p className="text-sm text-[#a0a0a0]">
                The world's most accurate paint visualiser powered by GenAI
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden border-2 border-[rgba(42,255,192,0.3)] shadow-2xl">
                <BeforeAfterCard
                  beforeImage="/images/01b_hero_villa_v3_before.jpg"
                  afterImage="/images/01b_hero_villa_v3_after.jpg"
                  label=""
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section id="showcase" className="relative py-20 px-6 bg-[#232325]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Accurate Results Across Any Surface</h2>
            <p className="text-xl text-[#a0a0a0]">From interiors to multi-story exteriors, every result reflects how the space would look after painting - with lighting, texture, and depth preserved.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <BeforeAfterCard
              beforeImage="/images/01d_commercial_building_v2_before.jpg"
              afterImage="/images/01d_commercial_building_v2_after.jpg"
              label="Commercial Building"
            />
            <BeforeAfterCard
              beforeImage="/images/02a_hero_interior_before_after_before.jpg"
              afterImage="/images/02a_hero_interior_before_after_after.jpg"
              label="Living Room Interior"
            />
            <BeforeAfterCard
              beforeImage="/images/01_hero_exterior_before_after_before.jpg"
              afterImage="/images/01_hero_exterior_before_after_after.jpg"
              label="Multi-Story Building"
            />
            <BeforeAfterCard
              beforeImage="/images/02c_hero_interior_bedroom_before.jpg"
              afterImage="/images/02c_hero_interior_bedroom_after.jpg"
              label="Bedroom Interior"
            />
          </div>
        </div>
      </section>

      {/* Complex Exterior Showcase */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Built for Complex Exteriors</h2>
              <p className="text-xl text-[#a0a0a0] mb-6 leading-relaxed">
                Most visualisers perform well only on simple, clean walls. In practice, customer images are far more complex - with architectural details, shadows, obstructions, and multiple materials. This system is designed specifically for those conditions. It identifies all paintable surfaces across the structure and maintains accuracy even in dense, visually complex scenes.
              </p>
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#2affc0] font-semibold text-lg hover:gap-3 transition-all duration-300"
              >
                See it in action <ArrowRight className="w-5 h-5" />
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

      {/* Comparison Section */}
      <section className="relative py-20 px-6 bg-[#232325]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Where Standard Visualisers Fall Short</h2>
            <p className="text-xl text-[#a0a0a0]">A direct comparison across common real-world scenarios</p>
          </motion.div>

          {/* Column headers - desktop */}
          <div className="hidden md:grid grid-cols-[1fr_1fr_1fr] gap-6 pb-4 border-b border-[rgba(255,255,255,0.15)]">
            <div />
            <div>
              <span className="text-red-400 font-semibold text-base tracking-wide">Other Visualisers</span>
            </div>
            <div>
              <span className="text-[#2affc0] font-semibold text-base tracking-wide">Indieverse Visualiser</span>
            </div>
          </div>
          {/* Column headers - mobile */}
          <div className="md:hidden grid grid-cols-2 gap-3 pb-3 border-b border-[rgba(255,255,255,0.15)]">
            <div>
              <span className="text-red-400 font-semibold text-xs tracking-wide">Other Visualisers</span>
            </div>
            <div>
              <span className="text-[#2affc0] font-semibold text-xs tracking-wide">Indieverse Visualiser</span>
            </div>
          </div>

          {/* Comparison rows */}
          <ComparisonRow
            feature="Simple Walls"
            otherTools="Works reliably on flat walls in controlled, studio-quality images."
            ourAI="Handles simple walls easily, while also supporting complex scenarios."
            otherStatus="partial"
            otherImage="/images/04b_problem_bad_interior.jpg"
            ourImage="/images/04b_problem_good_interior.jpg"
            delay={0}
          />
          <ComparisonRow
            feature="Complex Exteriors"
            otherTools="Struggles with detailed buildings. Surfaces are missed or painted wrong."
            ourAI="Paints across full building exteriors including facades, columns, and trim."
            otherStatus="fail"
            otherImage="/images/problem_complex_exterior_bad.png"
            ourImage="/images/problem_complex_exterior_good.png"
            delay={0.1}
          />
          <ComparisonRow
            feature="AI Cleanup"
            otherTools="Relies entirely on the uploaded image, including clutter and distractions."
            ourAI="Cleans up scaffolding, wires, and vegetation before applying paint."
            otherStatus="fail"
            otherImage="/images/01b_hero_exterior_villa_v2_before.jpg"
            ourImage="/images/01b_hero_exterior_villa_v2_after.jpg"
            delay={0.2}
          />
          <ComparisonRow
            feature="Lighting & Shadows"
            otherTools="Applies uniform color, reducing depth, shadows, and realism."
            ourAI="Preserves natural lighting, shadows, and texture for a true-to-life result."
            otherStatus="fail"
            otherImage="/images/comparison_lighting_bad_townhouses.jpg"
            ourImage="/images/01c_hero_exterior_townhouses_after.jpg"
            delay={0.3}
          />
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Simple Workflow</h2>
            <p className="text-xl text-[#a0a0a0]">Designed to keep the experience straightforward despite the underlying complexity</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Upload Image",
                description: "Upload any interior or exterior image - the system adapts to different lighting, angles, and scene complexity.",
              },
              {
                step: "02",
                title: "Cleanup and Segmentation",
                description: "The AI cleans up the scene - removing clutter, wires, and obstructions - and identifies every unique paintable surface across the image.",
              },
              {
                step: "03",
                title: "Apply Paint & Visualise",
                description: "Choose colors from your catalog, apply them to individual or grouped surfaces, and see a true-to-life preview of the finished space.",
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Works Across All Devices</h2>
            <p className="text-xl text-[#a0a0a0]">Delivers a consistent experience across web and mobile, fully aligned with your brand and customer journey.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <DeviceCarousel />
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Flexible Deployment Options</h2>
            <p className="text-xl text-[#a0a0a0]">Designed to integrate cleanly into your existing systems and workflows</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <DeploymentCard
              Icon={Cloud}
              title="SaaS Platform"
              description="Quick to deploy with your catalog and branding configured."
              delay={0}
            />
            <DeploymentCard
              Icon={Puzzle}
              title="White-Label SDK"
              description="Embed directly into your website or application with full brand control."
              delay={0.1}
            />
            <DeploymentCard
              Icon={Code}
              title="API Integration"
              description="Integrate into internal tools, CRM systems, or custom workflows."
              delay={0.2}
            />
            <DeploymentCard
              Icon={Server}
              title="On-Premise"
              description="Deploy within your infrastructure for full control over data and operations."
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
              { title: "Advanced AI Features", description: "Includes scene cleanup and intelligent surface grouping to improve usability." },
              { title: "Accuracy on Real Buildings", description: "Designed for complex, real-world structures rather than ideal conditions." },
              { title: "Consistent Output Quality", description: "Delivers reliable results across a wide range of image types and environments." },
              { title: "Realistic Visualisation", description: "Maintains lighting, shadows, and texture for a more accurate representation." },
              { title: "White-Label Ready", description: "Fully aligned with your brand, catalog, and customer experience." },
              { title: "Fast Integration", description: "Go live in weeks, not months. Available as SaaS, white-label, API, or on-premise." },
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
            <p className="text-3xl lg:text-4xl font-semibold mb-12 leading-relaxed max-w-4xl mx-auto">
              Let your customers fall in love with the color before they pick up the brush.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-center items-center divide-y md:divide-y-0 md:divide-x divide-[rgba(255,255,255,0.1)]">
            <MetricCard value="10x Faster" label="From hours to minutes" delay={0} />
            <MetricCard value=">95%" label="Success rate on real photos" delay={0.1} />
            <MetricCard value="10,000+" label="Enterprise-grade visualizations delivered" delay={0.2} />
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
              Book a 15-minute call. We'll show you what our GenAI powered visualiser can do on actual buildings.
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
                href="mailto:info@indieverse.studio"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[rgba(255,255,255,0.1)] transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" /> Contact Us
              </a>
            </div>

            <p className="text-sm text-[#2b2b2d]">
              Free pilot available - 60 days, 200 visualizations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-[rgba(255,255,255,0.1)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <a href="https://www.indieverse.studio" target="_blank" rel="noopener noreferrer" className="inline-block mb-2">
                <img src="/images/indieverse-logo-full.png" alt="Indieverse Studio" className="h-10" />
              </a>
              <p className="text-[#a0a0a0]">Accurate AI visualisation for real-world buildings</p>
              <p className="text-[#a0a0a0] mt-2">info@indieverse.studio</p>
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
