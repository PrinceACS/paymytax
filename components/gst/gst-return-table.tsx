import React from "react";
import { GSTReturn } from "@/constants/gst";

interface GSTReturnTableProps {
  returns: GSTReturn[];
}

const GSTReturnTable: React.FC<GSTReturnTableProps> = ({ returns }) => {
  return (
    <div className="m-4 overflow-x-auto">
      {/* Mobile view - Cards */}
      <div className="md:hidden space-y-4">
        {returns.map((returnForm) => (
          <div
            key={returnForm.form}
            className="p-4 border rounded-lg shadow-sm dark:border-slate-600"
          >
            <div className="font-bold text-lg text-blue-400 dark:text-blue-600 mb-2">
              {returnForm.form}
            </div>
            <div className="flex justify-between text-sm text-gray-600 dark:text-slate-300">
              <span className="font-medium">Frequency:</span>
              <span>{returnForm.frequency}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 dark:text-slate-300 mt-1">
              <span className="font-medium">Purpose:</span>
              <span className="text-right">{returnForm.purpose}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop view - Table */}
      <div className="hidden md:flex items-center justify-center">
        <table className="w-full max-w-4xl">
          <thead className="bg-slate-700 dark:bg-slate-300">
            <tr>
              <th className="px-4 py-3 text-left text-sm sm:text-base text-slate-100 dark:text-slate-600">
                Form
              </th>
              <th className="px-4 py-3 text-left text-sm sm:text-base text-slate-100 dark:text-slate-600">
                Frequency
              </th>
              <th className="px-4 py-3 text-left text-sm sm:text-base text-slate-100 dark:text-slate-600">
                Purpose
              </th>
            </tr>
          </thead>
          <tbody>
            {returns.map((returnForm) => (
              <tr
                key={returnForm.form}
                className="border-b border-slate-700 dark:border-slate-300"
              >
                <td className="px-4 py-3 font-bold text-sm sm:text-base md:text-lg text-nowrap font-mono text-blue-400 dark:text-blue-600">
                  {returnForm.form}
                </td>
                <td className="px-4 py-3 text-sm sm:text-base text-gray-600 dark:text-slate-300">
                  {returnForm.frequency}
                </td>
                <td className="px-4 py-3 text-sm sm:text-base text-gray-600 dark:text-slate-300">
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

export default GSTReturnTable;
