import { standarts } from "@/data/standarts";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Standarts() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section
      className="relative flex items-center animate-on-scroll overflow-hidden min-h-screen py-25"
      id="standarts"
      ref={sectionRef}
    >
      {/*background image*/}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/background/2.jpg')" }}
      />

      {/* cover shadow */}
      <div className="absolute inset-0 bg-linear-to-b from-black/80 to-black/80" />

      {/*content*/}
      <div className="relative z-10 container-custom px-4 w-full">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Стандарты нашей работы
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {standarts.map(({ id, title, description, icon: Icon }, index) => (
            <article
              key={id}
              className="flex flex-col items-center text-center text-white p-6 rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
              style={{
                opacity: 0,
                animation: "fade-in 0.6s ease-out forwards",
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* icon*/}
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-primary">
                <Icon size={32} strokeWidth={1.5} />
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight">
                {title}
              </h3>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
