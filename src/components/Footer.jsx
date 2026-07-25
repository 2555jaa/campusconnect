import { Link, useLocation } from 'react-router-dom'
import { Instagram, Facebook, Linkedin, Youtube, ArrowUpRight, Mail } from 'lucide-react'
import { SOCIAL_LINKS, ADMIN_EMAIL, SUPPORT_EMAIL } from '../constants/links'

function TikTokIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-2.888 2.89 2.894 2.894 0 0 1-2.896-2.89 2.892 2.892 0 0 1 2.896-2.891c.36 0 .707.067 1.03.187V9.405a6.37 6.37 0 0 0-1.03-.082 6.335 6.335 0 0 0-6.336 6.335A6.335 6.335 0 0 0 9.5 22a6.335 6.335 0 0 0 6.335-6.335V9.049a8.17 8.17 0 0 0 4.754 1.493V7.086a4.83 4.83 0 0 1-1.000-.4z" />
    </svg>
  )
}

export default function Footer() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  const handleNavClick = (e, href) => {
    if (href.startsWith('#') && isHome) {
      e.preventDefault()
      const el = document.querySelector(href)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="bg-navy-500 text-white border-t border-navy-400/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2">
              <img
                src="/logo.jpg"
                alt="CampusConnect AI Logo"
                className="h-10 w-auto object-contain rounded-xl bg-white p-1"
              />
            </Link>

            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              "Your Campus. Your Community. Your Future."
            </p>
            <p className="text-xs text-gray-500 max-w-sm">
              Empowering university students with AI-powered career tools, project teammate discovery, skill roadmaps, and curated opportunities.
            </p>

            {/* Email Contact Box */}
            <div className="pt-2 space-y-1.5 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-primary-400" />
                <span>Support: </span>
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-white hover:text-cyan-400 transition-colors font-medium">
                  {SUPPORT_EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                <span>Admin: </span>
                <a href={`mailto:${ADMIN_EMAIL}`} className="text-white hover:text-purple-300 transition-colors font-medium">
                  {ADMIN_EMAIL}
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              {[
                { name: 'Instagram', icon: Instagram, href: SOCIAL_LINKS.instagram },
                { name: 'TikTok', icon: TikTokIcon, href: SOCIAL_LINKS.tiktok },
                { name: 'Facebook', icon: Facebook, href: SOCIAL_LINKS.facebook },
                { name: 'LinkedIn', icon: Linkedin, href: SOCIAL_LINKS.linkedin },
                { name: 'YouTube', icon: Youtube, href: SOCIAL_LINKS.youtube },
              ].map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold text-sm text-white uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a href={isHome ? '#features' : '/'} onClick={(e) => handleNavClick(e, '#features')} className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href={isHome ? '#how-it-works' : '/'} onClick={(e) => handleNavClick(e, '#how-it-works')} className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href={isHome ? '#opportunities' : '/'} onClick={(e) => handleNavClick(e, '#opportunities')} className="hover:text-white transition-colors">
                  Opportunities
                </a>
              </li>
              <li>
                <a href={isHome ? '#download' : '/'} onClick={(e) => handleNavClick(e, '#download')} className="hover:text-white transition-colors">
                  Download App
                </a>
              </li>
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="font-semibold text-sm text-white uppercase tracking-wider mb-4">Community</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <a href={isHome ? '#community' : '/'} onClick={(e) => handleNavClick(e, '#community')} className="hover:text-white transition-colors">
                  Student Hub
                </a>
              </li>
              <li>
                <a href={isHome ? '#about' : '/'} onClick={(e) => handleNavClick(e, '#about')} className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href={isHome ? '#hero' : '/'} onClick={(e) => handleNavClick(e, '#hero')} className="hover:text-white transition-colors">
                  Career Guidance
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-sm text-white uppercase tracking-wider mb-4">Legal & Support</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Privacy Policy</span>
                  <ArrowUpRight className="w-3 h-3 opacity-50" />
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition-colors flex items-center gap-1">
                  <span>Terms of Service</span>
                  <ArrowUpRight className="w-3 h-3 opacity-50" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 CampusConnect AI. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Designed for university students everywhere. Powered by AI.
          </p>
        </div>
      </div>
    </footer>
  )
}
