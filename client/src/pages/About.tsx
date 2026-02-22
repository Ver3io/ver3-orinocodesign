import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32">
        <section className="container mx-auto px-4 mb-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <SectionHeading title="Sobre Orinoco Supply" subtitle="Nuestra Empresa" />
              <p className="text-lg text-gray-500 mb-6 leading-relaxed" data-testid="text-about-intro-1">
                Orinoco Supply LLC es una empresa de renombre, especializada en el suministro de una amplia gama de insumos industriales a empresas de la zona.
              </p>
              <p className="text-lg text-gray-500 mb-6 leading-relaxed" data-testid="text-about-intro-2">
                Con un enfoque en la confiabilidad y la calidad, Orinoco Supply LLC ofrece precios competitivos y un servicio al cliente excepcional para satisfacer las diversas necesidades de sus clientes.
              </p>
              <p className="text-lg text-gray-500 mb-6 leading-relaxed" data-testid="text-about-intro-3">
                Contamos con contacto directo con vendedores, distribuidores y fabricantes de diferentes marcas.
              </p>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-accent transform translate-x-4 translate-y-4 rounded-sm" />
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Orinoco Supply LLC" 
                className="relative z-10 rounded-sm shadow-xl w-full"
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 mb-24">
          <SectionHeading title="¿Por Qué Elegirnos?" subtitle="Nuestros Valores" centered />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="text-center p-8 bg-gray-50 border border-gray-100 rounded-sm hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-display font-bold text-primary mb-4 uppercase">Confiabilidad</h3>
              <p className="text-gray-500">
                Enfoque en la confiabilidad en cada suministro.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-8 bg-white border border-accent/20 shadow-lg rounded-sm transform md:-translate-y-4"
            >
              <h3 className="text-xl font-display font-bold text-primary mb-4 uppercase">Calidad</h3>
              <p className="text-gray-500">
                Trabajamos con marcas como SKF, NSK, Caterpillar, Siemens, Bosch, Timken, 3M, entre otras.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-8 bg-gray-50 border border-gray-100 rounded-sm hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-display font-bold text-primary mb-4 uppercase">Precios Competitivos</h3>
              <p className="text-gray-500">
                Precios competitivos y servicio al cliente excepcional.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-4 mb-24">
          <div className="bg-accent/10 border border-accent/20 p-8 md:p-12 text-center rounded-sm max-w-3xl mx-auto">
            <Award className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-display font-bold text-primary uppercase mb-3" data-testid="text-kobold-about">Representantes de Kobold Instruments</h3>
            <p className="text-muted-foreground">
              Contamos con representación oficial para la distribución de equipos de instrumentación industrial.
            </p>
          </div>
        </section>

        <section className="bg-primary text-white py-20 mb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold uppercase mb-8" data-testid="text-marcas-title">Marcas con las que Trabajamos</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {[
                  "3M", "SKF", "NSK", "Stanley", "Caterpillar",
                  "OEM", "Dewalt", "Makita", "Truper", "Siemens",
                  "GE", "Honeywell", "Bosch", "Timken", "Kobold Instruments"
                ].map((brand, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="p-4 bg-white/10 rounded-sm text-center font-display font-bold tracking-wide text-sm"
                  >
                    {brand}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading title="Gerencia de Ventas" subtitle="Contacto Directo" centered />
            <div className="bg-gray-50 p-8 border border-gray-100 rounded-sm">
              <h3 className="text-2xl font-display font-bold text-primary mb-2" data-testid="text-sales-manager">Pedro N. Rojas</h3>
              <p className="text-accent font-display font-medium uppercase tracking-wider text-sm">Sales Manager</p>
              <p className="text-muted-foreground mt-2">ORINOCO SUPPLY, LLC</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
