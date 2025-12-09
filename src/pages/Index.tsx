import HeroSection from "@/components/advertorial/HeroSection";
import StorytellingSection from "@/components/advertorial/StorytellingSection";
import ScientificSection from "@/components/advertorial/ScientificSection";
import NotYourFaultBox from "@/components/advertorial/NotYourFaultBox";
import EducationalSection from "@/components/advertorial/EducationalSection";
import CycleBox from "@/components/advertorial/CycleBox";
import ClosingSection from "@/components/advertorial/ClosingSection";
import Footer from "@/components/advertorial/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container">
        <article>
          <HeroSection />
          <StorytellingSection />
          <ScientificSection />
          <NotYourFaultBox />
          <EducationalSection />
          <CycleBox />
          <ClosingSection />
        </article>
        <Footer />
      </main>
    </div>
  );
};

export default Index;
