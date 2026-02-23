import { motion } from "motion/react";
import { useLanguage } from "./LanguageProvider";
import { MessageCircle, Phone, Mail } from "lucide-react";

export function Footer() {
  const { t, dir } = useLanguage();

  return (
    <footer className="bg-card pt-20 pb-10 text-foreground border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="#" className="font-serif mb-6 block text-3xl font-bold tracking-tight text-foreground">
              MealPrep <span className="text-primary">Pro</span>
            </a>
            <p className="mb-8 max-w-sm text-muted-foreground">
              {t("hero.subtitle")}
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/201119241396"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="mailto:alnmkym36@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold">{t("nav.how_it_works")}</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="#meals" className="hover:text-primary transition-colors">{t("nav.meals")}</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">{t("nav.pricing")}</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">{t("nav.faq")}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold">تواصل معنا</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center gap-3">
                <a href="tel:+201119241396" className="flex items-center gap-3 group" dir="ltr">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-bold group-hover:text-foreground transition-colors">
                    +20 111 924 1396
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a href="mailto:alnmkym36@gmail.com" className="flex items-center gap-3 group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-bold group-hover:text-foreground transition-colors">
                    alnmkym36@gmail.com
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <a 
                  href="https://wa.me/201119241396" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-bold group-hover:text-foreground transition-colors">
                    WhatsApp
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-border pt-10 text-center">
          <p className="mb-4 text-sm font-bold text-primary tracking-widest uppercase">
            {t("common.footer_line")}
          </p>
          <p className="text-sm text-muted-foreground">
            {t("common.all_rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
