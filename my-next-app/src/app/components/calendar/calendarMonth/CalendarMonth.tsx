'use client';

import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, format, isSameMonth, isToday } from 'date-fns';
import { useState } from 'react';
import DayBox from './DayBox';

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

  // --gray-50:  #f9fafb;
  // --gray-100: #f3f4f6;
  // --gray-200: #e5e7eb;
  // --gray-300: #d1d5db;
  // --gray-400: #9ca3af;
  // --gray-500: #6b7280;
  // --gray-600: #4b5563;
  // --gray-700: #374151;
  // --gray-800: #1f2937;
  // --gray-900: #111827;

  return (
    <div className="p-4 bg-[var(--gray-200)] rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth} className="px-2 py-1 bg-[var(--gray-300)] rounded">←</button>
        <h2 className="text-xl font-bold text-[var(--gray-700)]">{format(currentDate, 'MMMM yyyy')}</h2>
        <button onClick={handleNextMonth} className="px-2 py-1 bg-[var(--gray-300)] rounded">→</button>
      </div>

      <div className="grid grid-cols-7 text-center font-semibold pb-2 border-b border-b-[var(--gray-700)] text-[var(--gray-700)]">
        {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 pt-2 text-sm">
       {calendar.flat().map((day, idx) => (
          <DayBox
            key={idx}
            formattedDay={format(day, 'd')}
            isCurrentMonth={isSameMonth(day, currentDate)}
            today={isToday(day)}
          />
        ))}
      </div>
    </div>
  );
}