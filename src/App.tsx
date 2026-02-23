/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider, useLanguage } from "./components/LanguageProvider";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Metrics } from "./components/Metrics";
import { PainSolution } from "./components/PainSolution";
import { HowItWorks } from "./components/HowItWorks";
import { MealGallery } from "./components/MealGallery";
import { Pricing } from "./components/Pricing";
import { AppFeatures } from "./components/AppFeatures";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { ConversionModal } from "./components/ConversionModal";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { StickyMobileCTA } from "./components/StickyMobileCTA";
import { motion } from "motion/react";

function MainContent() {
  const { dir } = useLanguage();
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "subscribe" | "trial" | "consult";
    plan?: string;
  }>({
    isOpen: false,
    type: "subscribe",
  });

  const openModal = (type: "subscribe" | "trial" | "consult", plan?: string) => {
    setModalState({ isOpen: true, type, plan });
  };

  return (
    <div className={dir === "rtl" ? "font-arabic" : "font-sans"}>
      <Header onOpenModal={(type) => openModal(type)} />
      
      <main>
        <Hero onOpenModal={(type) => openModal(type)} />
        <Metrics />
        <PainSolution />
        <HowItWorks />
        <MealGallery />
        <Pricing onOpenModal={(plan) => openModal("subscribe", plan)} />
        <AppFeatures />
        <Testimonials />
        <FAQ />
        
        {/* Final CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[64px] bg-primary py-20 px-8 text-center text-primary-foreground shadow-3xl shadow-primary/30"
            >
              <h2 className="font-serif mb-8 text-4xl font-bold md:text-6xl">جاهز تبدأ حياة صحية بجد؟</h2>
              <p className="mx-auto mb-12 max-w-2xl text-xl opacity-90">
                انضم لآلاف المشتركين اللي غيروا حياتهم مع MealPrep Pro. الأكل الصحي عمره ما كان بالسهولة دي.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <button
                  onClick={() => openModal("subscribe")}
                  className="rounded-2xl bg-accent px-10 py-5 text-lg font-black text-accent-foreground transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-accent/20"
                >
                  اشترك دلوقتي
                </button>
                <button
                  onClick={() => openModal("consult")}
                  className="rounded-2xl border-2 border-primary-foreground/30 bg-primary-foreground/10 px-10 py-5 text-lg font-black text-primary-foreground backdrop-blur-md transition-transform hover:bg-primary-foreground/20 hover:scale-105 active:scale-95"
                >
                  استشارة مجانية
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      
      <ConversionModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        type={modalState.type}
        initialPlan={modalState.plan}
      />
      
      <FloatingWhatsApp />
      <StickyMobileCTA onOpenModal={(type) => openModal(type)} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <LanguageProvider>
        <MainContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
