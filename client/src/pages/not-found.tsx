import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4 shadow-xl border-t-4 border-t-accent">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-destructive" />
            <h1 className="text-2xl font-bold font-display text-gray-900" data-testid="text-404-title">404 Página No Encontrada</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600 mb-6" data-testid="text-404-desc">
            La página que buscas no existe o ha sido movida.
          </p>

          <Link href="/">
            <Button className="w-full bg-primary hover:bg-primary/90" data-testid="button-volver-inicio">Volver al Inicio</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
