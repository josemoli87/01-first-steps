import { redirect } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  redirect('/dashboard/main');

  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl">Hola Jose G</span>
      <Link href="/about">Ir a About</Link>
    </main>
  );
}
