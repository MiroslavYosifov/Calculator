import Image from "next/image";
import Calendar from './components/calendar/Calendar';

export default function Home() {
  return (
    <div className="bg-[var(--color-primary)] font-[family-name:var(--font-geist-sans)]">
      <main className="p-4">
        <Calendar />
      </main>
    </div>
  );
}
