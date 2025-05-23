"use client";

import { Fragment, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  animatedRoles,
  characterVariants,
  itemVariants,
  roleVariants,
} from "@/const/overview.const";

export const Brief = () => {
  const [activeRole, setActiveRole] = useState(animatedRoles[0]);
  const [roleIndex, setRoleIndex] = useState(0);
  const [animationStyle, setAnimationStyle] = useState<
    "flipUp" | "fadeSlide" | "scale" | "character"
  >("fadeSlide");

  // Character by character animation for roles
  const animateRole = (text: string) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        custom={index}
        variants={characterVariants}
        initial="hidden"
        animate="visible"
        style={{ display: "inline-block" }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Cycle through different animation styles
      setAnimationStyle((prev) => {
        const styles: ("flipUp" | "fadeSlide" | "scale" | "character")[] = [
          "flipUp",
          "fadeSlide",
          "scale",
          "character",
        ];
        const currentIndex = styles.indexOf(prev);
        return styles[(currentIndex + 1) % styles.length];
      });

      // Update the active role
      setRoleIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % animatedRoles.length;
        setActiveRole(animatedRoles[nextIndex]);
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const renderRoleWithAnimation = () => {
    if (animationStyle === "character") {
      return (
        <motion.span
          className="text-primary inline-block"
          key={`char-${activeRole.role}`}
        >
          {animateRole(activeRole.role)}
        </motion.span>
      );
    }

    return (
      <motion.span
        key={activeRole.role}
        className="text-primary inline-block"
        whileHover="hover"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={roleVariants[animationStyle]}
        style={{
          transformStyle: animationStyle === "flipUp" ? "preserve-3d" : "flat",
        }}
      >
        {activeRole.role}
      </motion.span>
    );
  };

  const renderYearsWithAnimation = () => {
    if (animationStyle === "character") {
      return (
        <motion.span
          className="text-primary inline-block"
          key={`char-${activeRole.years}`}
        >
          {animateRole(activeRole.years)}
        </motion.span>
      );
    }

    return (
      <motion.span
        key={activeRole.years}
        className="text-primary inline-block"
        whileHover="hover"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={roleVariants[animationStyle]}
        style={{
          transformStyle: animationStyle === "flipUp" ? "preserve-3d" : "flat",
        }}
      >
        {activeRole.years}
      </motion.span>
    );
  };

  return (
    <Fragment>
      <motion.p
        className="text-4xl leading-12 font-semibold md:text-2xl md:leading-10"
        variants={itemVariants}
      >
        I'm{" "}
        <motion.span className="text-primary" whileHover="hover">
          Darwin
        </motion.span>{" "}
        a{" "}
        <AnimatePresence mode="wait">
          {renderRoleWithAnimation()}
        </AnimatePresence>{" "}
        with{" "}
        <AnimatePresence mode="wait">
          {renderYearsWithAnimation()}
        </AnimatePresence>{" "}
        of exp
      </motion.p>
    </Fragment>
  );
};
