interface PaymentPhase {
  phase: string;
  amount: string;
  percent: string;
  milestone: string;
}

interface PaymentStructureProps {
  paymentPhases: PaymentPhase[];
}

export default function PaymentStructure({
  paymentPhases,
}: PaymentStructureProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Payment Structure (7 Phases)
      </h2>
      <div className="space-y-4">
        {paymentPhases.map((payment, index) => (
          <div
            key={index}
            className="border-l-4 border-blue-600 pl-6 py-4 bg-gray-50 rounded-r-lg"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-gray-800 text-lg">
                  Phase {index + 1}: {payment.phase}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {payment.milestone}
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">
                  {payment.amount}
                </div>
                <div className="text-sm text-gray-500">{payment.percent}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
