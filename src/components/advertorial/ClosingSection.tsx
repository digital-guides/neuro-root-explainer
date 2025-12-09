import { Button } from "@/components/ui/button";

const ClosingSection = () => {
  return (
    <section className="py-10 md:py-14 border-t border-border/30">
      {/* Emotional closing */}
      <div className="mb-12">
        <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-4">
          Si llevas tiempo sintiendo que algo no está bien, aunque los estudios médicos digan lo contrario, <strong className="font-semibold text-foreground">no estás equivocada</strong>.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
          Solo estabas mirando los síntomas por separado, cuando la respuesta estaba en el sistema completo.
        </p>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-br from-primary via-primary to-secondary/80 rounded-2xl p-8 md:p-12 text-center shadow-card">
        <Button 
          variant="cta" 
          size="xl"
          className="mb-6 animate-pulse-gentle"
        >
          Haz el Test y descubre tu tipo de desregulación
        </Button>
        
        <p className="text-primary-foreground/90 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
          Este test está basado en modelos de Porges, Levine y evidencia actual en regulación autonómica. Te tomará menos de 2 minutos.
        </p>
      </div>
    </section>
  );
};

export default ClosingSection;
