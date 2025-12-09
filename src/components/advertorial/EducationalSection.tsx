import { Zap, Battery, RefreshCcw } from "lucide-react";

const EducationalSection = () => {
  const states = [
    {
      icon: Zap,
      title: "Activación (Fight / Flight)",
      description: "El cuerpo entra en modo alerta. Aumenta la tensión y la reactividad sensorial.",
      color: "bg-secondary/15 border-secondary/30",
      iconColor: "text-secondary"
    },
    {
      icon: Battery,
      title: "Colapso (Freeze)",
      description: "Cuando el sistema se queda sin recursos, aparece el cansancio extremo, la niebla mental y la falta de energía.",
      color: "bg-muted border-border",
      iconColor: "text-muted-foreground"
    },
    {
      icon: RefreshCcw,
      title: "Oscilación entre ambos estados",
      description: "Un día hiperalerta, otro agotada. Síntomas migratorios. Diagnósticos que no encajan.",
      color: "bg-accent/15 border-accent/30",
      iconColor: "text-accent"
    }
  ];

  return (
    <section className="py-10 md:py-14 border-t border-border/30">
      <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">
        Lo que realmente está pasando en tu sistema nervioso
      </h2>

      <div className="space-y-4">
        {states.map((state, index) => (
          <div 
            key={index}
            className={`rounded-xl p-6 border ${state.color} transition-all duration-300 hover:shadow-soft`}
          >
            <div className="flex items-start gap-4">
              <div className={`p-3 rounded-lg bg-card shadow-sm ${state.iconColor}`}>
                <state.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2">
                  {state.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {state.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-border/30">
        <p className="text-lg md:text-xl font-medium text-foreground">
          No es inestabilidad psicológica.
        </p>
        <p className="text-lg md:text-xl font-semibold text-secondary">
          Es neurofisiología.
        </p>
      </div>
    </section>
  );
};

export default EducationalSection;
