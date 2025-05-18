"use client";
import React, { useEffect } from "react";
import Navbar from "./_components/navbar";
import Hero from "./_components/hero";

const HomePage = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(
          (e.currentTarget as HTMLAnchorElement).getAttribute("href") || ""
        );
        if (target) {
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY,
            behavior: "smooth",
          });
        }
      });
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", () => {});
      });
    };
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
    </div>
  );
};

export default HomePage;
