'use client';
import { useState, useEffect } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import CalendarDay from './calendarDay/CalendarDay';
import CalendarWeek from './calendarWeek/CalendarWeek';
import CalendarMonth from './calendarMonth/CalendarMonth';
import CalendarNav from './CalendarNav';


type ViewMode = 'day' | 'week' | 'month';

export default function Calendar() {
  const [view, setView] = useState<ViewMode>('month');
  const router = useRouter(); // Only for push/replace/back — not events

  const renderView = () => {
    

    // router.push(`/calendar/${view}`); // Update URL on view change
    
    switch (view) {
      case 'day':
        return <CalendarDay />;
      case 'week':
        return <CalendarWeek />;
      case 'month':
      default:
        return <CalendarMonth />;
    }
  };

  return (
    <div className="calendar-container">
      <CalendarNav currentView={view} onChangeView={setView} />
      <div className="calendar-view mt-4">
        {renderView()}
      </div>
    </div>
  );
}