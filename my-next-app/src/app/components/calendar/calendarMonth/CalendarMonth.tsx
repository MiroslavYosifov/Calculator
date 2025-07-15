'use client';

import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, format, isSameMonth, isToday } from 'date-fns';
import { useState } from 'react';

export default function CalendarMonth() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const generateCalendar = () => {
    const start = startOfWeek(startOfMonth(currentDate), { weekStartsOn: 1 }); // Monday
    const end = endOfWeek(endOfMonth(currentDate), { weekStartsOn: 1 });

    const dateMatrix = [];
    let date = start;

    while (date <= end) {
      const week = [];

      for (let i = 0; i < 7; i++) {
        week.push(date);
        date = addDays(date, 1);
      }

      dateMatrix.push(week);
    }

    return dateMatrix;
  };

  const calendar = generateCalendar();

  const handlePrevMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth} className="px-2 py-1 bg-gray-200 rounded">←</button>
        <h2 className="text-xl font-bold">{format(currentDate, 'MMMM yyyy')}</h2>
        <button onClick={handleNextMonth} className="px-2 py-1 bg-gray-200 rounded">→</button>
      </div>

      <div className="grid grid-cols-7 text-center font-semibold border-b pb-2">
        {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 pt-2 text-sm">
        {calendar.flat().map((day, idx) => {
          const isCurrentMonth = isSameMonth(day, currentDate);
          const today = isToday(day);

          return (
            <div
              key={idx}
              className={`p-2 h-16 border rounded text-center
                ${isCurrentMonth ? '' : 'text-gray-400'}
                ${today ? 'bg-blue-500 text-white font-bold' : ''}
              `}
            >
              {format(day, 'd')}
            </div>
          );
        })}
      </div>
    </div>
  );
}