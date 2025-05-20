import { Button } from "@/components/ui/button"
import { Calendar, Users, BookOpen } from "lucide-react"

export default function ServicesSection() {
  // Enlace de WhatsApp
  const whatsappLink = "https://wa.me/573137415861"

  return (
    <section id="servicios" className="py-24 bg-gradient-to-b from-white to-sky-50">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
              Mis servicios
            </span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Ofrecemos servicios tanto precenciales como virtuales para adaptarnos a tus necesidades
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
          <Button
            asChild
            className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white rounded-full px-8 py-6 text-lg shadow-md hover:shadow-lg transition-all"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Agenda tu cita presencial
            </a>
          </Button>
          <Button
            asChild
            className="bg-white text-slate-800 hover:bg-slate-50 border border-slate-200 rounded-full px-8 py-6 text-lg shadow-md hover:shadow-lg transition-all"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Agenda tu cita virtual
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all group">
            <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-100 transition-colors">
              <Users className="w-8 h-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Consultas individuales y de pareja</h3>
            <p className="text-slate-600 mb-6">
              Sesiones personalizadas para mejorar la comunicación y resolver conflictos en tu relación.
            </p>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-pink-200 text-pink-500 hover:bg-pink-50 hover:text-pink-600 hover:border-pink-300 transition-all"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Conoce más!
              </a>
            </Button>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all group">
            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors">
              <BookOpen className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Talleres</h3>
            <p className="text-slate-600 mb-6">
              Espacios de aprendizaje grupal donde adquirirás herramientas prácticas para mejorar tus relaciones.
            </p>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-orange-200 text-orange-500 hover:bg-orange-50 hover:text-orange-600 hover:border-orange-300 transition-all"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Conoce más!
              </a>
            </Button>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all group">
            <div className="w-16 h-16 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-100 transition-colors">
              <Calendar className="w-8 h-8 text-sky-500" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Asesorías psicológicas</h3>
            <p className="text-slate-600 mb-6">
              Orientación profesional para situaciones específicas que requieren atención inmediata.
            </p>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-sky-200 text-sky-500 hover:bg-sky-50 hover:text-sky-600 hover:border-sky-300 transition-all"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Conoce más!
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
