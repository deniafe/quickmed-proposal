import { Package } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-blue-600 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <Package className="w-10 h-10" />
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
