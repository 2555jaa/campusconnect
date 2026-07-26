import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Heart, Share2, Sparkles, PlusCircle, ArrowRight, MessageSquareQuote, CheckCircle2 } from 'lucide-react'
import AppModal from './AppModal'

const demoPosts = [
  {
    id: 1,
    author: 'Elena Rostova',
    role: 'Computer Science • Senior',
    avatar: 'ER',
    avatarBg: 'from-blue-500 to-indigo-600',
    time: '2 hours ago',
    tag: 'Project Teammates',
    title: 'Looking for teammates to build an AI-powered education project 🚀',
    content: "We're building a tool that helps students summarize lecture videos and generate practice quizzes automatically. Looking for a UI designer and a Python/FastAPI backend developer!",
    likes: 42,
    comments: 18,
    shares: 5,
    isPopular: true,
  },
  {
    id: 2,
    author: 'David Chen',
    role: 'Data Science • Junior',
    avatar: 'DC',
    avatarBg: 'from-purple-500 to-pink-500',
    time: '4 hours ago',
    tag: 'Career Question',
    title: 'How are you preparing for Fall software engineering internships?',
    content: "Hey everyone! Wondering how many LeetCode questions or side projects folks are aiming for before applying to tech internships this upcoming season. Any tips from seniors?",
    likes: 29,
    comments: 24,
    shares: 3,
    isPopular: false,
  },
  {
    id: 3,
    author: 'Amina Al-Mansoor',
    role: 'UX/UI Design • Sophomore',
    avatar: 'AA',
    avatarBg: 'from-cyan-500 to-teal-500',
    time: '6 hours ago',
    tag: 'Resource Sharing',
    title: 'Free Figma UI Kit curated specifically for student portfolios 🎨',
    content: "Just published a clean, accessible design system template for student project presentations. Free for everyone in the CampusConnect AI community!",
    likes: 85,
    comments: 31,
    shares: 14,
    isPopular: true,
  },
]

export default function CommunityHub() {
  const [modalOpen, setModalOpen] = useState(false)
  const [likedPosts, setLikedPosts] = useState({})

  const toggleLike = (id) => {
    setLikedPosts(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <section id="community" className="relative py-20 lg:py-28 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-4">
            <MessageCircle className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-600">Vibrant Student Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-500 dark:text-white mb-6">
            Your Community Is{' '}
            <span className="gradient-text">Your Advantage</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Share ideas, get peer feedback, discover project partners, and grow alongside thousands of ambitious students worldwide.
          </p>
        </motion.div>

        {/* Feed Grid */}
        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          {/* Mock Post Creator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => setModalOpen(true)}
            className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-primary-50/50 via-purple-50/50 to-cyan-50/50 border border-gray-200/80 shadow-sm cursor-pointer hover:border-primary-200 transition-all flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3 flex-1">
              <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-sm">
                You
              </div>
              <span className="text-sm text-gray-400 font-medium">
                Share a project idea, question, or accomplishment with the community...
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl gradient-bg text-white text-xs font-semibold shadow-md">
              <PlusCircle className="w-4 h-4" />
              Post
            </div>
          </motion.div>

          {/* Demo Feed Cards */}
          {demoPosts.map((post, index) => {
            const isLiked = likedPosts[post.id]
            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl bg-white border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300"
              >
                {/* Author Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${post.avatarBg} flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
                      {post.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-semibold text-navy-500 dark:text-white text-sm sm:text-base">{post.author}</h4>
                        <CheckCircle2 className="w-4 h-4 text-primary-500 fill-primary-50" />
                      </div>
                      <p className="text-xs text-gray-400">{post.role} • {post.time}</p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-50 dark:bg-slate-800/50 text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-slate-800">
                    {post.tag}
                  </span>
                </div>

                {/* Post Body */}
                <h3 className="text-base sm:text-lg font-bold text-navy-500 dark:text-white mb-2 leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                  {post.content}
                </p>

                {/* Footer Controls */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-slate-800 text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-6">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className={`flex items-center gap-1.5 font-medium transition-colors ${
                        isLiked ? 'text-red-500' : 'hover:text-red-500'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                      <span>{post.likes + (isLiked ? 1 : 0)}</span>
                    </button>

                    <button
                      onClick={() => setModalOpen(true)}
                      className="flex items-center gap-1.5 font-medium hover:text-primary-500 transition-colors"
                    >
                      <MessageSquareQuote className="w-4 h-4" />
                      <span>{post.comments} Comments</span>
                    </button>

                    <button
                      onClick={() => setModalOpen(true)}
                      className="flex items-center gap-1.5 font-medium hover:text-cyan-500 transition-colors"
                    >
                      <Share2 className="w-4 h-4" />
                      <span>{post.shares}</span>
                    </button>
                  </div>

                  {post.isPopular && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md">
                      <Sparkles className="w-3 h-3" /> Trending Thread
                    </span>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Join Community CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white gradient-bg shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Join the Student Community
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      <AppModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Join the CampusConnect AI Community"
        message="Interact with student posts, share your projects, and collaborate with peers around the world inside the mobile app."
      />
    </section>
  )
}
