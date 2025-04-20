"use client";
import { useState } from "react";

export const InteractiveTimeline = ({
  dueDates,
}: {
  dueDates: { form: string; date: string }[];
}) => {
  const [currentDate] = useState(new Date());

  return (
    <div className="p-6 bg-slate-800 rounded-xl">
      <h3 className="text-lg font-semibold text-white mb-4">
        Compliance Calendar
      </h3>
      <div className="flex overflow-x-auto pb-4 gap-4">
        {dueDates.map((date, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-48 p-4 bg-slate-700 rounded-lg"
          >
            <div className="text-sm text-gray-300">{date.form}</div>
            <div className="text-white mt-2">{date.date}</div>
            <div
              className={`text-sm mt-1 ${
                new Date(date.date) < currentDate
                  ? "text-red-400"
                  : "text-green-400"
              }`}
            >
              {new Date(date.date) < currentDate ? "Past Due" : "Upcoming"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
