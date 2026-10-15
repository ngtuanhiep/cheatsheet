import type { Entry, Platform, Section } from "../types";

type EntryOptions = Pick<Entry, "aliases" | "context" | "danger" | "platforms">;

export const command = (value: string, description: string, options: EntryOptions = {}): Entry => ({
  kind: "command",
  value,
  description,
  copy: true,
  ...options,
});

export const shortcut = (value: string, description: string, options: EntryOptions = {}): Entry => ({
  kind: "shortcut",
  value,
  description,
  ...options,
});

export const text = (value: string, description: string, options: EntryOptions = {}): Entry => ({
  kind: "text",
  value,
  description,
  ...options,
});

export const section = (id: string, title: string, entries: Entry[]): Section => ({ id, title, entries });

export const platforms = (...values: Platform[]): Pick<Entry, "platforms"> => ({ platforms: values });
