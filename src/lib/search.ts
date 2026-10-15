import type { Entry, Tool, ToolFilter } from "../types";

export const normalizeSearch = (value: string) => value
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/đ/g, "d")
  .replace(/Đ/g, "D")
  .toLowerCase()
  .replace(/[⌘]/g, " cmd ")
  .replace(/[⌥]/g, " alt ")
  .replace(/[⇧]/g, " shift ")
  .replace(/[+→,/]/g, " ")
  .replace(/\s+/g, " ")
  .trim();

export const entryMatches = (entry: Entry, query: string, filter: ToolFilter) => {
  if (filter === "commands" && entry.kind !== "command") return false;
  if (filter === "shortcuts" && entry.kind !== "shortcut") return false;
  if (!query) return true;
  const haystack = normalizeSearch([
    entry.value,
    entry.description,
    entry.context,
    ...(entry.aliases ?? []),
  ].filter(Boolean).join(" "));
  return normalizeSearch(query).split(" ").every((token) => haystack.includes(token));
};

export const toolMatches = (tool: Tool, query: string) => {
  if (!query) return true;
  const haystack = normalizeSearch(`${tool.name} ${tool.summary} ${tool.category}`);
  return normalizeSearch(query).split(" ").every((token) => haystack.includes(token));
};
