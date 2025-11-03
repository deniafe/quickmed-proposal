import {
  Activity,
  Shield,
  Database,
  BarChart3,
  Wallet,
  Users,
} from "lucide-react";

export default function EnterpriseFeatures() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Enterprise Package Exclusive Features
      </h2>
      <p className="text-gray-600 mb-6">
        Advanced capabilities that set the Enterprise package apart
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border-l-4 border-purple-600 pl-5 py-3 bg-purple-50">
          <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
            <Activity className="w-5 h-5 text-purple-600" />
            AI & Machine Learning
          </h3>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• AI-powered drug recommendations</li>
            <li>• Predictive inventory forecasting</li>
            <li>• Smart demand analytics</li>
            <li>• Fraud detection algorithms</li>
            <li>• Intelligent route optimization</li>
          </ul>
        </div>
        <div className="border-l-4 border-purple-600 pl-5 py-3 bg-purple-50">
          <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-600" />
            Regulatory & Compliance
          </h3>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• NAFDAC regulatory portal</li>
            <li>• Government agency access</li>
            <li>• Complete audit trails</li>
            <li>• Counterfeit drug alerts</li>
            <li>• GDPR/data protection tools</li>
          </ul>
        </div>
        <div className="border-l-4 border-purple-600 pl-5 py-3 bg-purple-50">
          <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
            <Database className="w-5 h-5 text-purple-600" />
            Advanced Infrastructure
          </h3>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Multi-branch pharmacy support</li>
            <li>• Load balancing for high traffic</li>
            <li>• Advanced caching strategies</li>
            <li>• Real-time data streaming</li>
            <li>• Enterprise-grade security</li>
          </ul>
        </div>
        <div className="border-l-4 border-purple-600 pl-5 py-3 bg-purple-50">
          <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-purple-600" />
            Business Intelligence
          </h3>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Custom analytics dashboards</li>
            <li>• Predictive business forecasting</li>
            <li>• Geographic heatmap analysis</li>
            <li>• Advanced reporting tools</li>
            <li>• API for third-party integrations</li>
          </ul>
        </div>
        <div className="border-l-4 border-purple-600 pl-5 py-3 bg-purple-50">
          <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
            <Wallet className="w-5 h-5 text-purple-600" />
            Advanced Payment Features
          </h3>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• QuickMed wallet system</li>
            <li>• Split payment capabilities</li>
            <li>• Multi-currency support (future)</li>
            <li>• Advanced fraud detection</li>
            <li>• Accounting software integration</li>
          </ul>
        </div>
        <div className="border-l-4 border-purple-600 pl-5 py-3 bg-purple-50">
          <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-600" />
            Enhanced User Experience
          </h3>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Voice search capabilities</li>
            <li>• Multi-language support</li>
            <li>• Family account management</li>
            <li>• Health profile tracking</li>
            <li>• Offline mode functionality</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
