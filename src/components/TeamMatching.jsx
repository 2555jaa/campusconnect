 import { motion } from 'framer-motion'
import { Users, ArrowRight, Code, Palette, Server, Star } from 'lucide-react'

const projectRoles = [
  { icon: Code, title: 'React Native Developer', color: 'from-blue-500 to-blue-600', applicants: 3 },
  { icon: Palette, title: 'UI/UX Designer', color: 'from-purple-500 to-purple-600', applicants: 2 },
  { icon: Server, title: 'Backend Developer', color: 'from-cyan-500 to-cyan-600', applicants: 1 },
]

const matchingStudents = [
  { name: 'Sarah J.', skill: 'React Native', match: '95%', avatar: 'SJ', color: 'from-primary-500 to-purple-500' },
  { name: 'Marcus K.', skill: 'UI/UX Design', match: '92%', avatar: 'MK', color: 'from-purple-500 to-cyan-400' },
  { name: 'Priya R.', skill: 'Node.js', match: '88%', avatar: 'PR', color: 'from-cyan-400 to-primary-500' },
]

export default function TeamMatching() {
  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-500 mb-6">
              Don't Build Alone.{' '}
              <span className="gradient-text">Find Your Team.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Connect with teammates who share your interests, complement your skills, and help you build something amazing. Our smart matching system considers skills, project needs, and career goals.
            </p>

            <div className="space-y-4 mb-8">
              {['Match by skills & interests', 'Smart project-need matching', 'Career goal alignment'].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center">
                    <Star className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-600">{item}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="#download"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white gradient-bg shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              Find Your Teammates
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Right Content - Visual Demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Project Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-purple-50 border border-primary-100/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-navy-500 flex items-center justify-center">
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-500">Smart Campus App</h4>
                  <p className="text-sm text-gray-500">Looking for teammates</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Roles Needed</p>
                {projectRoles.map((role, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/80 border border-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${role.color} flex items-center justify-center`}>
                        <role.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-navy-500">{role.title}</p>
                        <p className="text-xs text-gray-400">{role.applicants} applicants</p>
                      </div>
                    </div>
                    <button className="text-xs font-medium text-primary-500 hover:text-primary-600">
                      Apply
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Matching Students */}
            <div className="space-y-3">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Top Matches</p>
              {matchingStudents.map((student, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 rounded-xl bg-white border border-gray-100 hover:border-primary-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${student.color} flex items-center justify-center text-white font-semibold text-sm`}>
                      {student.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-navy-500">{student.name}</p>
                      <p className="text-xs text-gray-400">{student.skill}</p>
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-green-500 bg-green-50 px-2 py-1 rounded-md">
                    {student.match} Match
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

