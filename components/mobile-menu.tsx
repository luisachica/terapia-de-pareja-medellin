"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import { useState } from "react"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const whatsappLink = "https://wa.me/573137415861" // Sin el + y sin espacios

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Menu">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-8 mt-12">
          <Link
            href="/"
            className="text-xl font-medium text-slate-800 hover:text-pink-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/sobre-mi"
            className="text-xl font-medium text-slate-800 hover:text-pink-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            Sobre mí
          </Link>
          <Link
            href="/contacto"
            className="text-xl font-medium text-slate-800 hover:text-pink-500 transition-colors"
            onClick={() => setOpen(false)}
          >
            Contacto
          </Link>
          <Button
            asChild
            className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all mt-6"
            onClick={() => setOpen(false)}
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Agenda tu cita!
            </a>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
