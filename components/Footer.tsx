"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#080808] text-white">

      {/* =========================
          MAIN FOOTER
      ========================== */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">

        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr_1fr]">

          {/* =========================
              BRAND
          ========================== */}
          <div>
            <a href="#inicio" className="inline-flex items-center">
              <img
                src="/images/inmotion-logo.png"
                alt="InMotion Performance"
                className="h-20 w-20 object-contain"
              />
            </a>

            <div className="mt-8 border-l-2 border-red-600 pl-5">
              <p className="max-w-md text-sm leading-7 text-gray-400 sm:text-base">
                Somos um Estúdio de treinos de musculação e aulas de grupo
                que actua no mercado moçambicano há 6 anos. Ajudámos mais de
                6000 alunos a ficarem em forma e divertirem-se treinando com
                profissionais de forma segura e divertida!
              </p>
            </div>
          </div>

          {/* =========================
              CONTACTO
          ========================== */}
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-8 w-1 bg-red-600" />

              <h3 className="text-xl font-black uppercase tracking-wide text-white">
                Contacto
              </h3>
            </div>

            <div className="space-y-7">

              {/* Telefones */}
              <div className="flex gap-4">
                <Phone
                  size={24}
                  strokeWidth={1.7}
                  className="mt-1 shrink-0 text-red-600"
                />

                <div className="space-y-2 text-sm leading-relaxed text-gray-400 sm:text-base">
                  <a
                    href="tel:+258841211100"
                    className="block transition hover:text-white"
                  >
                    Cell: +258 84 12 11 100
                  </a>

                  <a
                    href="tel:+258841211102"
                    className="block transition hover:text-white"
                  >
                    Cell: +258 84 12 11 102
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <Mail
                  size={24}
                  strokeWidth={1.7}
                  className="mt-1 shrink-0 text-red-600"
                />

                <a
                  href="mailto:geral@inmotion.co.mz"
                  className="text-sm text-gray-400 transition hover:text-white sm:text-base"
                >
                  E-mail: geral@inmotion.co.mz
                </a>
              </div>

            </div>
          </div>

          {/* =========================
              MORADA
          ========================== */}
          <div>
            <div className="mb-8 flex items-center gap-4">
              <span className="h-8 w-1 bg-red-600" />

              <h3 className="text-xl font-black uppercase tracking-wide text-white">
                Morada
              </h3>
            </div>

            <div className="space-y-8">

              {/* Localização principal */}
            <div className="flex gap-4">
                <MapPin
                    size={24}
                    strokeWidth={1.7}
                    className="mt-1 shrink-0 text-red-600"
                />

                <a
                    href="https://www.google.com/maps/place/In+Motion+Performance/@-25.9552435,32.5854641,17z/data=!4m15!1m8!3m7!1s0x1ee69a55d9c1aaaf:0x3d3a280611fe380!2s2HVM%2BWRW,+1642+Rua+da+Resist%C3%AAncia,+Maputo!3b1!8m2!3d-25.9551374!4d32.5845629!16s%2Fg%2F11z22v88k1!3m5!1s0x1ee69a56c33b6b43:0x2196b586bedf55a1!8m2!3d-25.9521774!4d32.5871377!16s%2Fg%2F11c1s3234c?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm leading-7 text-gray-400 transition hover:text-white sm:text-base"
                >
                    Rua da Resistência nº 1642,
                    <br />
                    Esquina das Av. Joaquim Chissano;
                </a>
            </div>

              {/* Localização 2 */}
              <div className="flex gap-4">
                <MapPin
                  size={24}
                  strokeWidth={1.7}
                  className="mt-1 shrink-0 text-red-600"
                />

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Av.+Josina+Machel+1601+Machava+Maputo+1112+Mozambique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-7 text-gray-400 transition hover:text-white sm:text-base"
                >
                  Av. Josina Machel 1601 Machava,
                  <br />
                  Maputo nº 1112;
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* =========================
          BOTTOM BAR
      ========================== */}
      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-7 sm:flex-row sm:items-center sm:justify-between lg:px-8">

          {/* Redes sociais + slogan */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">

            <div className="flex items-center gap-5">
            {/* Instagram */}
            <a
                href="https://www.instagram.com/inmotionmoz/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-300 transition hover:text-red-600"
            >
                <FaInstagram size={22} />
            </a>

            {/* Facebook */}
            <a
                href="https://web.facebook.com/inmotionmoz/?locale=pt_BR&_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-300 transition hover:text-red-600"
            >
            <FaFacebookF size={22} />
            </a>

            {/* YouTube */}
            <a
                href="https://www.youtube.com/@inmotionmoz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-gray-300 transition hover:text-red-600"
            >
                <FaYoutube size={22} />
            </a>
        </div>

            <span className="hidden h-6 w-px bg-white/20 sm:block" />

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-500">
              Treinar é cuidar de ti
            </p>

          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} InMotion Performance. Todos os
            direitos reservados.
          </p>

        </div>
      </div>

    </footer>
  );
}