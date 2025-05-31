import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductosDestacados from "./components/ProductosDestacados";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
      <Header />
      <Hero />
      <ProductosDestacados />
      <Contacto />
      <Footer />
    </main>
  );
}
