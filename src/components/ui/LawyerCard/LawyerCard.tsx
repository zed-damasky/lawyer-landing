import type { Lawyer, LawyerCardProps } from "@/types/lawyer";
import { cn } from "@/utils/cn";

/*
  todo: 
  1. добавить заглушку на фото

  3. доп информация при наведении на карточку? награды грамоты и т.д.? попап?

*/

export function LawyerCard({
  lawyer,
  className,
  animateOnScroll = false,
}: LawyerCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col items-center text-center p-6 group",
        animateOnScroll && "animate-on-scroll",
        className,
      )}
    >
      {/* photo */}
      <div className="relative md-6">
        <div className="w-50 h-50 rounded-full overflow-hidden border-4 border-white/10 group-hover:border-primary/50 transition-colors">
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
      <h3 className="text-xl font-bold text-dark mb-2 md:text-2xl">
        <span>
          {lawyer.name.split(" ")[0]}
          <br className="hidden sm:block" />
        </span>

        <span className="sm:ml-1">
          {lawyer.name.split(" ").slice(1).join(" ")}
        </span>
      </h3>

      {/* workplace & reg num */}
      <p className="text-sm text-gray-600 mb-4 max-w-xs">
        {lawyer.workplace}
        <br />
        <span className="font-medium text-dark">
          Регистрационный номер в реестре адвокатов: {lawyer.regNumber}
        </span>
      </p>

      {/*practices */}
      <ul className="space-y-1.5 text-sm text-gray-700">
        <strong>Направления практики:</strong>
        {lawyer.practices.map((practice, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span>{practice}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
