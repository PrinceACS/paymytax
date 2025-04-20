import React from "react";

interface TimelineCardProps {
  date: {
    form: string;
    date: string;
  };
  currentDate: Date;
}

export const TimelineCard: React.FC<TimelineCardProps> = ({
  date,
  currentDate,
}) => {
  const isPastDue = new Date(date.date) < currentDate;

  return (
    <div className="flex-shrink-0 w-48 p-4 bg-slate-700 rounded-lg">
      <div className="text-sm text-gray-300">{date.form}</div>
      <div className="text-white mt-2">{date.date}</div>
      <div
        className={`text-sm mt-1 ${
          isPastDue ? "text-red-400" : "text-green-400"
        }`}
      >
        {isPastDue ? "Past Due" : "Upcoming"}
      </div>
    </div>
  );
};
