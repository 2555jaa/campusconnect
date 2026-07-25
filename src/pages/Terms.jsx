import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Scale, CheckSquare, AlertCircle, RefreshCw, Mail } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ADMIN_EMAIL, SUPPORT_EMAIL } from '../constants/links'

export default function Terms() {
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
          <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
            <Scale className="w-6 h-6" />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-navy-500 mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-400 mb-6">
            Last Updated: January 2026 • Demo / Frontend Placeholder
          </p>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm leading-relaxed">
            <strong>Notice:</strong> This document serves as a structured frontend template for the CampusConnect AI platform marketing site. Replace with binding legal agreement terms prior to commercial deployment.
          </div>
        </div>

        {/* Terms Content */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm space-y-10 text-gray-600 text-sm leading-relaxed">
          {/* Section 1 */}
          <section>
            <div className="flex items-center gap-3 mb-3">
              <CheckSquare className="w-5 h-5 text-primary-500" />
              <h2 className="text-xl font-bold text-navy-500">1. Acceptance of Terms</h2>
            </div>
            <p>
              By downloading, accessing, or using the CampusConnect AI mobile application or web portal, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, you should not access or use our services.
            </p>
          </section>

          {/* Section 2 */}
          <section className="pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <AlertCircle className="w-5 h-5 text-purple-500" />
              <h2 className="text-xl font-bold text-navy-500">2. Student Conduct & Community Guidelines</h2>
            </div>
            <p className="mb-3">
              CampusConnect AI is dedicated to providing a safe, constructive, and respectful environment for all university students. Users agree not to:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-500 pl-2">
              <li>Post false, misleading, or abusive content in community hubs.</li>
              <li>Impersonate other students, faculty members, or corporate recruiters.</li>
              <li>Attempt to scrape, exploit, or disrupt the mobile application or backend services.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <RefreshCw className="w-5 h-5 text-cyan-500" />
              <h2 className="text-xl font-bold text-navy-500">3. Opportunities & External Content</h2>
            </div>
            <p>
              CampusConnect AI aggregates public student opportunities, hackathons, and scholarships for educational purposes. We do not guarantee employment, grant awards, or admission results from third-party organizers.
            </p>
          </section>

          {/* Section 4 */}
          <section className="pt-6 border-t border-gray-100">
            <h2 className="text-xl font-bold text-navy-500 mb-3">4. Contact & Inquiries</h2>
            <p className="mb-4">
              For any questions regarding these Terms of Service, please reach out to:
            </p>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 space-y-2">
              <div className="flex items-center gap-2 text-sm text-navy-500">
                <Mail className="w-4 h-4 text-primary-500" />
                <span className="font-semibold">Support Email:</span>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary-600 hover:underline">
                  {SUPPORT_EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-navy-500">
                <Mail className="w-4 h-4 text-purple-500" />
                <span className="font-semibold">Admin Email:</span>
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
