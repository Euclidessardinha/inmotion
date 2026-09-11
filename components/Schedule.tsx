"use client";

import { useState } from "react";
import { ArrowRight, Clock, Dumbbell, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type ClassItem = {
  type: "Funcional" | "Grupo";
};

type Day = {
  short: string;
  full: string;
  classes: {
    time: string;
    type: "Funcional" | "Grupo";
  }[];
};

const schedule: Day[] = [
  {
    short: "SEG",
    full: "Segunda-feira",
    classes: [
      { time: "07:00", type: "Funcional" },
      { time: "12:30", type: "Grupo" },
      { time: "18:00", type: "Funcional" },
      { time: "19:00", type: "Grupo" },
    ],
  },
  {
    short: "TER",
    full: "Terça-feira",
    classes: [
      { time: "12:30", type: "Grupo" },
      { time: "18:00", type: "Grupo" },
      { time: "19:00", type: "Funcional" },
    ],
  },
  {
    short: "QUA",
    full: "Quarta-feira",
    classes: [
      { time: "07:00", type: "Funcional" },
      { time: "12:30", type: "Grupo" },
      { time: "18:00", type: "Funcional" },
      { time: "19:00", type: "Grupo" },
    ],
  },
  {
    short: "QUI",
    full: "Quinta-feira",
    classes: [
      { time: "12:30", type: "Grupo" },
      { time: "18:00", type: "Grupo" },
      { time: "19:00", type: "Funcional" },
    ],
  },
  {
    short: "SEX",
    full: "Sexta-feira",
    classes: [
      { time: "07:00", type: "Funcional" },
      { time: "12:30", type: "Grupo" },
      { time: "18:00", type: "Funcional" },
      { time: "19:00", type: "Grupo" },
    ],
  },
];

const times = ["07:00", "12:30", "18:00", "19:00"];

function ClassBadge({ type }: { type: ClassItem["type"] }) {
  const isFunctional = type === "Funcional";

  return (
    <span
      className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${
        isFunctional ? "text-red-500" : "text-white"
      }`}
    >
      {isFunctional ? <Dumbbell size={15} /> : <Users size={15} />}
      {type}
    </span>
  );
}

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState(0);

  const currentDay = schedule[selectedDay];

  return (
    <section
      id="horarios"
      className="bg-[#0a0a0a] px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-red-600">
              Horário de aulas
            </p>

            <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-8xl">
              Encontra o teu
              <br />
              <span className="text-red-600">melhor horário.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-relaxed text-gray-400 lg:text-lg">
            Escolhe o horário que melhor se adapta à tua rotina e mantém-te
            em movimento durante toda a semana.
          </p>
        </div>

        {/* MOBILE / TABLET — DAY TABS */}
        <div className="mb-6 grid grid-cols-5 gap-1 border border-white/10 bg-black p-1 lg:hidden">
          {schedule.map((day, index) => (
            <button
              key={day.short}
              onClick={() => setSelectedDay(index)}
              className={`relative px-2 py-4 text-xs font-black uppercase tracking-wider transition ${
                selectedDay === index
                  ? "bg-red-600 text-white"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              {day.short}
            </button>
          ))}
        </div>

        {/* MOBILE SCHEDULE */}
        <div className="lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentDay.short}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="border border-white/10 bg-black"
            >
              <div className="border-b border-white/10 px-6 py-5">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
                  Horários
                </p>

                <h3 className="mt-2 text-2xl font-black uppercase text-white">
                  {currentDay.full}
                </h3>
              </div>

              <div>
                {currentDay.classes.map((item, index) => (
                  <div
                    key={`${item.time}-${item.type}`}
                    className="flex items-center justify-between border-b border-white/10 px-6 py-6 last:border-b-0"
                  >
                    <div className="flex items-center gap-4">
                      <Clock size={18} className="text-gray-600" />

                      <span className="text-xl font-black text-white">
                        {item.time}
                      </span>
                    </div>

                    <ClassBadge type={item.type} />
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* DESKTOP TABLE */}
        <div className="hidden overflow-hidden border border-white/10 lg:block">
          <div className="grid grid-cols-[110px_repeat(5,1fr)] bg-black">

            {/* TIME HEADER */}
            <div className="border-b border-r border-white/10 px-5 py-6">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-600">
                Hora
              </span>
            </div>

            {/* DAYS */}
            {schedule.map((day) => (
              <div
                key={day.short}
                className="border-b border-r border-white/10 px-5 py-6 last:border-r-0"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-red-600">
                  {day.short}
                </p>

                <p className="mt-1 text-sm font-bold text-white">
                  {day.full.replace("-feira", "")}
                </p>
              </div>
            ))}

            {/* ROWS */}
            {times.map((time) => (
              <div key={time} className="contents">

                <div className="flex items-center border-b border-r border-white/10 bg-[#080808] px-5 py-7">
                  <span className="text-lg font-black text-white">
                    {time}
                  </span>
                </div>

                {schedule.map((day) => {
                  const classItem = day.classes.find(
                    (item) => item.time === time
                  );

                  return (
                    <div
                      key={`${day.short}-${time}`}
                      className="flex min-h-[105px] items-center border-b border-r border-white/10 px-5 py-6 transition hover:bg-[#160306]"
                    >
                      {classItem ? (
                        <ClassBadge type={classItem.type} />
                      ) : (
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-700">
                          —
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* LEGEND */}
        <div className="mt-7 flex flex-wrap items-center gap-7">
          <div className="flex items-center gap-2">
            <Dumbbell size={16} className="text-red-600" />
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Treino funcional
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Users size={16} className="text-white" />
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Aula de grupo
            </span>
          </div>
        </div>

        {/* BOTTOM INFO */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">

          <div className="border-l-2 border-red-600 bg-black p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-600">
              Mais flexibilidade
            </p>

            <p className="mt-2 text-lg font-bold text-white">
              Escolhe quando treinar.
            </p>
          </div>

          <div className="border border-white/10 bg-black p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-600">
              Diferentes opções
            </p>

            <p className="mt-2 text-lg font-bold text-white">
              Funcional e aulas de grupo.
            </p>
          </div>

          <div className="border border-white/10 bg-black p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-600">
              Primeiro passo
            </p>

            <a
              href="#treino-gratis"
              className="group mt-2 inline-flex items-center gap-3 text-lg font-bold text-white"
            >
              Experimentar
              <ArrowRight
                size={19}
                className="text-red-600 transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>

        </div>

        {/* WARNING / PROTOTYPE NOTE 
        <p className="mt-8 text-xs leading-relaxed text-gray-600">
          * Horários apresentados para demonstração do protótipo. A
          programação final deverá ser confirmada pela InMotion antes da
          publicação.
        </p>
        */}
      </div>
    </section>
  );
}