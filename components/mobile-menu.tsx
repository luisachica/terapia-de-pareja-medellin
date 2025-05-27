"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import { useState } from "react"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const whatsappLink = "https://wa.me/573137415861"

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Abrir menú"
          className="text-foreground hover:text-primary"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[280px] sm:w-[320px] bg-background text-foreground"
      >
        <nav className="flex flex-col gap-8 mt-12">
          <Link
            href="/"
            className="text-foreground hover:text-primary-foreground transition-colors font-medium"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/sobre-mi"
            className="text-foreground hover:text-primary-foreground transition-colors font-medium"
            onClick={() => setOpen(false)}
          >
            Sobre mí
          </Link>
          <Link
            href="/contacto"
            className="text-foreground hover:text-primary-foreground transition-colors font-medium"
            onClick={() => setOpen(false)}
          >
            Contacto
          </Link>

          <Button
            asChild
            className="bg-gradient-to-r from-primary-foreground to-accent text-white hover:opacity-90 rounded-full px-8 py-6 text-lg shadow-md hover:shadow-lg transition-all"
            onClick={() => setOpen(false)}
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Agenda tu cita
            </a>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
