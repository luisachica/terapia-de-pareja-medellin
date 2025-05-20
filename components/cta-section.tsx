import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, Calendar } from "lucide-react"
import Link from "next/link"

export default function CtaSection() {
  // Número de WhatsApp formateado correctamente para el enlace
  const whatsappNumber = "+57 313 7415861"
  const whatsappLink = `https://wa.me/573137415861` // Sin el + y sin espacios

  return (
    <section id="contacto" className="py-24 bg-gradient-to-b from-white to-sky-50">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="py-8 px-6 sm:px-10 md:py-12 md:px-12 bg-gradient-to-br from-pink-500 to-orange-400 text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">¿Listo para fortalecer tu relación?</h2>
              <p className="mb-8 text-white/90">
                Da el primer paso hacia una relación más saludable y satisfactoria. Agenda tu cita hoy mismo.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MessageCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    WhatsApp: {whatsappNumber}
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="break-all">contacto@terapiaparejamedellin.com</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 bg-white">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Agenda tu cita</h3>
              <div className="space-y-4">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white rounded-full py-6 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Calendar className="w-5 h-5 mr-2" />
                    Cita presencial
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="w-full border-pink-200 text-pink-500 hover:bg-pink-50 hover:text-pink-600 hover:border-pink-300 rounded-full py-6 transition-all flex items-center justify-center gap-2"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Calendar className="w-5 h-5 mr-2" />
                    Cita virtual
                  </a>
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  className="w-full text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-full py-6 transition-all flex items-center justify-center gap-2"
                >
                  <Link href="/contacto">
                    <Mail className="w-5 h-5 mr-2" />
                    Enviar mensaje
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
