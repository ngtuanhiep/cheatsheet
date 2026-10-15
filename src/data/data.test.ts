import { describe, expect, it } from "vitest";
import { tools, totalEntries } from ".";

describe("cheatsheet data", () => {
  it("keeps legacy content and includes the extension tools", () => {
    expect(tools).toHaveLength(25);
    expect(totalEntries).toBeGreaterThan(740);
    expect(tools.map((tool) => tool.id)).toEqual(expect.arrayContaining([
      "tuios", "brew", "hf", "dust", "shell-diagnostics", "macos", "ubuntu",
    ]));
  });

  it("labels platform-specific commands and includes executable diagnostics", () => {
    const entries = tools.flatMap((tool) => tool.sections.flatMap((section) => section.entries));
    expect(entries.find((entry) => entry.value === "type -a fzf")?.platforms).toContain("Cross-platform");
    expect(entries.find((entry) => entry.value.startsWith("otool -L"))?.platforms).toContain("macOS");
    expect(entries.find((entry) => entry.value.startsWith("apt-cache policy"))?.platforms).toContain("Ubuntu");
  });

  it("uses unique tool and section ids", () => {
    const toolIds = tools.map((tool) => tool.id);
    const sectionIds = tools.flatMap((tool) => tool.sections.map((section) => section.id));
    expect(new Set(toolIds).size).toBe(toolIds.length);
    expect(new Set(sectionIds).size).toBe(sectionIds.length);
  });

  it("has no empty entries and every tool has an official source", () => {
    for (const tool of tools) {
      expect(tool.sources?.length, tool.name).toBeGreaterThan(0);
      for (const section of tool.sections) {
        expect(section.entries.length, `${tool.name}/${section.title}`).toBeGreaterThan(0);
        for (const entry of section.entries) {
          expect(entry.value.trim()).not.toBe("");
          expect(entry.description.trim()).not.toBe("");
        }
      }
    }
  });
});
