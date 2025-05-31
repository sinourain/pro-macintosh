import Image from "next/image";

export default function ProductosDestacados() {
  return (
    <section id="productos" className="py-20 px-6 md:px-16 bg-black">
      <h2 className="text-3xl font-bold mb-12 text-center">Equipos disponibles para entrega inmediata</h2>
      
      {/* NUEVOS */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-2 text-yellow-400">Nuevos</h3>
        <p className="text-gray-300 mb-8 text-sm">
          Equipos completamente nuevos, sin uso previo, en su empaque original y con todos sus accesorios de fábrica.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* MacBook Air 2021 - M1 */}
          <div className="bg-gray-900 rounded-xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition">
            <Image src="/macbookair13m1es.jpeg" alt="MacBook Air 2021" width={200} height={120} />
            <h4 className="mt-6 text-xl font-semibold">MacBook Air 2021 - M1 - Teclado en inglés</h4>
            <ul className="text-gray-400 mt-2 mb-4 text-center text-sm">
              <li><b>Procesador:</b> M1</li>
              <li><b>Pantalla:</b> 13 pulgadas</li>
              <li><b>RAM:</b> 16GB</li>
              <li><b>Almacenamiento:</b> 512GB</li>
              <li><b>Estado:</b> Nuevo</li>
              <li><b>La caja incluye:</b> El equipo, cargador, cable USB-C y manuales</li>
            </ul>
            <span className="text-yellow-400 font-bold text-lg mb-4">$3.900.000</span>
            <a
              href={`https://api.whatsapp.com/send?phone=573216514219&text=${encodeURIComponent(
                "Hola, estoy interesado en el MacBook Air 2021 - M1 - Teclado en inglés (Nuevo). ¿Está disponible?"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition text-center"
            >
              Comprar ahora
            </a>
          </div>
        </div>
      </div>

      {/* USADOS COMO NUEVOS */}
      <div>
        {/* MacBook Pro 2021 - M1 Pro */}
        <h3 className="text-2xl font-semibold mb-2 text-yellow-400">Usados como nuevos</h3>
        <p className="text-gray-300 mb-8 text-sm">
          Equipos en excelente estado, con poco uso y funcionamiento impecable. Incluyen cargador original y caja, revisados y garantizados.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-gray-900 rounded-xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition">
            <Image src="/macbookpro16m1.jpeg" alt="MacBook Pro 2021" width={200} height={120} />
            <h4 className="mt-6 text-xl font-semibold">MacBook Pro 2021 - M1 Pro - Teclado en inglés</h4>
            <ul className="text-gray-400 mt-2 mb-4 text-center text-sm">
              <li><b>Procesador:</b> M1 Pro</li>
              <li><b>Pantalla:</b> 16 pulgadas</li>
              <li><b>RAM:</b> 16GB</li>
              <li><b>Almacenamiento:</b> 512GB</li>
              <li><b>Ciclos de batería:</b> Menos de 150</li>
              <li><b>Estado:</b> Sin golpes ni marcas de uso, pantalla en excelente estado</li>
              <li><b>Incluye:</b> Su cargador original y caja</li>
            </ul>
            <span className="text-yellow-400 font-bold text-lg mb-4">$7.000.000</span>
            <a
              href={`https://api.whatsapp.com/send?phone=573216514219&text=${encodeURIComponent(
                "Hola, estoy interesado en el MacBook Pro 2021 - M1 Pro - Teclado en inglés (Usado como nuevo). ¿Está disponible?"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition text-center"
            >
              Comprar ahora
            </a>
          </div>
          {/* MacBook Air 2021 - M1 (2) */}
          <div className="bg-gray-900 rounded-xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition">
            <Image src="/macbookair13m1.jpeg" alt="MacBook Air 2021 (2)" width={200} height={120} />
            <h4 className="mt-6 text-xl font-semibold">MacBook Air 2021 - M1 - Teclado en inglés</h4>
            <ul className="text-gray-400 mt-2 mb-4 text-center text-sm">
              <li><b>Procesador:</b> M1</li>
              <li><b>Pantalla:</b> 13 pulgadas</li>
              <li><b>RAM:</b> 8GB</li>
              <li><b>Almacenamiento:</b> 256GB</li>
              <li><b>Ciclos de batería:</b> 21</li>
              <li><b>Estado:</b> Sin golpes ni marcas de uso, pantalla en excelente estado</li>
              <li><b>Incluye:</b> Su cargador original y caja</li>
            </ul>
            <span className="text-yellow-400 font-bold text-lg mb-4">$2.900.000</span>
            <a
              href={`https://api.whatsapp.com/send?phone=573216514219&text=${encodeURIComponent(
                "Hola, estoy interesado en el MacBook Air 2021 - M1 - Teclado en inglés (Usado como nuevo). ¿Está disponible?"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition text-center"
            >
              Comprar ahora
            </a>
          </div>
          {/* MacBook Air 2020 - M1 */}
          <div className="bg-gray-900 rounded-xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition">
            <Image src="/macbookair13m1es.jpeg" alt="MacBook Air 2020" width={200} height={120} />
            <h4 className="mt-6 text-xl font-semibold">MacBook Air 2020 - M1 - Teclado en español</h4>
            <ul className="text-gray-400 mt-2 mb-4 text-center text-sm">
              <li><b>Procesador:</b> M1</li>
              <li><b>Pantalla:</b> 13 pulgadas</li>
              <li><b>RAM:</b> 8GB</li>
              <li><b>Almacenamiento:</b> 256GB</li>
              <li><b>Ciclos de batería:</b> Menos de 200</li>
              <li><b>Estado:</b> Sin golpes ni marcas de uso, pantalla en excelente estado</li>
              <li><b>Incluye:</b> Su cargador original y caja</li>
            </ul>
            <span className="text-yellow-400 font-bold text-lg mb-4">$2.550.000</span>
            <a
              href={`https://api.whatsapp.com/send?phone=573216514219&text=${encodeURIComponent(
                "Hola, estoy interesado en el MacBook Air 2020 - M1 - Teclado en español (Usado como nuevo). ¿Está disponible?"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition text-center"
            >
              Comprar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
