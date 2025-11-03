"use client";

import { useState } from "react";
import {
  Calculator,
  TrendingUp,
  DollarSign,
  Calendar,
  Eye,
  EyeOff,
  BarChart3,
} from "lucide-react";
import { Package } from "./types";

interface ROICalculatorProps {
  currentPackage: Package;
}

export default function ROICalculator({ currentPackage }: ROICalculatorProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [inputs, setInputs] = useState({
    monthlyUsers: 5000,
    avgOrderValue: 8000,
    ordersPerUser: 2.5,
    commissionRate: 8,
  });

  // Calculate investment amount (remove ₦ and commas)
  const investmentAmount = parseInt(currentPackage.price.replace(/[₦,]/g, ""));

  // Real-time calculations
  const monthlyOrders = inputs.monthlyUsers * inputs.ordersPerUser;
  const monthlyGMV = monthlyOrders * inputs.avgOrderValue;
  const monthlyRevenue = monthlyGMV * (inputs.commissionRate / 100);
  const yearlyRevenue = monthlyRevenue * 12;

  const breakEvenMonths = Math.ceil(investmentAmount / monthlyRevenue);
  const firstYearProfit = yearlyRevenue - investmentAmount;
  const roiPercentage = (firstYearProfit / investmentAmount) * 100;

  const threeYearRevenue = yearlyRevenue * 3;
  const threeYearProfit = threeYearRevenue - investmentAmount;
  const threeYearROI = (threeYearProfit / investmentAmount) * 100;

  const handleInputChange = (key: string, value: number) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  const formatCurrency = (amount: number) => {
    return `₦${amount.toLocaleString()}`;
  };

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div className="bg-blue-600 rounded-lg shadow-xl p-8 mb-8 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Interactive ROI Calculator</h2>
              <p className="text-white/80">
                See your potential returns with {currentPackage.name}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all backdrop-blur-sm font-medium"
          >
            {isVisible ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
            {isVisible ? "Hide Calculator" : "Show Calculator"}
          </button>
        </div>

        {isVisible && (
          <div className="space-y-8">
            {/* Input Sliders */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Business Assumptions
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Monthly Active Users: {formatNumber(inputs.monthlyUsers)}
                    </label>
                    <input
                      type="range"
                      min="1000"
                      max="50000"
                      step="500"
                      value={inputs.monthlyUsers}
                      onChange={(e) =>
                        handleInputChange(
                          "monthlyUsers",
                          parseInt(e.target.value)
                        )
                      }
                      className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-white/60 mt-1">
                      <span>1K</span>
                      <span>50K</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Average Order Value:{" "}
                      {formatCurrency(inputs.avgOrderValue)}
                    </label>
                    <input
                      type="range"
                      min="2000"
                      max="20000"
                      step="500"
                      value={inputs.avgOrderValue}
                      onChange={(e) =>
                        handleInputChange(
                          "avgOrderValue",
                          parseInt(e.target.value)
                        )
                      }
                      className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-white/60 mt-1">
                      <span>₦2K</span>
                      <span>₦20K</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Revenue Settings
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Orders per User/Month: {inputs.ordersPerUser}
                    </label>
                    <input
                      type="range"
                      min="0.5"
                      max="10"
                      step="0.1"
                      value={inputs.ordersPerUser}
                      onChange={(e) =>
                        handleInputChange(
                          "ordersPerUser",
                          parseFloat(e.target.value)
                        )
                      }
                      className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-white/60 mt-1">
                      <span>0.5</span>
                      <span>10</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Commission Rate: {inputs.commissionRate}%
                    </label>
                    <input
                      type="range"
                      min="3"
                      max="15"
                      step="0.5"
                      value={inputs.commissionRate}
                      onChange={(e) =>
                        handleInputChange(
                          "commissionRate",
                          parseFloat(e.target.value)
                        )
                      }
                      className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-white/60 mt-1">
                      <span>3%</span>
                      <span>15%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Monthly & Yearly Revenue */}
              <div className="bg-white/15 backdrop-blur-sm rounded-lg p-6 border border-white/30">
                <div className="flex items-center gap-2 mb-4">
                  <DollarSign className="w-5 h-5 text-white" />
                  <h4 className="font-semibold">Revenue Projections</h4>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-white/70">Monthly Revenue</p>
                    <p className="text-xl font-bold text-white">
                      {formatCurrency(monthlyRevenue)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Yearly Revenue</p>
                    <p className="text-2xl font-bold text-white">
                      {formatCurrency(yearlyRevenue)}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-white/20">
                    <p className="text-xs text-white/60">
                      {formatNumber(monthlyOrders)} orders/month •{" "}
                      {formatCurrency(monthlyGMV)} GMV
                    </p>
                  </div>
                </div>
              </div>

              {/* Break-even & First Year */}
              <div className="bg-white/15 backdrop-blur-sm rounded-lg p-6 border border-white/30">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="w-5 h-5 text-white" />
                  <h4 className="font-semibold">Break-even Analysis</h4>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-white/70">Break-even Timeline</p>
                    <p className="text-xl font-bold text-white">
                      {breakEvenMonths} month{breakEvenMonths !== 1 ? "s" : ""}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-white/70">First Year Profit</p>
                    <p
                      className={`text-2xl font-bold ${
                        firstYearProfit >= 0 ? "text-white" : "text-red-300"
                      }`}
                    >
                      {formatCurrency(firstYearProfit)}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-white/20">
                    <p className="text-xs text-white/60">
                      Investment: {formatCurrency(investmentAmount)}
                    </p>
                  </div>
                </div>
              </div>

              {/* ROI Metrics */}
              <div className="bg-white/15 backdrop-blur-sm rounded-lg p-6 border border-white/30">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-white" />
                  <h4 className="font-semibold">ROI Metrics</h4>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-white/70">First Year ROI</p>
                    <p
                      className={`text-xl font-bold ${
                        roiPercentage >= 0 ? "text-white" : "text-red-300"
                      }`}
                    >
                      {roiPercentage.toFixed(1)}%
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-white/70">3-Year ROI</p>
                    <p className="text-2xl font-bold text-white">
                      {threeYearROI.toFixed(1)}%
                    </p>
                  </div>
                  <div className="pt-2 border-t border-white/20">
                    <p className="text-xs text-white/60">
                      3-Year Profit: {formatCurrency(threeYearProfit)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Insights */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h4 className="font-semibold mb-3">💡 Key Insights</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p className="text-white/80">
                    • Your platform will process{" "}
                    <strong>{formatCurrency(monthlyGMV)}</strong> in monthly
                    transactions
                  </p>
                  <p className="text-white/80">
                    • Break-even achieved in just{" "}
                    <strong>{breakEvenMonths} months</strong> with these
                    assumptions
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-white/80">
                    • First year generates{" "}
                    <strong>
                      {roiPercentage >= 0 ? "+" : ""}
                      {roiPercentage.toFixed(1)}%
                    </strong>{" "}
                    return on investment
                  </p>
                  <p className="text-white/80">
                    • 3-year projection shows{" "}
                    <strong>{formatCurrency(threeYearProfit)}</strong> total
                    profit
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Collapsed State Preview */}
        {!isVisible && (
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-white">
                  {formatCurrency(monthlyRevenue)}
                </p>
                <p className="text-sm text-white/70">Monthly Revenue</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  {breakEvenMonths}mo
                </p>
                <p className="text-sm text-white/70">Break-even</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  {roiPercentage.toFixed(0)}%
                </p>
                <p className="text-sm text-white/70">First Year ROI</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  {threeYearROI.toFixed(0)}%
                </p>
                <p className="text-sm text-white/70">3-Year ROI</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: white;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}
