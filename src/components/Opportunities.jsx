import { useState } from 'react'
import { motion } from 'framer-motion'
import { Rocket, GraduationCap, Trophy, Briefcase, Calendar, MapPin, ArrowRight, ExternalLink } from 'lucide-react'
import AppModal from './AppModal'

const opportunityCategories = ['All', 'Internships', 'Scholarships', 'Hackathons', 'Competitions']

const demoOpportunities = [
  {
    id: 1,
    title: 'Software Engineering Internship',
    category: 'Internships',
    company: 'TechCorp Labs',
    location: 'Remote / Hybrid',
    deadline: 'Application Closes in 12 Days',
    tags: ['React', 'Node.js', 'AI Integration'],
    icon: Briefcase,
    color: 'from-blue-500 to-indigo-600',
    bgColor: 'bg-blue-50 text-blue-600',
  },
  {
    id: 2,
    title: 'Global Student Tech Scholarship',
    category: 'Scholarships',
    company: 'Future Innovators Foundation',
    location: 'Global',
    deadline: '$5,000 Grant • Awarded Annually',
    tags: ['Undergraduate', 'STEM', 'Financial Support'],
    icon: GraduationCap,
    color: 'from-purple-500 to-violet-600',
    bgColor: 'bg-purple-50 text-purple-600',
  },
  {
    id: 3,
    title: 'National Student AI Hackathon',
    category: 'Hackathons',
    company: 'AI Research Alliance',
    location: 'Virtual Event',
    deadline: '48-Hour Virtual Challenge',
    tags: ['Machine Learning', '$10k Prize Pool', 'Mentorship'],
    icon: Rocket,
    color: 'from-cyan-500 to-blue-600',
    bgColor: 'bg-cyan-50 text-cyan-600',
  },
  {
    id: 4,
    title: 'University Product Design Challenge',
    category: 'Competitions',
    company: 'Design Excellence Network',
    location: 'Online Submission',
    deadline: 'Submissions Open Now',
    tags: ['UI/UX', 'Portfolio Review', 'Industry Exposure'],
    icon: Trophy,
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50 text-amber-600',
  },
]

export default function Opportunities() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  const filteredOpportunities = activeCategory === 'All'
    ? demoOpportunities
    : demoOpportunities.filter(item => item.category === activeCategory)

  const handleCardClick = (item) => {
    setSelectedItem(item)
    setModalOpen(true)
  }

  return (
    <section id="opportunities" className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-[#F8FAFC]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 mb-4">
            <Rocket className="w-4 h-4 text-cyan-600" />
            <span className="text-sm font-medium text-cyan-600">Career Launchpad</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-500 mb-6">
            Discover Opportunities That{' '}
            <span className="gradient-text">Move Your Career Forward</span>
          </h2>
          <p className="text-lg text-gray-600">
            Handpicked internships, scholarships, hackathons, and competitions curated specifically for ambitious university students.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {opportunityCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'gradient-bg text-white shadow-md shadow-primary-500/20'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Opportunities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredOpportunities.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300"
              >
                <div>
                  {/* Category Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${item.bgColor}`}>
                      <Icon className="w-3.5 h-3.5" />
                      {item.category}
                    </span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400">Demo</span>
                  </div>

                  {/* Title & Company */}
                  <h3 className="text-lg font-bold text-navy-500 group-hover:text-primary-600 transition-colors duration-200 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 mb-4">{item.company}</p>

                  {/* Metadata */}
                  <div className="space-y-2 mb-6 text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                      <span>{item.deadline}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-md bg-gray-50 text-gray-600 text-[11px] font-medium border border-gray-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Apply / View Button */}
                <button
                  onClick={() => handleCardClick(item)}
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-xs font-semibold text-primary-600 bg-primary-50 hover:bg-primary-500 hover:text-white transition-all duration-300 group-hover:shadow-md"
                >
                  <span>Explore Opportunity</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            )
          })}
        </div>

        {/* Explore All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-bg shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Explore All Opportunities in App
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      <AppModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={selectedItem ? selectedItem.title : "Explore Live Opportunities"}
        message={
          selectedItem
            ? `Download CampusConnect AI to apply for "${selectedItem.title}" and unlock dozens of active student opportunities tailored to your profile!`
            : "Get early access to exclusive student internships, hackathons, and scholarships directly inside the CampusConnect AI mobile app."
        }
      />
    </section>
  )
}
