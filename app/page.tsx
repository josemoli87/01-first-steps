import { redirect } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  // redirect('/dashboard/main');

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center flex-col">
        <span className="text-5xl">Hola Jose G</span>
        <Link href="dashboard/counter">Ir a Counter</Link>
      </div>
    </div>
  );
}
