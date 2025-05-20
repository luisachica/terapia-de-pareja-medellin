import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PhoneIcon, MapPinIcon, MessageCircle, Instagram } from "lucide-react"
import Image from "next/image"

export default function Contacto() {
  // Enlace de WhatsApp
  const whatsappLink = "https://wa.me/573137415861"
  const whatsappNumber = "+57 313 7415861"
  const email = "yolioshe97@gmail.com"
  const instagramUser = "@sinapser"

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <Image src="/contactame-hero.png" alt="Contáctame" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
          <div className="container mx-auto px-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Contáctame!</h1>
            <p className="text-white/90 text-xl">¿Quieres agendar una cita?</p>
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="container mx-auto py-16 px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Primera columna - WhatsApp */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 h-full">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">Escríbeme a whatsapp!</h2>
            <div className="border-b border-slate-200 w-full mb-6"></div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-pink-500 font-bold">•</span>
                <span className="text-slate-600">¿Tienes alguna pregunta? ¡Escríbenos por WhatsApp!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-500 font-bold">•</span>
                <span className="text-slate-600">¡Agenda tu cita por WhatsApp!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-500 font-bold">•</span>
                <span className="text-slate-600">¿Necesitas ayuda? ¡WhatsAppea ahora!</span>
              </li>
            </ul>

            <Button
              asChild
              className="w-full bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white rounded-full py-6 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 mb-6"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contáctame!
              </a>
            </Button>

            <div className="flex items-center gap-3 text-slate-600">
              <MessageCircle className="w-5 h-5 text-green-600" />
              <span>@yolanda_osorio</span>
            </div>
          </div>

          {/* Segunda columna - Dirección */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 h-full">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">Dirección del consultorio:</h2>
            <div className="border-b border-slate-200 w-full mb-6"></div>

            <div className="rounded-xl overflow-hidden mb-6 h-64 relative">
              <Image src="/mapa-consultorio.png" alt="Mapa del consultorio" fill className="object-cover" />
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                <span className="text-slate-600">Cra. 73 #45f23 a 45f, Laureles - Estadio</span>
              </div>

              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-pink-500" />
                <span className="text-slate-600">{instagramUser}</span>
              </div>
            </div>
          </div>

          {/* Tercera columna - Teléfono */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 h-full">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">Mi número de teléfono:</h2>
            <div className="border-b border-slate-200 w-full mb-6"></div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-pink-500 font-bold">•</span>
                <span className="text-slate-600">¿Prefieres llamarnos?</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-500 font-bold">•</span>
                <span className="text-slate-600">Atención personalizada por teléfono</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-500 font-bold">•</span>
                <span className="text-slate-600">Estamos para escucharte.</span>
              </li>
            </ul>

            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <PhoneIcon className="w-8 h-8 text-green-600" />
              </div>
            </div>

            <a
              href={`tel:${whatsappNumber.replace(/\s+/g, "")}`}
              className="block text-center text-2xl font-bold text-slate-800 hover:text-pink-500 transition-colors"
            >
              {whatsappNumber}
            </a>
          </div>
        </div>

        {/* Sección de correo y cita */}
        <div className="mt-16 rounded-3xl overflow-hidden">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 py-12 px-8 md:px-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Mi correo electrónico:</h2>
                <a href={`mailto:${email}`} className="text-2xl text-white hover:underline">
                  {email}
                </a>
              </div>

              <div className="text-white">
                <blockquote className="text-xl italic">
                  «La única persona que puede hacerte sentir inferior es tú mismo.»
                  <footer className="mt-2 text-white/80">— Eleanor Roosevelt.</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Envíame un{" "}
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">mensaje</span>
          </h2>

          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 mb-1">
                    Nombre
                  </label>
                  <Input id="nombre" placeholder="Tu nombre" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Tu email" />
                </div>
              </div>
              <div>
                <label htmlFor="asunto" className="block text-sm font-medium text-slate-700 mb-1">
                  Asunto
                </label>
                <Input id="asunto" placeholder="Asunto del mensaje" />
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-slate-700 mb-1">
                  Mensaje
                </label>
                <Textarea id="mensaje" placeholder="Tu mensaje" rows={5} />
              </div>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white rounded-full py-6 shadow-md hover:shadow-lg transition-all"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Enviar Mensaje
                </a>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
