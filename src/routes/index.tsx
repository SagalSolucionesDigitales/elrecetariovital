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
            Raíz Saludable presenta
          </p>
          <h1
            className="font-display text-4xl md:text-6xl font-bold leading-[1.05] mb-5"
            style={{ color: GREEN }}
          >
            Recupera tu energía con cada comida
          </h1>
          <p className="text-lg md:text-xl mb-6" style={{ color: INK }}>
            200+ recetas saludables, prácticas y sabrosas para cuidar tu cuerpo
            y reconectar con tu vitalidad — sin dietas extremas ni ingredientes
            imposibles.
          </p>
          <ul className="space-y-3 mb-6 inline-block text-left">
            {[
              "Recetas pensadas para LATAM, con ingredientes accesibles",
              "Desayunos, almuerzos, cenas, snacks y postres saludables",
              "Apto para toda la familia, fácil de preparar",
              "Descarga inmediata en PDF, lee en cualquier dispositivo",
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
            Más de <strong>3.500 personas</strong> ya transformaron sus comidas
            con Recetario Vital.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PAIN ---------------- */
function Pain() {
  const items = [
    "Sientes que comes “bien” pero igual estás cansada/o todo el día",
    "Pruebas dietas que no puedes sostener más de 2 semanas",
    "Cocinar saludable se siente caro, complicado o aburrido",
    "Te abruma no saber qué preparar cada día",
    "Tu energía, tu digestión o tu peso te están pidiendo un cambio",
  ];
  return (
    <section className="px-5 py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto">
        <SectionLabel>Si te identificas con esto…</SectionLabel>
        <Heading>El problema no eres tú. Es lo que te enseñaron a comer.</Heading>
        <ul className="space-y-4 mt-8">
          {items.map((it) => (
            <li
              key={it}
              className="flex gap-4 items-start p-4 rounded-xl"
              style={{ backgroundColor: CREAM, color: INK }}
            >
              <span style={{ color: TERRACOTTA }} className="text-xl">
                ✗
              </span>
              <span className="text-base md:text-lg">{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- SOLUTION ---------------- */
function Solution() {
  return (
    <section className="px-5 py-16 md:py-24" style={{ backgroundColor: GREEN }}>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] mb-4 text-white/80">
          La solución
        </p>
        <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
          Imagina abrir tu cocina y saber exactamente qué cocinar
        </h2>
        <p className="text-lg md:text-xl text-white/90 leading-relaxed">
          Recetario Vital es el compañero de cocina que te lleva de la mano:
          200+ recetas probadas, organizadas por momento del día y por
          objetivo, hechas con ingredientes reales que puedes conseguir en
          cualquier mercado de tu país. Sin contar calorías. Sin renunciar al
          sabor. Sin sentirte a dieta.
        </p>
      </div>
    </section>
  );
}

/* ---------------- BENEFITS ---------------- */
function Benefits() {
  const benefits = [
    {
      t: "200+ recetas para cada momento del día",
      d: "Desayunos, snacks, almuerzos, cenas y postres organizados para que nunca te quedes sin ideas.",
    },
    {
      t: "Ingredientes accesibles en LATAM",
      d: "Olvídate de listas con productos imposibles. Todo lo encuentras en tu mercado o supermercado.",
    },
    {
      t: "Listas en menos de 30 minutos",
      d: "Recetas pensadas para una vida real, con tiempos cortos y pasos simples.",
    },
    {
      t: "Equilibradas y nutritivas",
      d: "Cada plato combina proteína, fibra y grasas saludables para mantener tu energía estable.",
    },
    {
      t: "Sabor que enamora",
      d: "Saludable no significa aburrido. Comer bien también es un placer.",
    },
    {
      t: "PDF interactivo en español",
      d: "Léelo en tu celular, tablet o computador. Imprímelo si quieres. Es tuyo para siempre.",
    },
  ];
  return (
    <section className="px-5 py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Qué incluye</SectionLabel>
        <Heading>Todo lo que vas a tener en tus manos</Heading>
        <div className="grid md:grid-cols-2 gap-10 mt-10 items-center">
          <div className="flex justify-center">
            <img
              src={benefitsMockup}
              alt="Recetario Vital mostrado en un teléfono móvil"
              className="w-full max-w-[360px] rounded-2xl"
              loading="lazy"
            />
          </div>
          <ul className="space-y-5">
            {benefits.map((b) => (
              <li key={b.t} className="flex gap-4 items-start">
                <span
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-white"
                  style={{ backgroundColor: GREEN }}
                >
                  ✓
                </span>
                <div>
                  <h3 className="font-bold text-lg" style={{ color: GREEN }}>
                    {b.t}
                  </h3>
                  <p style={{ color: INK }}>{b.d}</p>
                </div>
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
      tag: "BONO #1",
      title: "Guía de Meal Prep en 1 hora",
      body: "Aprende a planear y dejar listas las comidas de toda la semana en una sola sesión de cocina. (Valor: $19 USD)",
    },
    {
      tag: "BONO #2",
      title: "Lista de compras inteligente",
      body: "Descarga una lista organizada por categorías para que comprar saludable te tome la mitad del tiempo. (Valor: $14 USD)",
    },
    {
      tag: "BONO #3",
      title: "Recetario Detox de 7 días",
      body: "Un mini plan de 7 días para resetear tu cuerpo después de excesos, con recetas suaves y nutritivas. (Valor: $24 USD)",
    },
    {
      tag: "BONO #4",
      title: "Guía de sustituciones saludables",
      body: "Aprende a reemplazar harinas refinadas, azúcar y lácteos sin perder sabor. (Valor: $24 USD)",
    },
  ];
  return (
    <section className="px-5 py-16 md:py-24" style={{ backgroundColor: CREAM }}>
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Bonos exclusivos</SectionLabel>
        <Heading>4 bonos gratis al comprar hoy</Heading>
        <p className="text-center text-lg mb-10" style={{ color: INK }}>
          Por solo <strong>$15 USD</strong> hoy te llevas el Recetario Vital{" "}
          <strong>+ estos 4 bonos</strong>:
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
                {b.title}
              </h3>
              <p style={{ color: INK }}>{b.body}</p>
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

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const items = [
    {
      name: "Carolina M.",
      country: "Colombia",
      text: "Llevaba años intentando comer mejor sin lograrlo. Con Recetario Vital por fin tengo claridad — sé qué cocinar, ahorro tiempo y mi familia come delicioso.",
    },
    {
      name: "Lucía P.",
      country: "Argentina",
      text: "En 3 semanas bajé 4 kilos sin pasar hambre. Las recetas son fáciles y los ingredientes los compro en el mercado de mi barrio.",
    },
    {
      name: "Daniela R.",
      country: "México",
      text: "Lo mejor son los bonos. La guía de meal prep me cambió la vida, ya no improviso a las 7 pm pidiendo comida a domicilio.",
    },
  ];
  return (
    <section className="px-5 py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Lo que dicen quienes ya lo tienen</SectionLabel>
        <Heading>Más de 3.500 personas ya están cocinando con Recetario Vital</Heading>
        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {items.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl p-6"
              style={{ backgroundColor: CREAM }}
            >
              <div className="text-yellow-500 mb-3">★★★★★</div>
              <p className="mb-4 italic" style={{ color: INK }}>
                “{t.text}”
              </p>
              <p className="font-bold" style={{ color: GREEN }}>
                {t.name}
              </p>
              <p className="text-sm text-neutral-500">{t.country}</p>
            </div>
          ))}
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
