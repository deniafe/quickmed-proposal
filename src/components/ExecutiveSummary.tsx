import { FileText, Smartphone, Users, Shield } from "lucide-react";

export default function ExecutiveSummary() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <FileText className="w-6 h-6 text-blue-600" />
        Executive Summary
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This proposal outlines the development of{" "}
        <strong>QuickMed Enterprise</strong> - a comprehensive digital
        healthcare logistics platform connecting patients, verified pharmacies,
        and delivery riders across Nigeria. This enterprise-grade solution
        includes advanced AI, predictive analytics, multi-branch support, and
        regulatory compliance features designed for nationwide scale deployment.
      </p>
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <Smartphone className="w-8 h-8 text-blue-600 mb-2" />
          <h3 className="font-semibold text-gray-800">4 Applications</h3>
          <p className="text-sm text-gray-600">
            User, Pharmacy, Rider & Admin platforms
          </p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
          <Users className="w-8 h-8 text-green-600 mb-2" />
          <h3 className="font-semibold text-gray-800">Enterprise Scale</h3>
          <p className="text-sm text-gray-600">
            Built to handle thousands of users
          </p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
          <Shield className="w-8 h-8 text-purple-600 mb-2" />
          <h3 className="font-semibold text-gray-800">Compliant</h3>
          <p className="text-sm text-gray-600">
            NAFDAC-ready & regulatory support
          </p>
        </div>
      </div>
    </div>
  );
}
