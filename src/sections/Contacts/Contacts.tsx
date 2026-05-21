import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapComponent } from "@/components/ui/MapComponent/MapComponent";
import { contactInfo, socialLinks } from "@/data/contacts";
import { SocialIcon } from "@/components/ui/SocialIcon/SocialIcon";

//todo: обратная связь?

export function Contacts() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="contacts"
      ref={sectionRef}
      className="relative min-h-screen flex items-center bg-dark-light"
    >
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* map */}

          <div className="relative h-100 lg:h-screen w-full">
            <MapComponent
              center={contactInfo.coordinates}
              title={contactInfo.address}
              entranceImage="/images/mapPopup/1.jpg"
              className="w-full h-full"
            />
          </div>

          {/* contacts */}
          <div className="flex flex-col justify-center px-6 py-12 lg:px-16 lg:py-24 w-full">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Свяжитесь с нами
                <br />
                <span className="text-primary">и мы поможем:</span>
              </h2>

              <div className="space-y-5 mb-10">
                <p className="text-xl md:text-2xl font-medium">
                  <a
                    href={`tel:${contactInfo.phone.replace(/\D/g, "")}`}
                    className="text-white hover:text-primary transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </p>
                <p className="text-lg">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </p>
                <p className="text-gray-400 flex items-start gap-2">
                  {contactInfo.address}
                </p>
              </div>

              {/* social */}
              <div className="flex items-center gap-4 mb-8">
                {socialLinks.map(({ id, name, url, renderIcon }) => (
                  <a
                    key={id}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group transition-transform hover:-translate-y-1 "
                    aria-label={name}
                    title={name}
                  >
                    <span className="text-white hover:text-primary">
                      <SocialIcon renderIcon={renderIcon} />
                    </span>
                  </a>
                ))}
              </div>

              {/* 
              <button
                type="button"
                className="btn-primary w-fit"
                onClick={() => alert('Форма обратной связи  ')}
              >
                Написать сообщение
              </button>
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
