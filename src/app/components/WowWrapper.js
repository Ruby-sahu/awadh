"use client";
import { useEffect } from "react";
import WOW from "wow.js";
import "animate.css";

export default function WowWrapper({ children }) {
  useEffect(() => {
    new WOW().init();
  }, []);

  return <>{children}</>;
}
