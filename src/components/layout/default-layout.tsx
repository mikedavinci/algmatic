import { Outlet } from 'react-router-dom';
import { Header } from './header';
import { Footer } from './footer';

export function DefaultLayout() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-auri-gradient">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
