import { motion } from "motion/react";
import { useLanguage } from "./LanguageProvider";
import { ShoppingBag, ChefHat, Truck } from "lucide-react";

export function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    { icon: ShoppingBag, key: "step1" },
    { icon: ChefHat, key: "step2" },
    { icon: Truck, key: "step3" },
  ];

  return (
    <section id="how_it_works" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="mb-16 text-center text-4xl font-black text-foreground">{t("how.title")}</h2>
        
        <div className="relative grid gap-12 md:grid-cols-3">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 hidden h-0.5 w-full -translate-y-1/2 bg-border md:block" />
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-card shadow-xl shadow-primary/5 border border-border">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <step.icon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">{t(`how.${step.key}_title`)}</h3>
              <p className="max-w-xs text-muted-foreground">{t(`how.${step.key}_desc`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
