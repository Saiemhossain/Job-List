import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import { Outlet } from 'react-router';

export default function Root() {
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen dark:bg-neutral-950 "></div>

      <main className="min-h-[90vh] text-center">
        <Header />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
