"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-xl font-bold text-teal-500">ZapVid</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="text-foreground/80 hover:text-teal-500 transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-foreground/80 hover:text-teal-500 transition-colors"
            >
              How it Works
            </a>
            <a
              href="#testimonials"
              className="text-foreground/80 hover:text-teal-500 transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="text-foreground/80 hover:text-teal-500 transition-colors"
            >
              Pricing
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-foreground/80 hover:text-foreground"
            >
              Log in
            </Button>
            <Button variant="default" className="bg-teal-500 hover:bg-teal-600">
              Get Started
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a
              href="#features"
              className="block text-foreground/80 hover:text-teal-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block text-foreground/80 hover:text-teal-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How it Works
            </a>
            <a
              href="#testimonials"
              className="block text-foreground/80 hover:text-teal-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#pricing"
              className="block text-foreground/80 hover:text-teal-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <div className="pt-4 flex flex-col space-y-4">
              <Button variant="outline" className="w-full">
                Log in
              </Button>
              <Button
                variant="default"
                className="w-full bg-teal-500 hover:bg-teal-600"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
