import { Smartphone, Database, Globe, FileText } from "lucide-react";

export default function TechnicalDeliverables() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Technical Deliverables
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
          <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-blue-600" />
            Mobile Applications
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• iOS app (App Store ready)</li>
            <li>• Android app (Play Store ready)</li>
            <li>• Cross-platform code (React Native/Flutter)</li>
            <li>• Responsive design for all screen sizes</li>
          </ul>
        </div>
        <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
          <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
            <Database className="w-5 h-5 text-green-600" />
            Backend & Infrastructure
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• RESTful API with documentation</li>
            <li>• Secure database (PostgreSQL/MongoDB)</li>
            <li>• Cloud hosting setup (AWS/Google Cloud)</li>
            <li>• Automated backups & security</li>
          </ul>
        </div>
        <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
          <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
            <Globe className="w-5 h-5 text-purple-600" />
            Integrations
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Payment gateways (Paystack/Flutterwave)</li>
            <li>• Map services (Google Maps/Mapbox)</li>
            <li>• Push notifications (Firebase)</li>
            <li>• SMS notifications</li>
          </ul>
        </div>
        <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
          <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-orange-600" />
            Documentation & Support
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Technical documentation</li>
            <li>• User manuals & guides</li>
            <li>• Admin training sessions</li>
            <li>• Post-launch support period</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
