const heroCover = "/hero-app-920.webp";
const heroCoverSet = "/hero-app-640.webp 640w, /hero-app-920.webp 920w";
import bonoCamila from "@/assets/bono-camila.webp";
import bonoEbook from "@/assets/bono-ebook.webp";
import bonoKeto from "@/assets/bono-keto.webp";
import bonoDetox from "@/assets/bono-detox.webp";
import benefitCheckin from "@/assets/benefit-checkin.webp";
import benefitPerfil from "@/assets/benefit-perfil.webp";
import benefitPlan from "@/assets/benefit-plan.webp";
import benefitPlatoFoto from "@/assets/benefit-plato-foto.webp";
import benefitPlatoResultado from "@/assets/benefit-plato-resultado.webp";
import benefitProgreso from "@/assets/benefit-progreso.webp";
import { CTAButton } from "@/components/CTAButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    <p className="mt-4 text-center text-sm text-white/75">
      Acceso inmediato • App web y móvil • Instálala en menos de 2 minutos • Pago único – Sin suscripción
    </p>
  );
}

function Hero() {
  return (
    <section style={{ backgroundColor: CREAM }} className="px-5 pt-10 pb-14 md:py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="order-1 md:order-2 flex justify-center">
          <img
            src={heroCover}
            srcSet={heroCoverSet}
            sizes="(min-width: 768px) 460px, min(380px, calc(100vw - 40px))"
            alt="Recetario Vital App — mano sosteniendo un móvil que muestra el plan de comidas del día"
            width={920}
            height={1231}
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
            🌿 Recetario Vital App
          </p>
          <h1
            className="font-display text-4xl md:text-6xl font-bold leading-[1.05] mb-5"
            style={{ color: GREEN }}
          >
            Sí, puedes volver a comer pan.
            <span className="block mt-3">Porque el problema NUNCA fue el pan.</span>
          </h1>
          <p className="text-lg md:text-xl mb-5" style={{ color: INK }}>
            El problema es que saliste de la consulta con una lista de lo que NO puedes comer, y nadie te dijo lo que SÍ. Recetario Vital App arma tu semana según tus indicadores, con recetas personalizadas y adaptadas a lo que encuentras en tu súper.
          </p>
          <p
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm md:text-base font-semibold"
            style={{ color: GREEN, border: `1px solid ${GREEN}30` }}
          >
            Si sabes enviar un WhatsApp, puedes usar Recetario Vital App con total facilidad.
          </p>
          <p className="mt-5 text-sm text-neutral-600 text-center md:text-left">
            Pago único de <strong>35,09 € (IVA incluido)</strong> · Sin suscripciones · Acceso inmediato y de por vida desde tu móvil
          </p>
          <CTAButton className="mt-6" href="#beneficios" label="QUIERO VER CÓMO FUNCIONA →" />
        </div>
      </div>
    </section>
  );
}

