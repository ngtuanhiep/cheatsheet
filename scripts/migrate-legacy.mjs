import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { load } from "cheerio";

const input = "legacy/cli-cheatsheet-lazyvim-tmux.html";
const output = "src/data/legacy.generated.json";
const html = readFileSync(input, "utf8");
const $ = load(html);

const slug = (value) => value
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/(^-|-$)/g, "");

const keyTools = new Set(["Yazi", "Neovim", "LazyVim", "tmux", "fzf", "htop", "iTerm2"]);
const commandStarts = /^(?:[:~.]?\/|:|~\/|set\s|setw\s|tmux\s|ssh\s|exit$|eval\s|source\s|mkdir\s|nvim\s|rg\s|fd\s|fzf\s|htop\s|yazi\s|git\s|gh\s|curl\s|wget\s|ffmpeg\s|yt-dlp\s)/i;
const keyToken = /^(?:[hjklqwertyuiopasdfgzxcvbnm]|[A-Z]|\d|[?.,;:'"%#$^&*()_[\]{}|\\<>~`+=!-]|Enter|Esc|Escape|Tab|Space|PgUp|PgDn|Backspace|Delete|Home|End|F\d{1,2}|Ctrl|Alt|Shift|Cmd|Opt|⌘|⌥|⇧|←|→|↑|↓)/;

function isShortcut(tool, value, hasCopy) {
  if (hasCopy || !keyTools.has(tool) || commandStarts.test(value)) return false;
  if (value.includes("=") && !/Ctrl|Alt|⌘|⌥|⇧/.test(value)) return false;
  return value.length <= 64 && keyToken.test(value);
}

const tools = [];
$("article.card").each((_, card) => {
  const el = $(card);
  const name = el.attr("data-tool") || el.find("h2").first().text().trim();
  const sections = [];
  el.find(".sections > .mini").each((__, section) => {
    const sectionEl = $(section);
    const title = sectionEl.find("h3").first().text().trim();
    const entries = [];
    sectionEl.find(":scope > .cmd").each((___, row) => {
      const rowEl = $(row);
      const value = rowEl.find("code").first().text().trim();
      const description = rowEl.find("span").first().text().trim();
      const hasCopy = rowEl.find("button.copy").length > 0;
      entries.push({
        kind: isShortcut(name, value, hasCopy) ? "shortcut" : (hasCopy || commandStarts.test(value) ? "command" : "text"),
        value,
        description,
        ...(hasCopy ? { copy: true } : {}),
      });
    });
    sections.push({ id: slug(`${el.attr("id")}-${title}`), title, entries });
  });

  tools.push({
    id: el.attr("id"),
    name,
    icon: el.find(".icon").first().text().trim(),
    summary: el.find(".card-head p").first().text().trim(),
    category: el.find(".tag").first().text().trim() || "tool",
    featured: el.hasClass("wide"),
    sections,
    notes: el.find(":scope > .note").map((__, note) => $(note).text().trim()).get(),
  });
});

mkdirSync("src/data", { recursive: true });
writeFileSync(output, `${JSON.stringify(tools, null, 2)}\n`);
console.log(`Migrated ${tools.length} tools and ${tools.reduce((sum, tool) => sum + tool.sections.reduce((n, section) => n + section.entries.length, 0), 0)} entries.`);
