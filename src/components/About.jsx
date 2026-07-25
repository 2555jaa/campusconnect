import { motion } from 'framer-motion'
import { Target, ShieldCheck, Heart, Sparkles } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-purple-500/5 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6"
          >
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-600">Our Core Mission</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-500 mb-8 leading-tight"
          >
            Building a Better Future{' '}
            <span className="gradient-text">for Students</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-12"
          >
            CampusConnect AI is designed to help students move from learning to doing — by connecting them with opportunities, people, ideas, and AI-powered tools that support their growth.
          </motion.p>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl bg-gray-50 border border-gray-100"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-navy-500 mb-2">Purpose-Driven</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Focused entirely on empowering university students with actionable career guidance and real project opportunities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-gray-50 border border-gray-100"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-navy-500 mb-2">Student First</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Designed with privacy, clarity, and ease of use so students can focus on developing skills and building relationships.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-2xl bg-gray-50 border border-gray-100"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center mb-4">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-navy-500 mb-2">Community Oriented</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Fostering an inclusive, collaborative space where students help students reach their highest potential.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
