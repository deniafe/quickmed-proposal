export default function AdditionalServices() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Optional Add-Ons
      </h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div>
            <h3 className="font-semibold text-gray-800">
              Monthly Maintenance & Support
            </h3>
            <p className="text-sm text-gray-600">
              Bug fixes, updates, 24/7 monitoring, 20-30 hours/month
            </p>
          </div>
          <span className="text-blue-600 font-bold">₦600,000/mo</span>
        </div>
        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div>
            <h3 className="font-semibold text-gray-800">
              Cloud Hosting & Infrastructure
            </h3>
            <p className="text-sm text-gray-600">
              AWS/Google Cloud, scalable servers, databases, storage
            </p>
          </div>
          <span className="text-blue-600 font-bold">₦200,000-₦600,000/mo</span>
        </div>
      </div>
    </div>
  );
}
