import { Download } from "lucide-react";
import { Package, CostBreakdownItem } from "./types";
import { generateProposalPDF } from "../utils/pdfGenerator";
import { useState } from "react";

interface PaymentPhase {
  phase: string;
  amount: string;
  percent: string;
  milestone: string;
}

interface CallToActionProps {
  currentPackage: Package;
  currentBreakdown: CostBreakdownItem[];
  currentPayment: PaymentPhase[];
}

export default function CallToAction({
  currentPackage,
  currentBreakdown,
  currentPayment,
}: CallToActionProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadPDF = async () => {
    setIsGenerating(true);
    try {
      await generateProposalPDF({
        selectedPackage: currentPackage,
        costBreakdown: currentBreakdown,
        paymentStructure: currentPayment,
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error generating PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };
  return (
    <>
      {/* Call to Action */}
      <div className="bg-green-600 text-white rounded-lg shadow-md p-8 text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Launch QuickMed?</h2>
        <p className="text-xl text-green-100 mb-6">
          {`Let's transform healthcare delivery in Nigeria together`}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleDownloadPDF}
            disabled={isGenerating}
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-green-50 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download
              className={`w-5 h-5 ${isGenerating ? "animate-spin" : ""}`}
            />
            {isGenerating ? "Generating PDF..." : "Download Proposal (PDF)"}
          </button>
        </div>
        <p className="text-sm text-green-100 mt-6">
          Contact: deniafe@gmail.com
        </p>
      </div>

      {/* Footer Note */}
      <div className="text-center text-gray-600 text-sm">
        <p>This proposal is valid for 30 days from the date of issue.</p>
        <p className="mt-2">
          © 2024 QuickMed Development Team. All rights reserved.
        </p>
      </div>
    </>
  );
}
