const StorytellingSection = () => {
  return (
    <section className="py-5 md:py-6">
      <div className="space-y-4">
        <p className="text-base md:text-lg leading-relaxed text-foreground/90">
          Durante años viví atrapada entre síntomas que no parecían tener relación.
        </p>
        
        <p className="text-base md:text-lg leading-relaxed text-foreground/90">
          No era un dolor aislado ni un episodio puntual.
        </p>
        
        <p className="text-base md:text-lg leading-relaxed text-foreground/90">
          Era un conjunto de señales que aparecían donde menos las esperaba:
        </p>

        <ul className="space-y-2 pl-0 list-none">
          {[
            "tensión muscular persistente",
            "migrañas cambiantes",
            "problemas digestivos impredecibles",
            "ansiedad sin detonante claro",
            "hipersensibilidad al ruido",
            "palpitaciones en reposo",
            "sueño que no reparaba"
          ].map((symptom, index) => (
            <li 
              key={index}
              className="flex items-start gap-2 text-base md:text-lg text-foreground/85"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
              {symptom}
            </li>
          ))}
        </ul>

        <p className="text-base md:text-lg leading-relaxed text-foreground/90">
          Cada especialista se enfocaba en una parte distinta de mi cuerpo, pero nada se conectaba entre sí.
        </p>
        
        <p className="text-base md:text-lg leading-relaxed text-foreground/90">
          Yo seguía acumulando exámenes… y acumulando síntomas.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-foreground/90 pt-3 border-t border-border/40">
          Hasta que encontré una línea de investigación que cambió por completo la forma en que entendía lo que me estaba pasando.
        </p>

        <div className="pt-4 text-center">
          <p className="text-2xl md:text-3xl font-display font-semibold text-foreground">
            No eran 40 problemas diferentes.
          </p>
          <p className="text-2xl md:text-3xl font-display font-semibold text-secondary">
            Era un sistema nervioso pidiendo auxilio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StorytellingSection;
