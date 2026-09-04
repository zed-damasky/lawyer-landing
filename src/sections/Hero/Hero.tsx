import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden min-h-150">
      {/*background image*/}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/images/background/1.webp')" }}
      />
      {/* cover shadow */}
      <div className="absolute inset-0 bg-linear-to-b from-black/80 to-black/80"></div>
      {/*content*/}
      <div className="relative z-10 container-custom px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
            style={{
              animation: "fade-in 0.8s ease-out forwards",
              animationDelay: "200ms",
              opacity: 0,
            }}
          >
            {" "}
            Юридическая защита <br className="hidden md:block" />
            для частных лиц и бизнеса
          </h1>
          <p
            className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto"
            style={{
              animation: "fade-in 0.8s ease-out forwards",
              animationDelay: "400ms",
              opacity: 0,
            }}
          >
            Комплексная правовая поддержка: от консультации до результата
          </p>
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
            style={{
              animation: "fade-in 0.8s ease-out forwards",
              animationDelay: "600ms",
              opacity: 0,
            }}
          >
            <a href="#contacts" className="btn-primary">
              Получить консультацию
            </a>
            <a href="#about" className="btn-outline">
              Узнать больше
            </a>
          </div>
        </div>
      </div>

      {/*arrow scroll down */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-primary transition-colors"
        aria-label="Прокрутить к секции О нас"
      >
        <ChevronDown size={32} className="animate-bounce" />
      </a>
    </section>
  );
}
