import Navbar from './components/navbar';
import Operators from './components/operators';
import Support from './components/support';
import Footer from './components/footer';
export default function Home() {
  return (
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Navbar />
        <Operators />
        <Support />
        <Footer />
      </main>
  );
}
