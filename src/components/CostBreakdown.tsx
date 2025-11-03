import { DollarSign } from "lucide-react";
import { Package, CostBreakdownItem } from "./types";

interface CostBreakdownProps {
  currentPackage: Package;
  currentBreakdown: CostBreakdownItem[];
}

export default function CostBreakdown({
  currentPackage,
  currentBreakdown,
}: CostBreakdownProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <DollarSign className="w-6 h-6 text-blue-600" />
        Detailed Cost Breakdown - {currentPackage.name}
      </h2>
      <div className="space-y-3">
        {currentBreakdown.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-200"
          >
            <span className="text-gray-700 font-medium">{item.item}</span>
            <span className="text-blue-600 font-bold">{item.cost}</span>
          </div>
        ))}
        <div className="flex justify-between items-center p-4 bg-blue-600 text-white rounded-lg font-bold text-lg mt-4">
          <span>TOTAL PROJECT COST</span>
          <span>{currentPackage.price}</span>
        </div>
      </div>
    </div>
  );
}
