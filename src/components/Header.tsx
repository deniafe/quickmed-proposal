import { Package } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-blue-600 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
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
                e.currentTarget.nextElementSibling?.classList.remove("hidden");
              }}
            />
            <Package className="w-16 h-16 hidden" />
          </div>
          <h1 className="text-4xl font-bold">QuickMed</h1>
        </div>
        <p className="text-xl text-blue-100">
          Enterprise Pharmacy Delivery Ecosystem
        </p>
        <p className="text-blue-100 mt-2">Professional Development Proposal</p>
      </div>
    </div>
  );
}
