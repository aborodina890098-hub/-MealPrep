import { motion } from "motion/react";
import { useLanguage } from "./LanguageProvider";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  { name: "أحمد محمد", role: "مهندس", text: "خسيت 12 كيلو في 3 شهور من غير ما أحس إني محروم من الأكل. بجد طعم الأكل يجنن.", rating: 5 },
  { name: "سارة علي", role: "أم عاملة", text: "وفرت أكتر من 10 ساعات في الأسبوع كنت بضيعهم في المطبخ. الأكل بيوصل طازة كل يوم.", rating: 5 },
  { name: "ياسين حسن", role: "رياضي", text: "الماكروز محسوبة بالمللي، ساعدني جداً في فترة التنشيف وبناء العضلات.", rating: 5 },
  { name: "ليلى محمود", role: "طبيبة", text: "أفضل استثمار عملته في صحتي. الأكل متنوع ومش بزهق منه أبداً.", rating: 5 },
  { name: "كريم يوسف", role: "مدير مبيعات", text: "كنت بعاني من القولون بسبب أكل الشارع، دلوقتي مرتاح جداً وبنصح بيه الكل.", rating: 5 },
];

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="bg-muted/30 py-24">
      <div className="container mx-auto px-6">
        <h2 className="mb-16 text-center text-4xl font-black text-foreground">{t("nav.testimonials")}</h2>
        
        <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar">
          {TESTIMONIALS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="min-w-[320px] max-w-[320px] rounded-[32px] bg-card p-8 shadow-sm border border-border"
            >
              <div className="mb-6 flex gap-1">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <Quote className="mb-4 h-8 w-8 text-primary/20" />
              <p className="mb-6 text-lg font-medium leading-relaxed text-foreground">
                {item.text}
              </p>
              <div>
                <p className="font-bold text-foreground">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <p className="mt-8 text-center text-sm text-muted-foreground">
          {t("common.results_disclaimer")}
        </p>
      </div>
    </section>
  );
}
