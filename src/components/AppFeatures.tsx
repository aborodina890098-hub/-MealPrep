import { motion } from "motion/react";
import { useLanguage } from "./LanguageProvider";
import { Smartphone, Edit3, PauseCircle, MapPin } from "lucide-react";

export function AppFeatures() {
  const { t } = useLanguage();

  const features = [
    { icon: Edit3, key: "f1" },
    { icon: PauseCircle, key: "f2" },
    { icon: MapPin, key: "f3" },
  ];

  return (
    <section className="overflow-hidden py-24">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
             <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative z-10 mx-auto w-full max-w-[320px] rounded-[48px] border-[12px] border-foreground bg-foreground shadow-2xl"
             >
                <div className="aspect-[9/19] overflow-hidden rounded-[36px] bg-card">
                   <img 
                    src="https://mostaql.hsoubcdn.com/uploads/thumbnails/814853/602a9b116b3da/Screenshot20210130-192650Food-Delivery.jpg" 
                    alt="Food Delivery App" 
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                   />
                </div>
             </motion.div>
             <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/20 blur-[100px]" />
          </div>

          <div>
            <h2 className="mb-12 text-4xl font-black leading-tight text-foreground">
              {t("app.title")}
            </h2>
            <div className="space-y-8">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <f.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{t(`app.${f.key}`)}</h3>
                    <p className="mt-2 text-muted-foreground">
                      تحكم كامل في اشتراكك بضغطة واحدة من غير ما تضيع وقتك في المكالمات.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
