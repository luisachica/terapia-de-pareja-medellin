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
            className="text-xl font-medium text-foreground hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/sobre-mi"
            className="text-xl font-medium text-foreground hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Sobre mí
          </Link>
          <Link
            href="/contacto"
            className="text-xl font-medium text-foreground hover:text-primary transition-colors"
            onClick={() => setOpen(false)}
          >
            Contacto
          </Link>

          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground rounded-full px-6 py-3 md:px-8 md:py-4 text-sm md:text-base shadow-md hover:shadow-lg transition-all mt-4 text-center"
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
