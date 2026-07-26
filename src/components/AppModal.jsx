import { motion, AnimatePresence } from 'framer-motion'
import { X, Smartphone, ArrowRight, Sparkles } from 'lucide-react'

export default function AppModal({ isOpen, onClose, title = "Available in the App", message = "Download the CampusConnect AI mobile app to access this feature, connect with students, and discover real-time opportunities!" }) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-navy-900/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 dark:border-slate-800 z-10 text-center"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-navy-500 dark:text-white hover:bg-gray-100 dark:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary-500/25">
            <Smartphone className="w-8 h-8 text-white" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-navy-500 dark:text-white mb-2">{title}</h3>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            {message}
          </p>

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-50 text-primary-600 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Full Mobile Experience
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <a
              href="#download"
              onClick={onClose}
              className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl text-sm font-semibold text-white gradient-bg hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
            >
              Download the App
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="w-full px-6 py-2.5 rounded-xl text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-navy-500 dark:text-white transition-colors"
            >
              Close Showcase Preview
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
