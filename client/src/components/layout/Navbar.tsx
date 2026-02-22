import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@assets/PHOTO-2026-02-19-11-56-02_1771520447566.jpg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/marcas", label: "Marcas" },
    { href: "/about", label: "Nosotros" },
    { href: "/contact", label: "Contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-white text-primary">
      <div className="container mx-auto px-4">
        <div className="hidden md:flex justify-between items-center py-2 text-xs text-gray-600 border-b border-gray-200">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-3 h-3 text-accent" /> +58 4249079514
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-3 h-3 text-accent" /> info.orinocosupplyllc@gmail.com
            </span>
          </div>
          <div className="flex gap-4 uppercase font-display tracking-widest text-primary/80">
            <span>Confiabilidad</span>
            <span>&bull;</span>
            <span>Calidad</span>
            <span>&bull;</span>
            <span>Servicio</span>
          </div>
        </div>

        <div className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center group" data-testid="link-home-logo">
            <img
              src={logoImg}
              alt="Orinoco Supply LLC"
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-accent relative py-1
                  ${location === link.href ? "text-accent" : "text-gray-700"}`}
              >
                {link.label}
                {location === link.href && (
                  <motion.div 
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  />
                )}
              </Link>
            ))}
            <Link href="/contact">
              <Button size="sm" className="bg-primary text-white hover:bg-primary/90 font-display uppercase tracking-wider" data-testid="button-cotizar">
                Cotizar
              </Button>
            </Link>
          </nav>

          <button 
            className="md:hidden text-primary"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-mobile-menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`text-lg font-display uppercase tracking-wide
                    ${location === link.href ? "text-accent" : "text-gray-700"}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-primary text-white hover:bg-primary/90 mt-4">
                  Cotizar
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
