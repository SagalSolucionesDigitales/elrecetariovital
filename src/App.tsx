import { useEffect, useState } from "react";
const heroCover = "/hero-app-cover.webp";
import catDesayunos from "@/assets/cat-desayunos.webp";
import catAlmuerzos from "@/assets/cat-almuerzos.webp";
import catCenas from "@/assets/cat-cenas.webp";
import catPostres from "@/assets/cat-postres.webp";
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
            alt="Recetario Vital App — mano sosteniendo un celular que muestra el plan de comidas del día"
            width={1084}
            height={1451}
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
            Come rico, come bien. Sin miedo y sin complicaciones.
          </h1>
          <p className="text-lg md:text-xl mb-6" style={{ color: INK }}>
            Si tienes disparada la glucosa y quieres cuidar tu alimentación, Recetario Vital App te muestra cómo preparar comidas deliciosas, económicas, fáciles y personalizadas para ti — con ingredientes que ya conoces y en poco tiempo. Sin ingredientes raros. Sin planes imposibles. Sin sacrificar el placer de comer.
          </p>
          <p className="mt-6 text-sm text-neutral-600 text-center md:text-left">
            Acceso Inmediato • App web y móvil lista para instalar en tu dispositivo • Solo <strong>$29.90 USD</strong> • <strong>PAGO ÚNICO. Sin suscripciones</strong>
          </p>
          <p
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold"
            style={{ color: GREEN, border: `1px solid ${GREEN}30` }}
          >
            🌎 Disponible en España y toda Hispanoamérica
          </p>
        </div>
      </div>
    </section>
  );
}

function Pain() {
  const items = [
    { pain: "Tu médico te asustó y te dejó con más dudas que certezas", answer: "Cuando la glucosa sale alta y nadie te explicó qué comer ni por dónde empezar para prevenir la enfermedad, o simplemente se limitaron a darte una fórmula médica y nada más, Recetario Vital App es tu guía para aprender a alimentarte." },
    { pain: "Quieres comer sano pero no sabes cómo o crees que es 'muy caro'", answer: "Recetario Vital App está diseñada para ayudarte y hacer que tu vida sea más fácil. Cada receta es creada con ingredientes accesibles, de bajo costo y que puedes conseguir en cualquier súper. Además, te da una completa alternativa para que hagas sustituciones inteligentes y sigas disfrutando sin miedo." },
    { pain: "Te preocupa que esto sea para toda la vida", answer: "Miles de personas han mejorado su calidad de vida cambiando su alimentación y es uno de los objetivos de Recetario Vital App." },
    { pain: "Te preocupa terminar como un familiar", answer: "La buena noticia es que en este momento tienes en tus manos una herramienta que ese familiar no tuvo: información concreta, recetas probadas y un plan claro para cuidar tu alimentación desde hoy." },
    { pain: "Temes llenarte de información genérica que no funcione", answer: "Recetario Vital App no tiene nada que ver con la información vacía que encuentras en internet. Tiene respaldo en evidencia nutricional y ha sido validado por personas reales que ya cambiaron su alimentación." },
    { pain: "Sientes que perdiste el control de lo que comes", answer: "Recuperar el control de tu alimentación es más simple de lo que crees. Recetario Vital App te muestra cómo hacerlo paso a paso, sin complicaciones y sin sacrificar el placer de comer." },
  ];
  return (
    <section className="px-5 py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Si te identificas con esto…</SectionLabel>
        <Heading>¿Te suena familiar alguna de estas situaciones?</Heading>
        <div className="grid md:grid-cols-2 gap-5 mt-10">
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
          Si te identificaste con al menos una… esta app es lo que buscaste por tanto tiempo.
        </p>
      </div>
    </section>
  );
}

