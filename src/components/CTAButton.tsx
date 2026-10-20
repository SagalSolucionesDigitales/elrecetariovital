const CHECKOUT_URL =
  "https://pay.hotmart.com/K107577518K?checkoutMode=10&bid=1789871331796";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function CTAButton({
  className = "",
  label = "QUIERO MI RECETARIO VITAL →",
  href = CHECKOUT_URL,
}: {
  className?: string;
  label?: string;
  href?: string;
}) {
  const isAnchor = href.startsWith("#");
  return (
    <div className={`w-full flex justify-center ${className}`}>
      <a
        href={href}
        {...(isAnchor ? {} : { target: "_blank", rel: "noopener noreferrer" })}
        onClick={(e) => {
          if (isAnchor) {
            const target = document.getElementById(href.slice(1));
            if (!target) return;
            e.preventDefault();
            document.documentElement.classList.add("cv-off");
            target.scrollIntoView({ behavior: "smooth", block: "start" });
            // Las imágenes diferidas que cargan durante el recorrido desplazan el destino: se corrige al terminar.
            const realign = () => {
              if (Math.abs(target.getBoundingClientRect().top) > 4) target.scrollIntoView({ behavior: "smooth", block: "start" });
            };
            // Safari antiguo no emite scrollend.
            if ("onscrollend" in window) window.addEventListener("scrollend", realign, { once: true });
            else setTimeout(realign, 1500);
            return;
          }
          if (typeof window !== "undefined" && window.fbq) {
            window.fbq("track", "InitiateCheckout");
          }
        }}
        className="inline-flex items-center justify-center w-full md:max-w-[640px] text-center text-white font-bold uppercase tracking-wide rounded-full px-8 py-4"
        style={{
          backgroundColor: "#C4622D",
          boxShadow: "0 6px 24px rgba(196,98,45,0.45)",
          minHeight: 56,
          fontSize: 18,
          lineHeight: 1.2,
          letterSpacing: "0.02em",
        }}
      >
        {label}
      </a>
    </div>
  );
}

export function CTAMicrocopy() {
  return (
    <p className="mt-4 text-center text-sm text-neutral-500">
      Descarga inmediata • PDF en español • Acceso en menos de 2 minutos
    </p>
  );
}