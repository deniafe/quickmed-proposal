"use client";

import { Clock } from "lucide-react";
import { Package } from "./types";

interface PackageSelectorProps {
  packages: Record<string, Package>;
  selectedPackage: string;
  onPackageSelect: (packageKey: string) => void;
}

export default function PackageSelector({
  packages,
  selectedPackage,
  onPackageSelect,
}: PackageSelectorProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Choose Your Package
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(packages).map(([key, pkg]) => (
          <div
            key={key}
            onClick={() => onPackageSelect(key)}
            className={`relative cursor-pointer rounded-lg p-6 border-2 transition-all ${
              selectedPackage === key
                ? "border-blue-600 bg-blue-50 shadow-lg"
                : "border-gray-200 hover:border-blue-300 hover:shadow-md bg-white"
            }`}
          >
            {pkg.recommended && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  RECOMMENDED
                </span>
              </div>
            )}
            <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
            <div className="text-3xl font-bold text-blue-600 mb-3">
              {pkg.price}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
              <Clock className="w-4 h-4" />
              {pkg.timeline}
            </div>
            <p className="text-sm text-gray-700">{pkg.description}</p>
            <p className="text-xs text-gray-500 mt-2 italic">{pkg.bestFor}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
