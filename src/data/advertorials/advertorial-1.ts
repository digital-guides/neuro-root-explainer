import { AdvertorialContent } from "@/types/advertorial";

export const advertorial1: AdvertorialContent = {
  id: "1",
  slug: "sistema-nervioso-40-sintomas",
  
  hero: {
    title: "Cuando nadie logró explicarme mis 40 síntomas, descubrí que todos tenían",
    highlightedText: "una misma raíz",
    subtitle: "Una explicación basada en neurociencia sobre por qué diferentes síntomas pueden tener una sola causa oculta.",
    heroImage: "/assets/hero-image.jpg",
    heroImageAlt: "Mujer con agotamiento y sistema nervioso - conexión mente-cuerpo"
  },

  storytelling: {
    introParagraphs: [
      "Durante años viví atrapada entre síntomas que no parecían tener relación.",
      "No era un dolor aislado ni un episodio puntual.",
      "Era un conjunto de señales que aparecían donde menos las esperaba:"
    ],
    symptoms: [
      "tensión muscular persistente",
      "migrañas cambiantes",
      "problemas digestivos impredecibles",
      "ansiedad sin detonante claro",
      "hipersensibilidad al ruido",
      "palpitaciones en reposo",
      "sueño que no reparaba"
    ],
    closingParagraphs: [
      "Cada especialista se enfocaba en una parte distinta de mi cuerpo, pero nada se conectaba entre sí.",
      "Yo seguía acumulando exámenes… y acumulando síntomas.",
      "Hasta que encontré una línea de investigación que cambió por completo la forma en que entendía lo que me estaba pasando."
    ],
    revelation: {
      line1: "No eran 40 problemas diferentes.",
      line2: "Era un sistema nervioso pidiendo auxilio."
    }
  },

  scientific: {
    paragraphs: [
      'El investigador <strong class="text-foreground font-semibold">Stephen Porges</strong>, creador de la Teoría Polivagal, describe que el sistema nervioso autónomo actúa como un <em class="text-secondary">"interruptor de seguridad"</em>.',
      "Cuando percibe amenaza —real o aprendida— reorganiza funciones internas para sobrevivir.",
      "Este mecanismo afecta:"
    ],
    affectedFunctions: [
      "digestión",
      "respiración",
      "tensión muscular",
      "percepción sensorial",
      "sueño",
      "ritmo cardíaco"
    ],
    additionalResearch: [
      '<strong class="text-foreground font-semibold">Bessel van der Kolk</strong> demostró en su obra <em class="italic">The Body Keeps the Score</em> que el cuerpo almacena experiencias y las reproduce en forma de sensaciones físicas, incluso años después.',
      '<strong class="text-foreground font-semibold">Andrew Huberman</strong>, neurocientífico de Stanford, explica que estados autonómicos alterados pueden generar síntomas múltiples sin un único origen médico evidente.'
    ],
    insightBox: {
      intro: "De pronto, todo tenía sentido:",
      line1: "Mi cuerpo no estaba fallando.",
      line2: "Mi cuerpo estaba intentando protegerme."
    },
    nervousSystemImage: "/assets/nervous-system-image.jpg",
    nervousSystemImageAlt: "Sistema nervioso y su impacto en el cuerpo"
  },

  notYourFault: {
    title: "No es tu culpa",
    mainMessage: "No es tu culpa: tu sistema nervioso estaba haciendo su trabajo.",
    researchIntro: "Estudios de <strong class=\"font-semibold\">Robert Sapolsky</strong>, <strong class=\"font-semibold\">Bruce McEwen</strong> y <strong class=\"font-semibold\">Lisa Feldman Barrett</strong> muestran que:",
    researchers: ["Robert Sapolsky", "Bruce McEwen", "Lisa Feldman Barrett"],
    points: [
      "el cuerpo prioriza la supervivencia antes que la comodidad",
      "la percepción de amenaza puede mantenerse incluso cuando ya no existe",
      "el sistema nervioso adapta funciones internas para mantenernos a salvo"
    ],
    closing: {
      line1: "Tu cuerpo no estaba exagerando.",
      line2: "Tu cuerpo estaba respondiendo."
    }
  },

  educational: {
    title: "Lo que realmente está pasando en tu sistema nervioso",
    states: [
      {
        icon: "zap",
        title: "Activación (Fight / Flight)",
        description: "El cuerpo entra en modo alerta. Aumenta la tensión y la reactividad sensorial."
      },
      {
        icon: "battery",
        title: "Colapso (Freeze)",
        description: "Cuando el sistema se queda sin recursos, aparece el cansancio extremo, la niebla mental y la falta de energía."
      },
      {
        icon: "refresh",
        title: "Oscilación entre ambos estados",
        description: "Un día hiperalerta, otro agotada. Síntomas migratorios. Diagnósticos que no encajan."
      }
    ],
    closing: {
      line1: "No es inestabilidad psicológica.",
      line2: "Es neurofisiología."
    }
  },

  cycle: {
    title: "Activación → Desregulación → Consecuencia",
    steps: [
      { label: "Activación", sublabel: "constante" },
      { label: "Desregulación", sublabel: "amplificada" },
      { label: "Consecuencia", sublabel: "en el cuerpo" }
    ],
    explanations: [
      "La <strong class=\"font-semibold\">activación constante</strong> sostiene tensión, digestión alterada y sueño pobre.",
      "La <strong class=\"font-semibold\">desregulación</strong> amplifica síntomas variados.",
      "El cuerpo adopta <strong class=\"font-semibold\">estrategias de supervivencia</strong> que se sienten como enfermedad."
    ]
  },

  closing: {
    emotionalClose: [
      'Si llevas tiempo sintiendo que algo no está bien, aunque los estudios médicos digan lo contrario, <strong class="font-semibold text-foreground">no estás equivocada</strong>.',
      "Solo estabas mirando los síntomas por separado, cuando la respuesta estaba en el sistema completo."
    ],
    ctaButton: "Haz el Test y descubre tu tipo de desregulación",
    ctaDescription: "Este test está basado en modelos de Porges, Levine y evidencia actual en regulación autonómica. Te tomará menos de 2 minutos."
  },

  footer: {
    disclaimer: "Este contenido es educativo e informativo. No reemplaza el diagnóstico ni el tratamiento médico profesional. Si experimentas síntomas persistentes, consulta a un profesional de la salud."
  }
};
