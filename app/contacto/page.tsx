"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PhoneIcon, MapPinIcon, MessageCircle, Instagram, Mail, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Contacto() {
  // Enlace de WhatsApp
  const whatsappLink = "https://wa.me/573137415861"
  const whatsappNumber = "+57 313 7415861"
  const email = "yolioshe97@gmail.com"
  const instagramUser = "@sinapser"

  // Estado para controlar la animación de entrada
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden">
        <Image src="/contactame-hero.png" alt="Contáctame" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent flex items-center">
          <div className="container mx-auto px-8">
            <div
              className={`transition-all duration-700 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Contáctame
              </h1>
              <p className="text-white/90 text-xl max-w-xl">
                ¿Quieres agendar una cita o tienes alguna pregunta? Estoy aquí para ayudarte.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Formas decorativas */}
      <div className="absolute top-[400px] right-0 w-64 h-64 bg-pink-100 rounded-full opacity-20 blur-3xl -z-10"></div>
      <div className="absolute top-[700px] left-0 w-96 h-96 bg-purple-100 rounded-full opacity-20 blur-3xl -z-10"></div>

      {/* Contenido Principal */}
      <div className="container mx-auto py-20 px-4 md:px-8 relative">
        <div
          className={`text-center mb-16 transition-all duration-700 delay-300 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">
              Diferentes formas
            </span>{" "}
            de contactarme
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Elige la opción que te resulte más cómoda para comunicarte conmigo. Estoy disponible para atenderte.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Primera columna - WhatsApp */}
          <div
            className={`bg-white rounded-3xl p-8 shadow-xl border border-slate-100 h-full transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 delay-100 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-green-400 flex items-center justify-center text-white flex-shrink-0 shadow-md">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-semibold text-slate-800">Escríbeme a WhatsApp</h2>
            </div>
            <div className="border-b border-slate-200 w-full mb-6"></div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">•</span>
                <span className="text-slate-600">¿Tienes alguna pregunta? ¡Escríbenos!</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">•</span>
                <span className="text-slate-600">¡Agenda tu cita!</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500 font-bold text-xl">•</span>
                <span className="text-slate-600">¿Necesitas ayuda? ¡WhatsAppea ahora!</span>
              </li>
            </ul>

            <Button
              asChild
              className="w-full bg-gradient-to-r from-green-500 to-green-400 hover:from-green-600 hover:to-green-500 text-white rounded-full py-6 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 mb-8 group"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contáctame
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <div className="flex items-center gap-3 text-slate-600 justify-center">
              <MessageCircle className="w-5 h-5 text-green-600" />
              <span className="font-medium">@yolanda_osorio</span>
            </div>
          </div>

          {/* Segunda columna - Dirección */}
          <div
            className={`bg-white rounded-3xl p-8 shadow-xl border border-slate-100 h-full transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 delay-200 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-400 flex items-center justify-center text-white flex-shrink-0 shadow-md">
                <MapPinIcon className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-semibold text-slate-800">Dirección del consultorio</h2>
            </div>
            <div className="border-b border-slate-200 w-full mb-6"></div>

            <div className="rounded-xl overflow-hidden mb-8 h-64 relative shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2124445750146!2d-75.59324!3d6.2442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80d7cbf%3A0x42137cfcc7b5e610!2sLaureles%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1715553600000!5m2!1ses!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
                title="Ubicación del consultorio"
              ></iframe>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                <span className="text-slate-600 font-medium">Cra. 73 #45f23 a 45f, Laureles - Estadio, Medellín</span>
              </div>

              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-100">
                <Instagram className="w-5 h-5 text-pink-500" />
                <span className="text-slate-600 font-medium">{instagramUser}</span>
              </div>
            </div>
          </div>

          {/* Tercera columna - Teléfono */}
          <div
            className={`bg-white rounded-3xl p-8 shadow-xl border border-slate-100 h-full transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 delay-300 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-400 flex items-center justify-center text-white flex-shrink-0 shadow-md">
                <PhoneIcon className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-semibold text-slate-800">Mi número de teléfono</h2>
            </div>
            <div className="border-b border-slate-200 w-full mb-6"></div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-purple-500 font-bold text-xl">•</span>
                <span className="text-slate-600">¿Prefieres llamarnos?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 font-bold text-xl">•</span>
                <span className="text-slate-600">Atención personalizada por teléfono</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-500 font-bold text-xl">•</span>
                <span className="text-slate-600">Estamos para escucharte.</span>
              </li>
            </ul>

            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center shadow-md">
                <PhoneIcon className="w-10 h-10 text-purple-600" />
              </div>
            </div>

            <a
              href={`tel:${whatsappNumber.replace(/\s+/g, "")}`}
              className="block text-center text-2xl font-bold text-slate-800 hover:text-purple-500 transition-colors"
            >
              {whatsappNumber}
            </a>
          </div>
        </div>

        {/* Sección de correo y cita */}
        <div
          className={`mt-20 rounded-3xl overflow-hidden shadow-xl transition-all duration-700 delay-400 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 py-12 px-8 md:px-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-semibold text-white">Mi correo electrónico:</h2>
                </div>
                <a href={`mailto:${email}`} className="text-2xl text-white hover:underline font-medium ml-14">
                  {email}
                </a>
              </div>

              <div className="text-white">
                <blockquote className="text-xl italic relative pl-6 border-l-4 border-white/30">
                  «La única persona que puede hacerte sentir inferior es tú mismo.»
                  <footer className="mt-2 text-white/80">— Eleanor Roosevelt.</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Horarios de atención */}
        <div
          className={`mt-20 transition-all duration-700 delay-500 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6 text-center">Horarios de atención</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-slate-700 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-pink-500 rounded-full mr-2"></span>
                  Consultas presenciales
                </h3>
                <ul className="space-y-2 text-slate-600 ml-5">
                  <li className="flex justify-between">
                    <span>Lunes a Viernes:</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sábados:</span>
                    <span className="font-medium">9:00 AM - 1:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Domingos:</span>
                    <span className="font-medium">Cerrado</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-slate-700 mb-4 flex items-center">
                  <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                  Consultas virtuales
                </h3>
                <ul className="space-y-2 text-slate-600 ml-5">
                  <li className="flex justify-between">
                    <span>Lunes a Viernes:</span>
                    <span className="font-medium">7:00 AM - 8:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sábados:</span>
                    <span className="font-medium">9:00 AM - 3:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Domingos:</span>
                    <span className="font-medium">Previa cita</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario de contacto */}
        <div
          className={`mt-20 transition-all duration-700 delay-600 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">
            Envíame un{" "}
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 text-transparent bg-clip-text">mensaje</span>
          </h2>

          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-10 shadow-xl border border-slate-100 transform transition-all duration-300 hover:shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 mb-2">
                    Nombre
                  </label>
                  <Input
                    id="nombre"
                    placeholder="Tu nombre"
                    className="rounded-xl py-6 border-slate-200 focus:border-pink-300 focus:ring-pink-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Tu email"
                    className="rounded-xl py-6 border-slate-200 focus:border-pink-300 focus:ring-pink-200"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="asunto" className="block text-sm font-medium text-slate-700 mb-2">
                  Asunto
                </label>
                <Input
                  id="asunto"
                  placeholder="Asunto del mensaje"
                  className="rounded-xl py-6 border-slate-200 focus:border-pink-300 focus:ring-pink-200"
                />
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-slate-700 mb-2">
                  Mensaje
                </label>
                <Textarea
                  id="mensaje"
                  placeholder="Tu mensaje"
                  rows={5}
                  className="rounded-xl border-slate-200 focus:border-pink-300 focus:ring-pink-200"
                />
              </div>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white rounded-full py-6 shadow-md hover:shadow-lg transition-all mt-4 group"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Enviar Mensaje
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
