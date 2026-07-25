import { motion } from 'framer-motion'
import { UserPlus, Compass, Users, Rocket, ArrowRight } from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Create Your Profile',
    description: 'Set up your student profile by adding your university, degree, technical skills, interests, and career aspirations.',
    icon: UserPlus,
    gradient: 'from-blue-500 to-indigo-600',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    step: '02',
    title: 'Discover Your Opportunities',
    description: 'Our AI engine analyzes your background and matches you with tailored internships, scholarships, hackathons, and skill guides.',
    icon: Compass,
    gradient: 'from-purple-500 to-violet-600',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    step: '03',
    title: 'Connect & Collaborate',
    description: 'Find ambitious teammates with complementary skill sets, join project teams, and participate in peer discussions.',
    icon: Users,
    gradient: 'from-cyan-500 to-blue-600',
    color: 'bg-cyan-50 text-cyan-600',
  },
  {
    step: '04',
    title: 'Build Your Future',
    description: 'Build portfolio-ready projects, refine your AI resume, gain real-world experience, and kickstart your professional career.',
    icon: Rocket,
    gradient: 'from-emerald-500 to-teal-600',
    color: 'bg-emerald-50 text-emerald-600',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary-500/5 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-4">
            <span className="text-sm font-medium text-primary-600">Simple 4-Step Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-500 mb-6">
            How CampusConnect AI{' '}
            <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-gray-600">
            From creating your profile to landing your dream opportunity, we make your campus journey structured and seamless.
          </p>
        </motion.div>

        {/* Grid Timeline */}
        <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-purple-200 to-emerald-200 -translate-y-12 z-0" />

          {steps.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative z-10 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300 group"
              >
                <div>
                  {/* Top Step Pill & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg shadow-primary-500/15 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-3xl font-black text-gray-200 group-hover:text-primary-400 transition-colors duration-300">
                      {item.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-navy-500 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 group-hover:text-primary-500 transition-colors">
                  <span>Step {item.step}</span>
                  {index < steps.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
