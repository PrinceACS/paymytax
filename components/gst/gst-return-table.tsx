import React from "react";
import { GSTReturn } from "@/constants/gst";

interface GSTReturnTableProps {
  returns: GSTReturn[];
}

const GSTReturnTable: React.FC<GSTReturnTableProps> = ({ returns }) => {
  return (
    <div className="flex items-center justify-center m-10">
      <table className="w-fit">
        <thead className="bg-slate-700 dark:bg-slate-300">
          <tr>
            <th className="px-6 py-4 text-left text-slate-100 dark:text-slate-600">
              Form
            </th>
            <th className="px-6 py-4 text-left text-slate-100 dark:text-slate-600">
              Frequency
            </th>
            <th className="px-6 py-4 text-left text-slate-100 dark:text-slate-600">
              Purpose
            </th>
          </tr>
        </thead>
        <tbody>
          {returns.map((returnForm) => (
            <tr
              key={returnForm.form}
              className="border-b border-slate-700  dark:border-slate-300"
            >
              <td className="px-6 py-4 font-bold text-xl text-nowrap font-mono text-blue-400 dark:text-blue-600">
                {returnForm.form}
              </td>
              <td className="px-6 py-4 text-gray-600 dark:text-slate-300">
                {returnForm.frequency}
              </td>
              <td className="px-6 py-4 text-gray-600 dark:text-slate-300">
                {returnForm.purpose}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GSTReturnTable;
