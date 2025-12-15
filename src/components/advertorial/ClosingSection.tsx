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
        <a 
          href="https://nervous-system-test.netlify.app/"
          className="inline-flex items-center justify-center gap-2 whitespace-normal rounded-lg text-base md:text-lg font-semibold bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg hover:shadow-xl h-auto py-3 px-4 md:px-8 mb-4 w-full md:w-auto transition-all duration-300"
        >
          Haz el Test y descubre tu tipo de desregulación
        </a>
        
        <p className="text-primary-foreground/90 text-sm md:text-base leading-normal max-w-lg mx-auto">
          Este test está basado en modelos de Porges, Levine y evidencia actual en regulación autonómica. Te tomará menos de 2 minutos.
        </p>
      </div>
    </section>
  );
};

export default ClosingSection;
