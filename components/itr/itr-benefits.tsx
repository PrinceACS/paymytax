import { CheckCircle } from "lucide-react";

export const ITRBenefits = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Benefits of Filing ITR
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          "Avoid penalties and legal issues",
          "Claim tax refunds",
          "Easy loan and visa processing",
          "Carry forward losses",
          "Build financial credibility",
          "Track your income and expenses",
        ].map((benefit) => (
          <div
            key={benefit}
            className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 shadow-sm dark:shadow-none transition duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <CheckCircle className="text-blue-500 w-6 h-6 flex-shrink-0" />
              <p className="text-gray-700 dark:text-gray-300">{benefit}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
