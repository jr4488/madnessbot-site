import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage("en")}
        className={`transition-opacity ${language === "en" ? "opacity-100" : "opacity-50 hover:opacity-75"}`}
        aria-label="English"
        title="English"
      >
        <span className="text-2xl">🇺🇸</span>
      </button>
      <button
        onClick={() => setLanguage("es")}
        className={`transition-opacity ${language === "es" ? "opacity-100" : "opacity-50 hover:opacity-75"}`}
        aria-label="Español"
        title="Español"
      >
        <span className="text-2xl">🇪🇸</span>
      </button>
    </div>
  );
}
