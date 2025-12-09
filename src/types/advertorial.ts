export interface AdvertorialContent {
  id: string;
  slug: string;
  
  // Hero Section
  hero: {
    title: string;
    highlightedText: string;
    subtitle: string;
    heroImage: string;
    heroImageAlt: string;
  };

  // Storytelling Section
  storytelling: {
    introParagraphs: string[];
    symptoms: string[];
    closingParagraphs: string[];
    revelation: {
      line1: string;
      line2: string;
    };
  };

  // Scientific Section
  scientific: {
    paragraphs: string[];
    affectedFunctions: string[];
    additionalResearch: string[];
    insightBox: {
      intro: string;
      line1: string;
      line2: string;
    };
    nervousSystemImage: string;
    nervousSystemImageAlt: string;
  };

  // Not Your Fault Box
  notYourFault: {
    title: string;
    mainMessage: string;
    researchIntro: string;
    researchers: string[];
    points: string[];
    closing: {
      line1: string;
      line2: string;
    };
  };

  // Educational Section
  educational: {
    title: string;
    states: {
      icon: "zap" | "battery" | "refresh";
      title: string;
      description: string;
    }[];
    closing: {
      line1: string;
      line2: string;
    };
  };

  // Cycle Box
  cycle: {
    title: string;
    steps: {
      label: string;
      sublabel: string;
    }[];
    explanations: string[];
  };

  // Closing Section
  closing: {
    emotionalClose: string[];
    ctaButton: string;
    ctaDescription: string;
  };

  // Footer
  footer: {
    disclaimer: string;
  };
}
