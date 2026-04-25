import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroCover from "@/assets/hero-ebook-cover.webp";
import benefitsMockup from "@/assets/benefits-mockup.webp";
import catDesayunos from "@/assets/cat-desayunos.jpg";
import catAlmuerzos from "@/assets/cat-almuerzos.jpg";
import catCenas from "@/assets/cat-cenas.jpg";
import catPostres from "@/assets/cat-postres.jpg";
import testimonialCristian from "@/assets/testimonial-cristian.webp";
import testimonialLorena from "@/assets/testimonial-lorena.webp";
import testimonialCarlos from "@/assets/testimonial-carlos.webp";
import testimonialLigia from "@/assets/testimonial-ligia.webp";
import { CTAButton } from "@/components/CTAButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  component: Index,
});

const GREEN = "#1B5233";
const TERRACOTTA = "#C4622D";
const CREAM = "#F5F0EA";
const INK = "#2C2C2C";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-center text-xs md:text-sm font-semibold uppercase tracking-[0.25em] mb-4"
      style={{ color: TERRACOTTA }}
    >
      {children}
    </p>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-display text-center text-3xl md:text-5xl font-bold leading-tight mb-6"
      style={{ color: GREEN }}
    >
      {children}
    </h2>
  );
}

function CTAMicrocopy() {
  return (
    <p className="mt-4 text-center text-sm text-neutral-500">
      Descarga inmediata • PDF en español • Acceso en menos de 2 minutos
    </p>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section style={{ backgroundColor: CREAM }} className="px-5 pt-10 pb-14 md:py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="order-1 md:order-2 flex justify-center">
          <img
            src={heroCover}
            alt="Recetario Vital — portada del ebook con ingredientes saludables"
            width={460}
            height={576}
            className="w-full max-w-[380px] md:max-w-[460px] h-auto rounded-2xl shadow-2xl"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="order-2 md:order-1 text-center md:text-left">
          <p
            className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] mb-4"
            style={{ color: TERRACOTTA }}
          >
            🌿 Recetario Vital
          </p>
          <h1
            className="font-display text-4xl md:text-6xl font-bold leading-[1.05] mb-5"
            style={{ color: GREEN }}
          >
            Come rico, come bien. Sin miedo y sin complicaciones.
          </h1>
          <p className="text-lg md:text-xl mb-6" style={{ color: INK }}>
            Si tienes el azúcar alta o te preocupa tu alimentación, el Recetario
            Vital te muestra cómo preparar comidas deliciosas, económicas y
            fáciles — con ingredientes que ya conoces y en menos de 30 minutos.
            Sin ingredientes raros. Sin dietas imposibles. Sin sacrificar el
            placer de comer.
          </p>
          <div className="mt-6">
            <CTAButton label="QUIERO MI RECETARIO VITAL →" />
          </div>
          <p className="mt-4 text-sm text-neutral-600 text-center md:text-left">
            Descarga inmediata • PDF en español • Solo <strong>$15 USD</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PAIN + RESPONSES ---------------- */
function Pain() {
  const items = [
    {
      pain: "Tu médico te asustó y te dejó con más dudas que certezas",
      answer:
        "Si te dijeron que tienes el azúcar alta, nadie te explicó qué comer ni por dónde empezar. El Recetario Vital es tu guía práctica para aprender a alimentarte sin depender de una consulta médica para cada decisión.",
    },
    {
      pain: "Quieres comer sano pero no sabes cómo o crees que es muy caro",
      answer:
        "Cada receta fue creada con ingredientes accesibles, de bajo costo, que consigues en cualquier mercado local. Además incluye alternativas e ingredientes sustitutos para que siempre tengas opciones.",
    },
    {
      pain: "Te preocupa depender de medicamentos de por vida",
      answer:
        "Miles de personas han mejorado su calidad de vida cambiando su alimentación. El Recetario Vital te da las herramientas para que cada comida sea una decisión consciente a favor de tu bienestar.",
    },
    {
      pain: "Te preocupa terminar como un familiar",
      answer:
        "La buena noticia es que en este momento tienes en tus manos una herramienta que ese familiar no tuvo: información concreta, recetas probadas y un plan claro para cuidar tu alimentación desde hoy.",
    },
    {
      pain: "Temes llenarte de información genérica que no funcione",
      answer:
        "El Recetario Vital no tiene nada que ver con la información vacía que encuentras en internet. Tiene respaldo en evidencia nutricional y ha sido validado por personas reales que ya cambiaron su alimentación.",
    },
    {
      pain: "Sientes que perdiste el control de lo que comes",
      answer:
        "Recuperar el control de tu alimentación es más simple de lo que crees. El Recetario Vital te muestra cómo hacerlo paso a paso, sin complicaciones y sin sacrificar el placer de comer.",
    },
  ];
  return (
    <section className="px-5 py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Si te identificas con esto…</SectionLabel>
        <Heading>¿Te suena familiar alguna de estas situaciones?</Heading>
        <div className="grid md:grid-cols-2 gap-5 mt-10">
          {items.map((c, i) => (
            <div
              key={c.pain}
              className="rounded-2xl p-6"
              style={{ backgroundColor: CREAM }}
            >
              <p
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: TERRACOTTA }}
              >
                {`Situación ${i + 1}`}
              </p>
              <h3 className="font-bold text-lg mb-3" style={{ color: GREEN }}>
                ❌ {c.pain}
              </h3>
              <p
                style={{ color: INK, fontSize: 16 }}
                className="leading-relaxed border-l-4 pl-4"
              >
                <span style={{ color: GREEN, fontWeight: 700 }}>✓ </span>
                {c.answer}
              </p>
            </div>
          ))}
        </div>
        <p
          className="text-center text-lg md:text-xl mt-10 font-semibold"
          style={{ color: GREEN }}
        >
          Si te identificaste con al menos una… este recetario es lo que
          buscaste por tanto tiempo.
        </p>
      </div>
    </section>
  );
}

