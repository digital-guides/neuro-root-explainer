import { AdvertorialContent } from "@/types/advertorial";
import { Button } from "@/components/ui/button";
import { Zap, Battery, RefreshCcw, ArrowRight, LucideIcon } from "lucide-react";

interface AdvertorialTemplateProps {
  content: AdvertorialContent;
}

const iconMap: Record<string, LucideIcon> = {
  zap: Zap,
  battery: Battery,
  refresh: RefreshCcw,
};

const stateColors = [
  { color: "bg-secondary/10 border-secondary/20", iconColor: "text-secondary" },
  { color: "bg-muted/50 border-border/30", iconColor: "text-muted-foreground" },
  { color: "bg-accent/10 border-accent/20", iconColor: "text-accent" },
];

const AdvertorialTemplate = ({ content }: AdvertorialTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-2xl mx-auto px-4">
        <article>
          {/* Hero Section */}
          <header className="pt-6 pb-4">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground mb-2 text-center">
              {content.hero.title}{" "}
              <span className="text-secondary">{content.hero.highlightedText}</span>
            </h1>
            
            <h3 className="font-body text-base md:text-lg text-subtle leading-relaxed mb-4 text-center max-w-2xl mx-auto">
              {content.hero.subtitle}
            </h3>

            <div className="w-full">
              <img 
                src={content.hero.heroImage} 
                alt={content.hero.heroImageAlt} 
                className="w-full h-auto rounded-lg shadow-soft"
              />
            </div>
          </header>

          {/* Storytelling Section */}
          <section className="py-5 md:py-6">
            <div className="space-y-4">
              {content.storytelling.introParagraphs.map((paragraph, idx) => (
                <p key={idx} className="text-base md:text-lg leading-relaxed text-foreground/90">
                  {paragraph}
                </p>
              ))}

              <ul className="space-y-2 pl-0 list-none">
                {content.storytelling.symptoms.map((symptom, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-2 text-base md:text-lg text-foreground/85"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    {symptom}
                  </li>
                ))}
              </ul>

              {content.storytelling.closingParagraphs.map((paragraph, idx) => (
                <p 
                  key={idx} 
                  className={`text-base md:text-lg leading-relaxed text-foreground/90 ${idx === content.storytelling.closingParagraphs.length - 1 ? 'pt-3 border-t border-border/40' : ''}`}
                >
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 text-center">
                <p className="text-2xl md:text-3xl font-display font-semibold text-foreground">
                  {content.storytelling.revelation.line1}
                </p>
                <p className="text-2xl md:text-3xl font-display font-semibold text-secondary">
                  {content.storytelling.revelation.line2}
                </p>
              </div>
            </div>
          </section>

          {/* Scientific Section */}
          <section className="py-5 md:py-6 border-t border-border/30">
            <div className="space-y-4">
              {content.scientific.paragraphs.map((paragraph, idx) => (
                <p 
                  key={idx} 
                  className="text-base md:text-lg leading-relaxed text-foreground/90"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}

              <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {content.scientific.affectedFunctions.map((item, index) => (
                  <li 
                    key={index}
                    className="flex items-center gap-2 text-base md:text-lg text-foreground/80"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {content.scientific.additionalResearch.map((research, idx) => (
                <p 
                  key={idx} 
                  className="text-base md:text-lg leading-relaxed text-foreground/90"
                  dangerouslySetInnerHTML={{ __html: research }}
                />
              ))}

              <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-lg p-5 border-l-3 border-secondary text-center">
                <p className="text-base md:text-lg leading-relaxed text-foreground/90 mb-2">
                  {content.scientific.insightBox.intro}
                </p>
                <p className="text-2xl md:text-3xl font-display font-semibold text-foreground">
                  {content.scientific.insightBox.line1}
                </p>
                <p className="text-2xl md:text-3xl font-display font-semibold text-secondary">
                  {content.scientific.insightBox.line2}
                </p>
              </div>

              <div className="mt-4">
                <img 
                  src={content.scientific.nervousSystemImage} 
                  alt={content.scientific.nervousSystemImageAlt} 
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </section>

          {/* Not Your Fault Box */}
          <section className="py-5 md:py-6">
            <div className="bg-info rounded-lg p-5 md:p-6 border border-info-border">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-orange-500 mb-4">
                {content.notYourFault.title}
              </h2>
              
              <p className="text-base md:text-lg leading-relaxed text-foreground/90 mb-4">
                {content.notYourFault.mainMessage}
              </p>

              <p 
                className="text-base md:text-lg leading-relaxed text-foreground/80 mb-3"
                dangerouslySetInnerHTML={{ __html: content.notYourFault.researchIntro }}
              />

              <ul className="space-y-2 pl-0 list-none mb-4">
                {content.notYourFault.points.map((point, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-2 text-base md:text-lg text-foreground/85"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-info-border">
                <p className="text-base md:text-lg font-medium text-foreground">
                  {content.notYourFault.closing.line1}
                </p>
                <p className="text-base md:text-lg font-semibold text-secondary">
                  {content.notYourFault.closing.line2}
                </p>
              </div>
            </div>
          </section>

          {/* Educational Section */}
          <section className="pt-5 md:pt-6 pb-2 border-t border-border/30">
            <h2 className="font-display text-xl md:text-2xl text-foreground mb-5">
              {content.educational.title}
            </h2>

            <div className="space-y-3">
              {content.educational.states.map((state, index) => {
                const Icon = iconMap[state.icon];
                const colors = stateColors[index] || stateColors[0];
                return (
                  <div 
                    key={index}
                    className={`rounded-lg p-4 border ${colors.color}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-md bg-card ${colors.iconColor}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-base md:text-lg font-semibold text-foreground mb-1">
                          {state.title}
                        </h3>
                        <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                          {state.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-border/30 text-center">
              <p className="text-2xl md:text-3xl font-display font-medium text-foreground">
                {content.educational.closing.line1}
              </p>
              <p className="text-2xl md:text-3xl font-display font-semibold text-secondary">
                {content.educational.closing.line2}
              </p>
            </div>
          </section>

          {/* Cycle Box */}
          <section className="py-5 md:py-6">
            <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-lg p-5 md:p-6 border border-border/30">
              <h2 className="font-display text-lg md:text-xl text-foreground mb-5 text-center">
                {content.cycle.title}
              </h2>

              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 mb-5">
                {content.cycle.steps.map((step, index) => (
                  <div key={index} className="flex items-center gap-2 md:gap-3">
                    <div className="bg-card rounded-lg px-4 py-3 shadow-soft text-center min-w-[120px] border border-border/20">
                      <p className="font-semibold text-base text-foreground">{step.label}</p>
                      <p className="text-sm text-muted-foreground">{step.sublabel}</p>
                    </div>
                    {index < content.cycle.steps.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-secondary hidden md:block" />
                    )}
                    {index < content.cycle.steps.length - 1 && (
                      <div className="w-px h-4 bg-secondary/50 md:hidden" />
                    )}
                  </div>
                ))}
              </div>

              <ul className="space-y-2 text-foreground/85">
                {content.cycle.explanations.map((explanation, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span 
                      className="text-base md:text-lg leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: explanation }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Closing Section */}
          <section className="py-5 md:py-6 border-t border-border/30">
            <div className="mb-6">
              {content.closing.emotionalClose.map((paragraph, idx) => (
                <p 
                  key={idx} 
                  className="text-base md:text-lg leading-normal text-foreground/90 mb-2"
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}
            </div>

            <div className="bg-gradient-to-br from-primary via-primary to-secondary/80 rounded-lg p-4 md:p-8 text-center shadow-card">
              <Button 
                variant="cta" 
                size="lg"
                className="mb-4 animate-pulse-gentle w-full md:w-auto text-base md:text-lg whitespace-normal h-auto py-3 px-4"
              >
                {content.closing.ctaButton}
              </Button>
              
              <p className="text-primary-foreground/90 text-sm md:text-base leading-normal max-w-lg mx-auto">
                {content.closing.ctaDescription}
              </p>
            </div>
          </section>
        </article>

        {/* Footer */}
        <footer className="py-5 md:py-6 border-t border-border/20">
          <p className="text-sm text-muted-foreground leading-relaxed text-center max-w-xl mx-auto">
            {content.footer.disclaimer}
          </p>
        </footer>
      </main>
    </div>
  );
};

export default AdvertorialTemplate;
