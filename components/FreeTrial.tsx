"use client";

import { ArrowRight, Check, User, Phone, Target } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  "Conhece o espaço InMotion",
  "Experimenta o ambiente de treino",
  "Recebe orientação inicial",
  "Descobre o treino ideal para ti",
];

export default function FreeTrial() {
  return (
    <section
      id="treino-gratis"
      className="relative overflow-hidden bg-[#080808] px-6 py-24 lg:px-8 lg:py-32"
    >
      {/* BACKGROUND DECORATION */}
      <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-red-600/10 blur-[120px]" />

      <div className="absolute right-0 top-0 h-full w-px bg-red-600/20" />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-4xl"
        >
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-red-600">
            Primeiro passo
          </p>

          <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-tight text-white sm:text-6xl lg:text-8xl">
            O teu próximo
            <br />
            <span className="text-red-600">treino começa aqui.</span>
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
            Nunca treinaste na InMotion? Experimenta o nosso espaço e dá o
            primeiro passo para uma rotina mais ativa.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="border-l-2 border-red-600 pl-6">
              <p className="text-2xl font-bold leading-relaxed text-white sm:text-3xl">
                Vem conhecer a InMotion e descobrir uma nova forma de treinar.
              </p>
            </div>

            <div className="mt-10 space-y-5">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-red-600/10">
                    <Check
                      size={16}
                      className="text-red-500"
                    />
                  </span>

                  <span className="text-sm text-gray-300 sm:text-base">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-12 border-t border-white/10 pt-7">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-gray-600">
                TREINAR É CUIDAR DE TI
              </p>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative border border-white/10 bg-black p-7 sm:p-10 lg:p-12"
          >
            {/* RED TOP LINE */}
            <div className="absolute left-0 top-0 h-1 w-full bg-red-600" />

            <div className="mb-9">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-red-600">
                Treino grátis
              </p>

              <h3 className="mt-3 text-3xl font-black uppercase text-white sm:text-4xl">
                Marca a tua
                <br />
                experiência.
              </h3>
            </div>

            <form className="space-y-6">

              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500"
                >
                  Nome completo
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                  />

                  <input
                    id="name"
                    type="text"
                    placeholder="O teu nome"
                    className="w-full border border-white/10 bg-[#0c0c0c] py-4 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-red-600"
                  />
                </div>
              </div>

              {/* PHONE */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500"
                >
                  Telefone
                </label>

                <div className="relative">
                  <Phone
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                  />

                  <input
                    id="phone"
                    type="tel"
                    placeholder="+258 84 XXX XXXX"
                    className="w-full border border-white/10 bg-[#0c0c0c] py-4 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-red-600"
                  />
                </div>
              </div>

              {/* GOAL */}
              <div>
                <label
                  htmlFor="goal"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500"
                >
                  Objetivo
                </label>

                <div className="relative">
                  <Target
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600"
                  />

                  <select
                    id="goal"
                    defaultValue=""
                    className="w-full appearance-none border border-white/10 bg-[#0c0c0c] py-4 pl-12 pr-4 text-sm text-white outline-none transition focus:border-red-600"
                  >
                    <option value="" disabled>
                      Escolhe o teu objetivo
                    </option>

                    <option value="strength">
                      Ganhar força
                    </option>

                    <option value="fitness">
                      Ficar em forma
                    </option>

                    <option value="health">
                      Melhorar a saúde
                    </option>

                    <option value="conditioning">
                      Melhorar condicionamento
                    </option>

                    <option value="other">
                      Outro
                    </option>
                  </select>
                </div>
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500"
                >
                  Mensagem
                </label>

                <textarea
                  id="message"
                  rows={4}
                  placeholder="Conta-nos um pouco sobre o que procuras..."
                  className="w-full resize-none border border-white/10 bg-[#0c0c0c] px-4 py-4 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-red-600"
                />
              </div>

              {/* BUTTON */}
              <button
                type="button"
                className="group flex w-full items-center justify-center gap-3 bg-red-600 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-red-700"
              >
                Quero o meu treino grátis

                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

              <p className="text-center text-xs leading-relaxed text-gray-600">
                Demonstração do formulário — o envio será integrado na fase
                de desenvolvimento.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}