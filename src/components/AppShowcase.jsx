import { motion } from 'framer-motion'
import { Smartphone, Sparkles, Users, Compass, BookOpen, User, CheckCircle2 } from 'lucide-react'

const appScreenshots = [
  {
    title: 'Home Dashboard',
    subtitle: 'Quick Actions & Teammate Recommendations',
    description: 'Access live notifications, quick action buttons (Find Team, Add Project, Browse Jobs), top opportunities, and AI-recommended student teammates.',
    image: '/screenshots/home-screen.jpg',
    icon: Smartphone,
    color: 'from-blue-500 to-indigo-600',
    badgeBg: 'bg-blue-50 text-blue-600 border-blue-100',
    highlights: ['Quick Actions', 'Recommended Teammates', 'Live Event Notifications'],
  },
  {
    title: 'Opportunities Hub',
    subtitle: 'Internships, Scholarships & Jobs',
    description: 'Filter through curated internships, scholarships, hackathons, and competitions with real-time search and category filtering.',
    image: '/screenshots/opportunities-screen.jpg',
    icon: Compass,
    color: 'from-purple-500 to-pink-600',
    badgeBg: 'bg-purple-50 text-purple-600 border-purple-100',
    highlights: ['Category Filtering', 'Real-time Opportunity Search', 'Direct Applications'],
  },
  {
    title: 'Community Hub',
    subtitle: 'Cross-University Project Pitches',
    description: 'Share project ideas, pitch startup concepts, showcase media attached posts, and collaborate with students across different universities.',
    image: '/screenshots/community-screen.jpg',
    icon: Users,
    color: 'from-cyan-500 to-teal-600',
    badgeBg: 'bg-cyan-50 text-cyan-600 border-cyan-100',
    highlights: ['Cross-University Feed', 'Idea Pitches & Media Attachments', 'Peer Engagement'],
  },
  {
    title: 'Skill Hub',
    subtitle: 'Acquire In-Demand Tech Skills',
    description: 'Explore structured learning roadmaps (React Native Mastery, Python AI & ML Track), curated video courses, and upcoming workshops.',
    image: '/screenshots/skillhub-screen.jpg',
    icon: BookOpen,
    color: 'from-emerald-500 to-teal-600',
    badgeBg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    highlights: ['Structured Roadmaps', 'Curated Video Courses', 'Upcoming Workshops'],
  },
  {
    title: 'Student Profile & Passport',
    subtitle: 'Projects, Connections & Innovation Passport',
    description: 'Track your project portfolio, connection metrics, student score, and Innovation Passport credential to stand out to recruiters.',
    image: '/screenshots/profile-screen.jpg',
    icon: User,
    color: 'from-amber-500 to-orange-600',
    badgeBg: 'bg-amber-50 text-amber-600 border-amber-100',
    highlights: ['Project Showcase', 'Innovation Passport', 'Connection Score'],
  },
]

export default function AppShowcase() {
  return (
    <section className="relative py-20 lg:py-28 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
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
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-sm font-medium text-primary-600">Mobile Interface Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-500 dark:text-white mb-6">
            Built for the{' '}
            <span className="gradient-text">Modern Student</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Take a look inside the CampusConnect AI mobile app — designed for speed, clarity, and seamless student collaboration.
          </p>
        </motion.div>

        {/* Screenshots Showcase Grid */}
        <div className="space-y-16 lg:space-y-24">
          {appScreenshots.map((item, index) => {
            const Icon = item.icon
            const isEven = index % 2 === 1

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Phone Image Side */}
                <div
                  className={`lg:col-span-5 flex justify-center ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-[260px] sm:w-[290px]"
                  >
                    {/* Frame */}
                    <div className="bg-navy-500 rounded-[2.8rem] p-2.5 shadow-2xl shadow-navy-500/20 border border-navy-400/20">
                      <div className="rounded-[2.3rem] overflow-hidden bg-slate-950">
                        <img
                          src={item.image}
                          alt={`${item.title} Mobile Screen`}
                          className="w-full h-auto object-cover rounded-[2.3rem] shadow-inner"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Background Soft Glow */}
                    <div className={`absolute -inset-3 bg-gradient-to-r ${item.color} opacity-15 rounded-[3rem] blur-xl -z-10`} />
                  </motion.div>
                </div>

                {/* Text Content Side */}
                <div
                  className={`lg:col-span-7 space-y-5 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border ${item.badgeBg}`}>
                    <Icon className="w-4 h-4" />
                    <span>{item.subtitle}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-navy-500 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                    {item.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 pt-2">
                    {item.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center text-white flex-shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm font-medium text-navy-500 dark:text-white">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
