import nervousSystemImage from "@/assets/nervous-system-image.jpg";

const ScientificSection = () => {
  return (
    <section className="py-5 md:py-6 border-t border-border/30">
      <div className="space-y-4">
        <p className="text-base md:text-lg leading-relaxed text-foreground/90">
          El investigador <strong className="text-foreground font-semibold">Stephen Porges</strong>, creador de la Teoría Polivagal, describe que el sistema nervioso autónomo actúa como un <em className="text-secondary">"interruptor de seguridad"</em>.
        </p>
        
        <p className="text-base md:text-lg leading-relaxed text-foreground/90">
          Cuando percibe amenaza —real o aprendida— reorganiza funciones internas para sobrevivir.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-foreground/90">
          Este mecanismo afecta:
        </p>

        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {[
            "digestión",
            "respiración", 
            "tensión muscular",
            "percepción sensorial",
            "sueño",
            "ritmo cardíaco"
          ].map((item, index) => (
            <li 
              key={index}
              className="flex items-center gap-2 text-base md:text-lg text-foreground/80"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <p className="text-base md:text-lg leading-relaxed text-foreground/90">
          <strong className="text-foreground font-semibold">Bessel van der Kolk</strong> demostró en su obra <em className="italic">The Body Keeps the Score</em> que el cuerpo almacena experiencias y las reproduce en forma de sensaciones físicas, incluso años después.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-foreground/90">
          <strong className="text-foreground font-semibold">Andrew Huberman</strong>, neurocientífico de Stanford, explica que estados autonómicos alterados pueden generar síntomas múltiples sin un único origen médico evidente.
        </p>

        <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg p-5 border-l-3 border-secondary text-center">
          <p className="text-base md:text-lg leading-relaxed text-foreground/90 mb-2">
            De pronto, todo tenía sentido:
          </p>
          <p className="text-2xl md:text-3xl font-display font-semibold text-foreground">
            Mi cuerpo no estaba fallando.
          </p>
          <p className="text-2xl md:text-3xl font-display font-semibold text-secondary">
            Mi cuerpo estaba intentando protegerme.
          </p>
        </div>

        <div className="mt-4">
          <img 
            src={nervousSystemImage} 
            alt="Sistema nervioso y su impacto en el cuerpo" 
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ScientificSection;
