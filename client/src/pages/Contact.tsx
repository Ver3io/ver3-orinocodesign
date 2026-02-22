import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/section-heading";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const { toast } = useToast();
  const submitMutation = useSubmitContact();
  
  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertMessage) => {
    submitMutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Mensaje Enviado",
          description: "Nos pondremos en contacto contigo lo antes posible.",
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      },
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-4">
          <SectionHeading title="Contáctenos" subtitle="Comunícate con Nosotros" centered />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-primary text-white p-10 rounded-sm clip-diagonal relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl -mr-10 -mt-10" />
              
              <h3 className="text-2xl font-display font-bold uppercase mb-8" data-testid="text-sede-title">Información de Contacto</h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center shrink-0 rounded-sm">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Dirección</h4>
                    <p className="text-gray-300 leading-relaxed">
                      6355 NW 36ST. SUITE 507<br />
                      MIAMI FL 33166<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center shrink-0 rounded-sm">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Teléfono</h4>
                    <p className="text-gray-300">+58 4249079514</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white/10 flex items-center justify-center shrink-0 rounded-sm">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Correo Electrónico</h4>
                    <p className="text-gray-300">info.orinocosupplyllc@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-400">
                  Para cualquier información adicional por favor comuníquese con nosotros.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 md:p-10 border border-gray-100 shadow-xl"
            >
              <h3 className="text-2xl font-display font-bold text-primary uppercase mb-6" data-testid="text-form-title">Envíanos un Mensaje</h3>
              <p className="text-gray-500 mb-8">
                ¿Interesado en alguno de nuestros productos o necesitas una cotización? Completa el formulario y nos pondremos en contacto contigo.
              </p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre Completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu nombre" {...field} className="h-12 bg-gray-50 border-gray-200 focus:border-accent focus:ring-accent/20" data-testid="input-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo Electrónico</FormLabel>
                        <FormControl>
                          <Input placeholder="tu@correo.com" {...field} className="h-12 bg-gray-50 border-gray-200 focus:border-accent focus:ring-accent/20" data-testid="input-email" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensaje / Requerimientos</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Cuéntanos qué necesitas..." 
                            className="min-h-[150px] bg-gray-50 border-gray-200 focus:border-accent focus:ring-accent/20 resize-none" 
                            {...field} 
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-14 bg-accent text-white font-display uppercase tracking-widest text-lg"
                    disabled={submitMutation.isPending}
                    data-testid="button-submit-contact"
                  >
                    {submitMutation.isPending ? "Enviando..." : "Enviar Consulta"}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
