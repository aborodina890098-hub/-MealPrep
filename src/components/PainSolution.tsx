import { motion } from "motion/react";
import { useLanguage } from "./LanguageProvider";
import { AlertCircle, CheckCircle } from "lucide-react";

export function PainSolution() {
  const { t } = useLanguage();

  const pains = ["p1", "p2", "p3", "p4"];

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-12 text-4xl font-black text-foreground">{t("pain.title")}</h2>
            <div className="space-y-6">
              {pains.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 rounded-2xl bg-red-500/10 p-6"
                >
                  <AlertCircle className="h-6 w-6 shrink-0 text-red-600" />
                  <p className="text-lg font-bold text-red-700">{t(`pain.${p}`)}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-[48px] bg-primary p-12 text-primary-foreground shadow-2xl shadow-primary/20">
            <CheckCircle className="mb-8 h-16 w-16" />
            <h3 className="mb-6 text-3xl font-black">الحل في MealPrep Pro</h3>
            <p className="text-xl leading-relaxed opacity-90">
              {t("pain.solution")}
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6">
               <div className="rounded-2xl bg-primary-foreground/10 p-4 backdrop-blur-md">
                  <p className="text-sm font-bold opacity-70">طعم حقيقي</p>
                  <p className="text-lg font-black">مش أكل مستشفى</p>
               </div>
               <div className="rounded-2xl bg-primary-foreground/10 p-4 backdrop-blur-md">
                  <p className="text-sm font-bold opacity-70">توفير وقت</p>
                  <p className="text-lg font-black">10 ساعات أسبوعياً</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
