import type { LawyerCardProps } from "@/typesAndInterfaces/lawyer";
import { cn } from "@/utils/cn";

export function LawyerCard({
  lawyer,
  className,
  animateOnScroll = false,
}: LawyerCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col items-center text-center p-2 group",
        animateOnScroll && "animate-on-scroll",
        className,
      )}
    >
      {/* photo */}
      <div className="relative md-6">
        <div className="w-55 h-55 rounded-full overflow-hidden border-4 border-white/10 group-hover:border-primary/50 transition-colors">
          <img
            src={lawyer.photo}
            alt={lawyer.name}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              // Фолбэк на заглушку если фото не загрузилось
              e.currentTarget.src = lawyer.imageProfile;
            }}
          />
        </div>
      </div>

      {/* name */}
      <h3 className="text-xl font-bold text-dark mt-4 mb-2 md:text-3xl">
        <span>
          {lawyer.name.split(" ")[0]}
          <br className="hidden sm:block" />
        </span>

        <span className="sm:ml-1">
          {lawyer.name.split(" ").slice(1).join(" ")}
        </span>
      </h3>

      {/* workplace & reg num */}
      <p className="text-xs text-gray-600 mb-2 max-w-xs">
        {lawyer.workplace}
        <br />
        <span>
          Регистрационный номер в реестре адвокатов: {lawyer.regNumber}
        </span>
      </p>

      {/*practices */}
      <div className="mt-4">
        <strong className="block mb-2 text-sm text-gray-700">
          Основные направления
        </strong>
        <div className="flex flex-wrap gap-2 justify-center">
          {lawyer.practices.map((practice, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-primary/20 text-dark text-xs rounded-full transition-colors hover:bg-primary-hover/60"
            >
              {practice}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
