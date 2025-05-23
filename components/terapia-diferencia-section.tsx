import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function TerapiaDiferenciaSection() {
  const whatsappLink = "https://wa.me/573137415861"

  return (
    <section className="py-24 relative overflow-hidden bg-primary text-primary-foreground">
      {/* Radial overlay opcional para textura */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-background via-transparent to-transparent"></div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">La terapia puede hacer la diferencia</h2>
            <p className="mb-8 text-primary-foreground/90 text-lg">
              No es falta de amor… es falta de conexión emocional. La terapia de pareja puede ayudarte a reconectar y encontrar nuevas formas de amarte.

            </p>
            <Button
              asChild
              className="text-xl bg-accent text-primary-foreground hover:bg-muted rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Comienza hoy
              </a>
            </Button>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl transform md:translate-x-10 p-4 bg-card">
            <Image
              src="/images/pareja-feliz.jpeg"
              alt="Pareja feliz después de terapia"
              width={800}
              height={533}
              className="w-full h-auto rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
