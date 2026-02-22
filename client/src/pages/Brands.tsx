import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { Award } from "lucide-react";
import { motion } from "framer-motion";

const brands = [
  "3M", "SKF", "NSK", "Stanley", "Caterpillar",
  "OEM", "Dewalt", "Makita", "Truper", "Siemens",
  "GE", "Honeywell", "Bosch", "Timken", "Kobold Instruments"
];

export default function Brands() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-white p-8 md:p-12 mb-16 rounded-sm relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Cabecera de Marcas" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10">
              <SectionHeading title="Nuestras Marcas" subtitle="Marcas con las que Trabajamos" light />
              <p className="max-w-2xl text-gray-300" data-testid="text-brands-intro">
                Contacto directo con vendedores, distribuidores y fabricantes de diferentes marcas.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-16">
            {brands.map((brand, i) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-white border border-gray-100 p-8 flex items-center justify-center text-center rounded-sm"
                data-testid={`card-brand-${brand.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <span className="text-xl md:text-2xl font-display font-bold text-primary tracking-tight leading-tight">
                  {brand}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="bg-accent/10 border border-accent/20 p-8 md:p-12 text-center rounded-sm max-w-3xl mx-auto">
            <Award className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-display font-bold text-primary uppercase mb-3" data-testid="text-kobold-brands">Representantes de Kobold Instruments</h3>
            <p className="text-muted-foreground">
              Contamos con representación oficial para la distribución de equipos de instrumentación industrial.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
