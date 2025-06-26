"use client";

import { useEffect, useRef, useState } from "react";
import { Building2, Phone } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      if (currentScrollY < 30) {
        setShowNavbar(true);
        setIsScrollingUp(false);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
        setIsScrollingUp(false);
      } else if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
        setIsScrollingUp(true);
      }

      setLastScrollY(currentScrollY);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [lastScrollY]);

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/properties", label: "Properties" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`bg-blue-800 text-white sticky top-0 z-50 transition-transform duration-300 ease-in-out ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrollingUp
          ? "border-b border-blue-200 shadow-md"
          : "border-none shadow-none"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Building2 className="h-8 w-8" />
          <div>
            <h1 className="text-2xl font-bold">CAPITAL</h1>
            <p className="text-sm text-blue-100">Letting & Estate Agents</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-blue-200 transition-colors text-blue-200"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Contact + Hamburger */}
        <div className="flex items-center space-x-4">
          <Phone className="h-4 w-4" />
          <a href="tel:02085685680" className="text-sm hover:text-blue-200">
            020 8568 5680
          </a>

          {/* Hamburger Icon */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12" // X
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-blue-700 text-white px-4 py-4 rounded-b-md shadow-lg animate-fade-in"
        >
          <nav className="flex flex-col divide-y divide-blue-600">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="py-3 px-2 text-lg hover:text-blue-200 transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
