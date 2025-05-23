import Image from "next/image"
import { Heart, Brain, Sparkles, HeartIcon } from "lucide-react"

export default function DificultadesSection() {
  return (
    <section className="py-24 bg-background text-foreground">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            ¿Estás pasando por dificultades en tu relación?
          </h2>
          <p className="text-muted-foreground">
            Tu relación merece autenticidad conexión, evolución y ¿por qué no? otra oportunidad
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {/* Problemas de pareja */}
          <div className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-border">
            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-accent-foreground flex-shrink-0 shadow-md">
                <Heart className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Problemas de pareja</h3>
                <p className="text-muted-foreground mb-3">
                  <strong className="text-accent-foreground">
                    ¿Sientes que la conexión con tu pareja se ha debilitado?
                  </strong>{" "}
                  Los problemas de comunicación son una de las principales causas de conflictos en las relaciones.
                  Cuando la comunicación entre ustedes se vuelve difícil, pueden aparecer malentendidos, discusiones
                  frecuentes y distanciamiento.
                </p>
              </div>
            </div>
          </div>

          {/* Depresión y ansiedad */}
          <div className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-border">
            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-secondary-foreground flex-shrink-0 shadow-md">
                <Brain className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Depresión y ansiedad</h3>
                <p className="text-muted-foreground mb-3">
                  <strong className="text-secondary-foreground">
                    ¿Te sientes triste, sin energía o desconectado?
                  </strong>{" "}
                  La depresión puede manifestarse como una sensación constante de tristeza, pérdida de interés en
                  actividades que antes disfrutabas, cambios en el apetito y dificultad para dormir.
                </p>
              </div>
            </div>
          </div>

          {/* Trauma */}
          <div className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-border">
            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground flex-shrink-0 shadow-md">
                <Sparkles className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Trauma</h3>
                <p className="text-muted-foreground mb-3">
                  <strong className="text-primary">
                    ¿Has vivido experiencias dolorosas que siguen afectándote?
                  </strong>{" "}
                  Las experiencias traumáticas pueden manifestarse de diversas formas y afectar tu vida cotidiana. A
                  través de la terapia, puedes aprender a procesar estas experiencias.
                </p>
              </div>
            </div>
          </div>

          {/* Sexualidad */}
          <div className="bg-card rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-border">
            <div className="flex gap-6">
              <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center text-foreground flex-shrink-0 shadow-md">
                <HeartIcon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Sexualidad</h3>
                <p className="text-muted-foreground mb-3">
                  <strong className="text-foreground">
                    La sexualidad es una parte importante de la vida.
                  </strong>{" "}
                  Problemas en esta área pueden generar frustración, insatisfacción y conflictos en la pareja. Las
                  dificultades en la comunicación con tu pareja, la falta de deseo sexual puede provocar ansiedad en la
                  intimidad.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <div className="w-40 h-40 relative">
            <Image
              src="/images/revolucion-en-pareja-logo.png"
              alt="Revolución en Pareja"
              width={160}
              height={160}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
