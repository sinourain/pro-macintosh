import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8 mt-20 border-t border-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Image src="/apple-logo.svg" alt="Apple" width={28} height={28} />
          <span className="font-semibold text-lg">Pro Macintosh</span>
        </div>
        <div className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Pro Macintosh. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
