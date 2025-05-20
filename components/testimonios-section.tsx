"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonios = [
  {
    id: 1,
    nombre: "Laura y Karlos",
    texto:
      "Fue una experiencia muy cómoda! Nos sentimos capaces de hablar y resolver los conflictos de manera tranquila. Quedamos super satisfechos con lo que aprendimos y aprendimos a ser mejor pareja! Nos sirvió de mucho el acercamiento.",
    color: "pink",
  },
  {
    id: 2,
    nombre: "Cristian y Dana",
    texto:
      "Durante el tiempo que hemos trabajado hemos sentido una mejoría en nuestra relación de pareja y de manera individual. Tanto durante de las sesiones individuales como en pareja hemos aprendido a comunicarnos mejor, a experimentar nuestras emociones y transitarlas. Nos hemos sentido en un lugar seguro, en el que no se nos juzga y podemos hablar libremente. Después de las sesiones hemos aprendido a resolver nuestros problemas de manera asertiva",
    color: "orange",
  },
  {
    id: 3,
    nombre: "John Edison y Ana Maria",
    texto:
      "Nuestro tiempo en pareja después y durante la terapia ha sido mucho más comprensivo, más amable entre los dos. Pudimos descubrir el poder de la palabra y el silencio, nos dió sabiduría para actuar rápidamente y de la mejor manera para no permitir que las barreras entre los dos crezcan por falta de escucha...",
    color: "sky",
  },
]

export default function TestimoniosSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Función para determinar cuántos testimonios mostrar según el ancho de la pantalla
  const getSlidesToShow = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 640 ? 1 : 2
    }
    return 2 // Valor por defecto para SSR
  }

  const nextTestimonio = useCallback(() => {
    setActiveIndex((current) => {
      // Si estamos en el último testimonio, volvemos al primero
      return current >= testimonios.length - 1 ? 0 : current + 1
    })
  }, [])

  const prevTestimonio = useCallback(() => {
    setActiveIndex((current) => {
      // Si estamos en el primer testimonio, vamos al último
      return current <= 0 ? testimonios.length - 1 : current - 1
    })
  }, [])

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextTestimonio()
      }, 6000) // Cambiar cada 6 segundos

      return () => clearInterval(interval)
    }
  }, [isPaused, nextTestimonio])

  const getColorClasses = (color: string) => {
    switch (color) {
      case "pink":
        return {
          bg: "bg-pink-100",
          text: "text-pink-500",
        }
      case "orange":
        return {
          bg: "bg-orange-100",
          text: "text-orange-500",
        }
      case "sky":
        return {
          bg: "bg-sky-100",
          text: "text-sky-500",
        }
      default:
        return {
          bg: "bg-pink-100",
          text: "text-pink-500",
        }
    }
  }

  return (
    <section className="pt-16 pb-24 bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
              Pacientes satisfechos!
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Estos son algunos de los testimonios de los pacientes que atendieron nuestro servicio.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto px-6">
          {/* Carrusel - Enfoque simplificado */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {testimonios.map((testimonio, index) => {
              // Solo mostrar los testimonios actuales según el índice activo y el tamaño de pantalla
              const slidesToShow = getSlidesToShow()
              const isVisible = index >= activeIndex && index < activeIndex + slidesToShow

              // Si no es visible en el carrusel actual, no renderizar
              if (!isVisible) return null

              const colorClasses = getColorClasses(testimonio.color)

              return (
                <div key={testimonio.id} className="px-1">
                  <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 relative h-full">
                    <div
                      className={cn(
                        "absolute -top-5 -left-5 w-12 h-12 rounded-full flex items-center justify-center",
                        colorClasses.bg,
                      )}
                    >
                      <Quote className={cn("w-6 h-6", colorClasses.text)} />
                    </div>
                    <div className="flex items-center gap-4 mb-6 pt-2">
                      <Image
                        src="/placeholder.svg?height=60&width=60"
                        alt={testimonio.nombre}
                        width={60}
                        height={60}
                        className="rounded-full shadow-md"
                      />
                      <div>
                        <h3 className="font-semibold text-slate-800">{testimonio.nombre}</h3>
                        <p className="text-slate-500 text-sm">Pareja</p>
                      </div>
                      <div className="ml-auto flex text-yellow-400">★★★★★</div>
                    </div>
                    <p className="text-slate-600 mb-4 italic">"{testimonio.texto}"</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Controles de navegación */}
          <button
            onClick={prevTestimonio}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all z-10"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>
          <button
            onClick={nextTestimonio}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-all z-10"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="w-5 h-5 text-slate-600" />
          </button>

          {/* Indicadores */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonios.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  activeIndex === index
                    ? "bg-gradient-to-r from-pink-500 to-orange-400 w-8"
                    : "bg-slate-300 hover:bg-slate-400",
                )}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
