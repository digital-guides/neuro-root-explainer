const ScientificSection = () => {
  return (
    <section className="py-10 md:py-14 border-t border-border/30">
      <div className="prose prose-lg max-w-none">
        <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
          El investigador <strong className="text-foreground font-semibold">Stephen Porges</strong>, creador de la Teoría Polivagal, describe que el sistema nervioso autónomo actúa como un <em className="text-secondary">"interruptor de seguridad"</em>.
        </p>
        
        <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
          Cuando percibe amenaza —real o aprendida— reorganiza funciones internas para sobrevivir.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-4">
          Este mecanismo afecta:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-8">
          {[
            "digestión",
            "respiración", 
            "tensión muscular",
            "percepción sensorial",
            "sueño",
            "ritmo cardíaco"
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-muted/50 rounded-lg px-4 py-3 text-center text-foreground/80 font-medium border border-border/30"
            >
              {item}
            </div>
          ))}
        </div>

        <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
          <strong className="text-foreground font-semibold">Bessel van der Kolk</strong> demostró en su obra <em className="italic">The Body Keeps the Score</em> que el cuerpo almacena experiencias y las reproduce en forma de sensaciones físicas, incluso años después.
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-8">
          <strong className="text-foreground font-semibold">Andrew Huberman</strong>, neurocientífico de Stanford, explica que estados autonómicos alterados pueden generar síntomas múltiples sin un único origen médico evidente.
        </p>

        <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-xl p-6 md:p-8 border-l-4 border-secondary">
          <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-2">
            De pronto, todo tenía sentido:
          </p>
          <p className="text-xl md:text-2xl font-display font-semibold text-foreground mb-1">
            Mi cuerpo no estaba fallando.
          </p>
          <p className="text-xl md:text-2xl font-display font-semibold text-secondary">
            Mi cuerpo estaba intentando protegerme.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScientificSection;
