import exhaustedWoman from "@/assets/exhausted-woman.jpg";
import nervousSystem from "@/assets/nervous-system.jpg";

const HeroSection = () => {
  return (
    <header className="pt-12 pb-8 md:pt-16 md:pb-12">
      {/* H1 - Main emotional headline */}
      <h1 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] leading-tight text-foreground mb-6 animate-fade-up">
        Cuando nadie logró explicarme mis 40 síntomas, descubrí que todos tenían una misma raíz
      </h1>
      
      {/* H3 - Scientific subtitle */}
      <h3 className="font-body text-lg md:text-xl text-subtle leading-relaxed mb-10 animate-fade-up animation-delay-100">
        Una explicación basada en neurociencia sobre por qué diferentes síntomas pueden tener una sola causa oculta.
      </h3>

      {/* Two images side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 animate-fade-up animation-delay-200">
        <div className="relative overflow-hidden rounded-xl shadow-card">
          <img 
            src={exhaustedWoman} 
            alt="Mujer joven mostrando signos de agotamiento físico y emocional" 
            className="w-full h-64 md:h-80 object-cover object-top"
          />
        </div>
        <div className="relative overflow-hidden rounded-xl shadow-card bg-card">
          <img 
            src={nervousSystem} 
            alt="Ilustración científica del sistema nervioso humano" 
            className="w-full h-64 md:h-80 object-contain bg-gradient-to-b from-secondary/10 to-transparent p-4"
          />
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
