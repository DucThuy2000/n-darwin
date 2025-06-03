"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useState } from "react";

export const ButtonToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > 300);
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed right-4 bottom-4 z-50 cursor-pointer rounded-full bg-primary p-2 text-white shadow-lg transition-colors hover:bg-primary/80"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
        >
          <ChevronUp size={24} />
          <span className="sr-only">Scroll To Top</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
