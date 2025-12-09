const StorytellingSection = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="prose prose-lg max-w-none">
        <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
          Durante años viví atrapada entre síntomas que no parecían tener relación.
        </p>
        
        <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
          No era un dolor aislado ni un episodio puntual.
        </p>
        
        <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
          Era un conjunto de señales que aparecían donde menos las esperaba:
        </p>

        <ul className="space-y-3 my-8 pl-0 list-none">
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
              className="flex items-start gap-3 text-lg md:text-xl text-foreground/85"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
              {symptom}
            </li>
          ))}
        </ul>

        <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
          Cada especialista se enfocaba en una parte distinta de mi cuerpo, pero nada se conectaba entre sí.
        </p>
        
        <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
          Yo seguía acumulando exámenes… y acumulando síntomas.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6 pt-4 border-t border-border/50">
          Hasta que encontré una línea de investigación que cambió por completo la forma en que entendía lo que me estaba pasando.
        </p>

        <p className="text-xl md:text-2xl font-display font-semibold text-foreground mt-8">
          No eran 40 problemas diferentes.
        </p>
        
        <p className="text-xl md:text-2xl font-display font-semibold text-secondary">
          Era un sistema nervioso pidiendo auxilio.
        </p>
      </div>
    </section>
  );
};

export default StorytellingSection;
