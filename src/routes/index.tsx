import { createFileRoute } from "@tanstack/react-router";
import heroCover from "@/assets/hero-ebook-cover.webp";
import benefitsMockup from "@/assets/benefits-mockup.webp";
import { CTAButton, CTAMicrocopy } from "@/components/CTAButton";
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

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section style={{ backgroundColor: CREAM }} className="px-5 pt-10 pb-14 md:py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Image first on mobile */}
        <div className="order-1 md:order-2 flex justify-center">
          <img
            src={heroCover}
            alt="Recetario Vital — portada del ebook con ingredientes saludables"
            className="w-full max-w-[380px] md:max-w-[460px] rounded-2xl shadow-2xl"
            loading="eager"
          />
        </div>
        <div className="order-2 md:order-1 text-center md:text-left">
          <p
            className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] mb-4"
            style={{ color: TERRACOTTA }}
          >
            🌿 Para quien ya sabe que necesita cambiar lo que come
          </p>
          <h1
            className="font-display text-4xl md:text-6xl font-bold leading-[1.05] mb-5"
            style={{ color: GREEN }}
          >
            ¿Quieres comer sano, sentirte mejor y proteger tu salud — pero
            nadie te dio un plan que funcione con tu vida real?
          </h1>
          <p className="text-lg md:text-xl mb-6" style={{ color: INK }}>
            El Recetario Vital es el plan que te faltaba: más de 200 recetas
            saludables con ingredientes de cualquier mercado, listas en 30
            minutos, para ti y para toda tu familia. Sin dietas imposibles. Sin
            gastar más. Resultados que sientes desde la primera semana.
          </p>
          <ul className="space-y-3 mb-6 inline-block text-left">
            {[
              "Funciona si tienes el azúcar alta o un diagnóstico reciente",
              "Funciona si cocinas para toda tu familia",
              "Funciona si no tienes tiempo ni energía de sobra",
              "Funciona si ya intentaste antes y no duró",
            ].map((b) => (
              <li key={b} className="flex gap-3 items-start" style={{ color: INK }}>
                <span style={{ color: GREEN }} className="font-bold mt-0.5">
                  ✓
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-neutral-600">
            Descarga inmediata • PDF en español • Solo <strong>$15 USD</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PAIN ---------------- */
function Pain() {
  const cards = [
    {
      emoji: "🩺",
      title: "Te dieron una señal de alerta médica",
      body: "El médico te habló de azúcar, colesterol, presión o un diagnóstico nuevo y no te explicó qué comer para mejorar.",
    },
    {
      emoji: "👨‍👩‍👧",
      title: "Quieres que tu familia coma mejor",
      body: "Sabes que puedes darles algo más sano pero entre el tiempo, el presupuesto y los gustos de todos, siempre termina siendo difícil.",
    },
    {
      emoji: "😓",
      title: "Te falta energía para llegar al final del día",
      body: "A media tarde ya estás agotado, con la mente lenta y el cuerpo pidiendo azúcar o cafeína para seguir.",
    },
    {
      emoji: "🔍",
      title: "Buscas en internet y todo se contradice",
      body: "Un artículo dice que sí, otro dice que no. Ya no sabes a quién creerle ni por dónde empezar de verdad.",
    },
    {
      emoji: "💸",
      title: "Crees que comer sano es caro y complicado",
      body: "Cada vez que intentaste, te pareció que requería más plata, más tiempo o más conocimientos de los que tienes.",
    },
    {
      emoji: "🔄",
      title: "Ya lo intentaste antes y volviste a lo mismo",
      body: "Empezaste con buena intención, duró dos semanas y regresaste a los mismos hábitos porque no era sostenible.",
    },
  ];
  return (
    <section className="px-5 py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Si te identificas con esto…</SectionLabel>
        <Heading>¿Alguna de estas situaciones te suena familiar?</Heading>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl p-6"
              style={{ backgroundColor: CREAM }}
            >
              <div className="text-3xl mb-3">{c.emoji}</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: GREEN }}>
                {c.title}
              </h3>
              <p style={{ color: INK }} className="leading-relaxed">
                {c.body}
              </p>
            </div>
          ))}
        </div>
        <p
          className="text-center text-lg md:text-xl mt-10 font-semibold"
          style={{ color: GREEN }}
        >
          Si te identificaste con al menos una… el Recetario Vital fue creado
          para ti.
        </p>
      </div>
    </section>
  );
}

