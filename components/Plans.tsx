"use client";

import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "3X SEMANA",
    price: "2.590",
    description:
      "Ideal para quem quer manter uma rotina consistente de treino durante a semana.",
    features: [
      "Acesso 3 vezes por semana",
      "Musculação",
      "Treino funcional",
      "Aulas de grupo",
      "Oferta de chip",
      "Avaliação física",
    ],
    featured: false,
  },
  {
    name: "FULL PASS",
    price: "3.490",
    description:
      "Para quem quer liberdade total para treinar e aproveitar ao máximo a InMotion.",
    features: [
      "Acesso todos os dias",
      "Musculação",
      "Treino funcional",
      "Aulas de grupo",
      "Oferta de chip",
      "Avaliação física",
    ],
    featured: true,
  },
  {
    name: "OFF PEAK",
    price: "1.990",
    description:
      "Uma opção mais acessível para quem prefere treinar durante os horários Off Peak.",
    features: [
      "Acesso todos os dias das 09h às 15h",
      "Musculação",
      "Treino funcional",
      "Aulas de grupo às 12h30",
      "Oferta de chip",
      "Avaliação física",
    ],
    featured: false,
  },
];

export default function Plans() {
  return (
    <section
      id="planos"
      className="bg-black px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-red-600">
            Pacotes InMotion
          </p>

          <h2 className="text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-6xl lg:text-8xl">
            Escolhe o teu
            <br />
            <span className="text-red-600">pacote.</span>
          </h2>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
            Encontra a opção que melhor se adapta à tua rotina e começa a
            treinar na InMotion.
          </p>
        </div>

        {/* PLANS */}
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className={`relative flex flex-col border p-8 sm:p-10 ${
                plan.featured
                  ? "border-red-600 bg-[#120306]"
                  : "border-white/10 bg-[#0a0a0a]"
              }`}
            >

              {/* DESTAQUE */}
              {plan.featured && (
                <div className="absolute right-0 top-0 bg-red-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white">
                  Mais escolhido
                </div>
              )}

              {/* LABEL */}
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
                Pacote
              </p>

              {/* NOME */}
              <h3 className="mt-3 text-3xl font-black uppercase tracking-tight text-white">
                {plan.name}
              </h3>

              {/* PREÇO */}
              <div className="mt-10 flex items-end gap-2">
                <span className="text-5xl font-black tracking-tight text-white sm:text-6xl">
                  {plan.price}
                </span>

                <span className="mb-2 text-sm font-medium text-gray-500">
                  MZN / mês
                </span>
              </div>

              {/* DESCRIÇÃO */}
              <p className="mt-5 min-h-[72px] text-sm leading-relaxed text-gray-400">
                {plan.description}
              </p>

              {/* BENEFÍCIOS */}
              <div className="my-8 border-t border-white/10 pt-7">
                <p className="mb-5 text-xs font-bold uppercase tracking-widest text-gray-500">
                  Inclui
                </p>

                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-600/10">
                        <Check
                          size={13}
                          className="text-red-500"
                        />
                      </span>

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href="#treino-gratis"
                className={`group mt-auto flex items-center justify-center gap-3 px-6 py-4 text-sm font-bold uppercase tracking-wide transition ${
                  plan.featured
                    ? "bg-red-600 text-white hover:bg-red-700"
                    : "border border-white/20 text-white hover:border-white hover:bg-white hover:text-black"
                }`}
              >
                Escolher pacote

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          ))}
        </div>

        {/* PROMOÇÃO */}
        <div className="mt-8 border border-white/10 bg-[#0a0a0a] p-6 sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">
                Oferta especial
              </p>

              <h3 className="mt-2 text-2xl font-black uppercase text-white sm:text-3xl">
                1 mês grátis no pacote trimestral
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-400">
                Aproveita as condições do pacote trimestral e beneficia de
                vantagens adicionais disponíveis na InMotion.
              </p>
            </div>

            <a
              href="#treino-gratis"
              className="group flex shrink-0 items-center justify-center gap-3 bg-white px-7 py-4 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-red-600 hover:text-white"
            >
              Saber mais

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* NOTA */}
        <p className="mt-8 text-xs leading-relaxed text-gray-600">
          * Preços, horários, condições, benefícios e promoções devem ser
          confirmados diretamente com a InMotion antes da publicação final.
        </p>
      </div>
    </section>
  );
}
