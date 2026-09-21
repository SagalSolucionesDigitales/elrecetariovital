// Inyecta el HTML renderizado de <App /> en dist/index.html para que la landing pinte
// sin esperar al JS. Corre después de `vite build` y `vite build --ssr`.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const distDir = "dist";
const ssrDir = "dist-ssr";
const placeholder = '<div id="root"></div>';

const { render } = await import(pathToFileURL(path.resolve(ssrDir, "entry-server.js")).href);
const appHtml = render();

const indexPath = path.join(distDir, "index.html");
const template = fs.readFileSync(indexPath, "utf8");
if (!template.includes(placeholder)) {
  throw new Error(`No se encontró ${placeholder} en ${indexPath}`);
}
if (!appHtml.includes("<h1")) {
  throw new Error("El render del servidor no produjo contenido (falta <h1>)");
}

fs.writeFileSync(indexPath, template.replace(placeholder, () => `<div id="root">${appHtml}</div>`));
fs.rmSync(ssrDir, { recursive: true, force: true });
console.log(`Prerender OK: ${(appHtml.length / 1024).toFixed(1)} KB de HTML inyectados en ${indexPath}`);
