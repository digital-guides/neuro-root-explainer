import heroImage from "@/assets/hero-image.jpg";

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

      {/* Single combined image */}
      <div className="relative overflow-hidden rounded-lg shadow-soft">
        <img 
          src={heroImage} 
          alt="Mujer con agotamiento y sistema nervioso - conexión mente-cuerpo" 
          className="w-full h-auto max-h-64 md:max-h-80 object-cover"
        />
      </div>
    </header>
  );
};

export default HeroSection;
