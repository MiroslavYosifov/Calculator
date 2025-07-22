import { Suspense } from 'react'
import { NavigationEvents } from '../components/navigation-events';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        { children }
        <Suspense fallback={null}>
          <NavigationEvents />
        </Suspense>
    </div>
  );
}