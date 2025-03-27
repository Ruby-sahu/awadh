"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function AosWrapper({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: false, // Whether animation should happen only once
      easing: "ease-in-out", // Easing function
    });
  }, []);

  return <>{children}</>;
}

