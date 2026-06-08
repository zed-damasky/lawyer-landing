import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function TestSidePage() {
  const [isOpen, setIsOpen] = useState(false);

  // event kistener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // open / close j
      if (e.key.toLowerCase() === "j") {
        const target = e.target as HTMLElement;
        if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;
        setIsOpen((prev) => !prev);
      }

      // close esc
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // block body
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* dark overlay
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-dark/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    */}
      {/* sidepage*/}
      <aside
        className={`fixed top-40 right-0 z-50 h-screen w-1/2 bg-white shadow-2xl 
                    transform transition-transform duration-300 ease-out
                    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        {/* header */}
        <header className="flex items-center justify-between px-10 py-10 border-b border-gray-200">
          <h2 className="text-lg font-bold text-dark">Тестовый сайдпейдж</h2>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5 text-dark" />
          </button>
        </header>

        {/* content */}
        <div className="p-6">
          <p className="text-gray-700">тестовый сайдпейдж</p>
          <p className="text-sm text-gray-500 mt-4">
            Закрыть: клавиша{" "}
            <kbd className="px-2 py-1 bg-gray-100 rounded">j</kbd>,
            <kbd className="px-2 py-1 bg-gray-100 rounded ml-1">Esc</kbd> или
            крестик
          </p>
        </div>
      </aside>
    </>
  );
}
