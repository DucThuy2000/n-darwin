"use client";
import { motion } from "framer-motion";
import { STACKS } from "@/const/user.const";
import { StackItem } from "./stack-item";
import { TitleSection } from "../ui/title-section";

export const Stacks = () => {
  return (
    <section id="stacks">
      <TitleSection title="stack" />
      <div className="flex items-center flex-wrap gap-4">
        {STACKS.map((stack, index) => (
          <motion.div
            key={stack.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <StackItem key={stack.key} stack={stack} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
