import { motion } from 'framer-motion'
import { Cpu, TrendingUp, Users, GitBranch, Compass } from 'lucide-react'

const items = [
  { icon: Cpu, label: 'AI-Powered' },
  { icon: TrendingUp, label: 'Career Growth' },
  { icon: Users, label: 'Student Community' },
  { icon: GitBranch, label: 'Project Collaboration' },
  { icon: Compass, label: 'Real Opportunities' },
]

export default function TrustStrip() {
  return (
    <section className="relative py-10 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-50 to-purple-50 flex items-center justify-center group-hover:from-primary-100 group-hover:to-purple-100 transition-colors duration-300">
                <item.icon className="w-5 h-5 text-primary-500" />
              </div>
              <span className="text-sm font-medium text-gray-600 text-center group-hover:text-navy-500 transition-colors duration-300">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

