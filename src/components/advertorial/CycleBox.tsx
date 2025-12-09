import { ArrowRight } from "lucide-react";

const CycleBox = () => {
  const cycleSteps = [
    { label: "Activación", sublabel: "constante" },
    { label: "Desregulación", sublabel: "amplificada" },
    { label: "Consecuencia", sublabel: "en el cuerpo" }
  ];

  return (
    <section className="py-10 md:py-14">
      <div className="bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 rounded-2xl p-8 md:p-10 border border-border/50">
        <h2 className="font-display text-xl md:text-2xl text-foreground mb-8 text-center">
          Activación → Desregulación → Consecuencia
        </h2>

        {/* Cycle visualization */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-8">
          {cycleSteps.map((step, index) => (
            <div key={index} className="flex items-center gap-3 md:gap-4">
              <div className="bg-card rounded-xl px-5 py-4 shadow-soft text-center min-w-[140px] border border-border/30">
                <p className="font-semibold text-foreground">{step.label}</p>
                <p className="text-sm text-muted-foreground">{step.sublabel}</p>
              </div>
              {index < cycleSteps.length - 1 && (
                <ArrowRight className="w-5 h-5 text-secondary hidden md:block" />
              )}
              {index < cycleSteps.length - 1 && (
                <div className="w-px h-6 bg-secondary/50 md:hidden" />
              )}
            </div>
          ))}
        </div>

        {/* Explanation list */}
        <ul className="space-y-4 text-foreground/85">
          <li className="flex items-start gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
            <span className="text-lg leading-relaxed">
              La <strong className="font-semibold">activación constante</strong> sostiene tensión, digestión alterada y sueño pobre.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
            <span className="text-lg leading-relaxed">
              La <strong className="font-semibold">desregulación</strong> amplifica síntomas variados.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
            <span className="text-lg leading-relaxed">
              El cuerpo adopta <strong className="font-semibold">estrategias de supervivencia</strong> que se sienten como enfermedad.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CycleBox;
