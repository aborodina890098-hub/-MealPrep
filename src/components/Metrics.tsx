import { motion } from "motion/react";
import { useLanguage } from "./LanguageProvider";
import { Clock, Utensils, Calculator } from "lucide-react";

export function Metrics() {
  const { t } = useLanguage();

  const metrics = [
    { icon: Utensils, key: "meals_weekly" },
    { icon: Clock, key: "delivery_time" },
    { icon: Calculator, key: "macros" },
  ];

  return (
    <section className="bg-muted/30 py-12">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4 rounded-3xl bg-card p-6 shadow-sm border border-border"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <m.icon className="h-7 w-7" />
              </div>
              <p className="text-lg font-bold text-foreground">
                {t(`metrics.${m.key}`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
