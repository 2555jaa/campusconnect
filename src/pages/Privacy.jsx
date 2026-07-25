import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ShieldCheck, FileText, Lock, Eye, Bell, Mail } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ADMIN_EMAIL, SUPPORT_EMAIL } from '../constants/links'

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col justify-between">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Page Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm mb-10">
          <div className="w-12 h-12 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6">
            <ShieldCheck className="w-6 h-6" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-navy-500 mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-400 mb-6">
            Last Updated: January 2026 • Demo / Frontend Placeholder
          </p>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm leading-relaxed">
            <strong>Notice:</strong> This page is a structured frontend template for the CampusConnect AI mobile platform marketing website. Official legal counsel terms should replace this template content prior to public production release.
          </div>
        </div>

        {/* Legal Sections */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm space-y-10 text-gray-600 text-sm leading-relaxed">
          {/* Section 1 */}
          <section>
            <div className="flex items-center gap-3 mb-3">
              <Eye className="w-5 h-5 text-primary-500" />
              <h2 className="text-xl font-bold text-navy-500">1. Information We Collect</h2>
            </div>
            <p className="mb-3">
              CampusConnect AI collects information you provide directly to us when creating a student account, completing your career profile, or interacting with our mobile application features.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-500 pl-2">
              <li>Account credentials (name, student university email address, graduation year).</li>
              <li>Academic and professional info (major, skills, career interests, resume uploads).</li>
              <li>Community interaction data (project posts, team matches, message exchanges).</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-5 h-5 text-purple-500" />
              <h2 className="text-xl font-bold text-navy-500">2. How We Use Your Information</h2>
            </div>
            <p className="mb-3">
              We utilize collected information solely to provide, personalize, and improve the CampusConnect AI student ecosystem:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-500 pl-2">
              <li>Generating personalized AI career recommendations and skill roadmaps.</li>
              <li>Matching students with relevant project teammates and opportunities.</li>
              <li>Facilitating secure student community discussions and networking.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <Lock className="w-5 h-5 text-cyan-500" />
              <h2 className="text-xl font-bold text-navy-500">3. Data Security & Storage</h2>
            </div>
            <p>
              We implement industry-standard administrative, technical, and physical security measures to protect your personal information against unauthorized access, loss, or alteration.
            </p>
          </section>

          {/* Section 4 */}
          <section className="pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <Bell className="w-5 h-5 text-emerald-500" />
              <h2 className="text-xl font-bold text-navy-500">4. Contact & Inquiries</h2>
            </div>
            <p className="mb-4">
              If you have any questions or concerns regarding our privacy practices or this template policy, please contact our administrative or support team:
            </p>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-2">
              <div className="flex items-center gap-2 text-sm text-navy-500">
                <Mail className="w-4 h-4 text-primary-500" />
                <span className="font-semibold">Support:</span>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary-600 hover:underline">
                  {SUPPORT_EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-navy-500">
                <Mail className="w-4 h-4 text-purple-500" />
                <span className="font-semibold">Admin:</span>
                <a href={`mailto:${ADMIN_EMAIL}`} className="text-purple-600 hover:underline">
                  {ADMIN_EMAIL}
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
