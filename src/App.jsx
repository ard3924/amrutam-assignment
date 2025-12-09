import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRouter from "./router/AppRouter";

export default function App() {
  return (
    <>
      <Navbar />

      {/* required space for 52px top bar + navbar */}
      <main className="mt-[124px]">
        <AppRouter />
      </main>

      <Footer />
    </>
  );
}
