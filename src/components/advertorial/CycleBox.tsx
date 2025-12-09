import { ArrowRight } from "lucide-react";

const CycleBox = () => {
  const cycleSteps = [
    { label: "Activación", sublabel: "constante" },
    { label: "Desregulación", sublabel: "amplificada" },
    { label: "Consecuencia", sublabel: "en el cuerpo" }
  ];

  return (
    <section className="py-5 md:py-6">
      <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-lg p-5 md:p-6 border border-border/30">
        <h2 className="font-display text-lg md:text-xl text-foreground mb-5 text-center">
          Activación → Desregulación → Consecuencia
        </h2>

        {/* Cycle visualization */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 mb-5">
          {cycleSteps.map((step, index) => (
            <div key={index} className="flex items-center gap-2 md:gap-3">
              <div className="bg-card rounded-lg px-4 py-3 shadow-soft text-center min-w-[120px] border border-border/20">
                <p className="font-semibold text-base text-foreground">{step.label}</p>
                <p className="text-sm text-muted-foreground">{step.sublabel}</p>
              </div>
              {index < cycleSteps.length - 1 && (
                <ArrowRight className="w-4 h-4 text-secondary hidden md:block" />
              )}
              {index < cycleSteps.length - 1 && (
                <div className="w-px h-4 bg-secondary/50 md:hidden" />
              )}
            </div>
          ))}
        </div>

        {/* Explanation list */}
        <ul className="space-y-2 text-foreground/85">
          <li className="flex items-start gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
            <span className="text-base md:text-lg leading-relaxed">
              La <strong className="font-semibold">activación constante</strong> sostiene tensión, digestión alterada y sueño pobre.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
            <span className="text-base md:text-lg leading-relaxed">
              La <strong className="font-semibold">desregulación</strong> amplifica síntomas variados.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
            <span className="text-base md:text-lg leading-relaxed">
              El cuerpo adopta <strong className="font-semibold">estrategias de supervivencia</strong> que se sienten como enfermedad.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CycleBox;
