import { offerEndArticles } from "@/data/offerEndArticles";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { OfferEndArticle } from "@/typesAndInterfaces/offerEndArticle";

export function OfferEndArticles() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-light animate-on-scroll snap-end! mobile-hidden"
    >
      <div className="container-custom px-4">
        <div className="space-y-16 md:space-y-24">
          {offerEndArticles.map(
            ({ id, title, text, image, reverse }: OfferEndArticle) => (
              <article
                key={id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  reverse
                    ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
                    : ""
                }`}
              >
                {/* image */}
                <div className="relative aspect-600/560 w-full max-w-lg mx-auto md:mx-0 overflow-hidden rounded-2xl shadow-lg">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${image}')` }}
                  />
                  {/* overlay */}
                  <div className="absolute inset-0 bg-dark/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/*text*/}
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">
                    {title}
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {text}
                  </p>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
