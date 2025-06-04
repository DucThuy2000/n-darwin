"use client";
import { motion } from "framer-motion";

import { CONTAINER_VARIANTS } from "@/const/overview.const";

import { Avatar } from "./avatar";
import { Brief } from "./brief";
import { ToContact } from "./to-contact";

export const Overview = () => {
  return (
    <motion.section
      id="overview"
      className="flex flex-col items-center justify-center gap-4 text-center md:flex-row md:justify-between md:text-end"
      variants={CONTAINER_VARIANTS}
      initial="hidden"
      animate="visible"
      whileInView={{ y: [10, 0], transition: { duration: 0.5 } }}
      viewport={{ once: true, amount: 0.8 }}
    >
      <Avatar />
      <div className="flex max-w-lg flex-col gap-4">
        <Brief />
        <ToContact />
      </div>
    </motion.section>
  );
};
