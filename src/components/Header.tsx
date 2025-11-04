"use client";

import { Package } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Start shrinking after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 bg-blue-600 text-white px-6 transition-all duration-300 ${
        isScrolled ? "py-3 shadow-lg" : "py-12"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Full header when not scrolled */}
        {!isScrolled && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* QuickMed Logo - fallback to icon if logo not found */}
              <div className="w-16 h-16 relative">
                <Image
                  src="/quickmed-logo.png"
                  alt="QuickMed Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                  onError={(e) => {
                    // Fallback to Package icon if logo not found
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling?.classList.remove(
                      "hidden"
                    );
                  }}
                />
                <Package className="w-16 h-16 hidden" />
              </div>
              <h1 className="text-4xl font-bold">QuickMed</h1>
            </div>
            <p className="text-xl text-blue-100">
              Enterprise Pharmacy Delivery Ecosystem
            </p>
            <p className="text-blue-100 mt-2">
              Professional Development Proposal
            </p>
          </div>
        )}

        {/* Compact header when scrolled */}
        {isScrolled && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* QuickMed Logo - fallback to icon if logo not found */}
              <div className="w-10 h-10 relative">
                <Image
                  src="/quickmed-logo.png"
                  alt="QuickMed Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  onError={(e) => {
                    // Fallback to Package icon if logo not found
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling?.classList.remove(
                      "hidden"
                    );
                  }}
                />
                <Package className="w-10 h-10 hidden" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">QuickMed</h1>
                <p className="text-sm text-blue-100">
                  Enterprise Pharmacy Delivery Ecosystem
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <p className="text-sm text-blue-100">
                Professional Development Proposal
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
