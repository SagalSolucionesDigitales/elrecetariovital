import { renderToString } from "react-dom/server";
import App from "./App";

// Solo se usa en el build (scripts/prerender.mjs): genera el HTML inicial de la landing.
export function render() {
  return renderToString(<App />);
}
