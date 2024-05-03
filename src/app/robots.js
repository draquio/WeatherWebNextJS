export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://clima-draquio.vercel.app/sitemap.xml',
  }
}