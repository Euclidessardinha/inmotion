"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Equipa",
    text: "Profissionais preparados para acompanhar a tua evolução.",
  },
  {
    number: "02",
    title: "Comunidade",
    text: "Um ambiente onde treinar fica mais motivador quando fazemos parte de algo maior.",
  },
  {
    number: "03",
    title: "Energia",
    text: "Um espaço pensado para te manter ativo, focado e em movimento.",
  },
];

export default function WhyInMotion() {
  return (
    <section
      id="porque"
      className="overflow-hidden bg-black px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* TOP */}
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-red-600">
              Porquê InMotion
            </p>

            <h2 className="max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-8xl">
              Não é só
              <br />
              sobre <span className="text-red-600">treinar.</span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-relaxed text-gray-400 lg:pb-2 lg:text-lg">
            É sobre criar uma rotina mais ativa, encontrar motivação e
            continuar em movimento.
          </p>

        </div>

        {/* IMAGE + CONTENT */}
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 z-10 h-full w-1 bg-red-600" />

            <img
              src="/images/inmotion2.png"
              alt="Comunidade InMotion"
              className="h-[500px] w-full object-cover grayscale transition duration-700 hover:grayscale-0 lg:h-[650px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-white">
                InMotion MZ
              </p>
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="mb-10 max-w-lg text-2xl font-medium leading-relaxed text-white sm:text-3xl">
              O treino faz parte da transformação, mas a verdadeira mudança
              começa quando decides colocar-te em movimento.
            </p>

            <div className="border-t border-white/10">
              {features.map((feature) => (
                <div
                  key={feature.number}
                  className="group grid grid-cols-[60px_1fr] gap-5 border-b border-white/10 py-7"
                >
                  <span className="text-sm font-bold text-red-600">
                    {feature.number}
                  </span>

                  <div>
                    <h3 className="mb-2 flex items-center justify-between text-xl font-black uppercase text-white">
                      {feature.title}

                      <ArrowUpRight
                        size={20}
                        className="text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-red-600"
                      />
                    </h3>

                    <p className="max-w-md text-sm leading-relaxed text-gray-500">
                      {feature.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}