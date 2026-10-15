import { useMemo, useState } from "preact/hooks";
import type { Entry, Tool, ToolFilter } from "../types";
import { entryMatches, toolMatches } from "../lib/search";
import { Shortcut } from "./Shortcut";

interface ToolCardProps {
  tool: Tool;
  query: string;
  typeFilter: ToolFilter;
}

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  return (
    <button class={`copy-button ${copied ? "is-copied" : ""}`} onClick={copy} aria-label={`Sao chép ${value}`} aria-live="polite">
      <span aria-hidden="true">{copied ? "✓" : "⧉"}</span>
      <span>{copied ? "Đã chép" : "Copy"}</span>
    </button>
  );
}

function EntryRow({ entry }: { entry: Entry }) {
  return (
    <div class={`entry entry-${entry.kind} ${entry.danger ? "entry-danger" : ""}`}>
      <div class="entry-main">
        <div class="entry-value">
          {entry.kind === "shortcut" ? <Shortcut value={entry.value} /> : <code>{entry.value}</code>}
          {entry.platforms?.map((platform) => <span class={`platform-label platform-${platform.toLowerCase().replace("-", "")}`} key={platform}>{platform}</span>)}
          {entry.context && <span class="context-label">{entry.context}</span>}
          {entry.danger && <span class="danger-label">Cẩn thận</span>}
        </div>
        <p>{entry.description}</p>
      </div>
      {entry.copy && entry.kind === "command" && <CopyButton value={entry.value} />}
    </div>
  );
}

export function ToolCard({ tool, query, typeFilter }: ToolCardProps) {
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const nameMatch = toolMatches(tool, query);
  const sections = useMemo(() => tool.sections.map((section) => ({
    ...section,
    entries: section.entries.filter((entry) => entryMatches(entry, nameMatch ? "" : query, typeFilter)),
  })).filter((section) => section.entries.length > 0), [nameMatch, query, tool.sections, typeFilter]);

  const visibleCount = sections.reduce((sum, section) => sum + section.entries.length, 0);

  return (
    <article class="tool-card" id={tool.id} aria-labelledby={`${tool.id}-title`}>
      <header class="tool-header">
        <div class="tool-icon" aria-hidden="true">{tool.icon}</div>
        <div class="tool-heading">
          <div class="tool-title-line">
            <h2 id={`${tool.id}-title`}>{tool.name}</h2>
            <span class="tool-category">{tool.category}</span>
          </div>
          <p>{tool.summary}</p>
        </div>
        <div class="tool-meta" title={`Xác minh ${tool.verified ?? ""}`}>
          <strong>{visibleCount}</strong>
          <span>mục</span>
        </div>
      </header>

      <div class="section-grid">
        {sections.map((section) => {
          const isCollapsed = Boolean(collapsed[section.id]) && !query;
          return (
            <section class="guide-section" id={section.id} key={section.id}>
              <button
                class="section-toggle"
                aria-expanded={!isCollapsed}
                onClick={() => setCollapsed((current) => ({ ...current, [section.id]: !current[section.id] }))}
              >
                <span>{section.title}</span>
                <span class="section-count">{section.entries.length}</span>
                <span class="chevron" aria-hidden="true">⌄</span>
              </button>
              {!isCollapsed && <div class="entry-list">{section.entries.map((entry, index) => <EntryRow entry={entry} key={`${entry.value}-${index}`} />)}</div>}
            </section>
          );
        })}
      </div>

      {(tool.notes?.length || tool.sources?.length) && (
        <footer class="tool-footer">
          {tool.notes?.map((note) => <p class="tool-note" key={note}><span aria-hidden="true">i</span>{note}</p>)}
          {tool.sources && tool.sources.length > 0 && (
            <div class="source-list">
              <span>Nguồn · xác minh {tool.verified}</span>
              {tool.sources.map((source) => <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>{source.label}<span aria-hidden="true">↗</span></a>)}
            </div>
          )}
        </footer>
      )}
    </article>
  );
}
