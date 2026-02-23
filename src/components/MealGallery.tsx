import { motion } from "motion/react";
import { useLanguage } from "./LanguageProvider";
import { useState } from "react";
import { cn } from "../lib/utils";

const MEALS = [
  { 
    id: 1, 
    nameAr: "فراخ مشوية + أرز بسمتي + خضار", 
    nameEn: "Grilled Chicken + Basmati Rice + Veggies", 
    cal: 450, p: 45, c: 50, f: 10, 
    tag: "gain",
    benefitsAr: "بروتين عالي لبناء العضلات، كربوهيدرات معقدة للطاقة المستدامة، وألياف من الخضار لتحسين الهضم وتعزيز الشبع لفترات طويلة.",
    benefitsEn: "High protein for muscle building, complex carbs for sustained energy, and fiber from veggies to improve digestion and satiety."
  },
  { 
    id: 2, 
    nameAr: "سلمون + بطاطا حلوة مشوية", 
    nameEn: "Salmon + Roasted Sweet Potato", 
    cal: 520, p: 35, c: 40, f: 22, 
    tag: "health",
    benefitsAr: "غني بالأوميجا 3 لصحة القلب والوظائف الإدراكية، وفيتامين أ لتعزيز المناعة وصحة البشرة، مع دهون صحية تدعم الهرمونات.",
    benefitsEn: "Rich in Omega-3 for heart and brain health, Vitamin A for immunity and skin, with healthy fats supporting hormones."
  },
  { 
    id: 3, 
    nameAr: "كفتة + أرز + سلطة", 
    nameEn: "Kofta + Rice + Salad", 
    cal: 480, p: 30, c: 45, f: 18, 
    tag: "loss",
    benefitsAr: "وجبة متوازنة توفر الحديد من اللحم لتقوية الدم، والفيتامينات الضرورية من السلطة الطازجة لتعزيز التمثيل الغذائي.",
    benefitsEn: "Balanced meal providing iron for blood health and essential vitamins from fresh salad to boost metabolism."
  },
  { 
    id: 4, 
    nameAr: "باستا دجاج بصوص الطماطم", 
    nameEn: "Chicken Pasta with Tomato Sauce", 
    cal: 550, p: 40, c: 65, f: 12, 
    tag: "gain",
    benefitsAr: "مصدر ممتاز للطاقة المستدامة والبروتين الخالي من الدهون، صوص الطماطم غني بالليكوبين المضاد للأكسدة.",
    benefitsEn: "Excellent source of sustained energy and lean protein, tomato sauce is rich in antioxidant lycopene."
  },
  { 
    id: 5, 
    nameAr: "ستيك مشوي + بروكلي", 
    nameEn: "Grilled Steak + Broccoli", 
    cal: 420, p: 50, c: 10, f: 20, 
    tag: "keto",
    benefitsAr: "مثالي للكيتو، غني بالبروتين والحديد والزنك، البروكلي يوفر مضادات أكسدة قوية مع كربوهيدرات منخفضة جداً.",
    benefitsEn: "Perfect for Keto, high in protein, iron, and zinc. Broccoli provides powerful antioxidants with very low carbs."
  },
  { 
    id: 6, 
    nameAr: "جمبري بالثوم + كينوا", 
    nameEn: "Garlic Shrimp + Quinoa", 
    cal: 380, p: 35, c: 40, f: 8, 
    tag: "health",
    benefitsAr: "سعرات منخفضة وبروتين عالي، الكينوا توفر جميع الأحماض الأمينية الأساسية وتدعم صحة الجهاز الهضمي.",
    benefitsEn: "Low calorie and high protein, quinoa provides all essential amino acids and supports digestive health."
  },
  { 
    id: 7, 
    nameAr: "برجر صحي (خبز قمح كامل)", 
    nameEn: "Healthy Burger (Whole Wheat)", 
    cal: 490, p: 32, c: 45, f: 15, 
    tag: "health",
    benefitsAr: "بديل صحي للبرجر التقليدي، القمح الكامل يحسن الهضم ويزيد الشبع، واللحم الصافي يوفر الزنك والحديد.",
    benefitsEn: "Healthy alternative to traditional burgers, whole wheat improves digestion and satiety, lean meat provides zinc."
  },
  { 
    id: 8, 
    nameAr: "كاري دجاج + أرز بني", 
    nameEn: "Chicken Curry + Brown Rice", 
    cal: 510, p: 38, c: 55, f: 14, 
    tag: "gain",
    benefitsAr: "الكركم مضاد طبيعي للالتهابات، والأرز البني غني بالألياف المشبعة والمغنيسيوم لصحة العضلات والأعصاب.",
    benefitsEn: "Turmeric is a natural anti-inflammatory, brown rice is rich in fiber and magnesium for muscle health."
  },
  { 
    id: 9, 
    nameAr: "أومليت خضار + توست بني", 
    nameEn: "Veggie Omelet + Brown Toast", 
    cal: 320, p: 20, c: 25, f: 15, 
    tag: "loss",
    benefitsAr: "بروتين عالي الجودة لبداية يوم نشيطة، الخضروات توفر فيتامينات ومعادن تدعم التركيز والنشاط البدني.",
    benefitsEn: "High-quality protein for an active start, vegetables provide vitamins that support focus and physical activity."
  },
  { 
    id: 10, 
    nameAr: "بانكيك بروتين بالفواكه", 
    nameEn: "Protein Pancakes with Fruits", 
    cal: 400, p: 30, c: 45, f: 8, 
    tag: "gain",
    benefitsAr: "وجبة مثالية بعد التمرين للاستشفاء العضلي، الفواكه توفر سكريات طبيعية ومضادات أكسدة لتقليل الإجهاد.",
    benefitsEn: "Ideal post-workout meal for muscle recovery, fruits provide natural sugars and antioxidants to reduce stress."
  },
  { 
    id: 11, 
    nameAr: "فول وطعمية صحية", 
    nameEn: "Healthy Foul & Taameya", 
    cal: 350, p: 18, c: 40, f: 12, 
    tag: "vegan",
    benefitsAr: "بروتين نباتي أصيل، غني بالألياف التي تحسن صحة الجهاز الهضمي وتوفر طاقة تدوم طويلاً بدون كوليسترول.",
    benefitsEn: "Authentic plant protein, rich in fiber that improves digestive health and provides long-lasting energy."
  },
  { 
    id: 12, 
    nameAr: "زبادي يوناني بالعسل والتوت", 
    nameEn: "Greek Yogurt with Honey & Berries", 
    cal: 280, p: 25, c: 20, f: 6, 
    tag: "loss",
    benefitsAr: "بروبيوتيك طبيعي لصحة الأمعاء، الكالسيوم لتقوية العظام، مع مضادات أكسدة قوية من التوت لحماية الخلايا.",
    benefitsEn: "Natural probiotics for gut health, calcium for bone strength, with powerful antioxidants from berries."
  },
  { 
    id: 13, 
    nameAr: "سلطة كينوا بالأفوكادو", 
    nameEn: "Quinoa Avocado Salad", 
    cal: 310, p: 12, c: 35, f: 15, 
    tag: "vegan",
    benefitsAr: "دهون صحية للقلب من الأفوكادو وبروتين كامل من الكينوا، غنية بالبوتاسيوم والألياف لدعم ضغط الدم الصحي.",
    benefitsEn: "Heart-healthy fats from avocado and complete protein from quinoa, rich in potassium for blood pressure."
  },
  { 
    id: 14, 
    nameAr: "عدس بجبة بالخضار", 
    nameEn: "Brown Lentils with Veggies", 
    cal: 340, p: 22, c: 45, f: 5, 
    tag: "vegan",
    benefitsAr: "مصدر ممتاز للحديد والبروتين النباتي، مشبع جداً ويدعم مستويات الطاقة المستقرة طوال اليوم.",
    benefitsEn: "Excellent source of iron and plant protein, very filling and supports stable energy levels all day."
  },
  { 
    id: 15, 
    nameAr: "مكرونة بالخضار والمشروم", 
    nameEn: "Veggie Mushroom Pasta", 
    cal: 390, p: 15, c: 60, f: 8, 
    tag: "vegan",
    benefitsAr: "منخفضة الدهون وغنية بالألياف، المشروم يوفر فيتامين د الضروري والسيلينيوم لتعزيز جهاز المناعة.",
    benefitsEn: "Low in fat and rich in fiber, mushrooms provide essential Vitamin D and selenium to boost immunity."
  },
  { 
    id: 16, 
    nameAr: "حواوشي مشروم صحي", 
    nameEn: "Healthy Mushroom Hawawshi", 
    cal: 360, p: 14, c: 42, f: 10, 
    tag: "vegan",
    benefitsAr: "بديل نباتي منخفض السعرات للحواوشي التقليدي، غني بالألياف والفيتامينات التي تدعم صحة القلب.",
    benefitsEn: "Low-calorie vegan alternative to traditional hawawshi, rich in fiber and vitamins for heart health."
  },
  { 
    id: 17, 
    nameAr: "كفتة عدس + أرز بسمتي", 
    nameEn: "Lentil Kofta + Basmati Rice", 
    cal: 410, p: 20, c: 55, f: 7, 
    tag: "vegan",
    benefitsAr: "بروتين نباتي صحي للقلب، منخفض الدهون المشبعة والكوليسترول، يوفر الفوسفور والمغنيسيوم للعظام.",
    benefitsEn: "Heart-healthy plant protein, low in saturated fat, provides phosphorus and magnesium for bones."
  },
];

