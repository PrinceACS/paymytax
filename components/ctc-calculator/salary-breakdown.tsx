import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

interface SalaryBreakdownProps {
  results: {
    gross: number;
    net: number;
    breakdown: { name: string; value: number }[];
  };
}

export const SalaryBreakdown: React.FC<SalaryBreakdownProps> = ({
  results,
}) => {
  return (
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
            {results.breakdown.map((entry, index) => (
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
  );
};
