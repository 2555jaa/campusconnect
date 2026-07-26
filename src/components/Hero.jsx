import { motion } from 'framer-motion'
import { Download, ArrowRight, Sparkles, Brain, Users, Target, Zap, BookOpen } from 'lucide-react'

const floatingElements = [
  { icon: Brain, text: 'AI Career Guidance', x: '5%', y: '18%', delay: 0 },
  { icon: Users, text: 'Find Your Team', x: '72%', y: '12%', delay: 1 },
  { icon: BookOpen, text: 'Skill Hub Roadmaps', x: '4%', y: '62%', delay: 2 },
  { icon: Zap, text: 'Discover Opportunities', x: '75%', y: '68%', delay: 0.5 },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC]">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 lg:pt-40 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-6 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-medium text-primary-600">
                AI-Powered Student Technology Platform
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-navy-500 dark:text-white leading-tight mb-6 tracking-tight">
              <span className="block">Your Campus.</span>
              <span className="block">Your Community.</span>
              <span className="block gradient-text">Your Future.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-4 max-w-xl font-medium">
              Everything students need to connect, grow, collaborate, and build their future — powered by AI.
            </p>

            {/* Description */}
            <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-8 max-w-xl">
              CampusConnect AI helps university students discover opportunities, build career-ready skills, create professional resumes, find project teammates, and connect with a community that helps them grow.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#download"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white gradient-bg shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Download the App
              </motion.a>
              <motion.a
                href="#features"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-navy-500 dark:text-white bg-white border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300"
              >
                Explore Features
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap items-center gap-8 mt-12 pt-8 border-t border-gray-100 dark:border-slate-800"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-navy-500 dark:text-white">100%</div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Student Focused</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-navy-500 dark:text-white">Skill Hub</div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Learning Tracks</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-navy-500 dark:text-white">Smart</div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Team Matching</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup with Real App Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Floating Badges */}
            {floatingElements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + item.delay * 0.2, duration: 0.5 }}
                className="absolute hidden xl:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-gray-100 dark:border-slate-800 shadow-xl shadow-gray-900/10 z-20 hover:scale-105 transition-transform"
                style={{ left: item.x, top: item.y }}
              >
                <div className="w-7 h-7 rounded-lg gradient-bg flex items-center justify-center text-white">
                  <item.icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-navy-500 dark:text-white whitespace-nowrap">{item.text}</span>
              </motion.div>
            ))}

            {/* Smartphone Frame Container */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-[290px] sm:w-[330px]"
            >
              {/* Phone Frame */}
              <div className="relative bg-navy-500 rounded-[3rem] p-3 shadow-2xl shadow-primary-500/25 ring-1 ring-white/10">
                {/* Notch / Camera Bar */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-navy-500 rounded-b-2xl z-20 flex items-center justify-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-navy-900 ring-1 ring-white/10" />
                  <div className="w-2 h-2 rounded-full bg-navy-900" />
                </div>
                
                {/* Real App Screenshot Image */}
                <div className="relative rounded-[2.4rem] overflow-hidden bg-slate-950 border border-slate-800 shadow-inner">
                  <img
                    src="/screenshots/home-screen.jpg"
                    alt="CampusConnect AI Mobile App Interface"
                    className="w-full h-auto object-cover rounded-[2.4rem]"
                    loading="eager"
                  />

                  {/* Glass Gloss Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
                </div>
              </div>

              {/* Glowing Background Ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-purple-500/20 to-cyan-400/20 rounded-[3.5rem] blur-2xl -z-10" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
