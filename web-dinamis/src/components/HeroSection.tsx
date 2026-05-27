"use client";

import { useEffect, useRef } from "react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("hero--visible");
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero" className="hero" ref={sectionRef}>
      <div className="floating-accent" style={{ top: "20%", left: "10%" }} />
      <div className="floating-accent floating-accent--alt" style={{ bottom: "10%", right: "15%" }} />

      <span className="hero-tagline">Platform Jual Beli Akun &amp; Top Up Diamond</span>
      <h1 className="hero-title">
        MEMBANGUN MASA DEPAN GEMILANG
        <br />
        <span className="hero-title--gradient">DENGAN TEKNOLOGI</span>
      </h1>
      <p className="hero-description">
        Krisna Store menyediakan layanan jual beli akun dan top up diamond
        terpercaya untuk para gamers Indonesia. Nikmati layanan aman dan cepat.
      </p>
      <a href="#services" className="cta-button">
        LIHAT PRODUK
      </a>
    </section>
  );
}
