import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import { Outlet } from 'react-router';

export default function Root() {
  return (
    <div className="text-center">
      <main className="min-h-[90vh]">
        <Header />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
