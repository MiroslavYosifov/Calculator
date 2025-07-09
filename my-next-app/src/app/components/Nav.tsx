import Link from 'next/link';

export default function Nav() {
  return (
    <nav style={{ padding: 10 }}>
      <Link href="/" style={{ marginRight: 10 }}>Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}