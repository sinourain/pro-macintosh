import Image from "next/image";

export default function ProductosDestacados() {
  return (
    <section id="productos" className="py-20 px-6 md:px-16 bg-black">
      <h2 className="text-3xl font-bold mb-12 text-center">Productos destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Producto 1 */}
        <div className="bg-gray-900 rounded-xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition">
          <Image src="/macbook-pro.png" alt="MacBook Pro" width={200} height={120} />
          <h3 className="mt-6 text-xl font-semibold">MacBook Pro 16"</h3>
          <p className="text-gray-400 mt-2 mb-4 text-center">
            El portátil más potente de Apple con chip M3 Pro, pantalla Liquid Retina XDR y hasta 22 horas de batería.
          </p>
          <span className="text-yellow-400 font-bold text-lg mb-4">$12.999.000</span>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition">
            Comprar ahora
          </button>
        </div>
        {/* Producto 2 */}
        <div className="bg-gray-900 rounded-xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition">
          <Image src="/imac.png" alt="iMac" width={200} height={120} />
          <h3 className="mt-6 text-xl font-semibold">iMac 24"</h3>
          <p className="text-gray-400 mt-2 mb-4 text-center">
            Todo en uno con chip M3, pantalla 4.5K Retina y colores vibrantes para tu espacio de trabajo.
          </p>
          <span className="text-yellow-400 font-bold text-lg mb-4">$8.499.000</span>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition">
            Comprar ahora
          </button>
        </div>
        {/* Producto 3 */}
        <div className="bg-gray-900 rounded-xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition">
          <Image src="/mac-mini.png" alt="Mac Mini" width={200} height={120} />
          <h3 className="mt-6 text-xl font-semibold">Mac Mini</h3>
          <p className="text-gray-400 mt-2 mb-4 text-center">
            Potencia profesional en tamaño compacto. Chip M2, múltiples puertos y eficiencia energética.
          </p>
          <span className="text-yellow-400 font-bold text-lg mb-4">$3.999.000</span>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition">
            Comprar ahora
          </button>
        </div>
      </div>
    </section>
  );
}