function Pain() {
  const items = [
    { pain: "Saliste de la consulta con una lista de lo que NO puedes comer, pero nadie te explicó qué poner en el plato", answer: "Recetario Vital App hace lo contrario: te dice lo que SÍ puedes comer en el desayuno, la comida, la cena y el postre, según tus indicadores y tus características." },
    { pain: "Te prohibieron el pan, los postres y las comidas de siempre…", answer: "NO se trata de prohibir, sino de combinar bien. Una tostada con aceite de oliva, unas lentejas o un postre sin azúcar pueden seguir en tu mesa si sabes cómo prepararlos. La app te lo muestra paso a paso." },
    { pain: "Terminas cocinando una cosa para ti y otra para tu familia", answer: "Cada receta está pensada para que todos en casa coman lo mismo, con la lista de la compra hecha y con ingredientes de cualquier súper." },
  ];
  return (
    <section className="px-5 py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Si te identificas con esto…</SectionLabel>
        <Heading>¿Te suena familiar alguna de estas situaciones?</Heading>
        <div className="grid md:grid-cols-3 gap-5 mt-10">
          {items.map((c, i) => (
            <div key={c.pain} className="rounded-2xl p-6" style={{ backgroundColor: CREAM }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: TERRACOTTA }}>{`Situación ${i + 1}`}</p>
              <h3 className="font-bold text-lg mb-3" style={{ color: GREEN }}>❌ {c.pain}</h3>
              <p style={{ color: INK, fontSize: 16 }} className="leading-relaxed border-l-4 pl-4">
                <span style={{ color: GREEN, fontWeight: 700 }}>✓ </span>
                {c.answer}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-lg md:text-xl mt-10 font-semibold" style={{ color: GREEN }}>
          Si te identificaste con al menos una… ¡Recetario Vital App es lo que buscaste por tanto tiempo!
        </p>
      </div>
    </section>
  );
}

function ScientificEvidence() {
  const cards = [
    { emoji: "🫒", title: "Aceite de oliva virgen extra", body: "La grasa protagonista de la dieta mediterránea y del estudio PREDIMED." },
    { emoji: "🫘", title: "Legumbres", body: "Lentejas, garbanzos y alubias: sacian, alimentan y tienen uno de los índices glucémicos más bajos." },
    { emoji: "🐟", title: "Pescado azul", body: "Sardinas, boquerones y caballa, ricos en omega-3, económicos y fáciles de encontrar." },
  ];
  return (
    <section className="px-5 py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Evidencia científica</SectionLabel>
        <Heading>No es una receta cualquiera. Es una forma de comer estudiada en España.</Heading>
        <div className="mx-auto mt-6 mb-10 rounded-xl p-6" style={{ backgroundColor: CREAM, borderLeft: `6px solid ${TERRACOTTA}`, maxWidth: 760 }}>
          <p style={{ color: INK, fontSize: 16, lineHeight: 1.7 }}>
            En España, el 13,8 % de los adultos tiene diabetes tipo 2, y casi la mitad no lo sabe (estudio di@bet.es). Pero lo que comes cada día es uno de los factores que más puedes cambiar.
          </p>
          <p className="mt-4" style={{ color: INK, fontSize: 16, lineHeight: 1.7 }}>
            El estudio PREDIMED, realizado en España con más de 7.000 personas, encontró que una dieta mediterránea con aceite de oliva virgen extra o frutos secos se asociaba con menos casos de diabetes tipo 2 y de problemas cardiovasculares. Recetario Vital App se basa en esa forma de comer: la de siempre, la de aquí.
          </p>
          <p className="mt-4 pt-4 text-neutral-500" style={{ fontSize: 13, lineHeight: 1.6, borderTop: `1px solid ${GREEN}20` }}>
            Fuentes: estudio di@bet.es (Diabetologia, 2012); estudio PREDIMED (New England Journal of Medicine, 2018; Annals of Internal Medicine, 2014).
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 mt-6">
          {cards.map((c) => (
            <div key={c.title} className="rounded-xl p-6" style={{ backgroundColor: CREAM, borderLeft: `4px solid ${GREEN}` }}>
              <h3 className="font-bold text-lg mb-2" style={{ color: GREEN }}><span className="mr-2">{c.emoji}</span>{c.title}</h3>
              <p style={{ color: INK, fontSize: 16 }} className="leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 mx-auto rounded-lg" style={{ backgroundColor: CREAM, border: `1px solid ${GREEN}`, padding: 20, maxWidth: 720 }}>
          <p className="italic text-center" style={{ color: INK, fontSize: 16 }}>
            Recetario Vital App es un recurso de alimentación complementario. No reemplaza tu tratamiento médico ni las indicaciones de tu médico o nutricionista.
          </p>
        </div>
      </div>
    </section>
  );
}

function PhoneFrame({ src, alt, maxWidth, width = 794, height = 1600 }: { src: string; alt: string; maxWidth: number; width?: number; height?: number }) {
  return (
    <div className="overflow-hidden" style={{ width: "100%", maxWidth, border: "7px solid #1F1F1F", borderRadius: 34, boxShadow: "0 18px 40px rgba(0,0,0,0.18)", backgroundColor: "#1F1F1F" }}>
      <img src={src} alt={alt} width={width} height={height} className="block w-full h-auto" style={{ borderRadius: 26 }} loading="lazy" decoding="async" />
    </div>
  );
}

function Benefits() {
  const items = [
    { img: benefitPlan, alt: "Pantalla del plan semanal de Recetario Vital App con desayuno, almuerzo, cena, postre y lista de compras", title: "Plan de alimentación semanal personalizado", body: "Armado de acuerdo con tu perfil de salud, tu presupuesto, tu tiempo disponible para cocinar y la cantidad de personas en casa, con la lista de la compra para organizar tu semana." },
    { img: benefitPerfil, alt: "Pantalla de perfil de salud de Recetario Vital App con país, condición, nivel de glucosa y restricciones", title: "Perfil de salud a tu medida", body: "Según tu país, tu condición de salud (eliges la que corresponde a tu cuerpo: prediabetes o diabetes, cardiovascular, síndrome metabólico o control de peso), tus indicadores médicos y los alimentos que evitas." },
    { img: benefitCheckin, alt: "Pantalla de inicio de Recetario Vital App con el aviso para registrar cómo te sientes hoy", title: "Check-in diario", body: "Haz seguimiento a tu condición de salud en menos de un minuto al día. Registras cómo estás y tus indicadores, y la app va ajustando tu plan contigo." },
    { img: benefitProgreso, alt: "Pantalla Mi progreso de Recetario Vital App con el check-in del día y el botón para descargar el informe en PDF", title: "Tabla de progreso e informe para tu médico", body: "Mira tu evolución semana a semana y descarga un informe detallado para llevarlo a tu próxima consulta." },
    { shots: [
      { img: benefitPlatoFoto, w: 794, h: 1580, alt: "Pantalla Analiza tu plato de Recetario Vital App con la foto de un plato de pollo con arroz y patatas lista para analizar", caption: "1. Fotografías tu plato" },
      { img: benefitPlatoResultado, w: 794, h: 1594, alt: "Resultado del análisis en Recetario Vital App: calorías, carbohidratos, índice glucémico y un consejo para adaptar el plato a tu condición", caption: "2. Recibes tu análisis" },
    ], title: "Análisis de platos por fotografía", body: "Toma una foto a tu plato y sabe al instante qué tan bien encaja con tu perfil, para que siempre estés seguro con tus alimentos, en casa o fuera." },
  ];
  return (
    <section id="beneficios" className="px-5 py-16 md:py-24" style={{ backgroundColor: CREAM }}>
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Estos son los beneficios que te da la app</SectionLabel>
        <Heading>Con la compra de tu app, accede a los siguientes…</Heading>
        <div className="mt-12 md:mt-16 space-y-14 md:space-y-20">
          {items.map((b, i) => (
            <div key={b.title} className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
              <div className={`flex justify-center ${b.shots ? "gap-3 sm:gap-5 items-start" : ""} ${i % 2 === 1 ? "md:order-2" : ""}`}>
                {b.shots ? (
                  b.shots.map((s) => (
                    <div key={s.caption} className="flex-1 flex flex-col items-center" style={{ maxWidth: 220 }}>
                      <PhoneFrame src={s.img} alt={s.alt} maxWidth={220} width={s.w} height={s.h} />
                      <p className="mt-3 text-center text-xs sm:text-sm font-semibold" style={{ color: GREEN }}>{s.caption}</p>
                    </div>
                  ))
                ) : (
                  <PhoneFrame src={b.img} alt={b.alt} maxWidth={300} />
                )}
              </div>
              <div className={`text-center md:text-left ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: TERRACOTTA }}>{`Beneficio ${i + 1}`}</p>
                <h3 className="font-display font-bold text-2xl md:text-3xl leading-tight mb-4" style={{ color: GREEN }}>{b.title}</h3>
                <p className="text-lg leading-relaxed" style={{ color: INK }}>{b.body}</p>
              </div>
            </div>
          ))}
        </div>
        <CTAButton className="mt-14 md:mt-20" href="#precio" label="QUIERO MI APP POR 35,09 € →" />
      </div>
    </section>
  );
}

function Bonuses() {
  const bonuses = [
    { img: bonoCamila, w: 789, h: 1600, alt: "Chat con Camila, la coach de nutrición de Recetario Vital App", tag: "🎁 BONO 1", title: "Coach Camila", body: "Tu asistente virtual de nutrición personalizado, que te acompaña y te guía 24/7.", value: "25 €" },
    { img: bonoEbook, w: 480, h: 720, alt: "Portada del ebook Recetario Vital con más de 200 recetas", tag: "🎁 BONO 2", title: "Recetario Vital ebook", body: "Más de 200 recetas saludables y prácticas para que compartas con tu familia.", value: "15 €" },
    { img: bonoKeto, w: 480, h: 973, alt: "Guía Keto Fácil de Recetario Vital", tag: "🎁 BONO 3", title: "Keto Fácil", body: "El complemento perfecto para que tu alimentación sea salud y calidad de vida.", value: "17 €" },
    { img: bonoDetox, w: 480, h: 973, alt: "Guía Detox Natural de Recetario Vital con licuados y aguas infusionadas", tag: "🎁 BONO 4", title: "Detox Natural", body: "Tu aliado líquido en el camino hacia tu salud y bienestar.", value: "10 €" },
  ];
  return (
    <section className="px-5 py-16 md:py-24" style={{ backgroundColor: CREAM }}>
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Bonos exclusivos — solo por hoy</SectionLabel>
        <Heading>Con tu Recetario Vital App lleva 4 bonos exclusivos — Sin coste adicional</Heading>
        <p className="text-center mb-10" style={{ color: INK, fontSize: 18 }}>
          Valorados en <strong>67 €</strong>. Tuyos GRATIS hoy.
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {bonuses.map((b) => (
            <div key={b.title} className="rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 shadow-sm bg-white" style={{ border: `1px solid ${GREEN}20` }}>
              <div className="flex-shrink-0 w-full flex justify-center sm:w-auto">
                <PhoneFrame src={b.img} alt={b.alt} maxWidth={170} width={b.w} height={b.h} />
              </div>
              <div className="text-center sm:text-left">
                <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3" style={{ backgroundColor: TERRACOTTA, color: "#fff" }}>{b.tag}</span>
                <h3 className="font-display font-bold text-xl mb-2" style={{ color: GREEN }}>{b.title}</h3>
                <p style={{ color: INK, fontSize: 16 }} className="mb-4">{b.body}</p>
                <p className="text-sm font-semibold" style={{ color: GREEN }}>
                  Valor: <span className="line-through text-neutral-500 font-normal">{b.value}</span> <span style={{ color: TERRACOTTA }}>→ GRATIS HOY</span>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <CTAButton label="QUIERO MI APP + LOS 4 BONOS POR 35,09 € →" />
          <p className="mt-4 text-center text-sm text-neutral-500">Acceso inmediato • App web y móvil • Instálala en menos de 2 minutos • Pago único – Sin suscripción</p>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const valueRows = [
    { item: "Recetario Vital App — acceso de por vida", value: "50 €" },
    { item: "Bono 1 — Coach Camila", value: "25 €" },
    { item: "Bono 2 — Recetario Vital ebook", value: "15 €" },
    { item: "Bono 3 — Keto Fácil", value: "17 €" },
    { item: "Bono 4 — Detox Natural", value: "10 €" },
  ];
  return (
    <section id="precio" className="px-5 py-16 md:py-24" style={{ backgroundColor: GREEN }}>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] mb-4 text-white/80">Tu inversión hoy</p>
        <h2 className="font-extrabold leading-none text-white" style={{ fontSize: "clamp(52px, 13vw, 88px)", fontWeight: 800 }}>35,09 €</h2>
        <p className="mb-8 mt-3 text-sm md:text-base font-semibold uppercase tracking-[0.2em]" style={{ color: "rgba(255,215,150,0.95)" }}>Precio único · IVA incluido</p>
        <p className="mx-auto mb-8 text-white/90" style={{ fontSize: 18, maxWidth: 620 }}>
          Por una inversión mínima, muy inferior al coste de una consulta médica o con un nutricionista, llevas hoy tu Recetario Vital App:
        </p>
        <div className="rounded-2xl p-6 md:p-8 mb-10 text-left mx-auto" style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", maxWidth: 560 }}>
          <p className="text-center text-white font-bold leading-snug pb-4 mb-2 border-b border-white/20" style={{ fontSize: 19 }}>
            Este es el valor <span style={{ color: "rgba(255,215,150,0.95)" }}>REAL</span> de la oferta completa
          </p>
          {valueRows.map((r) => (
            <div key={r.item} className="flex justify-between gap-4 py-3 border-b border-white/10 last:border-0" style={{ fontSize: 16 }}>
              <span className="text-white/90">{r.item}</span>
              <span className="text-white font-semibold whitespace-nowrap">{r.value}</span>
            </div>
          ))}
          <div className="flex justify-between gap-4 pt-4 mt-2 border-t-2 border-white/30" style={{ fontSize: 18 }}>
            <span className="text-white font-bold">VALOR TOTAL</span>
            <span className="text-gray-300 font-bold" style={{ textDecoration: "line-through" }}>117 €</span>
          </div>
        </div>
        <p className="text-white/90 mb-6 mx-auto" style={{ fontSize: 16, maxWidth: 520 }}>
          Un solo pago. Sin suscripción. Tuya de por vida, con actualizaciones permanentes incluidas.
        </p>
        <div className="mx-auto mb-8 text-white font-bold text-center" style={{ backgroundColor: TERRACOTTA, borderRadius: 8, padding: "12px 20px", maxWidth: 560, fontSize: 16 }}>
          ⏱️ Solo durante el lanzamiento: 35,09 € — Precio especial para los primeros 50 compradores.
        </div>
        <div className="mx-auto mb-8 rounded-xl text-left" style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", padding: 24, maxWidth: 560 }}>
          <div className="flex justify-center mb-5">
            <div className="inline-flex flex-col items-center px-6 py-3 rounded-xl" style={{ border: "2px solid rgba(255,215,150,0.6)", boxShadow: "0 0 18px rgba(255,215,150,0.25)", backgroundColor: "rgba(0,0,0,0.15)" }}>
              <div className="flex items-center gap-2">
                <span style={{ color: TERRACOTTA, fontSize: 22 }}>🛡️</span>
                <span className="text-white font-bold text-lg">Hotmart</span>
              </div>
              <span className="text-white/90 text-[11px] uppercase tracking-[0.2em] mt-1">Pago 100% Seguro</span>
            </div>
          </div>
          <p className="text-white" style={{ fontSize: 16, lineHeight: 1.7 }}>
            🔒 <strong>PAGO 100% SEGURO</strong><br />
            Pago procesado por <strong>Hotmart</strong>, líder en América Latina y España en productos digitales. Tus datos están protegidos con encriptación SSL. Nunca almacenamos información de tu tarjeta.<br /><br />
            💳 Tarjeta de crédito · Débito · PayPal, entre otros<br />
            📦 Acceso inmediato en menos de 2 minutos
          </p>
        </div>
        <CTAButton label="QUIERO MI APP + LOS 4 BONOS POR 35,09 € →" />
        <CTAMicrocopy />
        <div className="mx-auto mt-10 rounded-xl text-left" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "2px solid rgba(255,255,255,0.25)", padding: 28, maxWidth: 560 }}>
          <div className="flex justify-center mb-5">
            <div className="flex flex-col items-center">
              <span className="text-white/90 text-[11px] uppercase tracking-[0.2em] mb-2">Hotmart Garantiza</span>
              <div className="w-28 h-28 rounded-full flex flex-col items-center justify-center" style={{ border: `4px solid ${TERRACOTTA}`, backgroundColor: "rgba(0,0,0,0.15)" }}>
                <span className="text-2xl">✅</span>
                <span className="text-white text-xs font-bold uppercase tracking-wider mt-1">Garantía</span>
                <span className="font-extrabold text-lg leading-none" style={{ color: TERRACOTTA }}>7 Días</span>
              </div>
            </div>
          </div>
          <h3 className="text-white font-bold text-center mb-3" style={{ fontSize: 18 }}>↩️ GARANTÍA INCONDICIONAL — 7 DÍAS</h3>
          <p className="text-white" style={{ fontSize: 16, lineHeight: 1.7 }}>
            Si en los próximos 7 días no es lo que esperabas, solicita la devolución en <strong>Hotmart</strong> y te devolvemos el 100% de tu dinero.<br />
            Sin formularios. Sin preguntas. Sin demoras.
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs: { q: string; a: React.ReactNode }[] = [
    { q: "¿Cómo descargo mi app?", a: "Después de finalizar tu compra recibes un email con el enlace y las instrucciones de descarga en tu teléfono o dispositivo. Crea tu cuenta con el mismo correo que usaste en la compra." },
    { q: "¿Es difícil usar la app?", a: "Para nada. Es tan sencillo como enviar un mensaje por WhatsApp o llamar a tu hijo, a tu hija, a tu pareja o a un amigo. Recetario Vital App es tan fácil de usar que la dominarás en cuestión de horas." },
    { q: "¿Cuándo la recibo después de pagar?", a: "Inmediatamente después de finalizar tu compra." },
    { q: "¿Sirve en mi país?", a: "Sí, la app funciona y se adapta a España." },
    { q: "¿Necesito experiencia cocinando?", a: "No. Las recetas están explicadas paso a paso, en un lenguaje sencillo. Si sabes hervir agua, puedes prepararlas." },
    { q: "¿Qué pasa si no cumple mis expectativas?", a: (<>Tienes 7 días para revisarla. Si por cualquier razón no estás satisfecho, solicita la devolución en <strong>Hotmart</strong> y te devolvemos el 100% en menos de 48 horas. Sin formularios. Sin explicaciones. Sin discusiones.</>) },
    { q: "¿Es seguro pagar aquí?", a: (<>Sí. El pago lo procesa <strong>Hotmart</strong>, líder en productos digitales en América Latina y España con más de 35 millones de compradores. Tu información tiene encriptación de nivel bancario.</>) },
  ];
  return (
    <section className="px-5 py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto">
        <SectionLabel>Preguntas frecuentes</SectionLabel>
        <Heading>Resolvamos tus dudas</Heading>
        <Accordion type="single" collapsible className="mt-8">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="rounded-xl mb-3 px-5" style={{ backgroundColor: CREAM, border: "none" }}>
              <AccordionTrigger className="text-left font-bold hover:no-underline" style={{ color: GREEN, fontSize: 16 }}>{f.q}</AccordionTrigger>
              <AccordionContent style={{ color: INK, fontSize: 16 }} className="leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-5 py-10" style={{ backgroundColor: GREEN }}>
      <div className="max-w-5xl mx-auto text-center text-white/80 text-sm">
        <p className="font-display text-2xl text-white mb-2">Recetario Vital App</p>
        <p className="mb-2" suppressHydrationWarning>© {new Date().getFullYear()} Recetario Vital App. Todos los derechos reservados.</p>
        <p className="text-xs text-white/60 max-w-2xl mx-auto">
          Este sitio no forma parte del sitio web de Facebook o Facebook Inc. Adicionalmente, este sitio no es respaldado por Facebook de ninguna manera. FACEBOOK es una marca registrada de FACEBOOK, Inc.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main>
      <Hero />
      <Pain />
      <Benefits />
      <ScientificEvidence />
      <Bonuses />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
