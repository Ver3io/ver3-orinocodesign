import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ShieldCheck, DollarSign, Handshake, Award } from "lucide-react";
import { motion } from "framer-motion";

const brands = [
  "3M", "SKF", "NSK", "Stanley", "Caterpillar",
  "OEM", "Dewalt", "Makita", "Truper", "Siemens",
  "GE", "Honeywell", "Bosch", "Timken", "Kobold Instruments"
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />

        <section className="py-24 bg-white relative overflow-hidden">
          <div className="industrial-grid absolute inset-0 opacity-30 pointer-events-none" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                { 
                  icon: ShieldCheck, 
                  title: "Confiabilidad y Calidad", 
                  desc: "Enfoque en la confiabilidad y la calidad." 
                },
                { 
                  icon: DollarSign, 
                  title: "Precios Competitivos", 
                  desc: "Precios competitivos para satisfacer las diversas necesidades de nuestros clientes." 
                },
                { 
                  icon: Handshake, 
                  title: "Servicio al Cliente Excepcional", 
                  desc: "Contacto directo con vendedores, distribuidores y fabricantes de diferentes marcas." 
                }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-gray-50 p-8 border-l-4 border-accent hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-primary text-white flex items-center justify-center mb-6 rounded-sm">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-primary mb-3 uppercase" data-testid={`text-feature-title-${i}`}>{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <SectionHeading title="Nuestras Marcas" subtitle="Marcas con las que Trabajamos" />
              <Link href="/marcas" className="hidden md:block">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-display uppercase tracking-widest rounded-none" data-testid="button-ver-todas">
                  Ver Todas las Marcas
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {brands.map((brand, i) => (
                <motion.div
                  key={brand}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="bg-white border border-gray-100 p-6 flex items-center justify-center text-center rounded-sm"
                  data-testid={`brand-home-${brand.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <span className="text-lg md:text-xl font-display font-bold text-primary tracking-tight">
                    {brand}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 md:hidden text-center">
              <Link href="/marcas">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white font-display uppercase tracking-widest rounded-none">
                  Ver Todas las Marcas
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-accent/10 border border-accent/20 p-8 md:p-12 text-center rounded-sm">
              <Award className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-display font-bold text-primary uppercase mb-3" data-testid="text-kobold-title">Representantes de Kobold Instruments</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Contamos con representación oficial para la distribución de equipos de instrumentación industrial.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-primary relative text-white">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase mb-6 tracking-tight" data-testid="text-cta-title">
              ¿Necesitas un suministro específico?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 font-light max-w-2xl mx-auto" data-testid="text-cta-desc">
              Contamos con contacto directo con vendedores, distribuidores y fabricantes de diferentes marcas. Comunícate con nosotros para cualquier información adicional.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white font-display uppercase tracking-widest px-10 py-8 text-xl rounded-none clip-diagonal shadow-lg shadow-black/20" data-testid="button-solicitar-cotizacion">
                Solicitar Cotización
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
