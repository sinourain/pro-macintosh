import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-black to-gray-900">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
        Potencia y diseño <span className="text-yellow-400">Apple</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
        Descubre la nueva generación de computadores Apple. Rendimiento profesional, diseño icónico y la mejor tecnología para llevar tu creatividad al siguiente nivel.
      </p>
      <a
        href="#productos"
        className="inline-block bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition"
      >
        Ver productos
      </a>
      <div className="mt-12">
        <Image
          src="/macbook-hero.png"
          alt="MacBook Pro"
          width={700}
          height={350}
          className="mx-auto rounded-xl shadow-2xl"
        />
      </div>
    </section>
  );
}
