import { motion } from 'framer-motion'
import { Sparkles, FileText, Users, MessageCircle, Lightbulb, Rocket } from 'lucide-react'
import FeatureCard from './FeatureCard'

const features = [
  {
    icon: Sparkles,
    title: 'AI Career Guidance',
    description: 'Get personalized guidance to understand your career path, identify useful skills, and make smarter career decisions.',
  },
  {
    icon: FileText,
    title: 'AI Resume Builder',
    description: 'Create a professional, career-ready resume with intelligent guidance and suggestions.',
  },
  {
    icon: Users,
    title: 'Find Teammates',
    description: 'Find students with the skills you need and build stronger teams for your next project.',
  },
  {
    icon: MessageCircle,
    title: 'Community Hub',
    description: 'Connect with students, share ideas, ask questions, and learn from a growing student community.',
  },
  {
    icon: Lightbulb,
    title: 'Project Ideas',
    description: 'Discover practical project ideas that help you learn, build, and showcase your skills.',
  },
  {
    icon: Rocket,
    title: 'Opportunities',
    description: 'Discover internships, scholarships, hackathons, competitions, and other opportunities.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />
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
            Everything You Need to{' '}
            <span className="gradient-text">Move Forward</span>
          </h2>
          <p className="text-lg text-gray-600">
            From AI-powered career guidance to community connections, CampusConnect AI gives students everything they need to succeed.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

