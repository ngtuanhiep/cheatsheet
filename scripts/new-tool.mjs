import { access, readFile, writeFile } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";

const [rawId, rawName] = process.argv.slice(2);
const id = rawId?.toLowerCase();
const name = rawName?.trim();

if (!id || !name || !/^[a-z][a-z0-9-]*$/.test(id)) {
  console.error('Cách dùng: npm run new:tool -- <id-kebab-case> "Tên hiển thị"');
  process.exit(1);
}

const camelId = id.replace(/-([a-z0-9])/g, (_, char) => char.toUpperCase());
const variable = camelId.endsWith("Tool") ? camelId : `${camelId}Tool`;
const target = path.resolve("src/data/tools", `${id}.ts`);
const registryPath = path.resolve("src/data/tools/index.ts");

try {
  await access(target, constants.F_OK);
  console.error(`Đã tồn tại: ${target}`);
  process.exit(1);
} catch {
  // Expected: a new tool must not overwrite an existing module.
}

const moduleSource = `import type { Tool } from "../../types";
import { command, section } from "../helpers";

export const ${variable}: Tool = {
  id: "${id}",
  name: ${JSON.stringify(name)},
  icon: "CLI",
  summary: "Mô tả ngắn: công cụ này giúp gì và khi nào nên dùng.",
  category: "CLI",
  featured: false,
  verified: new Date().toLocaleDateString("en-GB"),
  sections: [
    section("${id}-basics", "Bắt đầu", [
      command("${id} --help", "Xem trợ giúp và các tùy chọn khả dụng."),
    ]),
  ],
  sources: [{ label: "Official documentation", url: "https://example.com" }],
};
`;

const registry = await readFile(registryPath, "utf8");
const importMarker = "// new:tool imports — do not remove this marker";
const entryMarker = "// new:tool entries — do not remove this marker";

if (!registry.includes(importMarker) || !registry.includes(entryMarker)) {
  throw new Error("Không tìm thấy marker trong src/data/tools/index.ts");
}

const nextRegistry = registry
  .replace(importMarker, `import { ${variable} } from "./${id}";\n\n${importMarker}`)
  .replace(entryMarker, `${variable},\n  ${entryMarker}`);

await writeFile(target, moduleSource, { flag: "wx" });
await writeFile(registryPath, nextRegistry);
console.log(`Đã tạo src/data/tools/${id}.ts và đăng ký ${name}.`);
console.log("Tiếp theo: sửa summary, icon, sections, sources rồi chạy npm run check.");
