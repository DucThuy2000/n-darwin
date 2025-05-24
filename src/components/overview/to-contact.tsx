import { LETTER_VARIANTS } from "@/const/overview.const";
import { motion } from "framer-motion";

export const ToContact = () => {
  const animateText = (text: string) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        variants={LETTER_VARIANTS}
        initial="hidden"
        animate="visible"
        transition={{ delay: index * 0.05 }}
        style={{ display: "inline-block" }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className="mt-4"
    >
      <motion.div
        className="inline-block px-6 py-3 bg-primary/10 rounded-full text-primary font-medium"
        whileHover={{
          backgroundColor: "rgba(var(--color-primary-rgb), 0.2)",
        }}
      >
        {animateText("Let's create something amazing!")}
      </motion.div>
    </motion.div>
  );
};
