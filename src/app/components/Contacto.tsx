export default function Contacto() {
  return (
    <section id="contacto" className="py-20 px-6 md:px-16 bg-black border-t border-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-center text-yellow-400">Contacto</h2>
      <p className="text-gray-300 text-center mb-8">
        ¿Tienes preguntas o quieres comprar? Contáctanos:
      </p>
      <div className="flex flex-col items-center gap-4 text-lg">
        <div>
          <span className="font-semibold text-white">Celular:&nbsp;</span>
          <a href="https://api.whatsapp.com/send?phone=573216514219" className="text-yellow-400 hover:underline" target="_blank" rel="noopener noreferrer">
            3216514219
          </a>
        </div>
        <div>
          <span className="font-semibold text-white">Correo:&nbsp;</span>
          <a href="mailto:luisurrea@promacintosh.com" className="text-yellow-400 hover:underline">
            luisurrea@promacintosh.com
          </a>
        </div>
      </div>
    </section>
  );
}
