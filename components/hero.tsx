"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"; // Adjust to your setup
import Link from "next/link";

const backgroundImages = [
  "/images/slideshow1.png",
  "/images/slideshow2.png",
  "/images/slideshow3.png", // Add paths to your images
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % backgroundImages.length);
    }, 2000); // Change image every 5s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[57vh] overflow-hidden flex items-center justify-center text-white">
      {/* Background images */}
      {backgroundImages.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-700/70 to-gray-900/90 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          The Property Professionals
        </h2>
        <p className="md:text-xl mb-8 text-blue-100 max-w-2xl mx-auto font-bold text-xl">
          Smarter Property Services Built for Today’s Market.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/properties">
            <Button
              size="lg"
              className="bg-white text-blue-800 hover:bg-blue-50 w-full sm:w-auto text-lg"
            >
              Find Properties
            </Button>
          </Link>
          <Link href="/book-appointment">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-white hover:text-blue-800 w-full sm:w-auto text-lg"
            >
              Book Appointment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
