export default function InvestmentComparison() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Investment Comparison
      </h2>
      <p className="text-gray-600 mb-6">
        How QuickMed development cost compares to alternatives
      </p>
      <div className="space-y-4">
        <div className="border border-red-200 bg-red-50 p-5 rounded-lg">
          <h3 className="font-bold text-gray-800 mb-2">
            ❌ Hiring In-house Team (6 months)
          </h3>
          <div className="text-sm text-gray-700 space-y-1">
            <p>• Senior Backend Developer: ₦1,200,000/mo × 6 = ₦7,200,000</p>
            <p>• Backend Developer: ₦800,000/mo × 6 = ₦4,800,000</p>
            <p>• Senior Mobile Developer: ₦900,000/mo × 6 = ₦5,400,000</p>
            <p>• Mobile Developer: ₦600,000/mo × 6 = ₦3,600,000</p>
            <p>• Web Developer: ₦500,000/mo × 6 = ₦3,000,000</p>
            <p>• UI/UX Designer: ₦350,000/mo × 6 = ₦2,100,000</p>
            <p>• Project Manager: ₦400,000/mo × 6 = ₦2,400,000</p>
            <p>• QA Tester: ₦300,000/mo × 6 = ₦1,800,000</p>
            <p>• DevOps Engineer: ₦450,000/mo × 6 = ₦2,700,000</p>
            <p className="font-bold text-red-700 pt-2 border-t border-red-200 mt-2">
              Total: ₦33,000,000+ (salaries only, no infrastructure, equipment,
              or benefits)
            </p>
          </div>
        </div>
        <div className="border border-orange-200 bg-orange-50 p-5 rounded-lg">
          <h3 className="font-bold text-gray-800 mb-2">
            ⚠️ Foreign Development Agency
          </h3>
          <div className="text-sm text-gray-700 space-y-1">
            <p>• US/European rates: $50,000 - $150,000 USD</p>
            <p>• Conversion: ₦60,000,000 - ₦180,000,000</p>
            <p>• Communication barriers, time zones, cultural differences</p>
            <p className="font-bold text-orange-700 pt-2 border-t border-orange-200 mt-2">
              Total: ₦60M - ₦180M+ (with communication challenges)
            </p>
          </div>
        </div>
        <div className="border border-green-200 bg-green-50 p-5 rounded-lg">
          <h3 className="font-bold text-gray-800 mb-2">
            ✅ QuickMed Professional Development
          </h3>
          <div className="text-sm text-gray-700 space-y-1">
            <p>• Complete 4-app ecosystem</p>
            <p>• Enterprise-grade infrastructure</p>
            <p>• Local development team - easy communication</p>
            <p>• 3-phase payment protection</p>
            <p>• Full source code ownership</p>
            <p>• Post-launch support included</p>
            <p className="font-bold text-green-700 pt-2 border-t border-green-200 mt-2">
              Total: ₦12M - ₦28M (best value for money)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
