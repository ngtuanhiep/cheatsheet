import { readFileSync, writeFileSync, readdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const dist = "dist";
const indexPath = join(dist, "index.html");
let html = readFileSync(indexPath, "utf8");

html = html.replace(/<link rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/g, (_, href) => {
  const css = readFileSync(join(dist, href.replace(/^\.\//, "")), "utf8");
  return `<style>${css}</style>`;
});

html = html.replace(/<script type="module"[^>]*src="([^"]+)"[^>]*><\/script>/g, (_, src) => {
  const javascript = readFileSync(join(dist, src.replace(/^\.\//, "")), "utf8");
  return `<script type="module">${javascript}</script>`;
});

writeFileSync(indexPath, html);

const assetsPath = join(dist, "assets");
try {
  for (const file of readdirSync(assetsPath)) rmSync(join(assetsPath, file));
  rmSync(assetsPath, { recursive: true });
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}

if (/\b(?:src|href)="\.\/assets\//.test(html)) {
  throw new Error("Build still references external assets.");
}

console.log(`Inlined build: ${indexPath}`);
