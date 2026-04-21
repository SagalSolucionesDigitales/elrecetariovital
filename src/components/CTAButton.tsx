const CHECKOUT_URL =
  "https://pay.hotmart.com/K105081446B?checkoutMode=10&bid=1776809946257";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function CTAButton({ className = "" }: { className?: string }) {
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
        className="animate-pulse-cta inline-flex items-center justify-center w-full md:max-w-[480px] text-center text-white font-bold text-[20px] md:text-[22px] leading-tight rounded-full px-10 py-[18px] transition-transform"
        style={{
          backgroundColor: "#C4622D",
          boxShadow: "0 6px 24px rgba(196,98,45,0.35)",
        }}
      >
        Quiero mi Recetario Vital por $15 USD →
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