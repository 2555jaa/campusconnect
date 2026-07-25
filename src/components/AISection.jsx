import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Brain, Code, Cloud, Shield } from 'lucide-react'

const careerPaths = [
  { icon: Code, title: 'Software Engineering', description: 'Build and maintain software applications', color: 'from-blue-500 to-blue-600' },
  { icon: Brain, title: 'AI & Machine Learning', description: 'Develop intelligent systems and models', color: 'from-purple-500 to-purple-600' },
  { icon: Cloud, title: 'Cloud & DevOps', description: 'Manage infrastructure and deployment', color: 'from-cyan-500 to-cyan-600' },
]

export default function AISection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ai-glow" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-500 mb-6">
            Meet Your{' '}
            <span className="gradient-text">AI Career Companion</span>
          </h2>
          <p className="text-lg text-gray-600">
            Get intelligent career guidance tailored to your skills, interests, and goals — powered by advanced AI.
          </p>
        </motion.div>

        {/* AI Chat Interface */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="rounded-2xl bg-white border border-gray-100 shadow-xl shadow-purple-500/5 overflow-hidden glow-ai">
            {/* Chat Header */}
            <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 border-b border-gray-100">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-navy-500 text-sm">AI Career Assistant</h4>
                <p className="text-xs text-gray-400">Online • Ready to help</p>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="p-6 space-y-4">
              {/* Student Message */}
              <div className="flex justify-start">
                <div className="max-w-[80%] bg-gray-50 rounded-2xl rounded-tl-sm px-4 py-3 border border-gray-100">
                  <p className="text-sm text-navy-500">
                    What career path should I follow as a software engineering student?
                  </p>
                </div>
              </div>

              {/* AI Message */}
              <div className="flex justify-end">
                <div className="max-w-[85%] bg-gradient-to-r from-purple-500/5 to-primary-500/5 rounded-2xl rounded-tr-sm px-4 py-3 border border-purple-100/50">
                  <p className="text-sm text-navy-500 mb-3">
                    Based on your interests and skills, here are three career paths you can explore:
                  </p>

                  {/* Career Suggestions */}
                  <div className="space-y-2">
                    {careerPaths.map((path, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-2.5 rounded-xl bg-white/80 border border-gray-100 hover:border-purple-100 transition-colors"
                      >
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${path.color} flex items-center justify-center`}>
                          <path.icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-navy-500">{path.title}</p>
                          <p className="text-[10px] text-gray-500">{path.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Typing Indicator */}
              <div className="flex justify-start">
                <div className="flex items-center gap-1.5 px-4 py-2.5 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white gradient-bg shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Explore AI Guidance
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

