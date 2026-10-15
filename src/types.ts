export type EntryKind = "command" | "shortcut" | "text";
export type Platform = "Cross-platform" | "macOS" | "Ubuntu";

export interface Entry {
  kind: EntryKind;
  value: string;
  description: string;
  copy?: boolean;
  danger?: boolean;
  context?: string;
  aliases?: string[];
  platforms?: Platform[];
}

export interface Section {
  id: string;
  title: string;
  entries: Entry[];
}

export interface Source {
  label: string;
  url: string;
}

export interface Tool {
  id: string;
  name: string;
  icon: string;
  summary: string;
  category: string;
  featured?: boolean;
  verified?: string;
  sections: Section[];
  notes?: string[];
  sources?: Source[];
}

export type ToolFilter = "all" | "commands" | "shortcuts";
