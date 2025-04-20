import { FileText, CheckCircle, AlertTriangle, HelpCircle } from "lucide-react";

export const ITROverview = () => {
  return (
    <div className="max-w-6xl mx-auto dark:text-white">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-bold dark:text-white mb-8">
            What is ITR?
          </h2>
          <p className="text-gray-900 dark:text-gray-300 mb-6">
            Income Tax Return (ITR) is a form used to declare your income,
            deductions, and tax liabilities to the Income Tax Department. Filing
            your ITR is mandatory if your income exceeds the basic exemption
            limit.
          </p>
          <div className="space-y-6">
            <div className="p-6 bg-slate-200 dark:bg-slate-800 rounded-xl border border-slate-700 dark:border-slate-600">
              <h3 className="text-xl font-bold dark:text-white mb-4">
                Why File ITR?
              </h3>
              <div className="space-y-4">
                {[
                  "Legal compliance and penalty avoidance",
                  "Claim tax refunds",
                  "Loan and visa processing",
                  "Carry forward losses",
                  "Build financial credibility",
                ].map((reason) => (
                  <div key={reason} className="flex items-start gap-3">
                    <CheckCircle className="text-blue-500 mt-1 flex-shrink-0 dark:text-blue-400" />
                    <p className="text-gray-800 dark:text-gray-300">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h2 className="text-3xl font-bold dark:text-white mb-8">
            Key Features
          </h2>
          <div className="grid gap-6">
            {[
              {
                icon: (
                  <FileText className="w-12 h-12 text-blue-500 dark:text-blue-400" />
                ),
                title: "Accurate Filing",
                description:
                  "Ensure error-free ITR filing with our expert assistance.",
              },
              {
                icon: (
                  <AlertTriangle className="w-12 h-12 text-blue-500 dark:text-blue-400" />
                ),
                title: "Penalty Avoidance",
                description:
                  "Avoid late filing penalties and interest charges.",
              },
              {
                icon: (
                  <HelpCircle className="w-12 h-12 text-blue-500 dark:text-blue-400" />
                ),
                title: "Dedicated Support",
                description:
                  "Get 24/7 support for all your ITR-related queries.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6  bg-slate-200 dark:bg-slate-800  rounded-xl border border-slate-700 dark:border-slate-600"
              >
                <div className="flex items-center gap-4">
                  {feature.icon}
                  <div>
                    <h3 className="text-xl font-bold dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-800 dark:text-gray-300 mt-2">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
