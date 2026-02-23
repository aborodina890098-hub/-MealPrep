import { useLanguage } from "./LanguageProvider";
import { cn } from "../lib/utils";

export function StickyMobileCTA({ onOpenModal }: { onOpenModal: (type: any) => void }) {
  const { t, dir, language } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 z-[80] w-full bg-background/80 p-4 backdrop-blur-md border-t border-border md:hidden">
      <div className="flex gap-2">
        <button
          onClick={() => onOpenModal("consult")}
          className="flex-1 rounded-xl border border-primary text-primary bg-card py-3 text-xs font-bold transition-all active:scale-95"
        >
          {language === "ar" ? "استشارة" : "Consult"}
        </button>
        <button
          onClick={() => onOpenModal("subscribe")}
          className="flex-[2] rounded-xl bg-primary py-3 text-xs font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all active:scale-95"
        >
          {t("common.subscribe")}
        </button>
        <button
          onClick={() => onOpenModal("trial")}
          className="flex-1 rounded-xl bg-secondary py-3 text-xs font-bold text-secondary-foreground shadow-lg shadow-secondary/20 transition-all active:scale-95"
        >
          {t("common.trial")}
        </button>
      </div>
    </div>
  );
}
