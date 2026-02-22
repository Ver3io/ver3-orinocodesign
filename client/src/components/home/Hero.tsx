import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-gray-900 flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Almacen Industrial" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-0.5 w-12 bg-accent" />
            <span className="text-accent font-display font-bold tracking-[0.2em] uppercase text-sm" data-testid="text-hero-subtitle">
              Suministros Industriales
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white uppercase leading-[0.9] tracking-tight mb-8"
            data-testid="text-hero-title"
          >
            Orinoco <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Supply LLC</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-xl mb-10 leading-relaxed font-light"
            data-testid="text-hero-description"
          >
            Empresa especializada en el suministro de una amplia gama de insumos industriales. Confiabilidad, calidad, precios competitivos y servicio al cliente excepcional.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/marcas">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-display uppercase tracking-widest px-8 py-6 text-lg h-auto rounded-none clip-diagonal" data-testid="button-ver-marcas">
                Ver Marcas
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary font-display uppercase tracking-widest px-8 py-6 text-lg h-auto rounded-none group" data-testid="button-contactenos">
                Contáctenos <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 right-0 w-1/3 h-2 bg-accent hidden md:block" />
      <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-white/20 m-8 hidden md:block" />
    </section>
  );
}
