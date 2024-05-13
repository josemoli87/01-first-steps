import Navbar from '@/components/navbar/Navbar';

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center flex-col">
          <span className="text-lg">Hola FapiSystem</span>
          {children}
        </div>
      </div>
    </>
  );
}
