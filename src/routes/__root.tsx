import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import heroCover from "@/assets/hero-ebook-cover.webp";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Recetario Vital — 200+ recetas para cuidar tu salud" },
      {
        name: "description",
        content:
          "Recetario Vital: 200+ recetas saludables en español para reconectar con tu energía. Descarga inmediata en PDF por solo $15 USD.",
      },
      { name: "author", content: "Raíz Saludable" },
      { property: "og:title", content: "Recetario Vital — 200+ recetas para cuidar tu salud" },
      {
        property: "og:description",
        content:
          "200+ recetas para cuidar tu salud y reconectar con tu energía. Descarga inmediata en PDF.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Recetario Vital — 200+ recetas para cuidar tu salud" },
      { name: "description", content: "Descubre más de 200 recetas para cuidar tu salud, la de tu familia y reconectar con tu energía. Sin dietas extremas. Acceso inmediato por solo $15 USD." },
      { property: "og:description", content: "Descubre más de 200 recetas para cuidar tu salud, la de tu familia y reconectar con tu energía. Sin dietas extremas. Acceso inmediato por solo $15 USD." },
      { name: "twitter:description", content: "Descubre más de 200 recetas para cuidar tu salud, la de tu familia y reconectar con tu energía. Sin dietas extremas. Acceso inmediato por solo $15 USD." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f7392b76-9520-4a84-9214-d9de15e1afce/id-preview-7e459959--5866e8a0-fa83-4cc9-8724-48f7ebb47dc7.lovable.app-1776811981581.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f7392b76-9520-4a84-9214-d9de15e1afce/id-preview-7e459959--5866e8a0-fa83-4cc9-8724-48f7ebb47dc7.lovable.app-1776811981581.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preload",
        as: "image",
        href: heroCover,
        fetchpriority: "high",
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com", crossOrigin: "" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@400;600;700&display=swap",
      },
    ],
    scripts: [
      {
        children: `window.fbq=window.fbq||function(){(window.fbq.q=window.fbq.q||[]).push(arguments)};window.fbq.loaded=true;window.fbq.version='2.0';function loadFbq(){if(window.__fbqLoaded)return;window.__fbqLoaded=true;var l=document.createElement('link');l.rel='preconnect';l.href='https://connect.facebook.net';l.crossOrigin='';document.head.appendChild(l);var s=document.createElement('script');s.async=true;s.src='https://connect.facebook.net/en_US/fbevents.js';s.onload=function(){fbq('init','1235233387933244');fbq('track','PageView');};document.head.appendChild(s);}function schedule(){if('requestIdleCallback' in window){requestIdleCallback(loadFbq,{timeout:3000});}else{setTimeout(loadFbq,2000);}}if(document.readyState==='complete'){schedule();}else{window.addEventListener('load',schedule);}`,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
