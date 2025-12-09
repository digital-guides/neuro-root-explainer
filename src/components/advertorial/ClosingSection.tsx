import { Button } from "@/components/ui/button";

const ClosingSection = () => {
  return (
    <section className="py-5 md:py-6 border-t border-border/30">
      {/* Emotional closing */}
      <div className="mb-6">
        <p className="text-base md:text-lg leading-normal text-foreground/90 mb-2">
          Si llevas tiempo sintiendo que algo no está bien, aunque los estudios médicos digan lo contrario, <strong className="font-semibold text-foreground">no estás equivocada</strong>.
        </p>
        <p className="text-base md:text-lg leading-normal text-foreground/90">
          Solo estabas mirando los síntomas por separado, cuando la respuesta estaba en el sistema completo.
        </p>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-primary via-primary to-secondary/80 rounded-lg p-4 md:p-8 text-center shadow-card">
        <Button 
          variant="cta" 
          size="lg"
          className="mb-4 animate-pulse-gentle w-full md:w-auto text-base md:text-lg whitespace-normal h-auto py-3 px-4"
        >
          Haz el Test y descubre tu tipo de desregulación
        </Button>
        
        <p className="text-primary-foreground/90 text-sm md:text-base leading-normal max-w-lg mx-auto">
          Este test está basado en modelos de Porges, Levine y evidencia actual en regulación autonómica. Te tomará menos de 2 minutos.
        </p>
      </div>
    </section>
  );
};

export default ClosingSection;
