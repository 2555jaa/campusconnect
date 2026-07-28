import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TrustStrip from '../components/TrustStrip'
import ProblemSection from '../components/ProblemSection'
import Features from '../components/Features'
import AppShowcase from '../components/AppShowcase'
import AISection from '../components/AISection'
import TeamMatching from '../components/TeamMatching'
import Opportunities from '../components/Opportunities'
import CommunityHub from '../components/CommunityHub'
import HowItWorks from '../components/HowItWorks'
import Ecosystem from '../components/Ecosystem'
import About from '../components/About'
import DownloadSection from '../components/DownloadSection'
import Footer from '../components/Footer'

import { Helmet } from 'react-helmet-async'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-navy-500 font-sans selection:bg-primary-500/20 selection:text-primary-700">
      <Helmet>
        <title>CampusConnect AI - AI-Powered Student Career & Networking Hub</title>
        <meta name="description" content="Download CampusConnect AI for AI career guidance, 90-day roadmaps, hackathon matching, and student networking." />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <ProblemSection />
        <Features />
        <AppShowcase />
        <AISection />
        <TeamMatching />
        <Opportunities />
        <CommunityHub />
        <HowItWorks />
        <Ecosystem />
        <About />
        <DownloadSection />
      </main>
      <Footer />
    </div>
  )
}
