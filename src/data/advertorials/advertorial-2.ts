import { AdvertorialContent } from "@/types/advertorial";

export const advertorial2: AdvertorialContent = {
  id: "2",
  slug: "patrones-emocionales-generacionales",
  
  hero: {
    title: "Cuando me escuché hablando como mi madre, entendí que no era un problema de carácter",
    highlightedText: "era mi sistema nervioso repitiendo una historia heredada",
    subtitle: "Una explicación basada en neurociencia sobre cómo patrones emocionales y reacciones automáticas pueden transmitirse de generación en generación.",
    heroImage: "/assets/hero-generacional.jpg",
    heroImageAlt: "Madre preocupada mirando a su hija, tensión emocional generacional"
  },

  storytelling: {
    introParagraphs: [
      "Durante años pensé que mis reacciones eran mi personalidad: el tono que me salía sin querer, el enojo que aparecía rápido, la tensión constante en el cuerpo, la culpa después de estallar.",
      "Quería hacerlo distinto a como lo viví de niña, pero en los momentos importantes me escuchaba hablando igual que mi madre… y a veces, igual que mi abuela.",
      "No entendía por qué, si tenía tanta conciencia y tantas ganas de cambiar, mi cuerpo respondía igual. Sentía que algo en mí se activaba antes de que yo pudiera elegir."
    ],
    symptoms: [
      "reactividad emocional frente a detalles pequeños",
      "tensión en el pecho o en la mandíbula",
      "miedo a perder la paciencia con las personas que más quieres",
      "sensibilidad extrema al tono de voz, gestos o microexpresiones",
      "necesidad de controlar para sentir algo de calma",
      "culpa constante después de reaccionar",
      "agotamiento emocional al final del día",
      "dificultad para poner límites sin sentir ansiedad o miedo"
    ],
    closingParagraphs: [
      "Durante mucho tiempo creí que el problema era falta de fuerza de voluntad, inmadurez o incapacidad para manejar mis emociones.",
      "Hasta que descubrí que mis reacciones no eran simples decisiones: eran la huella de un sistema nervioso entrenado en la infancia para sobrevivir en ambientes tensos o impredecibles.",
      "Lo que yo llamaba defecto de carácter era, en realidad, un cuerpo respondiendo a memorias antiguas que nadie me había enseñado a regular."
    ],
    revelation: {
      line1: "No era mala madre ni mala persona.",
      line2: "Era un sistema nervioso heredado pidiendo ayuda."
    }
  },

  scientific: {
    paragraphs: [
      "El investigador Stephen Porges, creador de la Teoría Polivagal, explica que el sistema nervioso aprende a detectar seguridad o peligro principalmente a través de las figuras de apego durante la infancia. El cuerpo registra tonos de voz, expresiones faciales y gestos como señales de calma o amenaza.",
      "La neurocientífica Lisa Feldman Barrett señala que el cerebro construye muchas de nuestras emociones a partir de predicciones basadas en experiencias pasadas. Por eso, reacciones intensas en el presente pueden estar guiadas por memorias emocionales antiguas, incluso cuando la situación actual es distinta.",
      "El psiquiatra Bessel van der Kolk ha mostrado que el cuerpo puede almacenar experiencias difíciles en forma de patrones fisiológicos, no solo en recuerdos conscientes. El cuerpo reacciona antes de que la mente entienda qué está pasando.",
      "El neurocientífico Andrew Huberman explica que, cuando el sistema nervioso se acostumbra a vivir en alerta, puede responder con intensidad ante estímulos mínimos, aunque el entorno sea objetivamente seguro."
    ],
    affectedFunctions: [
      "regulación emocional",
      "vínculos y apego",
      "tensión muscular",
      "calidad del sueño",
      "percepción de amenaza",
      "energía diaria"
    ],
    additionalResearch: [
      "Las investigaciones sobre transmisión intergeneracional del trauma muestran que no solo heredamos rasgos físicos, sino también formas de responder al estrés y a la emoción.",
      "Comprender esto permite dejar de culparse y empezar a ver las reacciones intensas como el resultado de un sistema nervioso que aprendió a protegerse mucho antes de poder elegir conscientemente."
    ],
    insightBox: {
      intro: "De pronto, todo encajó:",
      line1: "Mi cuerpo no estaba exagerando ni siendo dramático.",
      line2: "Mi cuerpo estaba repitiendo lo que había aprendido para sobrevivir."
    },
    nervousSystemImage: "/assets/nervous-system-image.jpg",
    nervousSystemImageAlt: "Ilustración del sistema nervioso y su respuesta al estrés"
  },

  notYourFault: {
    title: "No es tu culpa",
    mainMessage: "No es tu culpa: tu sistema nervioso estaba haciendo su trabajo con la información que tenía.",
    researchIntro: "Estudios de Robert Sapolsky, Bruce McEwen y Lisa Feldman Barrett muestran que:",
    researchers: ["Robert Sapolsky", "Bruce McEwen", "Lisa Feldman Barrett"],
    points: [
      "el cuerpo prioriza la supervivencia antes que la comodidad emocional",
      "la percepción de amenaza puede mantenerse activa incluso cuando ya no existe peligro real",
      "el sistema nervioso adapta funciones internas para mantenernos a salvo, no para hacernos sentir bien",
      "muchas respuestas automáticas son reflejo de aprendizajes tempranos, no de decisiones conscientes"
    ],
    closing: {
      line1: "Tu cuerpo no estaba fallando.",
      line2: "Tu cuerpo estaba respondiendo como aprendió."
    }
  },

  educational: {
    title: "Lo que realmente está pasando en tu sistema nervioso",
    states: [
      {
        icon: "zap",
        title: "Activación (Fight / Flight)",
        description: "El cuerpo entra en modo alerta. Aumenta la tensión, la reactividad emocional y la necesidad de control."
      },
      {
        icon: "battery",
        title: "Colapso (Freeze)",
        description: "Cuando la activación se vuelve demasiado, aparece agotamiento, desconexión emocional o sensación de estar en piloto automático."
      },
      {
        icon: "shuffle",
        title: "Oscilación entre ambos estados",
        description: "Días en los que reaccionas con intensidad y otros en los que te sientes apagada. Cambios de energía, ánimo y paciencia que parecen no tener lógica."
      }
    ],
    closing: {
      line1: "Si llevas tiempo sintiendo que algo no está bien en la forma en que reaccionas, aunque desde afuera parezca que todo está bajo control, no estás equivocada.",
      line2: "Tal vez no estabas viendo el origen del problema, sino la repetición de un patrón emocional aprendido."
    }
  },

  cycle: {
    title: "Activación → Desregulación → Consecuencia",
    steps: [
      { label: "Activación", sublabel: "tensión constante" },
      { label: "Desregulación", sublabel: "reacciones automáticas" },
      { label: "Consecuencia", sublabel: "patrones heredados" }
    ],
    explanations: [
      "La activación constante sostiene tensión, irritabilidad y sensación de estar siempre a punto de estallar.",
      "La desregulación amplifica reacciones automáticas que no encajan con lo que realmente quieres hacer o decir.",
      "El cuerpo adopta estrategias de supervivencia heredadas que pueden sentirse como patrones imposibles de cambiar… hasta que trabajas directamente con el sistema nervioso."
    ]
  },

  closing: {
    emotionalClose: [
      "Y la repetición puede cambiar cuando entiendes el mecanismo y empiezas a trabajar con tu sistema nervioso, en lugar de luchar contra él.",
      "Este test interactivo está basado en modelos de Porges, Levine y evidencia actual en regulación autonómica. Te tomará menos de 2 minutos y puede mostrarte qué patrón de desregulación domina tus reacciones y cuál es el primer paso concreto para empezar a cambiarlo."
    ],
    ctaButton: "Haz el Test y descubre qué tipo de desregulación está repitiendo tu historia emocional",
    ctaDescription: "Hacer el test ahora"
  },

  footer: {
    disclaimer: "Este contenido es educativo e informativo. No reemplaza el diagnóstico ni el tratamiento médico profesional."
  }
};
