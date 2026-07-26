import { motion } from 'framer-motion'
import { ArrowRight, AlertCircle, CheckCircle } from 'lucide-react'

const challenges = [
  'Finding career direction',
  'Building a strong resume',
  'Finding internships',
  'Finding teammates',
  'Discovering meaningful opportunities',
  'Knowing what skills to learn',
]

const solutions = [
  'AI-powered career guidance',
  'AI resume builder',
  'Curated opportunity discovery',
  'Smart team matching',
  'Community-driven growth',
  'Personalized skill recommendations',
]

export default function ProblemSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary-500/5 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-500 dark:text-white mb-6">
            Students Have Potential.
            <span className="block gradient-text">They Just Need the Right Connection.</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Every student has the ability to succeed. They just need the right tools, guidance, and community to unlock their full potential.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-100 mb-4">
              <AlertCircle className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-red-600">Challenges</span>
            </div>
            
            <div className="space-y-3">
              {challenges.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-red-50/50 border border-red-100/50"
                >
                  <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Transition Arrow */}
          <div className="hidden lg:flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center shadow-lg shadow-primary-500/20"
            >
              <ArrowRight className="w-8 h-8 text-white" />
            </motion.div>
          </div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 mb-4">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-green-600">CampusConnect AI</span>
            </div>

            <div className="space-y-3">
              {solutions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-primary-50 to-purple-50 border border-primary-100/50"
                >
                  <div className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-navy-500 dark:text-white font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

