const NotYourFaultBox = () => {
  return (
    <section className="py-5 md:py-6">
      <div className="bg-info rounded-lg p-5 md:p-6 border border-info-border">
        <h2 className="font-display text-xl md:text-2xl text-orange-500 mb-4">
          No es tu culpa
        </h2>
        
        <p className="text-base md:text-lg leading-relaxed text-foreground/90 mb-4">
          No es tu culpa: tu sistema nervioso estaba haciendo su trabajo.
        </p>

        <p className="text-base md:text-lg leading-relaxed text-foreground/80 mb-3">
          Estudios de <strong className="font-semibold">Robert Sapolsky</strong>, <strong className="font-semibold">Bruce McEwen</strong> y <strong className="font-semibold">Lisa Feldman Barrett</strong> muestran que:
        </p>

        <ul className="space-y-2 pl-0 list-none mb-4">
          {[
            "el cuerpo prioriza la supervivencia antes que la comodidad",
            "la percepción de amenaza puede mantenerse incluso cuando ya no existe",
            "el sistema nervioso adapta funciones internas para mantenernos a salvo"
          ].map((point, index) => (
            <li 
              key={index}
              className="flex items-start gap-2 text-base md:text-lg text-foreground/85"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              {point}
            </li>
          ))}
        </ul>

        <div className="pt-3 border-t border-info-border">
          <p className="text-base md:text-lg font-medium text-foreground">
            Tu cuerpo no estaba exagerando.
          </p>
          <p className="text-base md:text-lg font-semibold text-secondary">
            Tu cuerpo estaba respondiendo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NotYourFaultBox;
