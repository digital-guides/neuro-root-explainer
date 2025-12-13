import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <header className="pt-6 pb-4">
      {/* H1 - Main emotional headline - larger like reference */}
      <h1 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground mb-2 text-center">
        Cuando nadie logró explicarme mis 40 síntomas, descubrí que todos tenían{" "}
        <span className="text-secondary">una misma raíz</span>
      </h1>
      
      {/* H3 - Scientific subtitle */}
      <h3 className="font-body text-base md:text-lg text-subtle leading-relaxed mb-4 text-center max-w-2xl mx-auto">
        Una explicación basada en neurociencia sobre por qué diferentes síntomas pueden tener una sola causa oculta.
      </h3>

      {/* Full width image like reference */}
      <div className="w-full">
        <img 
          src={heroImage} 
          alt="Mujer con agotamiento y sistema nervioso - conexión mente-cuerpo" 
          className="w-full h-auto rounded-lg shadow-soft"
        />
      </div>
    </header>
  );
};

export default HeroSection;
