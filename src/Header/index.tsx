"use client";

import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";

function VerseLogo() {
  return <Image src={logo} alt="Verse Arquitetura" height={40} priority />;
}

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (current > previous && current > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      animate={{ y: hidden ? -80 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        background: "rgba(245, 240, 235, 0.92)",
        borderBottom: "1px solid rgba(140, 100, 60, 0.15)",
        zIndex: 100,
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px",
        }}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Verse Arquitetura — início"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#1A1208",
            padding: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <VerseLogo />
        </button>

        <nav style={{ display: "flex", gap: 40 }}>
          {["Sobre", "Projetos", "Contato"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#1A1208",
                fontSize: 12,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontFamily: "var(--font-montserrat)",
                fontWeight: 400,
                opacity: 0.55,
                padding: 0,
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.55")}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
