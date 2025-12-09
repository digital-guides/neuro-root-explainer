import exhaustedWoman from "@/assets/exhausted-woman.jpg";
import nervousSystem from "@/assets/nervous-system.jpg";

const HeroSection = () => {
  return (
    <header className="pt-8 pb-4 md:pt-10 md:pb-6">
      {/* H1 - Main emotional headline */}
      <h1 className="font-display text-2xl md:text-3xl lg:text-4xl leading-tight text-foreground mb-4">
        Cuando nadie logró explicarme mis 40 síntomas, descubrí que todos tenían una misma raíz
      </h1>
      
      {/* H3 - Scientific subtitle */}
      <h3 className="font-body text-base md:text-lg text-subtle leading-relaxed mb-6">
        Una explicación basada en neurociencia sobre por qué diferentes síntomas pueden tener una sola causa oculta.
      </h3>

      {/* Two images side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative overflow-hidden rounded-lg shadow-soft">
          <img 
            src={exhaustedWoman} 
            alt="Mujer joven mostrando signos de agotamiento físico y emocional" 
            className="w-full h-48 md:h-56 object-cover object-top"
          />
        </div>
        <div className="relative overflow-hidden rounded-lg shadow-soft bg-card">
          <img 
            src={nervousSystem} 
            alt="Ilustración científica del sistema nervioso humano" 
            className="w-full h-48 md:h-56 object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
