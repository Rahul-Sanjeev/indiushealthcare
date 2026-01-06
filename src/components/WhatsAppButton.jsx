import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { MessageCircle } from "lucide-react";

/**
 * Global Sticky WhatsApp Button
 * Transitions dynamically from the Hero placeholder to Fixed Bottom-Right.
 */
const WhatsAppButton = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [bottomOffset, setBottomOffset] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [heroCoords, setHeroCoords] = useState({
    top: 0,
    left: 0,
    width: "auto",
    height: "auto",
  });

  const { scrollY } = useScroll();

  // 1. Measure the Hero Placeholder position
  const updateCoords = () => {
    const target = document.getElementById("whatsapp-target");
    if (target) {
      const rect = target.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setHeroCoords({
        top: rect.top + scrollTop,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
    }
  };

  // 2. Logic: Sticky & Footer Collision
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsSticky(latest > 100);

    const footer = document.getElementById("footer");
    if (footer) {
      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const overlap = windowHeight - footerRect.top;
      // Push up if footer enters viewport (Positive overlap means footer is visible)
      setBottomOffset(overlap > 0 ? overlap : 0);
    }
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsDesktop(window.innerWidth >= 768);
      updateCoords(); // Recalculate on resize
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    setTimeout(updateCoords, 100); // Delay for layout settling

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate explicit left position for sticky state to ensure smooth interpolation
  // Window Width - Button Width (60px) - Padding Right (1.5rem = 24px)
  const stickyLeft = windowWidth > 0 ? windowWidth - 60 - 24 : "auto";

  // 3. Variants
  const variants = {
    hero: {
      position: "absolute",
      top: heroCoords.top,
      left: heroCoords.left,
      width: heroCoords.width,
      height: heroCoords.height,
      borderRadius: "9999px",

      // Reset fixed props
      bottom: "auto",
      right: "auto",
      x: 0,

      padding: "1rem 2rem",
      backgroundColor: "#059669",
      backdropFilter: "none",
    },
    sticky: {
      position: "fixed",
      // Dynamic bottom pushing ONLY on Desktop. Mobile/Tablet stays fixed at 1.5rem
      bottom: isDesktop ? `calc(1.5rem + ${bottomOffset}px)` : "1.5rem",

      // Use explicit LEFT for smooth transition from Hero Center to Bottom Right
      left: stickyLeft,
      right: "auto",

      // Reset absolute props
      top: "auto",

      // Always show Icon-Only Circle on Sticky (Mobile & Desktop)
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      padding: "0px",

      backgroundColor: "rgba(5, 150, 105, 0.9)",
      backdropFilter: "blur(8px)",

      x: 0,
    },
  };

  return (
    <AnimatePresence>
      <motion.a
        href="https://wa.me/23057092332"
        target="_blank"
        rel="noopener noreferrer"
        layoutId="whatsapp-main"
        variants={variants}
        initial="hero"
        animate={isSticky ? "sticky" : "hero"}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
        }}
        style={{ zIndex: 50 }}
        className="inline-flex items-center justify-center gap-3 text-white shadow-xl hover:bg-white hover:text-navy overflow-hidden will-change-transform"
      >
        <motion.div
          layout="position"
          className="flex items-center justify-center flex-shrink-0"
        >
          {/* Slightly larger icon when sticky/circle for visual balance */}
          <MessageCircle size={isSticky ? 24 : 18} />
        </motion.div>

        {/* Text only visible in Hero state */}
        <AnimatePresence mode="popLayout">
          {!isSticky && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2 }}
              className="whitespace-nowrap font-bold uppercase tracking-[0.2em] text-[10px] md:text-[12px]"
            >
              Connect on WhatsApp
            </motion.span>
          )}
        </AnimatePresence>
      </motion.a>
    </AnimatePresence>
  );
};

export default WhatsAppButton;
