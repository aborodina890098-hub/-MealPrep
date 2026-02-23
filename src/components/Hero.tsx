import { motion } from "motion/react";
import { useLanguage } from "./LanguageProvider";
import { CheckCircle2, Sparkles } from "lucide-react";
import { cn } from "../lib/utils";

export function Hero({ onOpenModal }: { onOpenModal: (type: any) => void }) {
  const { t, dir } = useLanguage();

  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent blur-[120px]" />
      
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          <motion.div
            initial={{ opacity: 0, x: dir === "rtl" ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-1.5 text-sm font-bold text-primary">
              <span>{t("hero.badge1")}</span>
            </div>
            
            <h1 className="font-serif mb-6 text-5xl font-bold leading-[1.1] text-foreground md:text-7xl">
              {t("hero.title")}
            </h1>
            
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => onOpenModal("subscribe")}
                className="group relative flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-5 text-lg font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl active:scale-95"
              >
                {t("common.subscribe")}
              </button>
              
              <button
                onClick={() => onOpenModal("trial")}
                className="flex items-center justify-center gap-2 rounded-2xl bg-secondary px-8 py-5 text-lg font-bold text-secondary-foreground transition-all hover:bg-secondary/90 hover:shadow-xl active:scale-95"
              >
                {t("common.trial")}
              </button>
            </div>

            <div className="mt-12 flex flex-wrap gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{t(`hero.badge${i}`)}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 mx-auto aspect-square w-full max-w-[550px] overflow-hidden rounded-[64px] border-8 border-card shadow-2xl">
              <img
                src="https://egyptianbites.com/wp-content/uploads/2023/03/N.O-FAT.png"
                alt="Healthy Food Delivery"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 z-20 rounded-3xl bg-card p-6 shadow-2xl border border-border"
            >
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-sm font-bold text-foreground">طعم حقيقي</p>
                  <p className="text-xs text-muted-foreground">مش أكل مستشفى</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 -z-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 -z-10 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
