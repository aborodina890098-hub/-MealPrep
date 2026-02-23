import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "../lib/utils";

const formSchema = z.object({
  name: z.string().min(3),
  phone: z.string().min(10),
  goal: z.string().optional(),
  preference: z.string().optional(),
  plan: z.string().optional(),
  days: z.string().optional(),
  consultationDetails: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "subscribe" | "trial" | "consult";
  initialPlan?: string;
}

export function ConversionModal({ isOpen, onClose, type, initialPlan }: ModalProps) {
  const { t, dir, language } = useLanguage();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      plan: initialPlan || "Pro",
      days: "5",
      goal: "health",
      preference: "normal",
      consultationDetails: ""
    }
  });

  const onSubmit = (data: FormData) => {
    let message = "";
    if (type === "consult") {
      message = language === "ar"
        ? `طلب استشارة مجانية من MealPrep Pro:\nالاسم: ${data.name}\nالموبايل: ${data.phone}\nتفاصيل الاستشارة: ${data.consultationDetails}`
        : `Free Consultation Request from MealPrep Pro:\nName: ${data.name}\nPhone: ${data.phone}\nDetails: ${data.consultationDetails}`;
    } else {
      message = language === "ar" 
        ? `طلب جديد من MealPrep Pro:\nالاسم: ${data.name}\nالموبايل: ${data.phone}\nالهدف: ${data.goal}\nالنظام: ${data.preference}\nالباقة: ${data.plan}\nالأيام: ${data.days}`
        : `New Request from MealPrep Pro:\nName: ${data.name}\nPhone: ${data.phone}\nGoal: ${data.goal}\nDiet: ${data.preference}\nPlan: ${data.plan}\nDays: ${data.days}`;
    }
    
    const whatsappUrl = `https://wa.me/201119241396?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className={cn(
              "relative w-full max-w-lg overflow-hidden rounded-3xl bg-card p-8 shadow-2xl border border-border",
              dir === "rtl" ? "font-arabic" : "font-sans"
            )}
            dir={dir}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 rounded-full p-2 hover:bg-muted transition-colors"
            >
              <X className="h-6 w-6 text-muted-foreground" />
            </button>

            <h2 className="mb-6 text-2xl font-bold text-foreground">
              {type === "consult" 
                ? (language === "ar" ? "استشارة مجانية" : "Free Consultation")
                : t("modal.title")}
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">
                  {language === "ar" ? "الاسم" : "Name"}
                </label>
                <input
                  {...register("name")}
                  className="w-full rounded-xl border border-border bg-muted p-3 outline-none focus:ring-2 focus:ring-primary transition-all"
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">Required</p>}
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-foreground">
                  {language === "ar" ? "رقم الهاتف" : "Phone Number"}
                </label>
                <input
                  {...register("phone")}
                  placeholder="+20"
                  className="w-full rounded-xl border border-border bg-muted p-3 outline-none focus:ring-2 focus:ring-primary transition-all"
                />
                {errors.phone && <p className="mt-1 text-xs text-red-500">Required</p>}
              </div>

              {type === "consult" ? (
                <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">
                    {language === "ar" ? "ما هي الاستشارة التي تريدها؟" : "What consultation do you need?"}
                  </label>
                  <textarea
                    {...register("consultationDetails")}
                    rows={4}
                    className="w-full rounded-xl border border-border bg-muted p-3 outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-foreground">{t("modal.goal")}</label>
                      <select
                        {...register("goal")}
                        className="w-full rounded-xl border border-border bg-muted p-3 outline-none focus:ring-2 focus:ring-primary transition-all"
                      >
                        <option value="loss">{t("modal.goal_loss")}</option>
                        <option value="gain">{t("modal.goal_gain")}</option>
                        <option value="health">{t("modal.goal_health")}</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-foreground">{t("modal.preference")}</label>
                      <select
                        {...register("preference")}
                        className="w-full rounded-xl border border-border bg-muted p-3 outline-none focus:ring-2 focus:ring-primary transition-all"
                      >
                        <option value="normal">{t("modal.pref_normal")}</option>
                        <option value="keto">{t("modal.pref_keto")}</option>
                        <option value="vegan">{t("modal.pref_vegan")}</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-foreground">{t("modal.plan")}</label>
                      <select
                        {...register("plan")}
                        className="w-full rounded-xl border border-border bg-muted p-3 outline-none focus:ring-2 focus:ring-primary transition-all"
                      >
                        <option value="Starter">Starter</option>
                        <option value="Pro">Pro</option>
                        <option value="Elite">Elite</option>
                        <option value="Keto">Keto</option>
                        <option value="Vegan">Vegan</option>
                      </select>
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-foreground">{t("modal.days")}</label>
                      <select
                        {...register("days")}
                        className="w-full rounded-xl border border-border bg-muted p-3 outline-none focus:ring-2 focus:ring-primary transition-all"
                      >
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="7">7</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              <button
                type="submit"
                className="mt-4 w-full rounded-xl bg-primary py-4 font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg active:scale-[0.98]"
              >
                {t("modal.submit")}
              </button>
              
              <p className="text-center text-xs text-muted-foreground">
                {t("common.results_disclaimer")}
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
