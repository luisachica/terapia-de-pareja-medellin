import type React from "react"
import { Outfit } from "next/font/google"
import "./globals.css"
import { MessageCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import MobileMenu from "@/components/mobile-menu"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata = {
  title: "Terapia de Pareja Medellín | Yolanda Osorio",
  description:
    "Terapia de pareja en Medellín. Te proporcionamos las herramientas y el apoyo necesarios para que tu relación florezca.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-image-preview": "none",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Número de WhatsApp formateado correctamente para el enlace
  const whatsappLink = "https://wa.me/573137415861" // Sin el + y sin espacios

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
      </head>
      <body className={outfit.className}>
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
          <div className="container mx-auto py-6 px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <div className="text-slate-800 font-bold flex items-center">
                    <span className="text-3xl mr-2 bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
                      YO
                    </span>
                    <span className="text-lg">
                      YOLANDA
                      <br />
                      OSORIO
                    </span>
                  </div>
                </Link>
              </div>

              <nav className="hidden md:flex items-center space-x-12">
                <Link href="/" className="text-slate-700 hover:text-pink-500 transition-colors font-medium">
                  Home
                </Link>
                <Link href="/sobre-mi" className="text-slate-700 hover:text-pink-500 transition-colors font-medium">
                  Sobre mí
                </Link>
                <Link href="/contacto" className="text-slate-700 hover:text-pink-500 transition-colors font-medium">
                  Contacto
                </Link>
              </nav>

              <div className="flex items-center space-x-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
                <Button
                  asChild
                  className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    Agenda tu cita!
                  </a>
                </Button>
                <div className="md:hidden">
                  <MobileMenu />
                </div>
              </div>
            </div>
          </div>
        </header>

        {children}

        <footer className="bg-gradient-to-r from-slate-50 to-sky-50 py-20">
          <div className="container mx-auto px-8">
            <div className="flex justify-center mb-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="text-slate-800 font-bold flex items-center">
                    <span className="text-3xl mr-2 bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
                      YO
                    </span>
                    <span className="text-lg">
                      YOLANDA
                      <br />
                      OSORIO
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-12 mb-10">
              <Link href="/" className="text-slate-700 hover:text-pink-500 transition-colors font-medium">
                Home
              </Link>
              <Link href="/sobre-mi" className="text-slate-700 hover:text-pink-500 transition-colors font-medium">
                Sobre mí
              </Link>
              <Link href="/contacto" className="text-slate-700 hover:text-pink-500 transition-colors font-medium">
                Contacto
              </Link>
            </div>

            <div className="border-t border-slate-200 mt-8 pt-8 text-center text-slate-600">
              <p>© {new Date().getFullYear()} Terapia de Pareja Medellín. Todos los derechos reservados.</p>
              <div className="flex justify-center mt-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 transition-colors bg-white p-3 rounded-full shadow-sm"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
