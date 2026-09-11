"use client";

import { ArrowUpRight, Dumbbell, HeartPulse, Zap } from "lucide-react";
import { motion } from "framer-motion";

const goals = [
  {
    number: "01",
    icon: Dumbbell,
    title: "Ganhar força",
    description:
      "Desenvolve força, resistência e capacidade física com treinos pensados para a tua evolução.",
  },
  {
    number: "02",
    icon: HeartPulse,
    title: "Cuidar da saúde",
    description:
      "Cria uma rotina mais ativa e melhora o teu bem-estar através do exercício.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Ficar em forma",
    description:
      "Treina com energia, consistência e acompanhamento para alcançares os teus objetivos.",
  },
];

export default function Goals() {
  return (
    <section
      id="objetivos"
      className="bg-[#0a0a0a] px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* INTRO */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-red-600">
              O teu objetivo
            </p>

            <h2 className="max-w-3xl text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-7xl">
              Cada pessoa
              <br />
              <span className="text-red-600">tem um motivo.</span>
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-gray-400 lg:justify-self-end lg:text-lg">
            Seja para ganhar força, cuidar da saúde ou simplesmente sentir-te
            melhor, na InMotion encontras espaço, energia e orientação para
            continuar em movimento.
          </p>

        </div>

        {/* GOALS */}
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">

          {goals.map((goal, index) => {
            const Icon = goal.icon;

            return (
              <motion.a
                key={goal.number}
                href="#modalidades"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group relative min-h-[360px] bg-[#0a0a0a] p-8 transition-colors duration-500 hover:bg-[#3d080f] sm:p-10"
              >

                {/* NUMBER */}
                <div className="absolute right-8 top-8 text-sm font-bold text-white/20 transition-colors group-hover:text-white/40">
                  {goal.number}
                </div>

                {/* ICON */}
                <div className="mb-20 flex h-14 w-14 items-center justify-center border border-white/20 transition-colors group-hover:border-white">
                  <Icon
                    size={25}
                    strokeWidth={1.5}
                    className="text-red-600 transition-colors group-hover:text-white"
                  />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="mb-4 text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                    {goal.title}
                  </h3>

                  <p className="max-w-sm text-sm leading-relaxed text-gray-400 transition-colors group-hover:text-white/80 sm:text-base">
                    {goal.description}
                  </p>
                </div>

                {/* ARROW */}
                <div className="absolute bottom-8 right-8 flex h-10 w-10 items-center justify-center border border-white/20 transition-all duration-300 group-hover:border-white group-hover:bg-white">
                  <ArrowUpRight
                    size={19}
                    className="text-white transition-colors group-hover:text-black"
                  />
                </div>

              </motion.a>
            );
          })}

        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-12 flex flex-col gap-4 border-l-2 border-red-600 pl-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-bold uppercase tracking-widest text-white">
            Treinar é cuidar de ti.
          </p>

          <p className="text-sm text-gray-500">
            Encontra o treino certo para ti.
          </p>
        </div>

      </div>
    </section>
  );
}