import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Download,
  Smartphone,
  Sparkles,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
} from 'lucide-react'
import { QRCodeCanvas } from 'qrcode.react'
import PhoneFrame from './PhoneFrame'
import {
  APP_DOWNLOAD_CONFIG,
  WEBSITE_URL,
} from '../constants/links'

// Feature highlights shown inside the phone mockup
const appFeatures = [
  { label: 'AI Career Guidance', icon: '/icons.svg#sparkles' },
  { label: 'Opportunity Radar', icon: '/icons.svg#compass' },
  { label: 'Community Hub', icon: '/icons.svg#users' },
  { label: 'Team Matching', icon: '/icons.svg#team' },
  { label: 'AI Resume Builder', icon: '/icons.svg#file' },
]

const installSteps = [
  'Tap "Download APK" above.',
  'Wait for the APK to finish downloading.',
  'Open the downloaded APK file.',
  'If Android asks for permission, allow installation from this source.',
  'Install CampusConnect AI.',
  'Open the app and start using CampusConnect AI.',
]

export default function DownloadSection() {
  const [showInstructions, setShowInstructions] = useState(false)

  const {
    apkUrl,
    version,
    fileSize,
    minAndroid,
    lastUpdated,
    googlePlayUrl,
    isGooglePlayPublished,
    sha256,
  } = APP_DOWNLOAD_CONFIG

  const hasGooglePlay = isGooglePlayPublished && googlePlayUrl

  const handleDownloadAPK = () => {
    // Trigger APK download
    const link = document.createElement('a')
    link.href = apkUrl
    link.download = `campusconnect-ai-v${version}.apk`
    link.setAttribute('aria-label', `Download CampusConnect AI APK version ${version}`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    // Download initiated — APK will be served from configured url
  }

  return (
    <section id="download" className="relative py-20 lg:py-28 overflow-hidden bg-navy-500">
      {/* Background Patterns */}
      <div className="absolute inset-0 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ============ LEFT COLUMN ============ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-300">
                Android App Available Now
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Get CampusConnect AI
            </h2>

            {/* Subtitle */}
            <p className="text-lg text-gray-300 leading-relaxed mb-4 max-w-xl">
              Connect, learn, build, and grow with CampusConnect AI — your AI-powered
              student career companion.
            </p>

            {/* Secondary message */}
            <p className="text-sm text-gray-400 leading-relaxed mb-8 max-w-xl border-l-2 border-cyan-400/50 pl-4">
              Don't have access to Google Play Store? Download the official Android APK
              directly from our website.
            </p>

            {/* ============ DOWNLOAD BUTTONS ============ */}
            <div className="flex flex-col sm:flex-row flex-wrap items-start gap-4 mb-8">
              {/* Primary: Download APK Button */}
              <motion.button
                onClick={handleDownloadAPK}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 px-7 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 shadow-xl shadow-green-500/25 hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300"
                aria-label={`Download CampusConnect AI APK version ${version}`}
              >
                <Download className="w-5 h-5" />
                <span>Download APK</span>
              </motion.button>

              {/* Secondary: Google Play Button */}
              {hasGooglePlay ? (
                <motion.a
                  href={googlePlayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-xl text-base font-bold text-white gradient-bg shadow-xl shadow-primary-500/30 hover:shadow-2xl transition-all duration-300"
                  aria-label="Get CampusConnect AI on Google Play"
                >
                  <Smartphone className="w-5 h-5" />
                  <span>Get it on Google Play</span>
                </motion.a>
              ) : (
                <div
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-xl text-base font-semibold text-gray-400 bg-white/5 border border-white/10 cursor-not-allowed select-none"
                  aria-label="Google Play coming soon"
                >
                  <Smartphone className="w-5 h-5 opacity-50" />
                  <span>Coming Soon on Google Play</span>
                </div>
              )}
            </div>

            {/* ============ APP INFO METADATA ============ */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Version', value: version },
                { label: 'File Size', value: fileSize },
                { label: 'Android', value: minAndroid },
                { label: 'Updated', value: lastUpdated },
              ].map((info) => (
                <div
                  key={info.label}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <div className="text-[10px] uppercase tracking-wider text-gray-500 font-medium mb-0.5">
                    {info.label}
                  </div>
                  <div className="text-sm font-semibold text-white">{info.value}</div>
                </div>
              ))}
            </div>

            {/* ============ DOWNLOAD INSTRUCTIONS ============ */}
            <div className="mb-8">
              <button
                onClick={() => setShowInstructions(!showInstructions)}
                className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                aria-expanded={showInstructions}
                aria-controls="download-instructions"
              >
                {showInstructions ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
                How to install
              </button>

              {showInstructions && (
                <motion.div
                  id="download-instructions"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <ol className="space-y-3">
                    {installSteps.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500/20 text-primary-300 text-xs font-bold flex items-center justify-center mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-sm text-gray-300">{step}</span>
                      </li>
                    ))}
                  </ol>

                  {/* Warning */}
                  <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                    <p className="text-xs text-amber-300 font-medium">
                      ⚠️ Only download CampusConnect AI APK from our official website.
                    </p>
                  </div>
                </motion.div>
              )}
            </div>

            {/* ============ SECURITY & TRUST ============ */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <h4 className="text-sm font-semibold text-white">
                  Official CampusConnect AI APK
                </h4>
              </div>

              <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                  <span>
                    Version: <span className="text-white font-medium">{version}</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                  <span>
                    Size: <span className="text-white font-medium">{fileSize}</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                  <span>
                    Updated:{' '}
                    <span className="text-white font-medium">{lastUpdated}</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/20 text-green-300 font-semibold">
                    Official
                  </span>
                  <span className="text-gray-500">Download</span>
                </div>
              </div>

              {/* SHA-256 */}
              <div className="mt-3 pt-3 border-t border-white/10">
                <div className="text-[10px] uppercase tracking-wider text-gray-500 font-medium mb-1">
                  campusconnect AI
                </div>
                {sha256 ? (
                  <code className="text-[10px] text-gray-300 break-all font-mono">
                    {sha256}
                  </code>
                ) : (
                  <p className="text-[11px] text-gray-500 italic">
                    Campusconnect AI will be provided with the official release.
                  </p>
                )}
              </div>
            </div>
          </motion.div>

          {/* ============ RIGHT COLUMN ============ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-end gap-10"
          >
            {/* ============ PHONE MOCKUP ============ */}
            <PhoneFrame>
              <div className="bg-gradient-to-b from-navy-500 to-navy-700 p-4 min-h-[480px] flex flex-col">
                {/* App Header */}
                <div className="flex items-center gap-2 mb-4">
                  <img
                    src="/logo-cap.png"
                    alt="CampusConnect AI"
                    className="w-6 h-6 rounded-lg"
                  />
                  <span className="text-white text-[10px] font-semibold">
                    CampusConnect AI
                  </span>
                </div>

                {/* Feature Cards Inside Phone */}
                <div className="flex-1 space-y-2.5">
                  {appFeatures.map((feature) => (
                    <div
                      key={feature.label}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/10 border border-white/10 backdrop-blur-sm"
                    >
                      <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-[10px] font-medium text-white">
                        {feature.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Version Badge */}
                <div className="mt-3 p-2 rounded-lg bg-white/5 border border-white/10 text-center">
                  <span className="text-[8px] text-gray-400">
                    v{version} • {fileSize}
                  </span>
                </div>
              </div>
            </PhoneFrame>

            {/* ============ QR CODE ============ */}
            <div className="text-center">
              <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-lg inline-block">
                <QRCodeCanvas
                  value={WEBSITE_URL}
                  size={140}
                  bgColor="#ffffff"
                  fgColor="#0F172A"
                  level="M"
                  aria-label={`QR code to download CampusConnect AI. Scan to visit ${WEBSITE_URL}`}
                />
              </div>
              <p className="text-sm text-gray-300 mt-3 font-medium">
                Scan to download CampusConnect AI
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