function ScientificEvidence() {
  const cards = [
    { emoji: "🌿", title: "Canela de Ceilán", body: "Estudios publicados en el Journal of Medicinal Food muestran que el consumo regular de canela de Ceilán está asociado con una reducción en los niveles de glucosa en ayunas. La encontrarás en varias recetas de Recetario Vital App, no como adorno, sino como ingrediente funcional." },
    { emoji: "🍎", title: "Vinagre de manzana", body: "Investigaciones en el área de nutrición clínica sugieren que el ácido acético presente en el vinagre de manzana puede reducir la respuesta glucémica después de las comidas. Lo incorporamos en aderezos y preparaciones que no alteran el sabor de los platos." },
    { emoji: "🫘", title: "Legumbres (lentejas, garbanzos, frijoles)", body: "Las legumbres tienen uno de los índices glucémicos más bajos entre los alimentos ricos en carbohidratos. Son base fundamental de las recetas de Recetario Vital App porque sacian, nutren y no disparan el azúcar. Son económicas y fáciles de conseguir en cualquier mercado de LATAM y España." },
    { emoji: "🌾", title: "Avena integral", body: "La fibra beta-glucano de la avena es reconocida por organismos de salud internacionales como aliada en el control del azúcar en sangre. En Recetario Vital App encontrarás formas de prepararla que van mucho más allá del desayuno tradicional." },
    { emoji: "🥑", title: "Aguacate, nueces y semillas", body: "Las grasas saludables presentes en el aguacate, las nueces y las semillas han sido asociadas en múltiples estudios con la reducción de la inflamación crónica, uno de los factores subyacentes en la resistencia a la insulina." },
    { emoji: "🫒", title: "Aceite de oliva virgen extra", body: "Estudios de nutrición cardiovascular realizados en España asocian el consumo habitual de aceite de oliva virgen extra con un menor riesgo de eventos cardiovasculares. Es una grasa saludable que puedes usar en aderezos y preparaciones del día a día, en lugar de grasas menos favorables." },
    { emoji: "🐟", title: "Pescado azul: sardinas, boquerones y caballa", body: "El pescado azul es rico en ácidos grasos omega-3, que se han asociado con la reducción de los triglicéridos y con un mejor perfil metabólico, clave en el síndrome metabólico. Son opciones económicas y fáciles de conseguir." },
  ];
  return (
    <section className="px-5 py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Evidencia científica</SectionLabel>
        <Heading>¿Por qué funciona? La ciencia detrás de cada receta</Heading>
        <div className="mx-auto mt-6 mb-10 rounded-xl p-6" style={{ backgroundColor: CREAM, borderLeft: `6px solid ${TERRACOTTA}`, maxWidth: 760 }}>
          <p style={{ color: INK, fontSize: 16, lineHeight: 1.7 }}>
            Según la Federación Internacional de Diabetes, más de 32 millones de personas viven con diabetes en América Latina. En España, el 13,8 % de los adultos —más de 5 millones— tiene diabetes tipo 2, y casi la mitad no lo sabe (estudio di@bet.es). Y no es solo la glucosa: las enfermedades cardiovasculares son la primera causa de muerte a ambos lados del Atlántico, cerca de 1 de cada 3 adultos en España cumple criterios de síndrome metabólico, y 3 de cada 4 mujeres adultas en México viven con sobrepeso u obesidad. Todas estas condiciones comparten el mismo factor modificable: lo que comes cada día. Por eso una app que adapta tu alimentación a tu condición, tus indicadores y tu país no es un lujo: es la herramienta que faltaba entre la consulta y tu cocina.
          </p>
          <p className="mt-4 pt-4 text-neutral-500" style={{ fontSize: 13, lineHeight: 1.6, borderTop: `1px solid ${GREEN}20` }}>
            Fuentes de las cifras: IDF Atlas (32 M en LATAM); estudio di@bet.es (13,8 % diabetes tipo 2 en España, 43 % sin diagnosticar; ~31 % síndrome metabólico); INE/OPS (cardiovascular primera causa de muerte); ENSANUT 2022 (76 % de mujeres adultas con sobrepeso u obesidad en México).
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5 mt-6">
          {cards.map((c) => (
            <div key={c.title} className="rounded-xl p-6 md:odd:last:col-span-2" style={{ backgroundColor: CREAM, borderLeft: `4px solid ${GREEN}` }}>
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

function Included() {
  const cats = [
    { img: catDesayunos, title: "DESAYUNOS", body: "Empieza el día con energía estable" },
    { img: catAlmuerzos, title: "ALMUERZOS", body: "Platos completos y saciantes" },
    { img: catCenas, title: "CENAS", body: "Ligeras, sabrosas y reparadoras" },
    { img: catPostres, title: "POSTRES Y DULCES", body: "El placer sin culpa, sin azúcar" },
  ];
  return (
    <section className="px-5 py-16 md:py-24" style={{ backgroundColor: CREAM }}>
      <div className="max-w-6xl mx-auto">
        <SectionLabel>Qué incluye</SectionLabel>
        <Heading>Los platillos que más te gustan adaptados para ti, tu cuerpo y tu disfrute</Heading>
        <p className="text-center text-lg md:text-xl mx-auto mb-10" style={{ color: INK, maxWidth: 760 }}>
          Cada receta fue diseñada para que puedas preparar desayunos, almuerzos, cenas y postres deliciosos — que funcionen para tu bienestar, tu familia y tu agenda.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {cats.map((c) => (
            <div key={c.title} className="rounded-2xl overflow-hidden shadow-sm bg-white" style={{ border: `1px solid ${GREEN}20` }}>
              <img src={c.img} alt={`Categoría ${c.title.toLowerCase()}`} width={768} height={768} className="w-full h-40 md:h-56 object-cover" loading="lazy" decoding="async" />
              <div className="p-4 text-center">
                <h3 className="font-bold text-base md:text-lg" style={{ color: GREEN }}>{c.title}</h3>
                <p style={{ color: INK, fontSize: 14 }} className="mt-1">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    { img: benefitCheckin, alt: "Pantalla de inicio de Recetario Vital App con el aviso para registrar cómo te sientes hoy", title: "Check-in diario", body: "Haz seguimiento a tu condición de salud en menos de un minuto al día. Registras cómo estás y tus indicadores, y la app va ajustando tu plan contigo." },
    { img: benefitPerfil, alt: "Pantalla de perfil de salud de Recetario Vital App con país, condición, nivel de glucosa y restricciones", title: "Perfil de salud a tu medida", body: "Según tu país, tu condición de salud (eliges la que corresponde a tu cuerpo: prediabetes o diabetes, cardiovascular, síndrome metabólico o control de peso), tus indicadores médicos y los alimentos que evitas." },
    { img: benefitPlan, alt: "Pantalla del plan semanal de Recetario Vital App con desayuno, almuerzo, cena, postre y lista de compras", title: "Plan de alimentación semanal personalizado", body: "Armado de acuerdo con tu perfil de salud, tu presupuesto, tu tiempo disponible para cocinar y la cantidad de personas en casa — con lista de compras para organizar tu semana." },
    { shots: [
      { img: benefitPlatoFoto, w: 794, h: 1580, alt: "Pantalla Analiza tu plato de Recetario Vital App con la foto de un plato de pollo con arroz y patatas lista para analizar", caption: "1. Fotografías tu plato" },
      { img: benefitPlatoResultado, w: 794, h: 1594, alt: "Resultado del análisis en Recetario Vital App: calorías, carbohidratos, índice glucémico y un consejo para adaptar el plato a tu condición", caption: "2. Recibes tu análisis" },
    ], title: "Análisis de platos por fotografía", body: "Toma una foto a tu plato y sabe al instante qué tan bien encaja con tu perfil, para que siempre estés seguro con tus alimentos, en casa o fuera." },
    { img: benefitProgreso, alt: "Pantalla Mi progreso de Recetario Vital App con el check-in del día y el botón para descargar el informe en PDF", title: "Tabla de progreso e informe para tu médico", body: "Mira tu evolución semana a semana y descarga un informe detallado para llevarlo a tu próxima consulta." },
  ];
  return (
    <section className="px-5 py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Beneficios de la app</SectionLabel>
        <Heading>Con la compra de tu app, accede a los siguientes beneficios</Heading>
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
      </div>
    </section>
  );
}

function Testimonials() {
  const list = [
    { quote: "Quienes tenemos el azúcar alta vivimos en constante estrés por no saber qué hacer y cómo evitar llegar a una condición crítica. En eso, Recetario Vital App, te da una guía para no sacrificar el placer de comer, pero cuidando tu salud.", name: "Cristian Ortiz", city: "Lima", img: testimonialCristian },
    { quote: "Cuando te dicen que tienes el azúcar alta entras en modo alerta. Si le sumas que rara vez te dicen qué hacer o cómo hacerlo y que es difícil acceder a un nutricionista, pues una ayuda como Recetario Vital App te da más que un alivio. Por eso la recomiendo.", name: "Lorena Rodríguez", city: "CDMX", img: testimonialLorena },
    { quote: "Cuando te diagnostican con diabetes, hipertensión o cualquier enfermedad parecida, sentís que nada volverá a ser como antes y es muy triste. Pero cuando encontrás una herramienta como Recetario Vital App, no solo aprendés a comer mejor, sino que te das cuenta que podés seguir llevando una vida normal.", name: "Carlos Martínez", city: "La Plata", img: testimonialCarlos },
    { quote: "Entendí que los cambios también son para bien. Creí que jamás volvería a disfrutar del buen comer, pero con Recetario Vital App me di cuenta que solo debía hacer unos ajustes más sencillos de lo que pensaba.", name: "Ligia Gutiérrez", city: "Bogotá", img: testimonialLigia },
  ];
  return (
    <section className="px-5 py-16 md:py-24" style={{ backgroundColor: CREAM }}>
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Testimonios</SectionLabel>
        <Heading>Lo que dicen quienes ya cambiaron su alimentación</Heading>
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {list.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm" style={{ border: `1px solid ${GREEN}20` }}>
              <div className="flex items-center gap-4 mb-4">
                <img src={t.img} alt={`Foto de ${t.name}`} width={72} height={72} className="rounded-full object-cover" style={{ width: 72, height: 72 }} loading="lazy" decoding="async" />
                <div>
                  <p className="font-bold" style={{ color: GREEN, fontSize: 16 }}>{t.name}</p>
                  <p className="text-sm" style={{ color: INK, opacity: 0.7 }}>{t.city}</p>
                </div>
              </div>
              <p style={{ color: INK, fontSize: 16 }} className="italic leading-relaxed">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Bonuses() {
  const bonuses = [
    { img: bonoCamila, w: 789, h: 1600, alt: "Chat con Camila, la coach de nutrición de Recetario Vital App", tag: "🎁 BONO 1", title: "Coach Camila", body: "Tu asistente virtual de nutrición personalizado, que te acompaña y te guía 24/7.", value: "$25 USD" },
    { img: bonoEbook, w: 480, h: 720, alt: "Portada del ebook Recetario Vital con más de 200 recetas", tag: "🎁 BONO 2", title: "Recetario Vital ebook", body: "Más de 200 recetas saludables y prácticas para que compartas con tu familia.", value: "$15 USD" },
    { img: bonoKeto, w: 480, h: 973, alt: "Guía Keto Fácil de Recetario Vital", tag: "🎁 BONO 3", title: "Keto Fácil", body: "El complemento perfecto para que tu alimentación sea salud y calidad de vida.", value: "$17 USD" },
    { img: bonoDetox, w: 480, h: 973, alt: "Guía Detox Natural de Recetario Vital con licuados y aguas infusionadas", tag: "🎁 BONO 4", title: "Detox Natural", body: "Tu aliado líquido en el camino hacia tu salud y bienestar.", value: "$10 USD" },
  ];
  return (
    <section className="px-5 py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionLabel>Bonos exclusivos — solo por hoy</SectionLabel>
        <Heading>Con tu Recetario Vital App lleva 4 bonos exclusivos — Sin costo adicional</Heading>
        <p className="text-center mb-10" style={{ color: INK, fontSize: 18 }}>
          Valorados en <strong>$67 USD</strong>. Tuyos GRATIS hoy.
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {bonuses.map((b) => (
            <div key={b.title} className="rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 shadow-sm" style={{ backgroundColor: CREAM, border: `1px solid ${GREEN}20` }}>
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
          <CTAButton label="QUIERO MI APP + LOS 4 BONOS POR $29.90 USD →" />
          <p className="mt-4 text-center text-sm text-neutral-500">Acceso inmediato • App web y móvil • Instálala en menos de 2 minutos • Pago único – Sin suscripción</p>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const valueRows = [
    { item: "Recetario Vital App — acceso de por vida", value: "$50 USD" },
    { item: "Bono 1 — Coach Camila", value: "$25 USD" },
    { item: "Bono 2 — Recetario Vital ebook", value: "$15 USD" },
    { item: "Bono 3 — Keto Fácil", value: "$17 USD" },
    { item: "Bono 4 — Detox Natural", value: "$10 USD" },
  ];
  return (
    <section className="px-5 py-16 md:py-24" style={{ backgroundColor: GREEN }}>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] mb-4 text-white/80">Tu inversión hoy</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">Tu inversión hoy</h2>
        <p className="mx-auto mb-8 text-white/90" style={{ fontSize: 18, maxWidth: 620 }}>
          Por una inversión mínima, muy inferior al costo de una consulta médica o con un nutricionista, llevas hoy tu Recetario Vital App:
        </p>
        <div className="rounded-2xl p-6 md:p-8 mb-10 text-left mx-auto" style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", maxWidth: 560 }}>
          {valueRows.map((r) => (
            <div key={r.item} className="flex justify-between gap-4 py-3 border-b border-white/10 last:border-0" style={{ fontSize: 16 }}>
              <span className="text-white/90">{r.item}</span>
              <span className="text-white font-semibold whitespace-nowrap">{r.value}</span>
            </div>
          ))}
          <div className="flex justify-between gap-4 pt-4 mt-2 border-t-2 border-white/30" style={{ fontSize: 18 }}>
            <span className="text-white font-bold">VALOR TOTAL</span>
            <span className="text-white font-bold">$117 USD</span>
          </div>
        </div>
        <p className="text-gray-300 mb-2" style={{ fontSize: 24, textDecoration: "line-through" }}>$117 USD</p>
        <p className="text-white/80 mb-2 text-sm uppercase tracking-widest">Hoy solo</p>
        <p className="text-white font-extrabold leading-none mb-4" style={{ fontSize: "clamp(48px, 11vw, 72px)", fontWeight: 800 }}>$29.90 USD</p>
        <p className="text-white/90 mb-6 mx-auto" style={{ fontSize: 16, maxWidth: 520 }}>
          Un solo pago. Sin suscripción. Tuya de por vida, con actualizaciones permanentes incluidas.
        </p>
        <p className="text-white/85 mb-6" style={{ fontSize: 16 }}>
          ≈ 35 EUR · ≈ $631 MXN · ≈ $94.456 COP<br />
          <span className="italic" style={{ color: CREAM, fontSize: 13 }}>(El precio final, con los impuestos de tu país, se confirma en el checkout)</span>
        </p>
        <div className="mx-auto mb-8 text-white font-bold text-center" style={{ backgroundColor: TERRACOTTA, borderRadius: 8, padding: "12px 20px", maxWidth: 560, fontSize: 16 }}>
          ⏱️ Solo durante el lanzamiento: $29.90 USD — Precio especial para los primeros 50 compradores.
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
            💳 Tarjeta de crédito · Débito · Mercado Pago · PayPal, entre otros<br />
            📦 Acceso inmediato en menos de 2 minutos
          </p>
        </div>
        <CTAButton label="QUIERO MI APP + LOS 4 BONOS POR $29.90 USD →" />
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
    { q: "¿Cuándo la recibo después de pagar?", a: "Inmediatamente después de finalizar tu compra." },
    { q: "¿Sirve en mi país?", a: "Sí, la app funciona y se adapta a Latinoamérica y España." },
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
        <p className="mb-2">© {new Date().getFullYear()} Recetario Vital App. Todos los derechos reservados.</p>
        <p className="text-xs text-white/60 max-w-2xl mx-auto">
          Este sitio no forma parte del sitio web de Facebook o Facebook Inc. Adicionalmente, este sitio no es respaldado por Facebook de ninguna manera. FACEBOOK es una marca registrada de FACEBOOK, Inc.
        </p>
      </div>
    </footer>
  );
}

function SocialProofToast() {
  const messages = [
    "Lorena de Ciudad de México acaba de obtener su Recetario Vital App",
    "Carlos de Buenos Aires acaba de obtener su Recetario Vital App",
    "María de Bogotá acaba de obtener su Recetario Vital App",
    "Pedro de Guadalajara acaba de obtener su Recetario Vital App",
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
        }, 30000 + Math.random() * 15000);
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
    <div aria-live="polite" style={{ position: "fixed", bottom: 16, left: 16, zIndex: 50, maxWidth: 320, background: "#ffffff", borderRadius: 12, boxShadow: "0 8px 24px rgba(0,0,0,0.12)", border: "1px solid rgba(0,0,0,0.06)", padding: "12px 14px", display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: INK, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(12px)", transition: "opacity 300ms ease, transform 300ms ease", pointerEvents: visible ? "auto" : "none" }}>
      <div style={{ flexShrink: 0, width: 36, height: 36, borderRadius: 8, background: CREAM, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>📖</div>
      <div style={{ lineHeight: 1.35 }}>
        <div style={{ fontWeight: 600, color: GREEN, fontSize: 13 }}>¡Nueva compra!</div>
        <div>{messages[index]}</div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main>
      <Hero />
      <Pain />
      <ScientificEvidence />
      <Included />
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
