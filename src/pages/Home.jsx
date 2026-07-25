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
import DownloadCTA from '../components/DownloadCTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-navy-500 font-sans selection:bg-primary-500/20 selection:text-primary-700">
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
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  )
}
