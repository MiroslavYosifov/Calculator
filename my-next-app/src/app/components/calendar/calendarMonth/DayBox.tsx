interface DayBoxProps {
  formattedDay: string;
  isCurrentMonth: boolean;
  today: boolean;
}

export default function DayBox({ formattedDay, isCurrentMonth, today }: DayBoxProps) {
  console.log(`Rendering DayBox for ${formattedDay}, Current Month: ${isCurrentMonth}, Today: ${today}`);
  return (
    <div
      className={`p-2 h-16 border rounded text-center
        ${isCurrentMonth ? '' : 'text-gray-400'}
        ${today ? 'bg-blue-500 text-white font-bold' : ''}
      `}
    >
      {formattedDay}
    </div>
  );
}