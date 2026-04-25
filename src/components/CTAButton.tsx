const CHECKOUT_URL =
  "https://pay.hotmart.com/K105081446B?checkoutMode=10&bid=1776809946257";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function CTAButton({
  className = "",
  label = "QUIERO MI RECETARIO VITAL →",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div className={`w-full flex justify-center ${className}`}>
      <a
        href={CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          if (typeof window !== "undefined" && window.fbq) {
            window.fbq("track", "InitiateCheckout");
          }
        }}
        className="inline-flex items-center justify-center w-full md:max-w-[520px] text-center text-white font-bold uppercase tracking-wide rounded-full px-8 py-4"
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