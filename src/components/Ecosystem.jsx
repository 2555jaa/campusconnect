import { motion } from 'framer-motion'
import { Cpu, Users, Compass, Code, MessageCircle, Sparkles } from 'lucide-react'

const pillars = [
  {
    icon: Cpu,
    title: 'AI-Powered Guidance',
    description: 'Personalized career recommendations, skill roadmaps, and instant answers tailored to your specific field of study.',
    size: 'col-span-1 lg:col-span-2',
    gradient: 'from-blue-500/10 via-purple-500/10 to-transparent',
    borderColor: 'border-blue-100',
    iconBg: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Users,
    title: 'Meaningful Connections',
    description: 'Connect beyond social feeds — build authentic academic and career relationships with driven peers.',
    size: 'col-span-1',
    gradient: 'from-purple-500/10 via-pink-500/10 to-transparent',
    borderColor: 'border-purple-100',
    iconBg: 'from-purple-500 to-pink-600',
  },
  {
    icon: Compass,
    title: 'Career Opportunities',
    description: 'Access curated internships, scholarships, hackathons, and research positions in one unified hub.',
    size: 'col-span-1',
    gradient: 'from-cyan-500/10 via-blue-500/10 to-transparent',
    borderColor: 'border-cyan-100',
    iconBg: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Code,
    title: 'Project Collaboration',
    description: 'Stop building alone. Find teammates with complementary skills for hackathons, capstones, and startups.',
    size: 'col-span-1 lg:col-span-2',
    gradient: 'from-emerald-500/10 via-teal-500/10 to-transparent',
    borderColor: 'border-emerald-100',
    iconBg: 'from-emerald-500 to-teal-600',
  },
]

export default function Ecosystem() {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-4">
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-primary-600">The CampusConnect AI Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-500 mb-6 leading-tight">
            More Than an App.{' '}
            <span className="block gradient-text">A Complete Student Ecosystem.</span>
          </h2>
          <p className="text-lg text-gray-600">
            We bring together everything students need to transform learning into real-world career achievement.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className={`relative p-8 rounded-3xl bg-white border ${pillar.borderColor} shadow-sm hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 overflow-hidden ${pillar.size}`}
              >
                {/* Background Subtle Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-50`} />

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.iconBg} flex items-center justify-center text-white shadow-md mb-6`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-navy-500 mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 sm:p-12 rounded-3xl gradient-bg text-white shadow-2xl shadow-primary-500/25 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10 grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            <div className="pt-4 md:pt-0">
              <div className="text-4xl sm:text-5xl font-extrabold mb-2">100%</div>
              <div className="text-sm font-medium text-white/80">Student-Centric Design</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-4xl sm:text-5xl font-extrabold mb-2">AI First</div>
              <div className="text-sm font-medium text-white/80">Smart Resume & Skill Matching</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-4xl sm:text-5xl font-extrabold mb-2">Zero Cost</div>
              <div className="text-sm font-medium text-white/80">Free for Verified University Students</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
