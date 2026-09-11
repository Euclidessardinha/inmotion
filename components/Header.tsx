"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* LOGO + NOME */}
        <a href="/" className="flex items-center gap-3">
          <img
            src="/images/inmotion-logo.png"
            alt="InMotion Performance"
            className="h-14 w-14 object-contain"
          />

          <div className="flex flex-col leading-none">
            <span className="text-xl font-black uppercase tracking-tight">
              <span className="text-white">IN</span>
              <span className="text-red-600">MOTION</span>
            </span>

            <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.35em] text-white">
              Performance
            </span>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="/"
            className="text-sm font-medium uppercase tracking-wide text-white transition hover:text-red-500"
          >
            Início
          </a>

          <a
            href="/#objetivos"
            className="text-sm font-medium uppercase tracking-wide text-white transition hover:text-red-500"
          >
            Objetivos
          </a>

          <a
            href="/#modalidades"
            className="text-sm font-medium uppercase tracking-wide text-white transition hover:text-red-500"
          >
            Modalidades
          </a>

          <a
            href="/horarios"
            className="text-sm font-medium uppercase tracking-wide text-white transition hover:text-red-500"
          >
            Horários
          </a>

          <a
            href="/#planos"
            className="text-sm font-medium uppercase tracking-wide text-white transition hover:text-red-500"
          >
            Planos
          </a>

          <a
            href="/#contacto"
            className="text-sm font-medium uppercase tracking-wide text-white transition hover:text-red-500"
          >
            Contacto
          </a>
        </nav>

        {/* DESKTOP CTA */}
        <a
          href="/#planos"
          className="hidden bg-red-600 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-red-700 md:block"
        >
          Aderir agora
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center justify-center text-white md:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-black px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-6">

            {/* INÍCIO */}
            <a
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-wide text-white transition hover:text-red-500"
            >
              Início
            </a>

            {/* OBJETIVOS */}
            <a
              href="/#objetivos"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-wide text-white transition hover:text-red-500"
            >
              Objetivos
            </a>

            {/* MODALIDADES */}
            <a
              href="/#modalidades"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-wide text-white transition hover:text-red-500"
            >
              Modalidades
            </a>

            {/* HORÁRIOS */}
            <a
              href="/horarios"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-wide text-white transition hover:text-red-500"
            >
              Horários
            </a>

            {/* PLANOS */}
            <a
              href="/#planos"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-wide text-white transition hover:text-red-500"
            >
              Planos
            </a>

            {/* CONTACTO */}
            <a
              href="/#contacto"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-wide text-white transition hover:text-red-500"
            >
              Contacto
            </a>

            {/* CTA */}
            <a
              href="/#planos"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-red-600 px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:bg-red-700"
            >
              Aderir agora
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}