/* ---------------- SCIENTIFIC EVIDENCE ---------------- */
function ScientificEvidence() {
  const cards = [
    {
      emoji: "🌿",
      title: "Canela de Ceilán",
      body: "Estudios publicados en el Journal of Medicinal Food muestran que el consumo regular de canela de Ceilán está asociado con una reducción en los niveles de glucosa en ayunas. La encontrarás en varias recetas del Recetario Vital, no como adorno, sino como ingrediente funcional.",
    },
    {
      emoji: "🍎",
      title: "Vinagre de manzana",
      body: "Investigaciones en el área de nutrición clínica sugieren que el ácido acético presente en el vinagre de manzana puede reducir la respuesta glucémica después de las comidas. Lo incorporamos en aderezos y preparaciones que no alteran el sabor de los platos.",
    },
    {
      emoji: "🫘",
      title: "Legumbres (lentejas, garbanzos, frijoles)",
      body: "Las legumbres tienen uno de los índices glucémicos más bajos entre los alimentos ricos en carbohidratos. Son base fundamental de las recetas del Recetario Vital porque sacian, nutren y no disparan el azúcar. Son económicas y fáciles de conseguir en cualquier mercado de LATAM.",
    },
    {
      emoji: "🌾",
      title: "Avena integral",
      body: "La fibra beta-glucano de la avena es reconocida por organismos de salud internacionales como aliada en el control del azúcar en sangre. En el Recetario encontrarás formas de prepararla que van mucho más allá del desayuno tradicional.",
    },
    {
      emoji: "🥑",
      title: "Aguacate, aceite de oliva y semillas",
      body: "Las grasas monoinsaturadas presentes en el aguacate y el aceite de oliva virgen extra han sido asociadas en múltiples estudios con la reducción de la inflamación crónica, uno de los factores subyacentes en la resistencia a la insulina.",
    },
  ];
  return (
    <section className="px-5 py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Evidencia científica</SectionLabel>
        <Heading>¿Por qué funciona? La ciencia detrás de cada receta</Heading>

        <div
          className="mx-auto mt-6 mb-10 rounded-xl p-6"
          style={{
            backgroundColor: CREAM,
            borderLeft: `6px solid ${TERRACOTTA}`,
            maxWidth: 760,
          }}
        >
          <p style={{ color: INK, fontSize: 16, lineHeight: 1.7 }}>
            Según la <strong>Federación Internacional de Diabetes</strong>,
            América Latina tiene más de <strong>32 millones de personas</strong>{" "}
            con diabetes. México y Colombia están entre los 10 países con mayor
            prevalencia de la región. La alimentación es el principal factor
            modificable asociado al desarrollo de diabetes tipo 2.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-6">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-xl p-6"
              style={{
                backgroundColor: CREAM,
                borderLeft: `4px solid ${GREEN}`,
              }}
            >
              <h3 className="font-bold text-lg mb-2" style={{ color: GREEN }}>
                <span className="mr-2">{c.emoji}</span>
                {c.title}
              </h3>
              <p style={{ color: INK, fontSize: 16 }} className="leading-relaxed">
                {c.body}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-10 mx-auto rounded-lg"
          style={{
            backgroundColor: CREAM,
            border: `1px solid ${GREEN}`,
            padding: 20,
            maxWidth: 720,
          }}
        >
          <p className="italic text-center" style={{ color: INK, fontSize: 16 }}>
            El Recetario Vital es un recurso de alimentación complementario. No
            reemplaza tu tratamiento médico ni las indicaciones de tu médico o
            nutricionista.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- BENEFITS / CATEGORIES ---------------- */
function Benefits() {
  const cats = [
    { img: catDesayunos, title: "DESAYUNOS", body: "Empieza el día con energía estable" },
    { img: catAlmuerzos, title: "ALMUERZOS", body: "Platos completos y saciantes" },
    { img: catCenas, title: "CENAS", body: "Ligeras, sabrosas y reparadoras" },
    { img: catPostres, title: "POSTRES Y DULCES", body: "El placer sin culpa, sin azúcar" },
  ];
  return (
    <section className="px-5 py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Qué incluye</SectionLabel>
        <Heading>Más de 200 recetas organizadas por objetivo y condición</Heading>
        <p
          className="text-center text-lg md:text-xl mx-auto mb-10"
          style={{ color: INK, maxWidth: 760 }}
        >
          Cada receta fue diseñada para que puedas preparar desayunos, almuerzos,
          cenas y postres deliciosos — que funcionen para tu bienestar, tu
          familia y tu agenda.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {cats.map((c) => (
            <div key={c.title} className="rounded-2xl overflow-hidden shadow-sm bg-white" style={{ border: `1px solid ${GREEN}20` }}>
              <img
                src={c.img}
                alt={`Categoría ${c.title.toLowerCase()}`}
                width={768}
                height={768}
                className="w-full h-40 md:h-56 object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="p-4 text-center">
                <h3 className="font-bold text-base md:text-lg" style={{ color: GREEN }}>
                  {c.title}
                </h3>
                <p style={{ color: INK, fontSize: 14 }} className="mt-1">
                  {c.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-10 items-center">
          <div className="flex justify-center">
            <img
              src={benefitsMockup}
              alt="Recetario Vital mostrado en un teléfono móvil"
              width={360}
              height={520}
              className="w-full max-w-[360px] h-auto rounded-2xl"
              loading="lazy"
              decoding="async"
            />
          </div>
          <ul className="space-y-4">
            {[
              "200+ recetas saludables clasificadas por objetivo: azúcar, peso, energía y digestión",
              "Sección especial para condiciones crónicas: qué comer y qué evitar según tu situación",
              "Recetas familiares que toda la mesa come, sin versiones separadas",
              "Plan de alimentación semanal incluido, adaptable a cualquier agenda",
              "Guía de sustituciones para no renunciar a los sabores que amas",
              "Ingredientes de mercado popular, sin costos adicionales",
              "PDF descargable, acceso inmediato, disponible en cualquier dispositivo",
            ].map((b) => (
              <li key={b} className="flex gap-3 items-start">
                <span
                  className="flex-shrink-0 w-7 h-7 mt-0.5 rounded-full flex items-center justify-center font-bold text-white text-sm"
                  style={{ backgroundColor: GREEN }}
                >
                  ✓
                </span>
                <p style={{ color: INK, fontSize: 16 }} className="leading-relaxed">
                  {b}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const list = [
    {
      quote:
        "Quienes tenemos el azúcar alta vivimos en constante estrés por no saber qué hacer. El Recetario Vital te da una guía para no sacrificar el placer de comer, cuidando tu salud.",
      name: "Cristian Ortiz",
      city: "Lima",
      img: testimonialCristian,
    },
    {
      quote:
        "Cuando te dicen que tienes el azúcar alta entras en modo alerta. Si le sumas que rara vez te dicen qué hacer, una ayuda como el Recetario Vital te da más que un alivio. Por eso lo recomiendo.",
      name: "Lorena Rodríguez",
      city: "Ciudad de México",
      img: testimonialLorena,
    },
    {
      quote:
        "Cuando te diagnostican con diabetes sentís que nada volverá a ser como antes. Pero cuando encuentras una herramienta como el Recetario Vital, te das cuenta que podés seguir llevando una vida normal.",
      name: "Carlos Martínez",
      city: "La Plata",
      img: testimonialCarlos,
    },
    {
      quote:
        "Entendí que los cambios también son para bien. Creí que jamás volvería a disfrutar del buen comer, pero con el Recetario Vital me di cuenta que solo debía hacer unos ajustes más sencillos de lo que pensaba.",
      name: "Ligia Gutiérrez",
      city: "Bogotá",
      img: testimonialLigia,
    },
  ];
  return (
    <section className="px-5 py-16 md:py-24" style={{ backgroundColor: CREAM }}>
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Testimonios</SectionLabel>
        <Heading>Lo que dicen quienes ya cambiaron su alimentación</Heading>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {list.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-sm"
              style={{ border: `1px solid ${GREEN}20` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.img}
                  alt={`Foto de ${t.name}`}
                  width={72}
                  height={72}
                  className="rounded-full object-cover"
                  style={{ width: 72, height: 72 }}
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <p className="font-bold" style={{ color: GREEN, fontSize: 16 }}>
                    {t.name}
                  </p>
                  <p className="text-sm" style={{ color: INK, opacity: 0.7 }}>
                    {t.city}
                  </p>
                </div>
              </div>
              <p style={{ color: INK, fontSize: 16 }} className="italic leading-relaxed">
                “{t.quote}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- BONUSES ---------------- */
function Bonuses() {
  const bonuses = [
    {
      tag: "🎁 BONO 1",
      emoji: "🚦",
      title: "El Semáforo Alimenticio",
      body: "La guía visual que te dice en segundos qué alimentos te ayudan y cuáles te dañan. Como tener un nutricionista silencioso 24/7.",
      value: "$15 USD",
    },
    {
      tag: "🎁 BONO 2",
      emoji: "🥑",
      title: "Keto Fácil",
      body: "Guía de inicio rápido para la alimentación cetogénica antiinflamatoria. Todo lo que necesitas para empezar sin confusión, sin hambre y sin errores.",
      value: "$17 USD",
    },
    {
      tag: "🎁 BONO 3",
      emoji: "💧",
      title: "Detox Natural",
      body: "21 licuados y aguas infusionadas para desinflamar y depurar tu cuerpo desde adentro. El complemento perfecto para potenciar tu alimentación diaria.",
      value: "$25 USD",
    },
  ];
  return (
    <section className="px-5 py-16 md:py-24" style={{ backgroundColor: CREAM }}>
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Bonos exclusivos — solo por hoy</SectionLabel>
        <Heading>
          Con tu Recetario Vital lleva 3 bonos exclusivos — Sin costo adicional
        </Heading>
        <p
          className="text-center mb-10"
          style={{ color: INK, fontSize: 18 }}
        >
          Valorados en <strong>$57 USD</strong>. Tuyos GRATIS hoy.
        </p>
        <div className="grid md:grid-cols-3 gap-5">
          {bonuses.map((b) => (
            <div
              key={b.title}
              className="bg-white rounded-2xl p-6 shadow-sm flex flex-col"
              style={{ border: `1px solid ${GREEN}20` }}
            >
              <span
                className="inline-block self-start text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3"
                style={{ backgroundColor: TERRACOTTA, color: "#fff" }}
              >
                {b.tag}
              </span>
              <h3
                className="font-display font-bold text-xl mb-2"
                style={{ color: GREEN }}
              >
                <span className="mr-2">{b.emoji}</span>
                {b.title}
              </h3>
              <p style={{ color: INK, fontSize: 16 }} className="mb-4 flex-1">
                {b.body}
              </p>
              <p className="text-sm font-semibold" style={{ color: GREEN }}>
                Valor:{" "}
                <span className="line-through text-neutral-500 font-normal">
                  {b.value}
                </span>{" "}
                <span style={{ color: TERRACOTTA }}>→ GRATIS HOY</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <CTAButton label="QUIERO MI RECETARIO + LOS 3 BONOS POR $15 USD →" />
          <p className="mt-4 text-center text-sm text-neutral-500">
            Acceso inmediato en menos de 2 minutos • PDF en español
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRICING ---------------- */
function Pricing() {
  const valueRows = [
    { item: "Recetario Vital — 200+ recetas", value: "$35 USD" },
    { item: "Bono 1 — 🚦 El Semáforo Alimenticio", value: "$15 USD" },
    { item: "Bono 2 — 🥑 Keto Fácil", value: "$17 USD" },
    { item: "Bono 3 — 💧 Detox Natural", value: "$25 USD" },
  ];
  return (
    <section className="px-5 py-16 md:py-24" style={{ backgroundColor: GREEN }}>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] mb-4 text-white/80">
          Tu inversión hoy
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
          Tu inversión hoy
        </h2>
        <p
          className="mx-auto mb-8 text-white/90"
          style={{ fontSize: 18, maxWidth: 620 }}
        >
          Por una inversión mínima, muy inferior al costo de una consulta médica
          o con un nutricionista, llevas hoy tu Recetario Vital:
        </p>

        {/* Value table */}
        <div
          className="rounded-2xl p-6 md:p-8 mb-10 text-left mx-auto"
          style={{
            backgroundColor: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.2)",
            maxWidth: 560,
          }}
        >
          {valueRows.map((r) => (
            <div
              key={r.item}
              className="flex justify-between gap-4 py-3 border-b border-white/10 last:border-0"
              style={{ fontSize: 16 }}
            >
              <span className="text-white/90">{r.item}</span>
              <span className="text-white font-semibold">{r.value}</span>
            </div>
          ))}
          <div
            className="flex justify-between gap-4 pt-4 mt-2 border-t-2 border-white/30"
            style={{ fontSize: 18 }}
          >
            <span className="text-white font-bold">VALOR TOTAL</span>
            <span className="text-white font-bold">$92 USD</span>
          </div>
        </div>

        {/* Crossed-out price */}
        <p
          className="text-gray-300 mb-2"
          style={{ fontSize: 24, textDecoration: "line-through" }}
        >
          $92 USD
        </p>
        <p className="text-white/80 mb-2 text-sm uppercase tracking-widest">
          Hoy solo
        </p>
        <p
          className="text-white font-extrabold leading-none mb-4"
          style={{ fontSize: "clamp(48px, 11vw, 72px)", fontWeight: 800 }}
        >
          $15 USD
        </p>
        <p
          className="text-white/90 mb-6 mx-auto"
          style={{ fontSize: 16, maxWidth: 520 }}
        >
          Un solo pago. Tuyo de por vida. Con actualizaciones permanentes
          incluidas.
        </p>

        {/* Currency equivalency */}
        <p
          className="text-white/85 mb-6"
          style={{ fontSize: 16 }}
        >
          ≈ $321 MXN · ≈ $56.404 COP
          <br />
          <span className="italic" style={{ color: CREAM, fontSize: 13 }}>
            (El precio exacto se confirma en el checkout)
          </span>
        </p>

        {/* Urgency band */}
        <div
          className="mx-auto mb-8 text-white font-bold text-center"
          style={{
            backgroundColor: TERRACOTTA,
            borderRadius: 8,
            padding: "12px 20px",
            maxWidth: 560,
            fontSize: 16,
          }}
        >
          ⏱️ Solo durante el lanzamiento: $15 USD — Precio especial para los
          primeros 50 compradores.
        </div>

        {/* Secure payment card */}
        <div
          className="mx-auto mb-8 rounded-xl text-left"
          style={{
            backgroundColor: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.2)",
            padding: 24,
            maxWidth: 560,
          }}
        >
          <div className="flex justify-center mb-5">
            <div
              className="inline-flex flex-col items-center px-6 py-3 rounded-xl"
              style={{
                border: "2px solid rgba(255,215,150,0.6)",
                boxShadow: "0 0 18px rgba(255,215,150,0.25)",
                backgroundColor: "rgba(0,0,0,0.15)",
              }}
            >
              <div className="flex items-center gap-2">
                <span style={{ color: TERRACOTTA, fontSize: 22 }}>🛡️</span>
                <span className="text-white font-bold text-lg">Hotmart</span>
              </div>
              <span className="text-white/90 text-[11px] uppercase tracking-[0.2em] mt-1">
                Pago 100% Seguro
              </span>
            </div>
          </div>

          <p className="text-white" style={{ fontSize: 16, lineHeight: 1.7 }}>
            🔒 <strong>PAGO 100% SEGURO</strong>
            <br />
            Pago procesado por <strong>Hotmart</strong>, la plataforma de
            productos digitales más grande de América Latina. Tus datos están
            protegidos con encriptación SSL. Nunca almacenamos información de tu
            tarjeta.
            <br />
            <br />
            💳 Tarjeta de crédito · Débito · Mercado Pago
            <br />
            📦 Acceso inmediato en menos de 2 minutos
          </p>
        </div>

        <CTAButton label="QUIERO MI RECETARIO + LOS 3 BONOS POR $15 USD →" />
        <CTAMicrocopy />

        {/* Guarantee card */}
        <div
          className="mx-auto mt-10 rounded-xl text-left"
          style={{
            backgroundColor: "rgba(255,255,255,0.06)",
            border: "2px solid rgba(255,255,255,0.25)",
            padding: 28,
            maxWidth: 560,
          }}
        >
          <div className="flex justify-center mb-5">
            <div className="flex flex-col items-center">
              <span className="text-white/90 text-[11px] uppercase tracking-[0.2em] mb-2">
                Hotmart Garantiza
              </span>
              <div
                className="w-28 h-28 rounded-full flex flex-col items-center justify-center"
                style={{
                  border: `4px solid ${TERRACOTTA}`,
                  backgroundColor: "rgba(0,0,0,0.15)",
                }}
              >
                <span className="text-2xl">✅</span>
                <span className="text-white text-xs font-bold uppercase tracking-wider mt-1">
                  Garantía
                </span>
                <span
                  className="font-extrabold text-lg leading-none"
                  style={{ color: TERRACOTTA }}
                >
                  7 Días
                </span>
              </div>
            </div>
          </div>

          <h3
            className="text-white font-bold text-center mb-3"
            style={{ fontSize: 18 }}
          >
            ↩️ GARANTÍA INCONDICIONAL — 7 DÍAS
          </h3>
          <p className="text-white" style={{ fontSize: 16, lineHeight: 1.7 }}>
            Si en los próximos 7 días no es lo que esperabas, solicita la
            devolución en <strong>Hotmart</strong> y te devolvemos el 100% de tu
            dinero.
            <br />
            Sin formularios. Sin preguntas. Sin demoras.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs: { q: string; a: React.ReactNode }[] = [
    {
      q: "¿En qué formato recibo el Recetario?",
      a: "Lo recibes en formato PDF, listo para leer en tu celular, tablet o computador. También puedes imprimirlo si lo prefieres.",
    },
    {
      q: "¿Cuándo lo recibo después de pagar?",
      a: "La descarga es inmediata. En menos de 2 minutos recibirás el acceso a tu correo electrónico junto con los 3 bonos.",
    },
    {
      q: "¿Sirve si vivo fuera de LATAM?",
      a: "Sí. Aunque las recetas están pensadas con ingredientes accesibles en LATAM, todos son fáciles de conseguir en cualquier país.",
    },
    {
      q: "¿Necesito experiencia cocinando?",
      a: "No. Las recetas están explicadas paso a paso, en un lenguaje sencillo. Si sabes hervir agua, puedes prepararlas.",
    },
    {
      q: "¿Qué pasa si no cumple mis expectativas?",
      a: (
        <>
          Tienes 7 días para revisarlo. Si por cualquier razón no estás
          satisfecho, solicita la devolución en <strong>Hotmart</strong> y te
          devolvemos el 100% en menos de 48 horas. Sin formularios. Sin
          explicaciones. Sin discusiones.
        </>
      ),
    },
    {
      q: "¿Es seguro pagar aquí?",
      a: (
        <>
          Sí. El pago lo procesa <strong>Hotmart</strong>, líder en productos
          digitales en América Latina con más de 35 millones de compradores. Tu
          información tiene encriptación de nivel bancario.
        </>
      ),
    },
  ];
  return (
    <section className="px-5 py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto">
        <SectionLabel>Preguntas frecuentes</SectionLabel>
        <Heading>Resolvamos tus dudas</Heading>
        <Accordion type="single" collapsible className="mt-8">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="rounded-xl mb-3 px-5"
              style={{ backgroundColor: CREAM, border: "none" }}
            >
              <AccordionTrigger
                className="text-left font-bold hover:no-underline"
                style={{ color: GREEN, fontSize: 16 }}
              >
                {f.q}
              </AccordionTrigger>
              <AccordionContent
                style={{ color: INK, fontSize: 16 }}
                className="leading-relaxed"
              >
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="px-5 py-10" style={{ backgroundColor: GREEN }}>
      <div className="max-w-5xl mx-auto text-center text-white/80 text-sm">
        <p className="font-display text-2xl text-white mb-2">Recetario Vital</p>
        <p className="mb-2">
          © {new Date().getFullYear()} Recetario Vital. Todos los derechos
          reservados.
        </p>
        <p className="text-xs text-white/60 max-w-2xl mx-auto">
          Este sitio no forma parte del sitio web de Facebook o Facebook Inc.
          Adicionalmente, este sitio no es respaldado por Facebook de ninguna
          manera. FACEBOOK es una marca registrada de FACEBOOK, Inc.
        </p>
      </div>
    </footer>
  );
}

/* ---------------- SOCIAL PROOF NOTIFICATIONS (native) ---------------- */
function SocialProofToast() {
  const messages = [
    "Lorena de Ciudad de México acaba de obtener su Recetario Vital",
    "Carlos de Buenos Aires acaba de obtener su Recetario Vital",
    "María de Bogotá acaba de obtener su Recetario Vital",
    "Pedro de Guadalajara acaba de obtener su Recetario Vital",
  ];
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let hideTimer: ReturnType<typeof setTimeout> | undefined;
    let nextTimer: ReturnType<typeof setTimeout> | undefined;

    const cycle = () => {
      if (cancelled) return;
      setVisible(true);
      hideTimer = setTimeout(() => {
        if (cancelled) return;
        setVisible(false);
        nextTimer = setTimeout(() => {
          if (cancelled) return;
          setIndex((i) => (i + 1) % messages.length);
          cycle();
        }, 30000 + Math.random() * 15000); // 30-45s
      }, 4000);
    };

    const initial = setTimeout(cycle, 8000);
    return () => {
      cancelled = true;
      clearTimeout(initial);
      if (hideTimer) clearTimeout(hideTimer);
      if (nextTimer) clearTimeout(nextTimer);
    };
  }, [messages.length]);

  return (
    <div
      aria-live="polite"
      style={{
        position: "fixed",
        bottom: 16,
        left: 16,
        zIndex: 50,
        maxWidth: 320,
        background: "#ffffff",
        borderRadius: 12,
        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        border: "1px solid rgba(0,0,0,0.06)",
        padding: "12px 14px",
        display: "flex",
        alignItems: "center",
        gap: 10,
        fontSize: 14,
        color: INK,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 300ms ease, transform 300ms ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div
        style={{
          flexShrink: 0,
          width: 36,
          height: 36,
          borderRadius: 8,
          background: CREAM,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
        }}
      >
        📖
      </div>
      <div style={{ lineHeight: 1.35 }}>
        <div style={{ fontWeight: 600, color: GREEN, fontSize: 13 }}>
          ¡Nueva compra!
        </div>
        <div>{messages[index]}</div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <main>
      <Hero />
      <Pain />
      <ScientificEvidence />
      <Benefits />
      <Testimonials />
      <Bonuses />
      <Pricing />
      <FAQ />
      <Footer />
      <SocialProofToast />
    </main>
  );
}