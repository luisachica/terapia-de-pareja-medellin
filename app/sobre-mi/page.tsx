import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2 } from "lucide-react"

export default function SobreMi() {
  // Enlace de WhatsApp
  const whatsappLink = "https://wa.me/573137415861"

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
        <Image src="/mujer-psicologa-naturaleza.png" alt="Yolanda Osorio" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
          <div className="container mx-auto px-8">
            <p className="text-white max-w-xl text-lg md:text-xl italic">
              "Mi pasión por la psicología nace de mi deseo de conectar con las personas a un nivel profundo y ayudarles
              a encontrar significado y propósito en sus vidas. Creo en el poder de la relación terapéutica para
              fomentar el crecimiento y el cambio positivo."
            </p>
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="container mx-auto py-16 px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-12 leading-tight py-6">
          Soy psicóloga profesional con enfasis en{" "}
          <span className="bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text block mt-2">
            Terapia de Pareja, Sexualidad y Trauma
          </span>
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Mi enfoque terapéutico</h2>
              <p className="text-slate-600 mb-4">
                <strong className="text-pink-500">
                  Como psicóloga especializada en terapia de pareja y trauma, mi objetivo es acompañarte a ti y a tu
                  pareja en la construcción de una relación más sana y satisfactoria.
                </strong>
              </p>
              <p className="text-slate-600 mb-4">
                A través de herramientas terapéuticas basadas en la evidencia, te ayudaré a comprender las raíces de los
                conflictos, a sanar heridas del pasado y a desarrollar habilidades de comunicación y resolución de
                problemas más efectivas.
              </p>
              <p className="text-slate-600 mb-4">
                Si han experimentado un trauma individual o de pareja, te guiaré en un proceso de sanación que les
                permita fortalecer su vínculo y superar juntos los desafíos.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <h2 className="text-2xl font-semibold text-slate-800 mb-4">Mi formación académica</h2>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>Master en Sexología y Terapia de Pareja. Instituto Europeo de Formación y Consultoría</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Diplomada en Sexualidad Mirada Integral con Perspectiva de Género. Centro de Asesorías
                    Administrativas Psicológicas y Sexológicas CEPI.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Diplomada en Sexualidad Y Pareja, Mirada Integral con Perspectiva de Género. Centro de Asesorías
                    Administrativas Psicológicas y Sexológicas CEPI.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>Diplomada en Psicología Clínica Humanista- Existencial. Parinama.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>Diplomada en Perspectivas y Comprensiones Clínicas. Parinama.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>Diplomada en Cuerpo y Psicoterapia. Parinama.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>Entrenada en Método Gottman de Terapia de Pareja nivel I</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>Seminario Psicoterapia de Pareja. Parinama</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>
                    Diplomada en Psicología Clínica de la Sexualidad (Nivel de profundización) Corporación Internacional
                    Líderes Latinoamérica.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>Diplomatura en Estrategias de Intervención en Trauma. Centro Gestáltico de Medellín</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <span>Psicóloga Universidad Católica de Oriente</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <Image
                src="/psychologists-with-certificates.png"
                alt="Formación profesional"
                width={800}
                height={600}
                className="w-full h-auto rounded-xl"
              />
            </div>

            <div className="pt-4">
              <Button
                asChild
                className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white rounded-full px-8 py-6 text-lg shadow-md hover:shadow-lg transition-all"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Contáctame
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 text-center">
              <div className="w-40 h-40 mx-auto relative mb-6">
                <Image
                  src="/professional-psychologist-portrait.png"
                  alt="Yolanda Osorio"
                  width={200}
                  height={200}
                  className="rounded-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-semibold text-slate-800 mb-2">Yolanda Osorio</h2>
              <p className="text-xl text-pink-500 mb-6">Psicóloga y Terapeuta</p>
              <p className="text-slate-600 italic">
                "Mi pasión es facilitar el cambio positivo en la vida de las personas. Con empatía y profesionalismo, te
                acompañaré en tu camino hacia una vida más plena y satisfactoria."
              </p>

              <div className="mt-8 flex justify-center">
                <Image
                  src="/arbol-corazon-logo-terapia.png"
                  alt="Logo Terapia"
                  width={150}
                  height={150}
                  className="w-auto h-auto"
                />
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <h2 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
                Mi estrategia se basa en{" "}
                <span className="bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
                  4 niveles
                </span>
              </h2>

              <Tabs defaultValue="nivel1" className="w-full">
                <TabsList className="grid grid-cols-4 mb-8">
                  <TabsTrigger
                    value="nivel1"
                    className="data-[state=active]:bg-pink-100 data-[state=active]:text-pink-700"
                  >
                    Nivel #1
                  </TabsTrigger>
                  <TabsTrigger
                    value="nivel2"
                    className="data-[state=active]:bg-orange-100 data-[state=active]:text-orange-700"
                  >
                    Nivel #2
                  </TabsTrigger>
                  <TabsTrigger
                    value="nivel3"
                    className="data-[state=active]:bg-sky-100 data-[state=active]:text-sky-700"
                  >
                    Nivel #3
                  </TabsTrigger>
                  <TabsTrigger
                    value="nivel4"
                    className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700"
                  >
                    Nivel #4
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="nivel1" className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-800">Evaluación integral</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-pink-500 mb-2">Reconociendo los obstáculos</h4>
                      <p className="text-slate-600">
                        En este nivel, te ayudaré a identificar y comprender las dificultades que enfrentas en tu
                        relación. Desde la comunicación hasta los conflictos no resueltos, exploraremos juntos las
                        barreras que pueden obstaculizar tu conexión emocional.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-pink-500 mb-2">La importancia de la conciencia</h4>
                      <p className="text-slate-600">
                        Descubre cómo la conciencia de las dificultades puede ser el primer paso hacia una relación más
                        sólida. Analizaremos cómo reconocer y abordar los problemas puede abrir nuevas puertas hacia la
                        comprensión mutua y la resolución constructiva de conflictos.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="nivel2" className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-800">Comunicación y conflictos</h3>
                  <p className="text-slate-600">
                    En este nivel trabajaremos en desarrollar habilidades de comunicación efectiva y estrategias para
                    resolver conflictos de manera constructiva.
                  </p>
                </TabsContent>

                <TabsContent value="nivel3" className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-800">Intimidad, sexualidad y apego</h3>
                  <p className="text-slate-600">
                    Exploraremos la conexión emocional, la intimidad física y los patrones de apego que influyen en la
                    relación de pareja.
                  </p>
                </TabsContent>

                <TabsContent value="nivel4" className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-800">Proyección, acuerdos y expectativas</h3>
                  <p className="text-slate-600">
                    Trabajaremos en la construcción de una visión compartida del futuro, estableciendo acuerdos claros y
                    alineando expectativas.
                  </p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
