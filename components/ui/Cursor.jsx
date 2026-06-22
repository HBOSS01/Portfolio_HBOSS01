"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Cursor() {
  const bigCircleRef = useRef(null);
  const smallCircleRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768) {
      setIsTouchDevice(true);
      return;
    }

    const bigCircle   = bigCircleRef.current;
    const smallCircle = smallCircleRef.current;

    // Initial off-screen position so they don't flash at (0,0)
    gsap.set([bigCircle, smallCircle], { xPercent: -50, yPercent: -50, x: -200, y: -200 });

    let mouseX = -200;
    let mouseY = -200;

    // Small dot snaps instantly
    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      gsap.to(smallCircle, {
        x: mouseX,
        y: mouseY,
        duration: 0.08,
        ease: "power2.out",
      });
    };

    // Big circle follows with a smooth lag
    const ticker = gsap.ticker.add(() => {
      gsap.to(bigCircle, {
        x: mouseX,
        y: mouseY,
        duration: 0.55,
        ease: "power3.out",
      });
    });

    window.addEventListener("mousemove", onMouseMove);

    // Hide native cursor
    document.body.style.cursor = "none";

    // Hover effect: expand big circle to original big size, hide small dot
    const handleMouseEnterLink = () => {
      gsap.to(bigCircle,   { scale: 1.5, opacity: 0.6, duration: 0.3 });
      gsap.to(smallCircle, { scale: 0,   opacity: 0,   duration: 0.3 });
    };
    const handleMouseLeaveLink = () => {
      gsap.to(bigCircle,   { scale: 1, opacity: 1, duration: 0.3 });
      gsap.to(smallCircle, { scale: 1, opacity: 1, duration: 0.3 });
    };

    const interactables = document.querySelectorAll("a, button, [data-cursor-hover]");
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnterLink);
      el.addEventListener("mouseleave", handleMouseLeaveLink);
    });

    // Hide when mouse leaves window
    const handleMouseLeaveWindow = () => {
      gsap.to([bigCircle, smallCircle], { opacity: 0, duration: 0.2 });
    };
    const handleMouseEnterWindow = () => {
      gsap.to([bigCircle, smallCircle], { opacity: 1, duration: 0.2 });
    };

    document.documentElement.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.documentElement.addEventListener("mouseenter", handleMouseEnterWindow);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      gsap.ticker.remove(ticker);
      document.body.style.cursor = "";
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnterLink);
        el.removeEventListener("mouseleave", handleMouseLeaveLink);
      });
      document.documentElement.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnterWindow);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Big lagging circle */}
      <div
        className="hidden md:block"
        ref={bigCircleRef}
        style={{
          position:        "fixed",
          top:             0,
          left:            0,
          width:           "30px",
          height:          "30px",
          borderRadius:    "50%",
          background:      "rgba(6, 182, 212, 0.12)",
          border:          "2px solid rgba(6, 182, 212, 0.75)",
          pointerEvents:   "none",
          zIndex:          99999,
          willChange:      "transform",
          transformOrigin: "center center",
        }}
      />

      {/* Small snappy dot */}
      <div
        className="hidden md:block"
        ref={smallCircleRef}
        style={{
          position:        "fixed",
          top:             0,
          left:            0,
          width:           "9px",
          height:          "9px",
          borderRadius:    "50%",
          background:      "#22d3ee",
          boxShadow:       "0 0 8px 2px rgba(6, 182, 212, 0.7)",
          pointerEvents:   "none",
          zIndex:          100000,
          willChange:      "transform",
          transformOrigin: "center center",
        }}
      />
    </>
  );
}
