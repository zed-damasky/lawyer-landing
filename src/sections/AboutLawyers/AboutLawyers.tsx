import { LawyerCard } from "@/components/ui/LawyerCard/LawyerCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { lawyers } from "@/data/lawyers";

/* todo:   2. 100vh для секции */

export function AboutLawyers() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="about"
      ref={sectionRef}
      //className="pt-20 md:pt-24 pb-16 md:pb-20 bg-light animate-on-scroll min-h-screen"
      className="section-padding bg-light animate-on-scroll mb-16 scroll-mt-25 min-h-screen"
    >
      <div className="container-custom px-4">
        <div className="text-center mb-16 md:mb-24 mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">
            Практикующие адвокаты
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {lawyers.map((lawyer) => (
            <LawyerCard key={lawyer.id} lawyer={lawyer} />
          ))}
        </div>
      </div>
    </section>
  );
}
