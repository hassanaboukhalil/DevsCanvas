"use client";

import Navbar from "./Navbar";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-(--color-background)/80 backdrop-blur-md border-b border-(--color-border)"
          : "bg-transparent",
      )}
    >
      <Navbar />
    </header>
  );
};

export default Header;
