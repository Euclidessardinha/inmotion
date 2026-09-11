"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-black"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/images/inmotion-hero.png"
          alt="Comunidade InMotion durante um treino"
          className="h-full w-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/65" />

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      </div>

      {/* RED DECORATION */}
      <div className="absolute left-0 top-0 h-full w-1 bg-red-600" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 lg:px-8">

        <div className="max-w-3xl">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-red-500"
          >
            INMOTION MZ
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-8xl"
          >
            Treina.
            <br />

            <span className="text-red-600">
              Evolui.
            </span>

            <br />

            Move-te.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-gray-300 sm:text-xl"
          >
            Mais do que um ginásio. Um espaço para cuidar da tua saúde,
            desenvolver a tua força e transformar a tua rotina.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >

            <a
              href="#planos"
              className="group flex items-center justify-center gap-3 bg-red-600 px-8 py-4 font-bold uppercase tracking-wide text-white transition hover:bg-red-700"
            >
              Aderir agora

              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#modalidades"
              className="flex items-center justify-center border border-white/40 bg-white/5 px-8 py-4 font-bold uppercase tracking-wide text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-black"
            >
              Ver modalidades
            </a>

          </motion.div>

        </div>

      </div>

      {/* BOTTOM LABEL */}
      <div className="absolute bottom-8 left-6 hidden items-center gap-4 text-xs font-bold uppercase tracking-[0.25em] text-white/60 lg:flex">
        <span className="h-px w-12 bg-red-600" />
        Treinar é cuidar de ti
      </div>

    </section>
  );
}