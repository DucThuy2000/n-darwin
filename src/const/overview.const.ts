const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.5,
    },
  },
};

const LETTER_VARIANTS = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

// Enhanced role animation variants
const ROLE_VARIANTS = {
  flipUp: {
    initial: {
      rotateX: 90,
      opacity: 0,
      y: 20,
    },
    animate: {
      rotateX: 0,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    exit: {
      rotateX: -90,
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  },
  fadeSlide: {
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  },
  scale: {
    initial: {
      scale: 0.8,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    exit: {
      scale: 1.2,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  },
};

// Character by character animation
const CHARACTER_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
    },
  }),
};

const ANIMATED_ROLES = [
  {
    role: "Fullstack developer",
    years: "3+ years",
  },
  {
    role: "Freelance developer",
    years: "2+ years",
  },
];

export {
  ANIMATED_ROLES,
  CONTAINER_VARIANTS,
  ITEM_VARIANTS,
  LETTER_VARIANTS,
  ROLE_VARIANTS,
  CHARACTER_VARIANTS,
};
