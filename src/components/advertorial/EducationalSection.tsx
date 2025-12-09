import { Zap, Battery, RefreshCcw } from "lucide-react";

const EducationalSection = () => {
  const states = [
    {
      icon: Zap,
      title: "Activación (Fight / Flight)",
      description: "El cuerpo entra en modo alerta. Aumenta la tensión y la reactividad sensorial.",
      color: "bg-secondary/10 border-secondary/20",
      iconColor: "text-secondary"
    },
    {
      icon: Battery,
      title: "Colapso (Freeze)",
      description: "Cuando el sistema se queda sin recursos, aparece el cansancio extremo, la niebla mental y la falta de energía.",
      color: "bg-muted/50 border-border/30",
      iconColor: "text-muted-foreground"
    },
    {
      icon: RefreshCcw,
      title: "Oscilación entre ambos estados",
      description: "Un día hiperalerta, otro agotada. Síntomas migratorios. Diagnósticos que no encajan.",
      color: "bg-accent/10 border-accent/20",
      iconColor: "text-accent"
    }
  ];

  return (
    <section className="py-5 md:py-6 border-t border-border/30">
      <h2 className="font-display text-xl md:text-2xl text-foreground mb-5">
        Lo que realmente está pasando en tu sistema nervioso
      </h2>

      <div className="space-y-3">
        {states.map((state, index) => (
          <div 
            key={index}
            className={`rounded-lg p-4 border ${state.color}`}
          >
            <div className="flex items-start gap-3">
              <div className={`p-2 rounded-md bg-card ${state.iconColor}`}>
                <state.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-base md:text-lg font-semibold text-foreground mb-1">
                  {state.title}
                </h3>
                <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                  {state.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-border/30 text-center">
        <p className="text-2xl md:text-3xl font-display font-medium text-foreground">
          No es inestabilidad psicológica.
        </p>
        <p className="text-2xl md:text-3xl font-display font-semibold text-secondary">
          Es neurofisiología.
        </p>
      </div>
    </section>
  );
};

export default EducationalSection;
