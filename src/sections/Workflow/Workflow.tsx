import { workflowSteps } from "@/data/workflowSteps";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Workflow() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="workflow"
      ref={sectionRef}
      className="pt-20 md:pt-24 pb-16 md:pb-20 bg-light animate-on-scroll "
    >
      <div className="container-custom px-4">
        {/* header */}
        <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12 md:mb-16">
          Этапы нашей работы
        </h2>

        {/* content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {workflowSteps.map(({ id, title, description }, index) => (
            <div
              key={id}
              className="flex flex-col"
              style={{
                opacity: 0,
                animation: "fade-in 0.6s ease-out forwards",
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-dark font-bold text-base">{id}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-dark leading-tight">
                  {title}
                </h3>
              </div>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed pl-14">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-12 md:mt-16 text-center"
          style={{
            opacity: 0,
            animation: "fade-in 0.6s ease-out forwards",
            animationDelay: "450ms",
          }}
        >
          <a href="#contacts" className="btn-primary">
            Получить консультацию
          </a>
        </div>
      </div>
    </section>
  );
}
