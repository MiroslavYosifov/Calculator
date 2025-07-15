type ViewMode = 'day' | 'week' | 'month';

interface CalendarNavProps {
  currentView: ViewMode;
  onChangeView: (view: ViewMode) => void;
}

export default function CalendarNav({ currentView, onChangeView }: CalendarNavProps) {
  return (
    <div className="flex gap-2">
      {(['day', 'week', 'month'] as ViewMode[]).map((view) => (
        <button
          key={view}
          onClick={() => onChangeView(view)}
          className={`px-4 py-2 rounded ${
            currentView === view ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          {view.charAt(0).toUpperCase() + view.slice(1)}
        </button>
      ))}
    </div>
  );
}