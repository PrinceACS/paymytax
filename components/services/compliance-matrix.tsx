"use client";
import { useState } from "react";
import { GSTReturn } from "@/constants/gst";

export const ComplianceMatrix = ({ returns }: { returns: GSTReturn[] }) => {
  const [sortConfig, setSortConfig] = useState({
    key: "form",
    direction: "asc",
  });
  const [searchQuery, setSearchQuery] = useState("");

  const sortedReturns = [...returns].sort((a, b) => {
    const key = sortConfig.key as keyof GSTReturn;
    if (a[key] < b[key]) return sortConfig.direction === "asc" ? -1 : 1;
    if (a[key] > b[key]) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const filteredReturns = sortedReturns.filter(
    (returnForm) =>
      returnForm.form.toLowerCase().includes(searchQuery.toLowerCase()) ||
      returnForm.purpose.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const requestSort = (key: string) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="p-8 bg-slate-800 rounded-3xl border border-slate-700">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-white">Compliance Matrix</h3>
        <input
          type="text"
          placeholder="Search returns..."
          className="p-2 bg-slate-700 rounded-lg text-white"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-700">
            <tr>
              {["form", "frequency", "purpose"].map((key) => (
                <th
                  key={key}
                  className="px-6 py-4 text-left cursor-pointer"
                  onClick={() => requestSort(key)}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                  {sortConfig.key === key && (
                    <span className="ml-2">
                      {sortConfig.direction === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredReturns.map((returnForm) => (
              <tr key={returnForm.form} className="border-b border-slate-700">
                <td className="px-6 py-4 font-mono text-blue-400">
                  {returnForm.form}
                </td>
                <td className="px-6 py-4 text-gray-300">
                  {returnForm.frequency}
                </td>
                <td className="px-6 py-4 text-gray-300">
                  {returnForm.purpose}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
