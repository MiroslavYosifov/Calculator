interface DayBoxProps {
  formattedDay: string;
  isCurrentMonth: boolean;
  today: boolean;
}

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

export default function DayBox({ formattedDay, isCurrentMonth, today }: DayBoxProps) {
  console.log(`Rendering DayBox for ${formattedDay}, Current Month: ${isCurrentMonth}, Today: ${today}`);
  return (
    <div
      className={`p-2 h-16 border rounded text-center
        ${isCurrentMonth ? 'bg-[var(--gray-200)] text-[var(--gray-500)]' : 'bg-[var(--gray-200)] text-[var(--gray-100)]'}
        ${today ? 'bg-[var(--gray-800)] text-[var(--gray-50)] font-bold' : ''}
      `}
    >
      {formattedDay}
    </div>
  );
}