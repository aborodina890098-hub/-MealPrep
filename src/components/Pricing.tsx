import { motion } from "motion/react";
import { useLanguage } from "./LanguageProvider";
import { Check, Info } from "lucide-react";
import { cn } from "../lib/utils";

const PLANS = [
  { id: "Starter", price: 899, kcal: "1500-1800", meals: "3", days: "5", popular: false },
  { id: "Pro", price: 1499, oldPrice: 1699, kcal: "1800-2200", meals: "3 + 2 snacks", days: "5", popular: true },
  { id: "Elite", price: 1999, kcal: "1200-3000", meals: "3 + 2 snacks", days: "7", popular: false },
  { id: "Keto", price: 1699, kcal: "Custom", meals: "3", days: "5", popular: false },
  { id: "Vegan", price: 1299, kcal: "Custom", meals: "3", days: "5", popular: false },
];

export function Pricing({ onOpenModal }: { onOpenModal: (plan: string) => void }) {
  const { t, dir } = useLanguage();

  return (
    <section id="pricing" className="bg-muted/30 py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-black text-foreground">{t("pricing.title")}</h2>
          <div className="mx-auto flex max-w-fit items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm font-bold text-primary">
            <Info className="h-4 w-4" />
            <span>{t("pricing.feature_pause")}</span>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {PLANS.slice(0, 3).map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={cn(
                "relative flex flex-col rounded-[40px] p-8 transition-all border",
                plan.popular 
                  ? "bg-primary text-primary-foreground shadow-2xl shadow-primary/30 scale-105 z-10 border-primary" 
                  : "bg-card text-foreground border-border"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent px-6 py-2 text-xs font-black uppercase tracking-widest text-accent-foreground shadow-lg">
                  {t("pricing.most_popular")}
                </div>
              )}

              <div className="mb-8">
                <h3 className="font-serif mb-2 text-2xl font-bold">{t(`pricing.${plan.id.toLowerCase()}_name`)}</h3>
                <p className={cn("text-sm", plan.popular ? "text-primary-foreground/80" : "text-muted-foreground")}>
                  {t(`pricing.${plan.id.toLowerCase()}_desc`)}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className="text-sm font-bold opacity-80">{t("pricing.per_week")}</span>
                </div>
                {plan.oldPrice && (
                  <p className="mt-1 text-sm line-through opacity-60">{plan.oldPrice} EGP</p>
                )}
              </div>

              <ul className="mb-10 space-y-4 flex-1">
                {[
                  `${plan.meals} meals/day`,
                  `${plan.days} days/week`,
                  `${plan.kcal} kcal/day`,
                  t("pricing.feature_delivery"),
                  t("pricing.feature_consult"),
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold">
                    <div className={cn("rounded-full p-1", plan.popular ? "bg-primary-foreground/20" : "bg-primary/10")}>
                      <Check className={cn("h-3 w-3", plan.popular ? "text-primary-foreground" : "text-primary")} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onOpenModal(plan.id)}
                className={cn(
                  "w-full rounded-2xl py-4 font-black transition-all active:scale-95",
                  plan.popular 
                    ? "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20" 
                    : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20"
                )}
              >
                {t("common.subscribe")}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Specialized Plans */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
           {PLANS.slice(3).map((plan) => (
             <div key={plan.id} className="flex items-center justify-between rounded-[32px] bg-card p-8 border border-border">
                <div>
                  <h3 className="text-xl font-black text-foreground">{t(`pricing.${plan.id.toLowerCase()}_name`)}</h3>
                  <p className="text-sm text-muted-foreground">{t(`pricing.${plan.id.toLowerCase()}_desc`)}</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-black text-primary">{plan.price} <span className="text-xs text-muted-foreground">EGP</span></p>
                  <button 
                    onClick={() => onOpenModal(plan.id)}
                    className="mt-2 text-sm font-bold text-primary hover:underline"
                  >
                    {t("common.subscribe")}
                  </button>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
