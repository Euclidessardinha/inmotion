"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const classes = [
  {
    number: "01",
    title: "Musculação",
    description:
      "Constrói força e desenvolve o teu corpo através de um treino estruturado e consistente.",
    image: "/images/inmotion-musc.png",
  },
  {
    number: "02",
    title: "Cardio",
    description:
      "Melhora a tua resistência e mantém o teu corpo ativo com diferentes opções de treino cardiovascular.",
    image: "/images/inmotion-veloc.png",
  },
  {
    number: "03",
    title: "Treino funcional",
    description:
      "Movimento, resistência e intensidade para desenvolver capacidades que fazem diferença no teu dia a dia.",
    image: "/images/inmotion-gru.png",
  },
  {
    number: "04",
    title: "Aulas de grupo",
    description:
      "Treina acompanhado, ganha motivação e faz parte da energia da comunidade InMotion.",
    image: "/images/inmotion-aula.png",
  },
];

export default function Classes() {
  return (
    <section
      id="modalidades"
      className="bg-[#0a0a0a] px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-red-600">
              Modalidades
            </p>

            <h2 className="text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-6xl lg:text-8xl">
              Treina
              <br />
              <span className="text-red-600">do teu jeito.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-relaxed text-gray-400 lg:text-lg">
            Diferentes formas de treinar. O mesmo objetivo: manter-te em
            movimento e ajudar-te a evoluir.
          </p>

        </div>

        {/* CLASSES GRID */}
        <div className="grid gap-5 md:grid-cols-2">

          {classes.map((item, index) => (
            <motion.a
              key={item.number}
              href="#planos"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group relative min-h-[430px] overflow-hidden"
            >

              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/55 transition duration-500 group-hover:bg-black/65" />

              {/* RED SIDE */}
              <div className="absolute left-0 top-0 h-full w-1 bg-red-600" />

              {/* NUMBER */}
              <div className="absolute right-7 top-7 text-sm font-bold tracking-widest text-white/50">
                {item.number}
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10">

                <div className="mb-5 h-px w-12 bg-red-600 transition-all duration-500 group-hover:w-24" />

                <h3 className="mb-4 text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
                  {item.title}
                </h3>

                <p className="max-w-lg text-sm leading-relaxed text-gray-300 sm:text-base">
                  {item.description}
                </p>

                {/* ARROW */}
                <div className="mt-7 flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-white">
                  Saber mais

                  <span className="flex h-9 w-9 items-center justify-center border border-white/30 transition-all duration-300 group-hover:border-white group-hover:bg-white">
                    <ArrowUpRight
                      size={18}
                      className="transition-colors group-hover:text-black"
                    />
                  </span>
                </div>

              </div>

            </motion.a>
          ))}

        </div>

      </div>
    </section>
  );
}