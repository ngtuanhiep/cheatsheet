import { allTools } from "./tools";

export const tools = allTools;

export const categories = ["all", ...new Set(tools.map((tool) => tool.category))];
export const totalEntries = tools.reduce(
  (total, tool) => total + tool.sections.reduce((sum, current) => sum + current.entries.length, 0),
  0,
);
