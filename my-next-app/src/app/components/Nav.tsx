import Link from "next/link";
import ThemesSwitcher from "./ThemesSwitcher"; // Adjust the path if needed

export default function Nav() {
  return (
    <nav className="bg-[var(--color-secondary)] p-4">
      <ul className="text-[var(--color-text-primary)] flex gap-4">
        <li className="text-[var(--color-text-primary)] hover:text-[var(--color-text-primary-hover)]"><Link href="/" style={{ marginRight: 10 }}>Home</Link></li>
        <li className="text-[var(--color-text-primary)] hover:text-[var(--color-text-primary-hover)]"><Link href="/about" style={{ marginRight: 10 }}>About</Link></li>
        <li className="text-[var(--color-text-primary)] hover:text-[var(--color-text-primary-hover)]"><Link href="/food" style={{ marginRight: 10 }}>Food</Link></li>
        <li className="text-[var(--color-text-primary)] hover:text-[var(--color-text-primary-hover)]"><Link href="/workout" style={{ marginRight: 10 }}>Workout</Link></li>
        <li className="text-[var(--color-text-primary)] hover:text-[var(--color-text-primary-hover)]"><ThemesSwitcher/></li>
      </ul>
    </nav>
  );
}
