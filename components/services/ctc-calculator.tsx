"use client";
import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { SALARY_COMPONENTS } from "@/constants/data";

interface BreakdownEntry {
  name: string;
  value: number;
}

interface CalculationResults {
  gross: number;
  net: number;
  breakdown: BreakdownEntry[];
}

export const CTCCalculator = () => {
  const [inputs, setInputs] = useState({
    basic: 0,
    hra: 0,
    allowances: 0,
    pf: 0,
    gratuity: 0,
    tax: 0,
  });
  const [results, setResults] = useState<CalculationResults | null>(null);
  const [loading, setLoading] = useState(false);

  const calculateCTC = () => {
    setLoading(true);
    setTimeout(() => {
      const gross = inputs.basic + inputs.hra + inputs.allowances;
      const net = gross - (inputs.pf + inputs.gratuity + inputs.tax);
      setResults({
        gross,
        net,
        breakdown: [
          { name: "Basic", value: inputs.basic },
          { name: "HRA", value: inputs.hra },
          { name: "Allowances", value: inputs.allowances },
          { name: "PF", value: inputs.pf },
          { name: "Gratuity", value: inputs.gratuity },
          { name: "Tax", value: inputs.tax },
        ],
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="p-8 bg-slate-800 rounded-3xl border border-slate-700 sticky top-8">
        <h3 className="text-2xl font-bold text-white mb-6">
          Salary Components
        </h3>
        <div className="space-y-6">
          {SALARY_COMPONENTS.map((component) => (
            <div key={component}>
              <label className="text-gray-300 block mb-2">{component}</label>
              <input
                type="number"
                className="w-full p-3 bg-slate-700 rounded-lg border border-slate-600 focus:border-blue-500 text-white"
                placeholder={`Enter ${component}`}
                onChange={(e) =>
                  setInputs((prevInputs) => ({
                    ...prevInputs,
                    [component.toLowerCase().replace(" ", "")]: Number(
                      e.target.value
                    ),
                  }))
                }
              />
            </div>
          ))}
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold transition-all"
            onClick={calculateCTC}
            disabled={loading}
          >
            {loading ? "Calculating..." : "Calculate CTC"}
          </button>
        </div>
      </div>

      <div className="p-8 bg-slate-800 rounded-3xl border border-slate-700">
        <h3 className="text-2xl font-bold text-white mb-6">
          Breakdown Analysis
        </h3>
        {results ? (
          <div className="space-y-6">
            <div className="h-64">
              <PieChart width={400} height={300}>
                <Pie
                  data={results.breakdown}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {results.breakdown.map((entry: BreakdownEntry, index) => (
                    <Cell key={index} fill={`hsl(${index * 60}, 70%, 50%)`} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-700 rounded-xl">
                <p className="text-gray-300">Gross Salary</p>
                <p className="text-2xl text-white font-bold">
                  ₹{results.gross.toLocaleString()}
                </p>
              </div>
              <div className="p-4 bg-slate-700 rounded-xl">
                <p className="text-gray-300">Net Take Home</p>
                <p className="text-2xl text-white font-bold">
                  ₹{results.net.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-64 bg-slate-700 rounded-xl flex items-center justify-center">
            <span className="text-gray-400">Enter values to see analysis</span>
          </div>
        )}
      </div>
    </div>
  );
};