/* ---------------- SOLUTION ---------------- */
function Solution() {
  const cards = [
    {
      emoji: "🌿",
      title: "Comida real y accesible",
      body: "Ingredientes que encuentras en cualquier mercado de barrio, sin gastar más de lo que ya gastas hoy.",
    },
    {
      emoji: "⚡",
      title: "Listo en 30 minutos",
      body: "Recetas diseñadas para personas ocupadas, con familias que atender y sin tiempo para complicaciones en la cocina.",
    },
    {
      emoji: "🎯",
      title: "Resultados desde la primera semana",
      body: "Más energía, mejor digestión, menos inflamación y marcadores de salud que empiezan a mejorar. Tu cuerpo lo siente.",
    },
  ];
  return (
    <section className="px-5 py-16 md:py-24" style={{ backgroundColor: GREEN }}>
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] mb-4 text-white/80">
          La solución
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
          El problema nunca fue la fuerza de voluntad. Fue no tener el plan
          correcto para tu vida real.
        </h2>
        <div className="grid md:grid-cols-3 gap-5 mt-10 text-left">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl p-6"
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <div className="text-4xl mb-3">{c.emoji}</div>
              <h3 className="font-bold text-xl mb-2 text-white">{c.title}</h3>
              <p className="text-white/90 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- BENEFITS ---------------- */
function Benefits() {
  const benefits = [
    "200+ recetas saludables clasificadas por objetivo: azúcar, peso, energía y digestión",
    "Sección especial para condiciones crónicas: qué comer y qué evitar según tu situación",
    "Recetas familiares que toda la mesa come, sin versiones separadas",
    "Plan de alimentación semanal incluido, adaptable a cualquier agenda",
    "Guía de sustituciones para no renunciar a los sabores que amas",
    "Ingredientes de mercado popular, sin costos adicionales",
    "PDF descargable, acceso inmediato, disponible en cualquier dispositivo",
  ];
  return (
    <section className="px-5 py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Qué incluye</SectionLabel>
        <Heading>Lo que encuentras dentro</Heading>
        <p
          className="text-center text-lg md:text-xl mx-auto -mt-2 mb-2"
          style={{ color: INK, maxWidth: 720 }}
        >
          <strong>Recetario Vital:</strong> Tu plan de alimentación para una
          vida más sana, desde hoy.
        </p>
        <div className="grid md:grid-cols-2 gap-10 mt-10 items-center">
          <div className="flex justify-center">
            <img
              src={benefitsMockup}
              alt="Recetario Vital mostrado en un teléfono móvil"
              className="w-full max-w-[360px] rounded-2xl"
              loading="lazy"
            />
          </div>
          <ul className="space-y-4">
            {benefits.map((b) => (
              <li key={b} className="flex gap-3 items-start">
                <span
                  className="flex-shrink-0 w-7 h-7 mt-0.5 rounded-full flex items-center justify-center font-bold text-white text-sm"
                  style={{ backgroundColor: GREEN }}
                >
                  ✓
                </span>
                <p style={{ color: INK }} className="leading-relaxed">
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

/* ---------------- BLOCK 5B: SCIENTIFIC EVIDENCE ---------------- */
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
        <p
          className="text-center text-base md:text-lg mx-auto"
          style={{ color: INK, maxWidth: 680 }}
        >
          No son recetas inventadas. Cada ingrediente fue elegido con un
          criterio claro: que la investigación nutricional lo respalde.
        </p>

        <div className="grid md:grid-cols-2 gap-5 mt-10">
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
              <p style={{ color: INK }} className="leading-relaxed">
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
            maxWidth: 680,
          }}
        >
          <p
            className="italic text-center"
            style={{ color: INK }}
          >
            Una aclaración importante: El Recetario Vital es un recurso de
            alimentación complementario. No reemplaza tu tratamiento médico ni
            las indicaciones de tu médico o nutricionista. Lo que sí hace es
            darte una herramienta práctica para que cada comida sea una
            decisión a tu favor, no una fuente de ansiedad.
          </p>
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
      body: "Sabé en segundos qué alimentos te ayudan y cuáles te frenan, sea cual sea tu objetivo: azúcar, peso, energía o inflamación. Pégalo en tu nevera y úsalo todos los días.",
      value: "$19 USD",
    },
    {
      tag: "🎁 BONO 2",
      emoji: "🛒",
      title: "Mercado Inteligente",
      body: "Tu lista de compras mensual lista para llevar al mercado desde el celular. Con sustitutos inteligentes para que siempre tengas opciones saludables sin salirte del presupuesto.",
      value: "$14 USD",
    },
    {
      tag: "🎁 BONO 3",
      emoji: "📅",
      title: "Plan de Rescate de 7 Días",
      body: "Tu primera semana completamente planificada para que tu cuerpo empiece a sentir el cambio desde el día uno. Sin adivinar, solo seguir.",
      value: "$24 USD",
    },
    {
      tag: "🎁 BONO 4",
      emoji: "🍫",
      title: "SOS Antojos",
      body: "10 recetas express para los momentos de crisis, antojo o visita inesperada. Listas en 10 minutos y que no arruinan tu progreso.",
      value: "$24 USD",
    },
  ];
  return (
    <section className="px-5 py-16 md:py-24" style={{ backgroundColor: CREAM }}>
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Bonos exclusivos — solo por hoy</SectionLabel>
        <Heading>Tu compra incluye 4 bonos exclusivos — gratis</Heading>
        <p className="text-center text-lg mb-10" style={{ color: INK }}>
          Valorados en <strong>$81 USD</strong>. Tuyos sin costo adicional.
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {bonuses.map((b) => (
            <div
              key={b.title}
              className="bg-white rounded-2xl p-6 shadow-sm"
              style={{ border: `1px solid ${GREEN}20` }}
            >
              <span
                className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3"
                style={{ backgroundColor: TERRACOTTA, color: "#fff" }}
              >
                {b.tag}
              </span>
              <h3 className="font-display font-bold text-xl mb-2" style={{ color: GREEN }}>
                <span className="mr-2">{b.emoji}</span>
                {b.title}
              </h3>
              <p style={{ color: INK }} className="mb-3">
                {b.body}
              </p>
              <p className="text-sm font-semibold" style={{ color: GREEN }}>
                Valor:{" "}
                <span className="line-through text-neutral-500 font-normal">
                  {b.value}
                </span>{" "}
                <span style={{ color: TERRACOTTA }}>HOY: GRATIS</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <CTAButton />
          <CTAMicrocopy />
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRICING ---------------- */
function Pricing() {
  const valueRows = [
    { item: "Recetario Vital — 200+ recetas", value: "$35 USD" },
    { item: "Bono #1 — Guía de Meal Prep", value: "$19 USD" },
    { item: "Bono #2 — Lista de compras inteligente", value: "$14 USD" },
    { item: "Bono #3 — Recetario Detox 7 días", value: "$24 USD" },
    { item: "Bono #4 — Guía de sustituciones", value: "$24 USD" },
  ];
  return (
    <section className="px-5 py-16 md:py-24" style={{ backgroundColor: GREEN }}>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] mb-4 text-white/80">
          Tu inversión hoy
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-8 text-white">
          Todo esto, por menos de lo que cuesta una cena fuera
        </h2>

        {/* Value table */}
        <div
          className="rounded-2xl p-6 md:p-8 mb-10 text-left mx-auto"
          style={{
            backgroundColor: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.2)",
            maxWidth: 520,
          }}
        >
          {valueRows.map((r) => (
            <div
              key={r.item}
              className="flex justify-between gap-4 py-3 border-b border-white/10 last:border-0"
            >
              <span className="text-white/90">{r.item}</span>
              <span className="text-white font-semibold">{r.value}</span>
            </div>
          ))}
          <div className="flex justify-between gap-4 pt-4 mt-2 border-t-2 border-white/30">
            <span className="text-white font-bold">Valor total</span>
            <span className="text-white font-bold">$116 USD</span>
          </div>
        </div>

        {/* Crossed-out price */}
        <p
          className="text-gray-300 mb-2"
          style={{ fontSize: 18, textDecoration: "line-through" }}
        >
          $116 USD
        </p>
        <p className="text-white/80 mb-2 text-sm uppercase tracking-widest">
          Hoy solo
        </p>
        <p
          className="text-white font-extrabold leading-none mb-6"
          style={{ fontSize: "clamp(40px, 9vw, 56px)", fontWeight: 800 }}
        >
          $15 USD
        </p>

        {/* Inline urgency band */}
        <div
          className="mx-auto mb-6 text-white text-sm font-bold text-center"
          style={{
            backgroundColor: TERRACOTTA,
            borderRadius: 8,
            padding: "10px 20px",
            maxWidth: 520,
          }}
        >
          ⚠️ ATENCIÓN: Este precio puede subir en cualquier momento. Asegura tu
          acceso ahora por solo $15 USD
        </div>

        {/* Currency equivalencies card */}
        <div
          className="mx-auto mb-6 rounded-xl"
          style={{
            backgroundColor: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.2)",
            padding: 24,
            maxWidth: 480,
          }}
        >
          <p className="text-white font-bold uppercase text-sm tracking-widest text-center mb-3">
            También puedes verlo así:
          </p>
          <div className="text-white text-center" style={{ fontSize: 16, lineHeight: 2 }}>
            <div>🇨🇴 $57.069 COP si estás en Colombia</div>
            <div>🇦🇷 $23.940 ARS si estás en Argentina</div>
            <div>🇲🇽 $317 MXN si estás en México</div>
          </div>
          <p
            className="italic text-center mt-3"
            style={{ color: CREAM, fontSize: 13 }}
          >
            ⚠️ Los valores en moneda local se actualizan automáticamente según
            el tipo de cambio vigente.
          </p>
        </div>

        {/* Secure payment card */}
        <div
          className="mx-auto mb-8 rounded-xl text-left"
          style={{
            backgroundColor: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.2)",
            padding: 24,
            maxWidth: 520,
          }}
        >
          {/* Hotmart trust badge */}
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

          <p
            className="text-white"
            style={{ fontSize: 15, lineHeight: 1.8 }}
          >
            🔒 Pago 100% seguro procesado por{" "}
            <strong className="text-white font-bold">Hotmart</strong>, la
            plataforma de productos digitales más grande de América Latina. Tus
            datos de pago están protegidos con encriptación SSL. Nosotros nunca
            vemos ni almacenamos los datos de tu tarjeta.
            <br />
            <br />
            💳 Medios de pago disponibles: Tarjeta de crédito · Tarjeta de
            débito · Mercado Pago · Entre otros más según tu país.
            <br />
            <br />
            📦 Descarga inmediata: Recibes acceso a tu Recetario Vital y los 4
            bonos en menos de 2 minutos, directo en tu correo electrónico. Solo
            debes seguir las instrucciones que te daremos en el mensaje que te
            enviaremos.
          </p>
        </div>

        <CTAButton />
        <CTAMicrocopy />

        {/* Guarantee card */}
        <div
          className="mx-auto mt-10 rounded-xl text-left"
          style={{
            backgroundColor: "rgba(255,255,255,0.06)",
            border: "2px solid rgba(255,255,255,0.25)",
            padding: 28,
            maxWidth: 520,
          }}
        >
          {/* Guarantee seal */}
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
            Garantía Total e Incondicional — 7 días
          </h3>
          <p className="text-white" style={{ fontSize: 15, lineHeight: 1.8 }}>
            Si en los próximos 7 días sientes que este recetario no es lo que
            necesitabas, solicita la devolución directamente a través de{" "}
            <strong className="text-white font-bold">Hotmart</strong> y te
            devolvemos el 100% de tu dinero.
            <br />
            Sin formularios complicados.
            <br />
            Sin preguntas incómodas.
            <br />
            Sin demoras.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- URGENCY (no CTA) ---------------- */
function FinalUrgency() {
  return (
    <section className="px-5 py-16 md:py-24" style={{ backgroundColor: CREAM }}>
      <div className="max-w-3xl mx-auto text-center">
        <SectionLabel>Última llamada</SectionLabel>
        <Heading>Hoy puedes elegir comer distinto</Heading>
        <p className="text-lg md:text-xl" style={{ color: INK }}>
          Cada día que postergas es un día más sintiéndote igual. Por solo{" "}
          <strong>$15 USD</strong> tienes en tus manos un recurso que puede
          acompañarte por años. Decide hoy darte ese regalo.
        </p>
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
      a: "La descarga es inmediata. En menos de 2 minutos recibirás el acceso a tu correo electrónico junto con los 4 bonos.",
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
          Tienes 7 días completos para revisarlo con calma. Si por cualquier
          razón —o sin ninguna razón— sientes que el Recetario Vital no era lo
          que buscabas, solicita la devolución directamente en{" "}
          <strong>Hotmart</strong> y te devolvemos el 100% de tu dinero en menos
          de 48 horas.
          <br />
          Sin formularios largos.
          <br />
          Sin que tengas que explicar nada.
          <br />
          Sin discusiones.
          <br />
          Creemos tanto en este recetario que preferimos devolverte el dinero a
          que te quedes con algo que no te sirva.
        </>
      ),
    },
    {
      q: "¿Es seguro pagar aquí?",
      a: (
        <>
          Sí. El pago lo procesa <strong>Hotmart</strong>, la plataforma de
          productos digitales líder en América Latina con más de 35 millones de
          compradores. Tu información está protegida con encriptación de nivel
          bancario. Nosotros nunca vemos ni almacenamos los datos de tu tarjeta.
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
                style={{ color: GREEN }}
              >
                {f.q}
              </AccordionTrigger>
              <AccordionContent style={{ color: INK }} className="text-base leading-relaxed">
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
        <p className="font-display text-2xl text-white mb-2">Raíz Saludable</p>
        <p className="mb-2">© {new Date().getFullYear()} Raíz Saludable. Todos los derechos reservados.</p>
        <p className="text-xs text-white/60 max-w-2xl mx-auto">
          Este sitio no forma parte del sitio web de Facebook o Facebook Inc.
          Adicionalmente, este sitio no es respaldado por Facebook de ninguna
          manera. FACEBOOK es una marca registrada de FACEBOOK, Inc.
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <main>
      <Hero />
      <Pain />
      <Solution />
      <Benefits />
      <ScientificEvidence />
      <Bonuses />
      <Pricing />
      <Testimonials />
      <FinalUrgency />
      <FAQ />
      <Footer />
    </main>
  );
}
