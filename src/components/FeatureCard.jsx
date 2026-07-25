import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function FeatureCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group relative p-6 sm:p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary-500/5 hover:border-primary-100/50 transition-all duration-300"
    >
      {/* Gradient hover overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-50 via-purple-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-navy-500 mb-3 group-hover:text-primary-600 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Learn More */}
        <div className="flex items-center gap-1 text-sm font-medium text-primary-500 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
          Learn more
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  )
}

