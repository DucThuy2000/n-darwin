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
      className="flex flex-col justify-center items-center"
    >
      <Image
        src={AvatarImage}
        alt="avatar"
        className="rounded-full ring-2 ring-border ring-offset-2 ring-offset-primary select-none size-80"
        width={1024}
        height={1024}
      />
      <div className="text-start px-1 border border-gray-300 text-sm gap-2 w-fit text-secondary hidden lg:flex md:items-center">
        <div className="h-4 w-4 bg-primary"></div>
        Currently working on <strong className="text-white">Portfolio</strong>
      </div>
    </motion.div>
  );
};
