import { AdvertorialContent } from "@/types/advertorial";

// Advertorial 4 - PENDIENTE: Actualizar con tu contenido
export const advertorial4: AdvertorialContent = {
  id: "4",
  slug: "advertorial-4",
  
  hero: {
    title: "[TU TÍTULO AQUÍ]",
    highlightedText: "[TEXTO DESTACADO]",
    subtitle: "[TU SUBTÍTULO AQUÍ]",
    heroImage: "/assets/hero-image.jpg",
    heroImageAlt: "[DESCRIPCIÓN DE IMAGEN]"
  },

  storytelling: {
    introParagraphs: [
      "[Párrafo introductorio 1]",
      "[Párrafo introductorio 2]",
      "[Párrafo introductorio 3]"
    ],
    symptoms: [
      "[síntoma 1]",
      "[síntoma 2]",
      "[síntoma 3]",
      "[síntoma 4]",
      "[síntoma 5]"
    ],
    closingParagraphs: [
      "[Párrafo de cierre 1]",
      "[Párrafo de cierre 2]",
      "[Párrafo de transición]"
    ],
    revelation: {
      line1: "[Revelación línea 1]",
      line2: "[Revelación línea 2]"
    }
  },

  scientific: {
    paragraphs: [
      "[Párrafo científico 1]",
      "[Párrafo científico 2]",
      "[Párrafo científico 3]"
    ],
    affectedFunctions: [
      "[función 1]",
      "[función 2]",
      "[función 3]",
      "[función 4]"
    ],
    additionalResearch: [
      "[Investigación adicional 1]",
      "[Investigación adicional 2]"
    ],
    insightBox: {
      intro: "[Intro del insight]",
      line1: "[Insight línea 1]",
      line2: "[Insight línea 2]"
    },
    nervousSystemImage: "/assets/nervous-system-image.jpg",
    nervousSystemImageAlt: "[Descripción de imagen]"
  },

  notYourFault: {
    title: "No es tu culpa",
    mainMessage: "[Mensaje principal]",
    researchIntro: "[Intro de investigación]",
    researchers: ["[Investigador 1]", "[Investigador 2]"],
    points: [
      "[Punto 1]",
      "[Punto 2]",
      "[Punto 3]"
    ],
    closing: {
      line1: "[Cierre línea 1]",
      line2: "[Cierre línea 2]"
    }
  },

  educational: {
    title: "[Título educativo]",
    states: [
      {
        icon: "zap",
        title: "[Estado 1]",
        description: "[Descripción estado 1]"
      },
      {
        icon: "battery",
        title: "[Estado 2]",
        description: "[Descripción estado 2]"
      },
      {
        icon: "refresh",
        title: "[Estado 3]",
        description: "[Descripción estado 3]"
      }
    ],
    closing: {
      line1: "[Cierre línea 1]",
      line2: "[Cierre línea 2]"
    }
  },

  cycle: {
    title: "[Título del ciclo]",
    steps: [
      { label: "[Paso 1]", sublabel: "[sublabel 1]" },
      { label: "[Paso 2]", sublabel: "[sublabel 2]" },
      { label: "[Paso 3]", sublabel: "[sublabel 3]" }
    ],
    explanations: [
      "[Explicación 1]",
      "[Explicación 2]",
      "[Explicación 3]"
    ]
  },

  closing: {
    emotionalClose: [
      "[Cierre emocional 1]",
      "[Cierre emocional 2]"
    ],
    ctaButton: "[Texto del botón CTA]",
    ctaDescription: "[Descripción del CTA]"
  },

  footer: {
    disclaimer: "Este contenido es educativo e informativo. No reemplaza el diagnóstico ni el tratamiento médico profesional."
  }
};
