"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import AvatarImage from "@/public/images/avatar.png";

export const Avatar = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.8,
      }}
    >
      <Image
        src={AvatarImage}
        alt="avatar"
        className="rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none size-80 "
        width={1024}
        height={1024}
      />
    </motion.div>
  );
};
