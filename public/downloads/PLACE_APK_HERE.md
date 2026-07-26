# APK Placement Instructions

## 1. Place your APK file in this folder

Copy your `campusconnect-ai.apk` file into this directory:

```
public/downloads/
```

## 2. File naming

The expected filename (as configured in `src/constants/links.js`) is:

```
campusconnect-ai.apk
```

You can rename your APK to match, or update the `apkUrl` value in `src/constants/links.js`.

## 3. Final URL after deployment

```
https://campusconnect-ruddy.vercel.com/downloads/campusconnect-ai.apk
```

## 4. Vercel size limit

Vercel's free plan has a **250 MB file limit** per deployment file. If your APK is larger:
- Host the APK on an external CDN (Google Drive, Dropbox, GitHub Releases, etc.)
- Update `apkUrl` in `src/constants/links.js` to point to the external URL

## 5. Updating the APK later

When you have a new version:
1. Replace the APK file here
2. Update version info in `src/constants/links.js`
3. Redeploy to Vercel

