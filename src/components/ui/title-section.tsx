"use client";

import { motion } from "framer-motion";

export const TitleSection = ({ title }: { title: string }) => {
  return (
    <motion.div
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-4 mb-10"
    >
      <h2 className="text-3xl font-medium">
        <span className="mr-0.5 text-primary">#</span>
        {title}
      </h2>
      <div className="h-0.5 w-48 bg-primary"></div>
    </motion.div>
  );
};
