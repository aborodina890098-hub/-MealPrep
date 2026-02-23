import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/201119241396"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-24 right-6 z-[90] flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl shadow-primary/40 md:bottom-8"
    >
      <MessageCircle className="h-8 w-8" />
    </motion.a>
  );
}
