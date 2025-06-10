"use client";

import { useEffect } from "react";

export const CursorShadow = () => {
  useEffect(() => {
    let cursorShadow: HTMLDivElement | null = null;

    const createCursorShadow = () => {
      cursorShadow = document.createElement("div");
      cursorShadow.className = "cursor-shadow";
      document.body.appendChild(cursorShadow);
    };

    const updateCursorPosition = (e: MouseEvent) => {
      if (cursorShadow) {
        const x = e.clientX;
        const y = e.clientY;

        cursorShadow.style.left = `${x}px`;
        cursorShadow.style.top = `${y}px`;
      }
    };

    createCursorShadow();
    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      if (cursorShadow && document.body.contains(cursorShadow)) {
        document.body.removeChild(cursorShadow);
      }
    };
  }, []);

  return null;
};
