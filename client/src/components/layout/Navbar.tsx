import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary/20 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="hidden md:flex justify-between items-center py-2 text-xs text-gray-300 border-b border-white/10">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-3 h-3 text-accent" /> +58 4249079514
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-3 h-3 text-accent" /> info.orinocosupplyllc@gmail.com
            </span>
          </div>
          <div className="flex gap-4 uppercase font-display tracking-widest text-accent">
            <span>Confiabilidad</span>
            <span>&bull;</span>
            <span>Calidad</span>
            <span>&bull;</span>
            <span>Servicio</span>
          </div>
        </div>

        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 group" data-testid="link-home-logo">
            <div className="bg-accent p-1 rounded-sm">
              <div className="w-8 h-8 bg-white/10 flex items-center justify-center font-display font-bold text-2xl text-white">
                OS
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl leading-none tracking-tight">ORINOCO</span>
              <span className="font-display font-medium text-xs tracking-[0.2em] text-accent leading-none">SUPPLY LLC</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
                className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-accent relative py-1
                  ${location === link.href ? "text-accent" : "text-white"}`}
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
              <Button size="sm" className="bg-accent text-white hover:bg-accent/90 font-display uppercase tracking-wider" data-testid="button-cotizar">
                Cotizar
              </Button>
            </Link>
          </nav>

          <button 
            className="md:hidden text-white"
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
            className="md:hidden bg-primary border-t border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`text-lg font-display uppercase tracking-wide
                    ${location === link.href ? "text-accent" : "text-white"}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-accent text-white hover:bg-accent/90 mt-4">
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
