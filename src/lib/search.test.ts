import { describe, expect, it } from "vitest";
import { entryMatches, normalizeSearch } from "./search";
import type { Entry } from "../types";

const shortcut: Entry = {
  kind: "shortcut",
  value: "Ctrl+B → C",
  description: "Tạo window mới",
};

describe("search", () => {
  it("normalizes Vietnamese text and shortcut separators", () => {
    expect(normalizeSearch("Shortcut Ctrl+B")).toBe("shortcut ctrl b");
  });

  it("matches shortcut spellings without treating plus as a key", () => {
    expect(entryMatches(shortcut, "ctrl b", "all")).toBe(true);
    expect(entryMatches(shortcut, "Ctrl+B", "all")).toBe(true);
  });

  it("respects the entry type filter", () => {
    expect(entryMatches(shortcut, "", "commands")).toBe(false);
    expect(entryMatches(shortcut, "", "shortcuts")).toBe(true);
  });
});