export function MealGallery() {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState("all");

  const filteredMeals = filter === "all" ? MEALS : MEALS.filter(m => m.tag === filter);

  return (
    <section id="meals" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-black dark:text-white">{t("gallery.title")}</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {["all", "loss", "gain", "keto", "vegan"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "rounded-full px-6 py-2 text-sm font-bold transition-all",
                  filter === f
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {t(`gallery.filter_${f}`)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredMeals.map((meal, i) => (
            <motion.div
              layout
              key={meal.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group flex flex-col rounded-[32px] border border-border bg-card p-8 shadow-xl shadow-primary/5 transition-all hover:border-primary/30"
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="rounded-full bg-accent/20 px-4 py-1 text-[10px] font-black uppercase tracking-wider text-primary">
                  {t(`gallery.filter_${meal.tag}`)}
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold uppercase text-muted-foreground">Calories</p>
                  <p className="text-xl font-black text-primary">{meal.cal}</p>
                </div>
              </div>

              <h3 className="mb-4 text-2xl font-bold leading-tight text-foreground">
                {language === "ar" ? meal.nameAr : meal.nameEn}
              </h3>

              <div className="mb-6 flex-1">
                <p className="text-sm font-medium leading-relaxed text-muted-foreground">
                  {language === "ar" ? meal.benefitsAr : meal.benefitsEn}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 border-t border-border pt-6">
                <div className="text-center">
                  <p className="mb-1 text-[10px] font-bold uppercase text-muted-foreground">Protein</p>
                  <p className="text-lg font-bold text-foreground">{meal.p}g</p>
                </div>
                <div className="text-center">
                  <p className="mb-1 text-[10px] font-bold uppercase text-muted-foreground">Carbs</p>
                  <p className="text-lg font-bold text-foreground">{meal.c}g</p>
                </div>
                <div className="text-center">
                  <p className="mb-1 text-[10px] font-bold uppercase text-muted-foreground">Fats</p>
                  <p className="text-lg font-bold text-foreground">{meal.f}g</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
