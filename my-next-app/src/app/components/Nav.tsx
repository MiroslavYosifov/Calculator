import Link from 'next/link';

export default function Nav() {
  return (
    <nav style={{ padding: 10 }}>
      <Link href="/" style={{ marginRight: 10 }}>Home</Link>
      <Link href="/about" style={{ marginRight: 10 }}>About</Link>
      <Link href="/food" style={{ marginRight: 10 }}>Food</Link>
      <Link href="/workout" style={{ marginRight: 10 }}>Workout</Link>
    </nav>
  );
}