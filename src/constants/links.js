// Central Link Configuration for CampusConnect AI Marketing Site

export const GOOGLE_PLAY_STORE_URL = '#' // REPLACE THIS WITH YOUR REAL GOOGLE PLAY STORE URL
export const APPLE_APP_STORE_URL = null // iOS App Coming Soon

export const SOCIAL_LINKS = {
  tiktok: 'https://www.tiktok.com/@campusconnectai?is_from_webapp=1&sender_device=pc',
  instagram: 'https://www.instagram.com/campusconnect_ai?igsh=YWtsbGN0YzZqMjNo&utm_source=qr',
  facebook: 'https://www.facebook.com/campusconnectai',
  linkedin: 'https://www.linkedin.com/company/campusconnect-ai-app',
  youtube: 'https://www.youtube.com/@campusconnectai?si=U9XLH47ylJpi1z0B',
}

export const ADMIN_EMAIL = 'admin.campusconnectai@gmail.com'
export const SUPPORT_EMAIL = 'support.campusconnectai@gmail.com'
export const CONTACT_EMAIL = 'support.campusconnectai@gmail.com'

// ============================================================
// APP DOWNLOAD CONFIGURATION
// ============================================================
// CampusConnect AI APK Download Settings
// Update these values when a new APK version is released.
//
// APK HOSTING OPTIONS:
// Option A — Local (public/ directory): Place your APK at:
//   public/downloads/campusconnect-ai.apk
//   Final URL: https://campusconnect-ruddy.vercel.com/downloads/campusconnect-ai.apk
//   NOTE: Vercel has a 250 MB file size limit for the free plan.
//         If the APK exceeds this, use Option B below.
//
// Option B — External CDN: Set apkUrl to your hosted file URL.
//   Example: 'https://your-cdn.example.com/campusconnect-ai-v1.0.0.apk'
//
// When uploading a new APK version, only update the values below.
// Do NOT modify any component code.
// ============================================================

export const APP_DOWNLOAD_CONFIG = {
  /** URL to the APK file — local (public/downloads/) or external CDN */
  apkUrl: '/downloads/campusconnectAI.apk',

  /** Current app version */
  version: '1.0.0',

  /** APK file size (human-readable) */
  fileSize: '100 MB',

  /** Minimum supported Android version */
  minAndroid: '8.0+',

  /** Date when this version was last updated */
  lastUpdated: 'July 2026',

  /** Google Play Store URL — leave empty ('') if not yet published */
  googlePlayUrl: '',

  /** Set to true once the app is published on Google Play */
  isGooglePlayPublished: false,

  /**
   * SHA-256 checksum of the APK file for verification.
   * Leave empty ('') if not yet available.
   * Will be displayed in the security/trust section.
   */
  sha256: '',
}

/** Website URL used for QR code and canonical references */
export const WEBSITE_URL = 'https://campusconnect-ruddy.vercel.com'
