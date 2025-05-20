import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

export default function MetodologiaSection() {
  // Enlace de WhatsApp
  const whatsappLink = "https://wa.me/573137415861"

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
                Mi metodología
              </span>{" "}
              se basa en 4 niveles
            </h2>
            <p className="text-slate-600 mb-6">
              Todo el proceso se{" "}
              <strong className="text-pink-500">adapta a las necesidades específicas de cada pareja</strong>, incluyendo
              de acuerdo con sus desafíos y objetivos. Además, se complementa con herramientas y ejercicios
              implementados individualmente y de la pareja.
            </p>
            <p className="text-slate-600 mb-6">Para ello se trabajan en cuatro los siguientes niveles:</p>
            <div className="mt-8">
              <Button
                asChild
                className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white rounded-full px-8 py-6 shadow-md hover:shadow-lg transition-all"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Conoce más!
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-pink-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800">1. Evaluación inicial</h3>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800">2. Comunicación, conflictos</h3>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-sky-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800">3. Intimidad, sexualidad, apego</h3>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-purple-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800">4. Proyección, acuerdos y expectativas</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
