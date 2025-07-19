import Link from "next/link";
import ThemesSwitcher from "./ThemesSwitcher"; // Adjust the path if needed

export default function Nav() {
  return (
    <nav className="bg-[var(--color-bg)] padding-10px">
      <ul>
        <li><Link href="/" style={{ marginRight: 10 }}>Home</Link></li>
        <li><Link href="/about" style={{ marginRight: 10 }}>About</Link></li>
        <li><Link href="/food" style={{ marginRight: 10 }}>Food</Link></li>
        <li><Link href="/workout" style={{ marginRight: 10 }}>Workout</Link></li>
        <li><ThemesSwitcher/></li>
      </ul>
    </nav>
  );
}
