import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

export const metadata = {
  metadataBase: new URL('https://clima-draquio.vercel.app/'),
  title: "El Clima - Ing. Sergio Mercado",
  description: "Mira el clima en cualquier parte del mundo de cualquier ciudad del mundo",
  openGraph: {
    title: 'El Clima - Ing. Sergio Mercado',
    description: 'Mira el clima en cualquier parte del mundo de cualquier ciudad del mundo',
    url: 'https://clima-draquio.vercel.app/',
    siteName: 'El Clima',
    images: [
      {
        url: 'weather_m.webp', 
        width: 800,
        height: 600,
        alt: "El Clima - Ing. Sergio Mercado"
      },
      {
        url: 'weather_b.webp',
        width: 1800,
        height: 1600,
        alt: 'El Clima - Ing. Sergio Mercado',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'El Clima - Ing. Sergio Mercado',
    description: 'Mira el clima en cualquier parte del mundo de cualquier ciudad del mundo',
    creator: 'Ing. Sergio Mercado',
    images: ['weather_m.webp'], 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center h-[100%] bg-gradient-to-b from-[var(--color-bg-from)] to-[var(--color-bg-to)]">
        <header className="max-w-4xl mt-8 w-full md:mb-0 mb-6">
          <Nav />
        </header>
        <main className="w-full max-w-4xl px-4 text-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
