const NotYourFaultBox = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="bg-info rounded-2xl p-8 md:p-10 border border-info-border shadow-soft">
        <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
          No es tu culpa
        </h2>
        
        <p className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6">
          No es tu culpa: tu sistema nervioso estaba haciendo su trabajo.
        </p>

        <p className="text-lg leading-relaxed text-foreground/80 mb-4">
          Estudios de <strong className="font-semibold">Robert Sapolsky</strong>, <strong className="font-semibold">Bruce McEwen</strong> y <strong className="font-semibold">Lisa Feldman Barrett</strong> muestran que:
        </p>

        <ul className="space-y-3 my-6 pl-0 list-none">
          {[
            "el cuerpo prioriza la supervivencia antes que la comodidad",
            "la percepción de amenaza puede mantenerse incluso cuando ya no existe",
            "el sistema nervioso adapta funciones internas para mantenernos a salvo"
          ].map((point, index) => (
            <li 
              key={index}
              className="flex items-start gap-3 text-lg text-foreground/85"
            >
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent/20 text-accent text-sm font-bold flex-shrink-0 mt-0.5">
                ✓
              </span>
              {point}
            </li>
          ))}
        </ul>

        <div className="pt-4 border-t border-info-border mt-6">
          <p className="text-lg md:text-xl font-medium text-foreground">
            Tu cuerpo no estaba exagerando.
          </p>
          <p className="text-lg md:text-xl font-semibold text-secondary">
            Tu cuerpo estaba respondiendo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NotYourFaultBox;
