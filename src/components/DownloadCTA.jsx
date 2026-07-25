import { motion } from 'framer-motion'
import { Download, Sparkles, Smartphone, CheckCircle2 } from 'lucide-react'
import { GOOGLE_PLAY_STORE_URL } from '../constants/links'

export default function DownloadCTA() {
  return (
    <section id="download" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Gradient & Glow */}
      <div className="absolute inset-0 bg-navy-500 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-300">Start Your Campus Journey</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Your Next Opportunity{' '}
              <span className="gradient-text block">Could Start Here.</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-xl">
              Download CampusConnect AI and start connecting, learning, building, and growing with an AI companion built exclusively for university students.
            </p>

            {/* Features Checkmarks */}
            <div className="space-y-3 mb-8">
              {[
                'Free access for verified college students',
                'AI resume assistant & project matching',
                'Curated scholarships, hackathons & internships',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <span className="text-sm text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Google Play Primary Button */}
              <motion.a
                href={GOOGLE_PLAY_STORE_URL}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-7 py-4 rounded-xl text-base font-bold text-white gradient-bg shadow-xl shadow-primary-500/30 hover:shadow-2xl transition-all duration-300"
              >
                <Smartphone className="w-5 h-5" />
                <span>Get It on Google Play</span>
              </motion.a>

              {/* iOS Button (Disabled / Coming Soon) */}
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-xl text-base font-semibold text-gray-400 bg-white/5 border border-white/10 cursor-not-allowed select-none">
                <Download className="w-5 h-5 opacity-50" />
                <span>Coming Soon on iOS</span>
              </div>
            </div>

            {/* Micro Text */}
            <p className="text-xs text-gray-400 mt-4">
              Android 8.0+ supported • iOS build in progress
            </p>
          </motion.div>

          {/* Right Visual Phone Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
              <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center mb-6 shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">Ready to level up your campus life?</h3>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                Join thousands of students using CampusConnect AI to discover their path, craft resumes, and collaborate on projects.
              </p>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-400">Current App Version</div>
                  <div className="text-sm font-semibold text-white">v1.0.4 • Android Public Beta</div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold text-cyan-300 bg-cyan-500/20 border border-cyan-400/30">
                  Live
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
