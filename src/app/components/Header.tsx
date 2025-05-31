"use client";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 md:px-8 py-6 border-b border-gray-800 relative">
      <div className="flex items-center gap-3">
        <Image
          src="/promac-logo.png"
          alt="Apple"
          width={230}
          height={60}
          className="w-auto h-10 md:w-[230px] md:h-[60px]"
        />
      </div>
      {/* Desktop nav */}
      <nav className="hidden md:flex gap-8 text-sm font-medium">
        <a href="#" className="hover:text-yellow-400 transition">
          Inicio
        </a>
        <a href="#" className="hover:text-yellow-400 transition">
          Productos
        </a>
        <a href="#" className="hover:text-yellow-400 transition">
          Soporte
        </a>
        <a href="#" className="hover:text-yellow-400 transition">
          Contacto
        </a>
      </nav>
      {/* Mobile menu button */}
      <button
        className="md:hidden flex items-center justify-center w-10 h-10"
        aria-label="Abrir menú"
        onClick={() => setOpen(!open)}
      >
        <svg
          className="w-7 h-7 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 8h16M4 16h16"
            />
          )}
        </svg>
      </button>
      {/* Mobile nav */}
      {open && (
        <nav className="absolute top-full left-0 w-full bg-black border-t border-gray-800 flex flex-col items-center gap-6 py-6 z-20 md:hidden">
          <a
            href="#"
            className="hover:text-yellow-400 transition"
            onClick={() => setOpen(false)}
          >
            Inicio
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition"
            onClick={() => setOpen(false)}
          >
            Productos
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition"
            onClick={() => setOpen(false)}
          >
            Soporte
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition"
            onClick={() => setOpen(false)}
          >
            Contacto
          </a>
        </nav>
      )}
    </header>
  );
}
