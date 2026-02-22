import { Link } from "wouter";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import logoImg from "@assets/PHOTO-2026-02-19-11-56-02_1771520447566.jpg";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          <div>
            <div className="mb-6">
              <img src={logoImg} alt="Orinoco Supply LLC" className="h-14 w-auto bg-white p-2 rounded-sm" />
            </div>
            <p className="mb-4 text-sm leading-relaxed text-gray-400">
              Empresa especializada en el suministro de una amplia gama de insumos industriales. Confiabilidad, calidad y precios competitivos.
            </p>
            <p className="text-sm leading-relaxed text-gray-400">
              Representantes de <span className="text-accent font-medium">Kobold Instruments</span>.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-display font-bold text-white mb-6 uppercase tracking-wide">Enlaces</h4>
            <ul className="space-y-3">
              {[
                { label: "Inicio", href: "/" },
                { label: "Marcas", href: "/marcas" },
                { label: "Nosotros", href: "/about" },
                { label: "Contacto", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="flex items-center gap-2 hover:text-accent transition-colors group">
                    <ArrowRight className="w-3 h-3 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-display font-bold text-white mb-6 uppercase tracking-wide">Contáctenos</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                <span>
                  6355 NW 36ST. SUITE 507,<br />
                  MIAMI FL 33166<br />
                  United States
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+58 4249079514</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm break-all">info.orinocosupplyllc@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Orinoco Supply LLC. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
