import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "./LanguageProvider";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

export function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto max-w-3xl px-6">
        <h2 className="mb-12 text-center text-4xl font-black text-foreground">{t("faq.title")}</h2>
        
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between p-6 text-left font-bold text-foreground"
              >
                <span className="text-lg">{t(`faq.q${i}`)}</span>
                <ChevronDown className={cn("h-5 w-5 transition-transform", openIndex === i && "rotate-180")} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <div className="border-t border-border p-6 text-muted-foreground">
                      {t(`faq.a${i}`)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
